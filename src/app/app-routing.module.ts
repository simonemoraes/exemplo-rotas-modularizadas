 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { FirstRoutingModule, routingFirstComponents } from './first/first-routing.module';
 import { SecondRoutingModule, routingSecondComponents } from './second/second-routing.module';
 import { ThirdRoutingModule, routingThirdComponents } from './third/third-routing.module';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'first'}
];

@NgModule ({
    declarations: [routingFirstComponents, routingSecondComponents, routingThirdComponents],
    imports: [ FirstRoutingModule, SecondRoutingModule, ThirdRoutingModule, RouterModule.forRoot (routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
