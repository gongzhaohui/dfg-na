import
{
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  HostListener,
  ElementRef,
  Input,
} from '@angular/core';
import
{
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderInfo } from 'src/app/entities/order-info';
import { Log } from 'src/app/entities/log';
import { PeriodService } from 'src/app/services/period.service';
import { OrderInfoService } from 'src/app/services/order-info.service';
import { debounce } from 'rxjs/operators';
import { Operation } from 'src/app/entities/operation';
import { Operator } from 'src/app/entities/operator';
import { OperationService } from 'src/app/services/operation.service';
import { OperatorService } from 'src/app/services/operator.service';
import { element } from 'protractor';
// export interface LogFindTerm
// {
//   period: string;
//   operation: string;
//   operator: string
// }

@Component({
  selector: 'dfg-log-input',
  templateUrl: './log-input.component.html',
  styleUrls: [ './log-input.component.css' ]
})
export class LogInputComponent implements OnInit
{

  @Output() saveLog: EventEmitter<Log> = new EventEmitter();
  // @Output() getList: EventEmitter<LogFindTerm> = new EventEmitter();
  @Output() getOrder: EventEmitter<any> = new EventEmitter();
  inputForm: FormGroup;
  @ViewChild('barcode', { static: true })
  barEl: ElementRef;
  private orderInfo: OrderInfo;
  private period: string;
  private orderLoaded: boolean;
  private operations: Operation[];
  private operators: Operator[];
  private controlCount:number=2;
  @Input() operation: number;
  @Input() operator: string;

  constructor(private fb: FormBuilder, private periodSvc: PeriodService, private orderSvc: OrderInfoService, private operationSvc: OperationService, private operatorSvc: OperatorService) { }

  ngOnInit()
  {
    this.orderLoaded = false;
    this.loadOperation();

    this.inputForm = this.fb.group({
      period: [ this.periodSvc.GetPeriod(new Date()) ],
      operator: [ null, [ Validators.required ] ],
      operation: [ null, [ Validators.required ] ],
      // location: [null],
      barcode: [ null, [ Validators.required ] ],
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
    log.isodid=this.orderInfo.isodid;
    this.saveLog.emit(log);
    const formState = {
      period: this.period,
      operator: this.operator,
      operation: this.operation,
      // location: his.location,
    };
    // console.log('submit');
    this.inputForm.reset(formState);
    this.orderLoaded = false;
    this.orderInfo=null;
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
    elIndex=elIndex<this.controlCount?elIndex:0;
    const el = document.querySelector(`input[tabindex="${ elIndex }"]`);
    if (el)
    {
      (<any>el).focus();
    }
  }

  onBarcodeChanged(event)
  {
    const barcode=event.target.value;
    const term = { type: this.getBarcodeType(barcode), barcode: barcode };
    console.log('barcode changed:', barcode);
    barcode!='' && this.orderSvc.getOrderInfo(barcode, this.getBarcodeType(barcode)).subscribe(order =>
    {
      this.orderInfo = order;
      this.orderLoaded = true;
    })
    this.getOrder.emit(term);
    debounce
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
    console.log("operation changed", dept)
    this.operatorSvc.getOperators(dept).subscribe(optrs =>
    {
      this.operators = optrs;
      const optr = this.operators.find(element => element.cuser_id == this.operator)?.cuser_id || this.operators[ 0 ].cuser_id;
      this.Optr = optr;
      console.log('optrs:', optrs)
    });
  }
  onOperationChange(op)
  {
    const dept = this.operations.find(element => element.id == op)?.department;
    dept && this.loadOperator(dept);
  }
  onOpertorChange(optr){

  }
}

