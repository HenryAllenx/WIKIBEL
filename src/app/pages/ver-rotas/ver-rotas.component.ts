import { Component } from '@angular/core';
import RotasService from '../../services/rotas.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Rota} from '../../models/rotas';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ver-rotas',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './ver-rotas.component.html',
  styleUrl: './ver-rotas.component.scss'
})
export default class VerRotasComponent {
  rota: Rota | undefined;

  constructor(
    private rotasService: RotasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const rotas = this.rotasService.obterRotas();
    this.rota = rotas.find((r) => r.id === id);
  }
}
