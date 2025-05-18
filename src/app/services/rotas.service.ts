import { Injectable } from '@angular/core';
import {Rota} from '../models/rotas';

const STORAGE_KEY = 'rotas_salvas';

@Injectable({
  providedIn: 'root'
})
export default class RotasService {
  private rotas: Rota[] = [];

  constructor() {
    this.loadRotas();
  }

  private loadRotas() {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
      this.rotas = JSON.parse(json);
    } else {
      this.rotas = [];
    }
  }

  private saveRotas() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.rotas));
  }

  obterRotas(): Rota[] {
    return [...this.rotas]; // retorna cópia para evitar mutação direta
  }

  adicionarRota(novaRota: Rota): void {
    this.rotas.push(novaRota);
    this.saveRotas();
  }
  removerRota(id: string): void {
    this.rotas = this.rotas.filter(r => r.id !== id); // atualiza também em memória
    this.saveRotas();
  }

}
