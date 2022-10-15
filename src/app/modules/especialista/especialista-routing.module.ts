import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialistaPageComponent } from './pages/especialista-page/especialista-page.component';

const routes: Routes = [
  {path:'',component:EspecialistaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }
