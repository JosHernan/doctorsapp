import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEspecialistaComponent } from './pages/detalle-especialista/detalle-especialista.component';

const routes: Routes = [
  {
    path:'',component:DetalleEspecialistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleEspecialistaRoutingModule { }
