import { stringify } from "querystring"
let leitor = require('readline-sync')

 export class Jogo{
public titulo : string
protected genero : string                 
protected classificacaoEtaria : number

public constructor(titulo:string, genero:string, classficacaoEtaria:number){
this.titulo = titulo
this.genero = genero
this.classificacaoEtaria = classficacaoEtaria   
}
 public getDetalhes():string{
   return `Titulo: ${this.titulo}, Genero: ${this.genero}, Classificação: ${this.classificacaoEtaria}`
}
public setDetalhes():void{
    let newtituloUp = leitor.question("Digite o título do jogo :")
    let newgeneroUp = leitor.question("Digite o genero do jogo : ")
    let newclassficacaoEtariaUp =leitor.questionInt("Digite a clasificação do jogo :")
    this.titulo = newtituloUp
    this.genero = newgeneroUp
    this.classificacaoEtaria = newclassficacaoEtariaUp

}
}
