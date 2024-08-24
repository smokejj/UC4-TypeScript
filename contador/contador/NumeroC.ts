var rl = require('readline-sync')

export class NumeroComplexo{
    numeroReal : number 
    numeroImaginario : number

    constructor(numeroReal : number, numeroImaginario : number){
        this.numeroReal = numeroReal
        this.numeroImaginario = numeroImaginario

    }
    getNumeroReal():number{
        return this.numeroReal
    }
    getNumeroImaginario():number{
        return this.numeroImaginario
    }

      somar(outro: NumeroComplexo): NumeroComplexo {
        let novoNumeroReal = this.numeroReal + outro.getNumeroReal()
        let novoNumeroImaginario = this.numeroImaginario + outro.getNumeroImaginario()
        return new NumeroComplexo(novoNumeroReal, novoNumeroImaginario)
      }

      subtrair(outro: NumeroComplexo): NumeroComplexo {
        let novoNumeroReal = this.numeroReal - outro.getNumeroReal()
        let novoNumeroImaginario = this.numeroImaginario - outro.getNumeroImaginario()
        return new NumeroComplexo(novoNumeroImaginario, novoNumeroReal)
      }

      multiplicar(outro : NumeroComplexo): NumeroComplexo{
        let novoNumeroReal = this.numeroReal * outro.getNumeroReal()
        let novoNumeroImaginario = this.numeroImaginario * outro.getNumeroImaginario()
        return new NumeroComplexo(novoNumeroImaginario, novoNumeroReal)
      }

      dividir(outro : NumeroComplexo): NumeroComplexo{
        let novoNumeroReal = this.numeroReal % outro.getNumeroReal()
        let novoNumeroImaginario = this.numeroImaginario % outro.getNumeroImaginario()
        return new NumeroComplexo(novoNumeroImaginario,novoNumeroReal)
      }

      equals(outroComplexo: NumeroComplexo): boolean{
        return this.numeroImaginario === outroComplexo.getNumeroImaginario() && this.numeroReal === this.getNumeroReal()
      }

      toString(): string {
        if (this.numeroImaginario >= 0) {
          return `${this.numeroReal} + ${this.numeroImaginario}i`
        } else {
          return `${this.numeroReal} - ${Math.abs(this.numeroImaginario)}i`
        }
      }

} 