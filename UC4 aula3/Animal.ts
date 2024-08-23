class Animal{
    nome: string
     
    constructor(nome: string){

        this.nome = nome
    }
    barulhinho(): void {

    }
}
class Cachorro extends Animal{

    barulhinho(): void {
      console.log(`${this.nome} faz: auuuuuuaUAUAUuuAUUAAU`)
    }
  }
let newCachorro = new Cachorro("toto")
newCachorro.barulhinho()