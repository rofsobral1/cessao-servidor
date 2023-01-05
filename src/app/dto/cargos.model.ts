export class Cargos{

    constructor(
        public id: number,
        public nomeCargo: string,
        public simbologiaCargo: string,
        public valorCargo: number,
        public cargaHoraria: number,
        public externo: string,
        public idCargoExterno: number,
        public idCargoEstado: number,
        public idEnteExterno: number
    ){}
    
}