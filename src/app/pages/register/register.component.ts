import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Iregister} from '../../models/user';


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
        response => console.log('Sucesso', response),
        error => console.error('Erro', error)
      );
    } else {
      alert('Preencha os campos corretamente.');
    }
  }
}
