import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientePageComponent } from './pages/paciente-page/paciente-page.component';

const routes: Routes = [
  {
    path:'',
    component:PacientePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
