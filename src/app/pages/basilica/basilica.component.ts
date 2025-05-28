import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';
import {Imonument} from '../../models/monument';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-basilica',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './basilica.component.html',
  styleUrl: './basilica.component.scss'
})
export default class BasilicaComponent implements OnInit{
  monumento: Imonument | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonument();
  }

  getMonument(){
    const id = 2; // ID fixo desse monumento
    this.apiService.getMonumentoById(id).subscribe({
      next: (res) => {
        this.monumento = res;
      },
      error: (err) => console.error('Erro ao carregar monumento:', err)
    });
  }
}
