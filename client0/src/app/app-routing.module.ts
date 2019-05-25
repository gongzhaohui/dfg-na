import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarcodeComponent } from './components/barcode/barcode.component';
import {SearchComponent} from './components/search/search.component';

const routes: Routes = [
         { path: '', pathMatch: 'full', redirectTo: '/cost'} ,
             {path: '',
             children: [
                 {
                     path: 'barcode',
                     component: BarcodeComponent,

                     }
                     ,
                     {
                        path: 'cost',
                        component: SearchComponent
                     }
                    ]
                 }
                 ,

                  {path: '**', redirectTo: ''}
             ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
