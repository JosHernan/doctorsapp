import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialista } from '@core/especialista';
import { EspecialistaService } from '@modules/especialista/services/especialista.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-especialista-page',
  templateUrl: './especialista-page.component.html',
  styleUrls: ['./especialista-page.component.css']
})
export class EspecialistaPageComponent implements OnInit {

  titulo:string='Cree su perfil gratuito de especialista';
   especialista: Especialista = new Especialista();
  constructor(private especialistaService: EspecialistaService,private router:Router,private activatedRouter: ActivatedRoute) { }
   errores!: string[];
  ngOnInit(): void {
  }

  CargarEspecialista(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.especialistaService.getEspecialista(id).subscribe(
          (especialista) => this.especialista=especialista)
      }
    });
  }

  public create():void{
      console.log(this.especialista);
      this.especialistaService.create(this.especialista).subscribe(
          //va la respuesta y con router navigate te redirige hacia donde quieres ir.
          /* en esta caso la navegacion va hacia la busqueda se pasa como parametro un queryparams*/
          especialista => {
            this.router.navigate(['/dashesp'],{queryParams:{query1:especialista.id}})
            swal.fire('Wow  Bienvenido',` ${this.especialista.nombre} `,'success')
          }
          ,
          err => {
            this.errores= err.error.errors as string[];
            console.log('Codigo de error desde el backend: '+  err.status);
          }
          
      )
  }

}
