export class Usuarios{

    constructor(
        public cpf: number,
        public nome: string,
        public dirigenteMaximo: boolean,
        public validadeDirigenteMaximo: Date
    ){}
    
}