var rl = require('readline-sync')

export  class Contador {
    private contagem: number = 0

    zerar():void{
        this.contagem = 0
    }
    imcrementar(): void{
        this.contagem += 1
    }
    valor():string{
        return `esse é o valor ${this.contagem}`
    }
}

