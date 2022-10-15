import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { EspecialistaPageComponent } from './pages/especialista-page/especialista-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EspecialistaPageComponent
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    FormsModule
  ]
})
export class EspecialistaModule { }
