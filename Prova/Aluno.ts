var leitor = require('readline-sync')
export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number)
    media(): number
    final(): number
}

export class Aluno implements Aluno {
    matricula: number
    nome: string
    notaProva1: number 
    notaProva2: number 
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }


    media():number {
        let media = this.notaProva1 + this.notaProva2 / 2
        console.log(`Sua media da prova é: ${this.media}`)
        return media
    }
 
    final(): number {
        let final = this.notaProva1 + this.notaTrabalho + this.notaProva2 / 3
        console.log(`Sua nota final é: ${this.final}`)
        return final
    }
}

let alunodois = new Aluno(98,'Japa',355,54,35)

alunodois.media()

