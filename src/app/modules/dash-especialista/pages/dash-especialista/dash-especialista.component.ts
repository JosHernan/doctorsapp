import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialista } from '@core/especialista';
import { DashEspecialistaService } from '@modules/dash-especialista/services/dash-especialista.service';

@Component({
  selector: 'app-dash-especialista',
  templateUrl: './dash-especialista.component.html',
  styleUrls: ['./dash-especialista.component.css']
})
export class DashEspecialistaComponent implements OnInit {
  param1:string="";
   especialista: Especialista= new Especialista();
  constructor(private route: ActivatedRoute, private serviceDash: DashEspecialistaService) { }
  titulo:string="Registro informacion complementaria";

  ngOnInit(): void {
   
  }

  cargarEspecialista(): void{
    //con query ParamMap obtenemos el id de la ruta 
    
    let id = this.route.snapshot.queryParamMap.get('query1');
    console.log("Obteniendo id ruta: " + id);
      if(id){
        this.serviceDash.getEspecialista(id).subscribe(
         (especialista) => this.especialista=especialista
        )
      }
    
  }



}
