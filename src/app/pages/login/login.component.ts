import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import {ApiService} from '../../services/api.service';
import {Ilogin} from '../../models/user';
import {AuthService} from '../../services/auth.service';
// @ts-ignore
import {Swal} from 'sweetalert2';


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
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Token ou ID não recebido.',
              confirmButtonColor: '#d33'
            });
          }
        },
        error: (err) => {
          console.error('Erro no login:', err);
          Swal.fire({
            icon: 'error',
            title: 'Erro no login',
            text: 'E-mail ou senha inválidos.',
            confirmButtonColor: '#d33'
          });
        }
      });
    }
  }
}
