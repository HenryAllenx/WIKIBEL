import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';
import {Imonument} from '../../models/monument';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-mangal-garcas',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './mangal-garcas.component.html',
  styleUrl: './mangal-garcas.component.scss'
})
export default class MangalGarcasComponent implements OnInit{
  monumento: Imonument | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonument();
  }

  getMonument(){
    const id = 13; // ID fixo desse monumento
    this.apiService.getMonumentoById(id).subscribe({
      next: (res) => {
        this.monumento = res;
      },
      error: (err) => console.error('Erro ao carregar monumento:', err)
    });
  }
}

