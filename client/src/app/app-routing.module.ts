import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostComponent } from './components/cost/cost.component';
import { NoPageComponent } from './components/nopage/nopage.component';
import { PandianComponent } from './components/pandian/pandian.component';

const routes: Routes = [
    { path: 'cost', component: CostComponent },
    { path: 'pd', component: PandianComponent },

    { path: '', redirectTo: '/cost', pathMatch: 'full' },
    { path: '**', component: NoPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
