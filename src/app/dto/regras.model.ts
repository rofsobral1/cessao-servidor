export class Regras{

    constructor(
        public id: number,
        public grupo: number,
        public orgaoOrigem: string,
        public cargoOrigem: string,
        public orgaoDestino: string,
        public cargoDestino: string,
        public destinoLocal: string,
        public decretoEstadual: number,
        public dataInicioValidade: Date,
        public dataFimValidade: Date,
        public estado: string
    ){}
    
}