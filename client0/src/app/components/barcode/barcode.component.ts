import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SOInfo } from '../../sevices/so/soinfo';
import { formatDate } from '@angular/common';
import { SoInfoService } from '../../sevices/so/soinfo.service';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit,AfterViewInit {


  title = 'DFG NA Portal';
  soInfo = new SOInfo();
  markingText = '';
  qrText = '';
  qrDispalyText = '';
  seq = 1;
  date = new Date();
  datestring = formatDate(this.date, 'yyMMdd', 'en');
  barcode = '';
  markingAppendSeq = true;
  qrAppendSeq = true;
  markingSeparator = ' ';
  qrSeparator = ',';
  @ViewChild('barcodeel') bcEl;
  constructor(private soinfoService: SoInfoService) {}

  ngOnInit() {
    // this.soInfo=this.getSOInfo();
  }
  ngAfterViewInit() {
    this.bcEl.NativeElment.focus();
  }
  getTextes() {
    this.generateMarking();
    this.generateQr();
  }
  generateMarking() {
    const toolno = this.soInfo.toolno.toUpperCase().trim();
    const changeno = '';
    let separator = this.markingSeparator;
    if (this.soInfo.cuscode === '880000') {
      separator = separator;
    }
    this.markingText = toolno + separator + this.datestring + (this.markingAppendSeq ? this.formatSeq(this.seq) : '');
    }


  generateQr() {
    let toolno = this.soInfo.toolno.toUpperCase().trim();
    let changeno = '';
    let separator = this.qrSeparator ;

    if (this.soInfo.cuscode === '880000') {
      changeno = '00';
      separator = '';
      const lastMinus = toolno.lastIndexOf('-', 9);
      if (lastMinus > 0) {
        changeno = toolno.substring(lastMinus);
        toolno = toolno.replace(changeno, '');
        changeno = changeno.replace('-', '0').substr(changeno.length - 2);
      }
      toolno = toolno.replace('-', '');
    }
    // console.log('marking:' + this.qrAppendSeq);
    this.qrText = toolno + (changeno !== '' ? separator + changeno : '') + separator +  this.datestring ;
    this.qrText += this.qrAppendSeq ? (separator + this.formatSeq(this.seq) ) : '' ;
    this.qrDispalyText = this.qrText.replace(separator, ' ')  ;
  }
  AddSequence() {
    if (this.seq < this.soInfo.qty) {
    this.seq++;
    this.getTextes();
    }
  }
  catchDate(event) {
    // console.log(event._d);
    const date = event._d;
    this.datestring = formatDate(date, 'yyMMdd', 'en');
  }
  getSOInfo() {
    // console.log('barcode:' + this.barcode);
    if (this.barcode != null && !('' === this.barcode.trim())) {
      // console.log('barcode:' + this.barcode);
      // console.log('empty:' + '' === this.barcode.trim());
      this.soinfoService.getSoinfo(this.barcode).subscribe(so => {
        // console.log(so);
        this.soInfo = so;
        this.getTextes();

      });
    }
  }
formatSeq(seq: number): string {
  return seq.toString().padStart(2, '0');
//   if(seqStr.length<2){
// seqStr.
//   }
}

}
