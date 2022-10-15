import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchEspRoutingModule } from './search-esp-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchEspRoutingModule
  ]
})
export class SearchEspModule { }
