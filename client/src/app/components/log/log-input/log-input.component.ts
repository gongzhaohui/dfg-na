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
import { Order_Info } from 'src/app/entities/order_info';
import {  Log } from 'src/app/entities/log';
import { PeriodService } from 'src/app/services/period.service';
@Component({
  selector: 'dfg-reg-input',
  templateUrl: './log-input.component.html',
  styleUrls: ['./log-input.component.css']
})
export class LogInputComponent implements OnInit {

  @Output() submitData: EventEmitter<Log> = new EventEmitter();
    inputForm: FormGroup;
    @ViewChild('barcode', { static: true })
    private barEl: ElementRef;
    private order_info:Order_Info;
    private period:string;

    constructor(private fb: FormBuilder, private periodSvc: PeriodService) {}
    submitForm(): void {
        const his: Log = Object.assign({}, this.inputForm.value);
        this.submitData.emit(his);
        const formState = {
            period: this.period,
            operator: his.operator,
            operation: his.operation,
            // location: his.location,
        };
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
}
