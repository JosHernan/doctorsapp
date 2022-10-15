import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialista } from '@core/especialista';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {
  private readonly URL = environment.api;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  /*En esta seccion le pasamos el objeto especialista para  mandarlo en el post*/
  create(especialista: Especialista) : Observable<Especialista>{
    return this.http.post<Especialista>(`${this.URL}/especialista`,especialista, {headers:this.httpHeaders})
  }

  getEspecialista(id:any):Observable<Especialista>{
    return this.http.get<Especialista>(`${this.URL}/especialista/${id}`);
  }

}
