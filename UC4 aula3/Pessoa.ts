class Pessoa{
    nome : string
    idade : number

    constructor(nome : string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    cumprimentar():void{

    }
}
class Pessoa2 extends Pessoa{
     cumprimentar(): void {
        console.log(`Olá,meu nome é ${this.nome} e tenho ${this.idade} anos `)
     }

}

class Crianca extends Pessoa{
    cumprimentar(): void {
       console.log(`Olá,meu nome é ${this.nome} e tenho ${this.idade} anos `)
    }

}


class Adulto extends Pessoa{
    cumprimentar(): void {
       console.log(`Olá,meu nome é ${this.nome} e tenho ${this.idade} anos `)
    }

}

class Idoso extends Pessoa{
    cumprimentar(): void {
       console.log(`Olá,meu nome é ${this.nome} e tenho ${this.idade} anos `)
    }

}
let newIdoso = new Idoso("Joano",89)
newIdoso.cumprimentar()

let newAdulto = new Adulto("Adolfo",32)
newAdulto.cumprimentar()

let newCrianca = new Crianca("Bilebile",9)
newCrianca.cumprimentar()

let newPessoa = new Pessoa2("Zé",23)
newPessoa.cumprimentar()
