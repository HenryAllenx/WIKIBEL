import { Injectable } from '@angular/core';
import {Rota} from '../models/rotas';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

const STORAGE_KEY = 'rotas_salvas';

@Injectable({
  providedIn: 'root'
})
export class RotasService {
  private rotas: Rota[] = [];

  constructor(private apiService: ApiService) {}

  adicionarRota(novaRota: Rota): Observable<any> {
    return this.apiService.criarRota(novaRota);
  }

  obterRotas(): Observable<Rota[]> {
    return this.apiService.getRoute();
  }

  getNomeDaRota(id: number): string {
    return localStorage.getItem(`nomeRota_${id}`) || 'Rota sem nome';
  }

  removerRota(routeId: number): Observable<any> {
    return this.apiService.removerRota(routeId);
  }


}
