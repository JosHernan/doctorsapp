import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainMenu:{
    defaultOptions:Array<any>, accessLink:Array<any>
  } ={defaultOptions:[],accessLink:[]}

  customOptions:Array<any>=[];
  constructor() { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions=[
      {
        name:'Inicio',
        icon:'uil-estate',
        router:['/inicio']
      },
      {
        name:'Especialista',
        icon:'uil-estate',
        router:['/search']
      },
      {
        name:'Servicios Medicos',
        icon:'uil-estate',
        router:['/']
      },
      {
        name:'Registrarme Especialista',
        icon:'uil-estate',
        router:['/especialista']
      },
      {
        name:'Registrarme Paciente',
        icon:'uil-estate',
        router:['/paciente']
      }
    ]

  }

}
