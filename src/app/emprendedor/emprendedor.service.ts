import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { EmprendedorDetail } from './emprendedor-detail';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  private jsonUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEmprendedores(): Observable<EmprendedorDetail[]> {
    return this.http.get<EmprendedorDetail[]>(this.jsonUrl);
  }
}
