import {Component, OnInit} from '@angular/core';
import {RotasService} from '../../services/rotas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Rota} from '../../models/rotas';
import {NgForOf, NgIf} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {Imonument} from '../../models/monument';

@Component({
  selector: 'app-ver-rotas',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './ver-rotas.component.html',
  styleUrl: './ver-rotas.component.scss'
})
export default class VerRotasComponent implements OnInit{
  rota: Rota | null = null;
  monumentos: Imonument[] = []; // Use o modelo Imonument

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected rotasService: RotasService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const rotaId = this.route.snapshot.paramMap.get('id');
    if (rotaId) {
      this.carregarRota(+rotaId);
    }
  }

  carregarRota(rotaId: number) {
    this.rotasService.obterRotas().subscribe({
      next: (rotas) => {
        this.rota = rotas.find((r) => r.id === rotaId) || null;
        if (this.rota && this.rota.monuments_id) {
          this.carregarMonumentos(this.rota.monuments_id);
        }
      },
      error: (err) => {
        console.error('Erro ao buscar rota:', err);
        alert('Erro ao carregar a rota.');
      }
    });
  }

  carregarMonumentos(monumentsId: number[]) {
    this.monumentos = [];
    if (!monumentsId || monumentsId.length === 0) {
      console.warn('Nenhum ID de monumento fornecido.');
      return;
    }

    monumentsId.forEach((id) => {
      this.apiService.getMonumentoById(id).subscribe({
        next: (monumento) => {
          console.log(`Monumento ${id}:`, monumento);
          if (!monumento.name || !monumento.description) {
            console.warn(`Monumento ${id} não possui nome ou descrição.`);
          }
          this.monumentos.push(monumento);
        },
        error: (err) => {
          console.error(`Erro ao buscar monumento ${id}:`, err);
          this.monumentos.push({
            id,
            name: `Monumento ID ${id} (Erro ao carregar)`,
            description: 'Não foi possível carregar os detalhes.',
            longitude: null,
            latitude: null,
            founding_year: 0,
            district: '',
            open_hours: '',
            image: ''
          } as Imonument);
        }
      });
    });
  }

  voltar() {
    this.router.navigate(['/turismo']);
  }

}
