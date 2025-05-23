import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Ilogin, Iregister} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private readonly apiRegister= `${environment.apiRegister}`
  private readonly apiLogin= `${environment.apiLogin}`
  private readonly getUser= `${environment.getUser}`
  private readonly monument= `${environment.monument}`

  register(data: Iregister): Observable<any> {
    return this.http.post(this.apiRegister, data);
  }

  login(data: Ilogin): Observable<any> {
    return this.http.post(this.apiLogin, data);
  }

  getCurrentUser():Observable<any>{
    return this.http.get(this.getUser, {withCredentials: true});

  }

  getMonumentoById(id: number) {
    return this.http.get<any>(`${this.monument}/${id}`);
  }

}
