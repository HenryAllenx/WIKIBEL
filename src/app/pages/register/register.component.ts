import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Iregister} from '../../models/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const payload = {
        token:'',
        name: this.cadastroForm.value.name,
        email: this.cadastroForm.value.email,
        password: this.cadastroForm.value.password,
        is_premium: false  // ou outro valor padrão se necessário
      };

      this.apiService.register(payload).subscribe(
        response => Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado!',
          text: 'Sua conta foi criada com sucesso.',
          confirmButtonColor: '#3085d6'
        }),
        error => Swal.fire({
          icon: 'error',
          title: 'Erro ao cadastrar',
          text: 'Não foi possível criar a conta. Verifique os dados ou tente novamente.',
          confirmButtonColor: '#d33'
        })
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Formulário inválido',
        text: 'Preencha todos os campos corretamente.',
        confirmButtonColor: '#f0ad4e'
      });
    }
  }
}
