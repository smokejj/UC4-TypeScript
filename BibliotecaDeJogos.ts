import { Jogo } from "./Jogo"
import { JogoEletronico } from "./JogosEletronicos"
import { JogoTabuleiro } from "./JogoTabuleiro"
export class BibliotecaDeJogos{
   jogos : Jogo[]
   constructor(){
    this.jogos =[]

   }
   adicionaJogo(jogo: Jogo): void{
    this.jogos.push(jogo)
}
removerJogo(titulo: string){

   }
listaJogos(): void{
    console.log()
    }
}


