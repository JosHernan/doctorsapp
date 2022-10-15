import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialista } from '@core/especialista';
import { SearchService } from '@modules/search-esp/services/search.service';

@Component({
  selector: 'app-detalle-especialista',
  templateUrl: './detalle-especialista.component.html',
  styleUrls: ['./detalle-especialista.component.css']
})
export class DetalleEspecialistaComponent implements OnInit {
  especialista: Especialista = new Especialista();
  constructor(private searchService: SearchService,private activatedRouter:ActivatedRoute) { }

  CargarEspecialista(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.searchService.getEspecialista(id).subscribe(
          (especialista) => this.especialista=especialista)
      }
    });
  }
  ngOnInit(): void {
    this.CargarEspecialista();
  }

}
