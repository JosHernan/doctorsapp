import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialista } from '@core/especialista';
import { SearchService } from '@modules/search-esp/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  /*especialistas:Especialista[]=[
    {id:1,especialidad:'Nutricion',nombre:'Inez Bautista San juan',cedula:'77675612',celular:'8181776645',email:'inez@gmail.com',
    ciudad:'Monterrey Nuevo Leon',consultorio:'av. Morones prieto',createAt:'2022-04-03 00:00:00'}

  ];*/
  especialistas:Especialista[]=[];
  constructor(private searchService: SearchService,private activatedRouter:ActivatedRoute) { }
  especialista: Especialista = new Especialista();

  ngOnInit(): void {
   this.searchService.getEspecialistas().subscribe(
     especialistas =>this.especialistas=especialistas
   );
  }



}
