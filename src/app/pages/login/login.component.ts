import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import {ApiService} from '../../services/api.service';
import {Ilogin} from '../../models/user';

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
      console.log('Credenciais enviadas:', credentials); // ✅ veja aqui

      this.apiService.login(credentials).subscribe({
        next: (res) => {
          const token = res?.access_token;
          if (token) {
            localStorage.setItem('auth_token', token);
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.error('Erro no login:', err);
          alert('Erro ao fazer login. Verifique seu e-mail e senha.');
        }
      });
    }
  }

}
