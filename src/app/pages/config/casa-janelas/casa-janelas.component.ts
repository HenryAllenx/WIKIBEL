import { Component, OnInit } from '@angular/core';
import { Imonument } from '../../../models/monument';
import { ApiService } from '../../../services/api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-casa-janelas',
  imports: [
    NgIf
  ],
  templateUrl: './casa-janelas.component.html',
  styleUrl: './casa-janelas.component.scss'
})
export default class CasaJanelasComponent implements OnInit{
  monumento: Imonument | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonument();
  }

  getMonument(){
    const id = 11; // ID fixo desse monumento
    this.apiService.getMonumentoById(id).subscribe({
      next: (res) => {
        this.monumento = res;
      },
      error: (err) => console.error('Erro ao carregar monumento:', err)
    });
  }
}
