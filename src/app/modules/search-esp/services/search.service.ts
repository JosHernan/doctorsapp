import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialista } from '@core/especialista';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api
  constructor(private http:HttpClient) { }

  getEspecialistas():Observable<Especialista[]>{
   return this.http.get<Especialista[]>(`${this.URL}/especialista`);
  }

  getEspecialista(id:any):Observable<Especialista>{
    return this.http.get<Especialista>(`${this.URL}/especialista/${id}`);
  }

}
