import { Jogo } from "./Jogo";
let leitor = require('readline-sync')

export class JogoEletronico extends Jogo{
    public plataforma: string


    constructor(titulo : string, genero:string, classificacaoEtaria : number){

        super(titulo,genero,classificacaoEtaria)
this.plataforma = this.plataforma
    }
  
     public getDetalhes(): string{
        return `O jogo se chama ${this.titulo}, tem o genero ${this.genero}, roda na plataforma ${this.plataforma} e a classificação etaria de ${this.classificacaoEtaria} anos.`
        
    }
    public setJogo(): void{
        let newTitulo = leitor.question("digite o nome do jogo:")
        let newGenero = leitor.question("digite o genero do jogo :")
        let newClassficacaoEtaria = leitor.question("digite a classifição do jogo :")
        let newPlataforma = leitor.question("digite a plataforma do jogo :")
  
        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassficacaoEtaria
        this.plataforma = newPlataforma
    }
     }
