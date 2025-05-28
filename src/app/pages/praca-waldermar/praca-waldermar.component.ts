import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';
import {Imonument} from '../../models/monument';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-praca-waldermar',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './praca-waldermar.component.html',
  styleUrl: './praca-waldermar.component.scss'
})
export default class PracaWaldermarComponent implements OnInit{
  monumento: Imonument | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonument();
  }

  getMonument(){
    const id = 16; // ID fixo desse monumento
    this.apiService.getMonumentoById(id).subscribe({
      next: (res) => {
        this.monumento = res;
      },
      error: (err) => console.error('Erro ao carregar monumento:', err)
    });
  }
} {

}
