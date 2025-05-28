import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgIf} from '@angular/common';
import {Imonument} from '../../models/monument';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-forte-do-presepio',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './forte-do-presepio.component.html',
  styleUrl: './forte-do-presepio.component.scss'
})
export default class ForteDoPresepioComponent implements OnInit{
  monumento: Imonument | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMonument();
  }

  getMonument(){
    const id = 1; // ID fixo desse monumento
    this.apiService.getMonumentoById(id).subscribe({
      next: (res) => {
        this.monumento = res;
      },
      error: (err) => console.error('Erro ao carregar monumento:', err)
    });
  }
}


