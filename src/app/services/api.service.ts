import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, timeout} from 'rxjs';
import {Ilogin, Iregister} from '../models/user';
import {Rota} from '../models/rotas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private readonly apiRegister= `${environment.apiRegister}`
  private readonly apiLogin= `${environment.apiLogin}`
  private readonly getUser= `${environment.getUser}`
  private readonly monument= `${environment.monument}`
  private readonly getRoutes= `${environment.getRoutes}`
  private readonly createRoutes= `${environment.createRoutes}`
  private readonly deleteRoute= `${environment.deleteRoute}`

  register(data: Iregister): Observable<any> {
    return this.http.post(this.apiRegister, data);
  }

  login(data: Ilogin): Observable<any> {
    return this.http.post(this.apiLogin, data);
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(this.getUser, {
      headers: {
        'access-token': token || ''
      },
      withCredentials: true
    });
  }

  getMonumentoById(id: number) {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.monument}/${id}`, {
      headers: {
        'access-token': token || ''
      }
    });
  }
  // api.service.ts (complemento)

  criarRota(data: any): Observable<Rota> {
    const token = localStorage.getItem('token');
    return this.http.post<Rota>(this.createRoutes, data, {
      headers: {
        'access-token': token || ''
      }
    });
  }
  getRoute(): Observable<Rota[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Rota[]>(this.getRoutes, {
      headers: {
        'access-token': token || ''
      }
    });
  }

  removerRota(routeId: number): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('Token enviado:', token);
    console.log('Enviando DELETE para:', `${this.deleteRoute}?route_id=${routeId}`);
    const params = new HttpParams().set('route_id', routeId.toString());
    return this.http.delete<any>(this.deleteRoute, {
      headers: {
        'access-token': token || ''
      },
      params: params
    }).pipe(
      timeout(30000) // Timeout de 30 segundos
    );
  }




}
