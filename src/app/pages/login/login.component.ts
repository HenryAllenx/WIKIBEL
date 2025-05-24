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

      this.apiService.login(credentials).subscribe({
        next: (res) => {
          console.log('Resposta do login:', res);

          const token = res.token || res.access_token;
          const userId = res.id;

          if (token && userId) {
            localStorage.setItem('token', token);
            localStorage.setItem('usuario_id', userId.toString()); // ⬅️ salva o ID
            console.log('Token e ID salvos:', token, userId);

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
