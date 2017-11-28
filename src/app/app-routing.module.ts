/**
 * Artigo sobre Modularização de rotas
 * Nome do Artigo: Angular 2 Routing With Modules
 * Portal: CodingTheSmartWay.com Blog
 * Autor: Sebastian Eschweiler
 *
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
 */

/**
 * Aula sobre Modulos e funcionalidades de Rotas
 * Nome: Rotas e funcionalidades
 * Curso: Angular 2 e 4
 * Autor: Loiane
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: ''}
];

@NgModule ({
    declarations: [],
    imports: [ RouterModule.forRoot (routes) ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

