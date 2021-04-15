import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/entities/log';
import { Operation } from 'src/app/entities/operation';
import { Operator } from 'src/app/entities/operator';
import { OrderInfo } from 'src/app/entities/order-info';
import { LogService } from 'src/app/services/log.service';
import { OperationService } from 'src/app/services/operation.service';
import { OperatorService } from 'src/app/services/operator.service';
import { OrderInfoService } from 'src/app/services/order-info.service';
import { PeriodService } from 'src/app/services/period.service';
// import { LogInputComponent } from './log-input/log-input.component';
import { LogListComponent } from './log-list/log-list.component';
import { OrderInfoComponent } from './order-info/order-info.component';

@Component({
  selector: 'dfg-log',
  templateUrl: './log.component.html',
  styleUrls: [ './log.component.css' ]
})
export class logComponent implements OnInit
{
  // @ViewChild(LogInputComponent, { static: true }) inputCmp: LogInputComponent;
  @ViewChild(LogListComponent, { static: true }) listCmp: LogListComponent;
  @ViewChild(OrderInfoComponent, { static: true }) orderCmp: LogListComponent;
  operation: number = 0;
  operator: string = '';
  orderInfo: OrderInfo = null;
  logs: Log[] = null;
  inputForm: FormGroup;
  @ViewChild('barcode', { static: true })
  barEl: ElementRef;
  period: string;
  private orderLoaded: boolean;
  private operations: Operation[];
  private operators: Operator[];
  private controlCount: number = 2;
  private deleteable:boolean;
  editId: number | null;
  _editCache = new Map();
  pageIndex = 1;
  pageSize = 10;
  total = 0;
  loading = false;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private periodSvc: PeriodService, private orderSvc: OrderInfoService, private operationSvc: OperationService, private operatorSvc: OperatorService, private logSvc: LogService) { }

  ngOnInit()
  {
    this.route.queryParams.subscribe(params =>
    {
      this.operation = + params[ 'operation' ];
      this.operator = params[ 'operator' ];
      this.deleteable=params['deleteable'];
      // console.log('deleteable:',this.deleteable);
    });
    this.orderLoaded = false;
    this.loadOperation();
    this.period = this.periodSvc.GetPeriod(new Date());

    this.inputForm = this.fb.group({
      period: [ this.period ],
      operator: [ null, [ Validators.required ] ],
      operation: [ null, [ Validators.required ] ],
      // location: [null],
      jno: [ null, [ Validators.required ] ],
      qty: [ null, [ Validators.required ] ],
    });

  }
  loadOperation()
  {
    this.operationSvc.getOperations().subscribe(ops =>
    {
      this.operations = ops;
      this.Op = this.operation || 0;
      // this.inputForm.get('operation').setValue(op);

    })
  }

  set Op(op)
  {
    const operation = this.operations.find(element => element.id == op)?.id || this.operations[ 0 ].id;
    this.operation = operation;
    this.inputForm.get('operation').setValue(operation);
  }

  get Op()
  {
    return this.inputForm.get('operation').value;
  }

  set Optr(optr)
  {
    const operator = this.operators.find(element => element.cuser_id == optr)?.cuser_id || this.operators[ 0 ].cuser_id;
    // console.log('set:', this.operator, operator)
    this.operator = operator;
    this.inputForm.get('operator').setValue(operator);
  }

  get Optr()
  {
    return this.inputForm.get('operator').value;
  }


  submitForm(): void
  {
    let log: Log = Object.assign({}, this.inputForm.value);
    log.isodid = this.orderInfo.isodid;
    this.saveLog(log);
    const formState = {
      period: this.period,
      operator: this.operator,
      operation: this.operation,
      // location: his.location,
    };
    // console.log('submit');
    this.inputForm.reset(formState);
    this.orderLoaded = false;
    this.orderInfo = null;
    // this.inputForm.valid  || this.barEl.nativeElement.focus();
    // console.log('order:',this.orderInfo)
  }

  @HostListener('keyup', [ '$event' ])
  onKeyUp(event: KeyboardEvent)
  {
    if (event.key === 'Enter')
    {
      if (this.inputForm.status !== 'VALID')
      {
        const ctl = event.target as Element;
        const val = (<any>ctl).value;
        if (ctl)
        {
          const elIndex: number = parseInt(
            ctl.getAttribute('tabindex'),
            10
          );
          this.focusNext(elIndex + 1);
        }
      }
    }
  }
  focusNext(elIndex)
  {
    elIndex = elIndex < this.controlCount ? elIndex : 0;
    const el = document.querySelector(`input[tabindex="${ elIndex }"]`);
    if (el)
    {
      (<any>el).focus();
    }
  }

  onBarcodeChanged(event)
  {
    const barcode = event.target.value;
    // const term = { type: this.getBarcodeType(barcode), barcode: barcode };
    // console.log('barcode changed:', barcode);
    barcode != '' && this.orderSvc.getOrderInfo(barcode, this.getBarcodeType(barcode)).subscribe(order =>
    {
      this.orderInfo = order;
      this.orderLoaded = true;
    })
    // this.getOrder(term);
  }
  getBarcodeType(barcode: string)
  {
    return 'jno';
  }
  isCanSave()
  {

    return this.inputForm.valid && this.orderLoaded;
  }

  loadOperator(dept)
  {
    // console.log("operation changed", dept)
    this.operatorSvc.getOperators(dept).subscribe(optrs =>
    {
      this.operators = optrs;
      // const optr = this.operators.find(element => element.cuser_id == this.operator)?.cuser_id || this.operators[ 0 ].cuser_id;
      this.Optr = this.operator;
      // console.log('optrs:', optrs)
    });
  }
  onOperationChange(op)
  {
    const dept = this.operations.find(element => element.id == op)?.department;
    dept && this.loadOperator(dept);
    this.GetList()
  }
  // onOpertorChange(optr)
  // {
  //   // const query = { 'operation': this.operation, 'operator': this.operator }

  // }

  saveLog(log: Log)
  {
    this.logSvc.add(log).subscribe(log =>
    {
      // console.log('savedLog:', log)
      this.GetList();
    });
  }
  onUpdateLog(log: Log) { }
  onDeleteLog(log: Log) { }
  // onGetOrder(o: any)
  // {
  //   console.log('getorder o:', o)
  //   // this.GetList
  // }
  GetList()
  {
    // console.log('getlist')
    this.logSvc.getList(this.period, this.Op).subscribe(
      logs =>
      {
        this.logs = logs;
        // this.listCmp.logs = logs;
        // console.log('logs:', logs);
      }
    )

  }

}
