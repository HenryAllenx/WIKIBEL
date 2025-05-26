import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  constructor() { }

  // Verifica se o usuário está autenticado
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  // Retorna o observable para mudanças no estado de autenticação
  getAuthStatus() {
    return this.isAuthenticated.asObservable();
  }

  // Método para login
  login(token: string, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('usuario_id', userId);
    this.isAuthenticated.next(true);
  }

  // Método de logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario_id');
    this.isAuthenticated.next(false);
  }
}
