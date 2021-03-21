import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {
//     NgZorroAntdModule,
//     NZ_I18N,
//     zh_CN,
//     NzNotificationService,
// } from 'ng-zorro-antd';

import {NZ_I18N,zh_CN} from 'ng-zorro-antd/i18n';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzTableModule} from 'ng-zorro-antd/table'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HistoryComponent } from './components/history/history.component';
import { BomMComponent } from './components/bom-m/bom-m.component';
import { BomPComponent } from './components/bom-p/bom-p.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HttpErrorInterceptor } from './interceptors/HttpErrorInterceptor';
import { RdsinComponent } from './components/rds-in/rdsin.component';
// import {HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';
import { CostComponent } from './components/cost/cost.component';
import { NoPageComponent } from './components/nopage/nopage.component';
import { PandianComponent } from './components/pandian/pandian.component';
import { PdInputComponent } from './components/pandian/pd-input/pdinput.component';
import { PdEditComponent } from './components/pandian/pd-edit/pdedit.component';
import { logComponent } from './components/log/log.component';
import { LogInputComponent } from './components/log/log-input/log-input.component';
import { LogListComponent } from './components/log/log-list/log-list.component';
registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        HistoryComponent,
        BomMComponent,
        BomPComponent,
        InventoryComponent,
        RdsinComponent,
        CostComponent,
        NoPageComponent,
        PandianComponent,
        PdInputComponent,
        PdEditComponent,
        logComponent,
        LogInputComponent,
        LogListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzTableModule,
        NzLayoutModule,
        NzDividerModule,
        NzPaginationModule,
        NzDropDownModule,
        NzRadioModule,
        NzGridModule,
        NzBreadCrumbModule,
        NzButtonModule,
        NzIconModule,
        NzInputModule,
        NzSelectModule,
        NzFormModule,
        // NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        { provide: NzNotificationService, useClass: NzNotificationService },
        { provide: 'BASE_URL', useValue: environment.apiHost },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
