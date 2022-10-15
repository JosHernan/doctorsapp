import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashEspecialistaRoutingModule } from './dash-especialista-routing.module';
import { DashEspecialistaComponent } from './pages/dash-especialista/dash-especialista.component';


@NgModule({
  declarations: [
    DashEspecialistaComponent
  ],
  imports: [
    CommonModule,
    DashEspecialistaRoutingModule
  ]
})
export class DashEspecialistaModule { }
