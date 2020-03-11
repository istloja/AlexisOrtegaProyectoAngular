import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficosComponent } from './graficos/graficos.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:"",component:AppComponent,pathMatch:"full"},
  {path:"ruta1",component:GraficosComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
