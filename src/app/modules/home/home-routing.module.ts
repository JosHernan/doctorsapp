import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'especialista',
    loadChildren:()=> import('@modules/especialista/especialista.module').then(m=>m.EspecialistaModule)
  },
  {
    path:'paciente',
    loadChildren:()=> import('@modules/pacientes/pacientes.module').then(m=>m.PacientesModule)
  },
  {
    path:'favorites',
    loadChildren:()=> import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
  },
  {
    path:'history',
    loadChildren:()=> import('@modules/history/history.module').then(m=>m.HistoryModule)
  },
  {
    path:'track',
    loadChildren:()=> import('@modules/track/track.module').then(m=>m.TrackModule)
  },
  {
    path:'search',
    loadChildren:()=> import('@modules/search-esp/search-esp.module').then(m=>m.SearchEspModule)
  },
  {
    path:'dashesp',
    loadChildren:()=> import('@modules/dash-especialista/dash-especialista.module').then(m => m.DashEspecialistaModule)
  },
  {
    path:'inicio',
    loadChildren:()=> import('@modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:'detalle/:id',
    loadChildren:()=> import('@modules/detalle-especialista/detalle-especialista.module').then(m=>m.DetalleEspecialistaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
