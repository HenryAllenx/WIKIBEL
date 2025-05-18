import { Component } from '@angular/core';
import RotasService from '../../services/rotas.service';
import {Router} from '@angular/router';
import {PontoTuristico, Rota} from '../../models/rotas';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-routes',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './create-routes.component.html',
  styleUrl: './create-routes.component.scss'
})
export default class CreateRoutesComponent {
  nomeRota = '';
  pontosSelecionados: PontoTuristico[] = [];

  pontosDisponiveis: PontoTuristico[] = [
    { id:'basilica', nome: 'Basílica de Nossa Senhora de Nazaré' },
    { id:'casa11', nome: 'Casa das 11 janelas' },
    { id:'vero', nome: 'Complexo do Ver-o-Rio' },
    { id:'estacao', nome: 'Estação das docas'},
    { id:'Forte', nome: 'Forte do Presépio(Forte do Castelo)'},
    { id:'se', nome: 'Igreja da Sé' },
    { id:'merces', nome: 'Igreja das Mercês' },
    { id:'santana', nome: 'Igreja de Santana' },
    { id:'saojoao', nome: 'Igreja São João Batista' },
    { id:'lemo', nome: 'Palácio Antônio Lemos' },
    { id:'residencia', nome: 'Palácio da Residência' },
    { id:'paris', nome: 'Paris n\'America' },
    { id:'portofuturo', nome: 'Parque Urbano Belém Porto Futuro(Porto Futuro)' },
    { id:'mangal', nome: 'Parque Zoobotânico Mangal das garças' },
    { id:'goeldi', nome: 'Parque Zoobotânico Museu Paraense Emílio Goeldi' },
    { id:'batista', nome: 'Praça Batista Campos' },
    { id:'republica', nome: 'Praça da República' },
    { id:'waldermar', nome: 'Praça Waldermar Henrique' },
    { id:'theatro', nome: 'Theatro da Paz' },
    { id:'veropeso', nome: 'Ver-o-Peso' },


  ];



  constructor(private rotasService: RotasService, private router: Router) {}

  togglePonto(ponto: PontoTuristico) {
    const index = this.pontosSelecionados.findIndex(p => p.id === ponto.id);
    if (index >= 0) {
      this.pontosSelecionados.splice(index, 1);
    } else {
      this.pontosSelecionados.push(ponto);
    }
  }

  estaSelecionado(ponto: PontoTuristico): boolean {
    return this.pontosSelecionados.some(p => p.id === ponto.id);
  }

  salvar() {
    if (!this.nomeRota.trim()) {
      alert('Insira um nome para a rota!');
      return;
    }
    if (this.pontosSelecionados.length === 0) {
      alert('Selecione pelo menos um ponto turístico!');
      return;
    }
    const novaRota: Rota = {
      id: new Date().getTime().toString(),
      nome: this.nomeRota,
      pontos: this.pontosSelecionados,
    };
    this.rotasService.adicionarRota(novaRota);
    this.router.navigate(['/turismo']);
  }
}
