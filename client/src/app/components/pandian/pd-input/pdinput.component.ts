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
import { PeriodService } from 'src/app/services/period.service';
import { StockTaking } from 'src/app/entities/stocktaking.entity';
@Component({
    selector: 'dfg-pdinput',
    templateUrl: './pdinput.component.html',
    styleUrls: ['./pdinput.component.css'],
})
export class PdInputComponent implements OnInit {
    @Output() submitData: EventEmitter<StockTaking> = new EventEmitter();
    inputForm: FormGroup;
    @ViewChild('barcode', { static: true })
    private barEl: ElementRef;

    constructor(private fb: FormBuilder, private periodSvc: PeriodService) {}
    submitForm(): void {
        const pdData: StockTaking = Object.assign({}, this.inputForm.value);
        this.submitData.emit(pdData);
        const formState = {
            period: pdData.period,
            creator: pdData.creator,
            category: pdData.category,
            location: pdData.location,
        };
        this.inputForm.reset(formState);
        this.barEl.nativeElement.focus();
    }
    ngOnInit() {
        this.inputForm = this.fb.group({
            period: [this.periodSvc.GetPeriod(new Date())],
            creator: [null, [Validators.required]],
            category: ['jhj', [Validators.required]],
            location: [null],
            barcode: [null, [Validators.required]],
            pds: [null, [Validators.required]],
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
