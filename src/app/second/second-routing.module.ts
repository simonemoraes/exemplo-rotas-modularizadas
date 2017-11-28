import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

const routes: Routes = [
    {path: 'second', component: SecondComponent},
];

@NgModule ({
    imports: [RouterModule.forChild (routes)],
    exports: [RouterModule],
})
export class SecondRoutingModule {}

export const routingSecondComponents = [ SecondComponent ]