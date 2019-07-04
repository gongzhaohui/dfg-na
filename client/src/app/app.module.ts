import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgZorroAntdModule,
  NZ_I18N,
  zh_CN,
  NzNotificationService
} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HistoryComponent } from './components/history/history.component';
import { BomMComponent } from './components/bom-m/bom-m.component';
import { BomPComponent } from './components/bom-p/bom-p.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';
// import {HttpClientModule} from '@angular/common/http';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    BomMComponent,
    BomPComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: NzNotificationService, useClass: NzNotificationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
