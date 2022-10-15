import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especialista } from '@core/especialista';
@Injectable({
  providedIn: 'root'
})
export class DashEspecialistaService {
  private readonly URL = environment.api;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  getEspecialista(id:any):Observable<Especialista>{
    return this.http.get<Especialista>(`${this.URL}/especialista/${id}`);
  }

}
