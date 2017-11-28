/**
 * Artigo sobre Modularização de rotas
 * Nome do Artigo: Angular 2 Routing With Modules
 * Portal: CodingTheSmartWay.com Blog
 * Autor: Sebastian Eschweiler
 *


 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './third.component';

const routes: Routes = [
    {path: 'third', component: ThirdComponent},
];

@NgModule ({
    imports: [RouterModule.forChild (routes)],
    exports: [RouterModule],
})
export class ThirdRoutingModule {}

export const routingThirdComponents = [ ThirdComponent ]

 */


/**
 * Aula sobre Modulos e funcionalidades de Rotas
 * Nome: Rotas e funcionalidades
 * Curso: Angular 2 e 4
 * Autor: Loiane
 */
