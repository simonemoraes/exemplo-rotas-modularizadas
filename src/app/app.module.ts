/**
 * Artigo sobre Modularização de rotas
 * Nome do Artigo: Angular 2 Routing With Modules
 * Portal: CodingTheSmartWay.com Blog
 * Autor: Sebastian Eschweiler
 *

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */


/**
* Aula sobre Modulos e funcionalidades de Rotas
* Nome: Rotas e funcionalidades
* Curso: Angular 2 e 4
* Autor: Loiane
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Modulos de Funcionalidade */
import { AppRoutingModule } from './app-routing.module';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';

/* Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FirstModule,
        SecondModule,
        ThirdModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

