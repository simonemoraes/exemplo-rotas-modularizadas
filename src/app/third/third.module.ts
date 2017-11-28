import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './third.component';

const routes: Routes = [
    {path: 'third', component: ThirdComponent},
];

@NgModule ({
    imports: [RouterModule.forRoot (routes)],
    exports: [RouterModule],
})
export class ThirdModule {}

export const routingThirdComponents = [ ThirdComponent ]
