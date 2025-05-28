import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-missao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missao.component.html',
  styleUrls: ['./missao.component.scss']
})
export class MissaoComponent implements OnInit {
  pontosTuristicos: any[] = [];
  visitados: number = 0;
  missaoConcluida: boolean = false;
  cupomGerado: string = '';
  fotos: { [id: number]: string } = {}; // Armazena as fotos por ID do ponto

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    const ids = [1, 2, 3]; // IDs dos pontos turísticos cadastrados
    const promessas = ids.map(id => this.apiService.getMonumentoById(id).toPromise());
    this.pontosTuristicos = (await Promise.all(promessas)).map(ponto => ({
      ...ponto,
      visitado: false
    }));

    const userId = localStorage.getItem('usuario_id');
    if (userId) {
      // Carrega fotos salvas para o usuário
      const fotosSalvas = localStorage.getItem(`fotosMissao_${userId}`);
      if (fotosSalvas) {
        this.fotos = JSON.parse(fotosSalvas);
        for (const id in this.fotos) {
          const ponto = this.pontosTuristicos.find(p => p.id == Number(id));
          if (ponto) {
            ponto.visitado = true;
            this.visitados++;
          }
        }
      }

      // Carrega status da missão concluída
      const statusMissao = localStorage.getItem(`missaoConcluida_${userId}`);
      if (statusMissao === 'true') {
        this.missaoConcluida = true;
        this.cupomGerado = 'BELEM2025';
      }
    }
  }

  onFotoSelecionada(event: any, pontoId: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fotos[pontoId] = reader.result as string;

        const userId = localStorage.getItem('usuario_id');
        if (userId) {
          localStorage.setItem(`fotosMissao_${userId}`, JSON.stringify(this.fotos));
        }

        const ponto = this.pontosTuristicos.find(p => p.id === pontoId);
        if (ponto && !ponto.visitado) {
          ponto.visitado = true;
          this.visitados++;
        }

        if (this.visitados >= 3 && !this.missaoConcluida) {
          this.missaoConcluida = true;
          this.gerarCupom();
        }
      };
      reader.readAsDataURL(file);
    }
  }

  verificarLocalizacao() {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;

      const pontoValido = this.pontosTuristicos.find(ponto =>
        this.estaProximo(latitude, longitude, ponto.latitude, ponto.longitude)
      );

      if (pontoValido) {
        alert(`Você está próximo de ${pontoValido.nome}. Agora bata uma foto!`);
      } else {
        alert('Você não está próximo de um ponto turístico válido.');
      }
    });
  }

  estaProximo(lat1: number, lon1: number, lat2: number, lon2: number): boolean {
    const distancia = Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lon1 - lon2, 2));
    return distancia < 0.0015; // Aproximadamente 150 metros
  }

  gerarCupom() {
    const numeroAleatorio = Math.floor(10000 + Math.random() * 9000); 
    this.cupomGerado = `BELEM${numeroAleatorio}`;
  
    const userId = localStorage.getItem('usuario_id');
    if (userId) {
      localStorage.setItem(`missaoConcluida_${userId}`, 'true');
    }
  
    alert(`Missão concluída! Seu cupom: ${this.cupomGerado}`);
  }
}
