import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashEspecialistaComponent } from './pages/dash-especialista/dash-especialista.component';

const routes: Routes = [
  {path:'',component:DashEspecialistaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashEspecialistaRoutingModule { }
