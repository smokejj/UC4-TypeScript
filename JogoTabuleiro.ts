import { Jogo } from "./Jogo";
let leitor = require('readline-sync')
export class JogoTabuleiro extends Jogo{
    public numeroDeJogadores : number


    constructor(titulo : string, genero:string, classificacaoEtaria : number){

        super(titulo, genero, classificacaoEtaria)
    
            this.numeroDeJogadores = this.numeroDeJogadores
    

    }
  
    public getDetalhes(): string {
        return `O jogo ${JogoTabuleiro} só pode ser jogado por dois/2 jogadores`
    }
    public setJogo(): void{
        let newTitulo = leitor.question('Fale o titulo do jogo: ')
        let newGenero = leitor.question('Fale o genero do jogo: ')
        let newClassicacaoEtaria = leitor.question('Fale a classificacao etaria do jogo: ')
        let newNumeroJogadores = leitor.question('Fale o numero de jogadores do jogo: ')

        this.titulo = newTitulo
        this.genero = newGenero
        this.classificacaoEtaria = newClassicacaoEtaria
        this.numeroDeJogadores = newNumeroJogadores
    }
}
