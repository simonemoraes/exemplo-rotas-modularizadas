import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';

const routes: Routes = [
    {path: 'first', component: FirstComponent},
];

@NgModule ({
    imports: [RouterModule.forRoot (routes)],
    exports: [RouterModule],
})
export class FirstModule {}

export const routingFirstComponents = [ FirstComponent ]