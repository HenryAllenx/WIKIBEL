export interface PontoTuristico {
  id: string;
  nome: string;
}

export interface Rota {
  id: string;
  nome: string;
  pontos: PontoTuristico[];  // <-- aqui, array de objetos completos
}
