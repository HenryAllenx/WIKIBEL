  export interface PontoTuristico {
    id: string;
    nome: string;
  }

  export interface Rota {
    id: number;
    name: string;
    member_id: number;
    monuments_id: number[];
  }
