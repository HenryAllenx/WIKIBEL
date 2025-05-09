import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Dados do cadastro:', this.cadastroForm.value);
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Preencha os campos corretamente.');
    }
  }
}
