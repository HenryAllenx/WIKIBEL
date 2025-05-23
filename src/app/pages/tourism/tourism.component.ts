import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {RotasService} from '../../services/rotas.service';
import {Rota} from '../../models/rotas';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tourism',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './tourism.component.html',
  styleUrl: './tourism.component.scss'
})
export default class TourismComponent implements OnInit{

  rotas: Rota[] = [];

  constructor(private rotasService: RotasService, private router: Router) {}

  ngOnInit() {
    this.rotas = this.rotasService.obterRotas();
  }

  abrirRota(rota: Rota) {
    this.router.navigate(['/ver-rota', rota.id]);
  }

  excluirRota(rota: Rota) {
    const confirmado = confirm(`Tem certeza que deseja excluir a rota "${rota.nome}"?`);
    if (confirmado) {
      this.rotasService.removerRota(rota.id);
      this.rotas = this.rotasService.obterRotas(); // recarrega da memória atualizada
    }
  }



}
