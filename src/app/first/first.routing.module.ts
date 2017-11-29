/**
 * Artigo sobre Modularização de rotas
 * Nome do Artigo: Angular 2 Routing With Modules
 * Portal: CodingTheSmartWay.com Blog
 * Autor: Sebastian Eschweiler
 *
 *
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
 */


/**
* Aula sobre Modulos e funcionalidades de Rotas
* Nome: Rotas e funcionalidades
* Curso: Angular 2 e 4
* Autor: Loiane
*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first.component';

const firstRoutes: Routes = [
    {path: 'first', component: FirstComponent},
];

@NgModule ({
    declarations: [],
    imports: [ RouterModule.forChild (firstRoutes) ],
    exports: [RouterModule],
})
export class FirstRoutingModule {}