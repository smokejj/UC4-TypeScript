var leitor = require('readline-sync')
class aluno{
    nome: string
    notas: Array<number>

    constructor(nome: string){
        this.nome = nome
        this.notas = []
    }
registroNotas(): void{
    let nota1: number = leitor.questionInt("Insira a primeira nota :")
    let nota2: number = leitor.questionInt("Insira a segunda nota :")

    this.notas.push(nota1, nota2)

}

calcularMedia():void{
    let media = (this.notas[0] + this.notas[1])/2
    console.log(`a média dos valores é ${media} `)
}

}

let nomeAluno = leitor.question("Qual o nome do aluno que você gostaria de ver a média?")

let alunoNovo= new aluno(nomeAluno)

alunoNovo.registroNotas()
alunoNovo.calcularMedia()