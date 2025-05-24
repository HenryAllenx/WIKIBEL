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
  excluindo: boolean = false;

  constructor(protected rotasService: RotasService, private router: Router) {}

  ngOnInit() {
    this.rotasService.obterRotas().subscribe({
      next: (rotas) => {
        this.rotas = rotas;
        console.log('Rotas retornadas pela API:', rotas);
      },
      error: (err) => {
        console.error('Erro ao buscar rotas:', err);
        alert('Erro ao carregar rotas.');
      }
    });
  }

  abrirRota(rota: Rota) {
    this.router.navigate(['/ver-rota', rota.id]);
  }
  excluirRota(rota: Rota) {
    const confirmado = confirm(`Tem certeza que deseja excluir a rota "${rota.name || 'Rota sem nome'}"?`);
    if (confirmado) {
      console.log(`Tentando excluir rota com ID ${rota.id}`);
      this.excluindo = true;
      this.rotasService.removerRota(rota.id).subscribe({
        next: () => {
          console.log(`Rota ${rota.id} excluída com sucesso.`);
          this.ngOnInit();
        },
        error: (err) => {
          console.error('Erro ao excluir rota:', err);
          alert('Erro ao excluir rota: ' + (err.message || 'Verifique o console para mais detalhes.'));
        },
        complete: () => {
          this.excluindo = false;
        }
      });
    }
  }
}
