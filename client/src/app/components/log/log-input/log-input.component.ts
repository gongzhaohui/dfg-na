import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  HostListener,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderInfo } from 'src/app/entities/order_info';
import {  Log } from 'src/app/entities/log';
import { PeriodService } from 'src/app/services/period.service';
import { OrderInfoService } from 'src/app/services/orderinfo.service';
export interface LogFindTerm{
  period:string;
  operation:string;
  operator:string
}

@Component({
  selector: 'dfg-log-input',
  templateUrl: './log-input.component.html',
  styleUrls: ['./log-input.component.css']
})
export class LogInputComponent implements OnInit {

  @Output() saveLog: EventEmitter<Log> = new EventEmitter();
  @Output() getList: EventEmitter<LogFindTerm> = new EventEmitter();
  @Output() getOrder: EventEmitter<any> = new EventEmitter();
    inputForm: FormGroup;
    @ViewChild('barcode', { static: true })
    private barEl: ElementRef;
    private orderInfo:OrderInfo;
    private period:string;

    constructor(private fb: FormBuilder, private periodSvc: PeriodService,private orderSvc:OrderInfoService) {}
    submitForm(): void {
        const log: Log = Object.assign({}, this.inputForm.value);
        this.saveLog.emit(log);
        const formState = {
            period: this.period,
            operator: log.operator,
            operation: log.operation,
            // location: his.location,
        };
        console.log('submit');
        this.inputForm.reset(formState);
        this.barEl.nativeElement.focus();
    }
    ngOnInit() {
        this.inputForm = this.fb.group({
            period: [this.periodSvc.GetPeriod(new Date())],
            operator: [null, [Validators.required]],
            operation: ['jhj', [Validators.required]],
            // location: [null],
            barcode: [null, [Validators.required]],
            qty: [null, [Validators.required]],
        });
    }
    @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            if (this.inputForm.status !== 'VALID') {
                const ctl = event.target as Element;
                const val = (<any>ctl).value;
                if (val) {
                    const elIndex: number = parseInt(
                        ctl.getAttribute('tabindex'),
                        10
                    );
                    this.focusNext(elIndex + 1);
                }
            }
        }
    }
    focusNext(elIndex) {
        const el = document.querySelector(`input[tabindex="${elIndex}"]`);
        if (el) {
            (<any>el).focus();
        }
    }

    barcodeChanged(barcode){
      const o={type:'so',barcode:barcode};
      console.log('barcode changed:',barcode);
      this.getOrder.emit(o);
      // const type='so';
      // this.orderSvc.getOrderInfo(barcode,type).subscribe(orderInfo=>{
      //   this.orderInfo=orderInfo;
      // })
    }

    search(barcode){
      const o={period:"202103",
        operation:'gx',
        operator:'string'};
      console.log('search:',barcode);
      this.getList.emit(o);
      // const type='so';
      // this.orderSvc.getOrderInfo(barcode,type).subscribe(orderInfo=>{
      //   this.orderInfo=orderInfo;
      // })
    }
}
