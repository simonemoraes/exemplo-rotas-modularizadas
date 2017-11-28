import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [
    {path: 'first', component: FirstComponent},
];

@NgModule ({
    imports: [RouterModule.forChild (routes)],
    exports: [RouterModule],
})
export class FirstRoutingModule {}

export const routingFirstComponents = [ FirstComponent ]