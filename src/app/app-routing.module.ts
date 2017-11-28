 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';

 import { FirstModule, routingFirstComponents } from './first/first.module';
 import { SecondModule, routingSecondComponents } from './second/second.module';
 import { ThirdModule, routingThirdComponents } from './third/third.module';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'first'}
];

@NgModule ({
    declarations: [routingFirstComponents, routingSecondComponents, routingThirdComponents],
    imports: [ FirstModule, SecondModule, ThirdModule, RouterModule.forRoot (routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
