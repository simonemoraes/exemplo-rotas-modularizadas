importe {NgModule} de '@ angular / core';
importe {Routes, RouterModule} de '@ angular / router';
importe {FirstComponent} de './first.component';
importe {SecondComponent} de './second.component';
importe {ThirdComponent} de './third.component';

rotas const: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'first'},
    {path: 'first', component: FirstComponent},
    {path: 'second', component: SecondComponent},
    { path: 'third', componente: ThirdComponent},
];

@NgModule ({
    importações: [RouterModule.forRoot (rotas)],
    exportações: [RouterModule],
})
classe de exportação AppRoutingModule {}