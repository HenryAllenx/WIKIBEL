import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import {ApiService} from '../../services/api.service';
import {Ilogin} from '../../models/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials: Ilogin = this.loginForm.value;

      this.apiService.login(credentials).subscribe({
        next: (res) => {
          console.log('Resposta do login:', res);

          const token = res.token || res.access_token;
          // Extrair userId do campo 'sub' do token JWT
          const userId = token ? JSON.parse(atob(token.split('.')[1])).sub : null;

          if (token && userId) {
            this.authService.login(token, userId);
            console.log('Token e ID salvos via AuthService:', token, userId);
            this.router.navigate(['/home']);
          } else {
            alert('Erro: token ou ID não recebido.');
          }
        },
        error: (err) => {
          console.error('Erro no login:', err);
          alert('Falha no login. Verifique suas credenciais.');
        }
      });
    }
  }

}
