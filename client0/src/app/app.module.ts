import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,MatRadioModule } from '@angular/material';
import {MatIconModule,MatDividerModule, MatSelectModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule} from '@angular/material';
import { YmdDatepickerComponent } from './components/YmdDatepicker/YmdDatepicker.component';
import {HttpClientModule} from '@angular/common/http';
import { InfoComponent } from './components/info/info.component';
import { Barcode1dComponent } from './components/barcode1d/barcode1d.component';
import { BarcodelistComponent } from './components/barcodelist/barcodelist.component';
import { BarcodeComponent } from './components/barcode/barcode.component';
import {SearchComponent} from './components/search/search.component';
import { TtestComponent } from './components/ttest/ttest.component';
import {CostSearchResultComponent} from './components/costSearchResult/costSearchResult.component';
import { HistoryComponent } from './components/history/history.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BomMComponent } from './components/bom-m/bom-m.component';
import { BomPComponent } from './components/bom-p/bom-p.component';
import { BomMtComponent } from './components/bom-mt/bom-mt.component';
@NgModule({
   declarations: [
      AppComponent,
      YmdDatepickerComponent,
      InfoComponent,
      Barcode1dComponent,
      BarcodelistComponent,
      BarcodeComponent,
      SearchComponent,
      TtestComponent,
      CostSearchResultComponent,
      HistoryComponent,
      BomMComponent,
      BomPComponent,
      BomMtComponent
      ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      HttpClientModule,
      MatIconModule,
      MatDividerModule,
      MatRadioModule,
      MatSelectModule,
      MatCardModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatTreeModule
   ],
   exports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatNativeDateModule,
      MatRadioModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
