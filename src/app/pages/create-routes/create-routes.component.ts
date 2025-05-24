import { Component } from '@angular/core';
import {RotasService} from '../../services/rotas.service';
import {Router} from '@angular/router';
import {PontoTuristico, Rota} from '../../models/rotas';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../../services/api.service';

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
  memberId!: number;
  filtro: string = ''; // Para filtrar os pontos

  pontosDisponiveis: PontoTuristico[] = [
    { id:'2', nome: 'Basílica de Nossa Senhora de Nazaré' },
    { id:'11', nome: 'Casa das 11 janelas' },
    { id:'19', nome: 'Complexo do Ver-o-Rio' },
    { id:'17', nome: 'Estação das docas'},
    { id:'1', nome: 'Forte do Presépio(Forte do Castelo)'},
    { id:'4', nome: 'Igreja da Sé' },
    { id:'6', nome: 'Igreja das Mercês' },
    { id:'5', nome: 'Igreja de Santana' },
    { id:'3', nome: 'Igreja São João Batista' },
    { id:'8', nome: 'Palácio Antônio Lemos' },
    { id:'7', nome: 'Palácio da Residência' },
    { id:'10', nome: 'Paris n\'America' },
    { id:'18', nome: 'Parque Urbano Belém Porto Futuro(Porto Futuro)' },
    { id:'13', nome: 'Parque Zoobotânico Mangal das garças' },
    { id:'12', nome: 'Parque Zoobotânico Museu Paraense Emílio Goeldi' },
    { id:'14', nome: 'Praça Batista Campos' },
    { id:'15', nome: 'Praça da República' },
    { id:'16', nome: 'Praça Waldermar Henrique' },
    { id:'9', nome: 'Theatro da Paz' },
    { id:'20', nome: 'Ver-o-Peso' },


  ];

  get pontosFiltrados() {
    return this.pontosDisponiveis.filter(ponto =>
      ponto.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }


  constructor(
    private rotasService: RotasService,
    private router: Router,
    private apiService: ApiService
  ) {
    this.apiService.getCurrentUser().subscribe({
      next: (user) => {
        if (user && user.id) {
          this.memberId = user.id;
        } else {
          console.error('Usuário não autenticado ou ID não encontrado.');
          alert('Erro: Usuário não autenticado. Faça login novamente.');
          this.router.navigate(['/login']); // Redireciona para login se necessário
        }
      },
      error: (err) => {
        console.error('Erro ao obter usuário:', err);
        alert('Erro ao carregar usuário. Faça login novamente.');
        this.router.navigate(['/login']);
      }
    });
  }

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
    if (this.pontosSelecionados.length === 0) {
      alert('Selecione pelo menos um ponto turístico!');
      return;
    }

    if (!this.nomeRota.trim()) {
      alert('Por favor, insira um nome para a rota!');
      return;
    }

    const novaRota = {
      member_id: this.memberId,
      monuments_id: this.pontosSelecionados.map(p => Number(p.id)),
      name: this.nomeRota
    };
    console.log('Enviando rota:', novaRota);

    this.apiService.criarRota(novaRota).subscribe({
      next: (rotaCriada) => {
        console.log('Rota criada:', rotaCriada);
        this.router.navigate(['/turismo']);
      },
      error: (err) => {
        console.error('Erro ao criar rota:', err);
        alert('Erro ao criar rota. Verifique o console para mais detalhes.');
      }
    });
  }

}
