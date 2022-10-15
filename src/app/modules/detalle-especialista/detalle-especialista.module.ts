import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleEspecialistaRoutingModule } from './detalle-especialista-routing.module';
import { DetalleEspecialistaComponent } from './pages/detalle-especialista/detalle-especialista.component';


@NgModule({
  declarations: [
    DetalleEspecialistaComponent
  ],
  imports: [
    CommonModule,
    DetalleEspecialistaRoutingModule
  ]
})
export class DetalleEspecialistaModule { }
