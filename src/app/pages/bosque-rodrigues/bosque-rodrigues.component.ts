import { Component } from '@angular/core';
import {Imonument} from '../../models/monument';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-bosque-rodrigues',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './bosque-rodrigues.component.html',
  styleUrl: './bosque-rodrigues.component.scss'
})
export default class BosqueRodriguesComponent {
  monumento: Imonument | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonument();
  }

  getMonument(){
    const id = 21; // ID fixo desse monumento
    this.apiService.getMonumentoById(id).subscribe({
      next: (res) => {
        this.monumento = res;
      },
      error: (err) => console.error('Erro ao carregar monumento:', err)
    });
  }
}
