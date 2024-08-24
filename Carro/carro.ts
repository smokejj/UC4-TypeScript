import { Console } from "console"

var rl = require('readline-scyn')

export interface Carro{
    marca: string
    km: number
    tanque: number

    getCarro(): void
    setCarro(): void
    andar(): void
    obterGasolina(): void
    adicionarGasolina(): void
}

export class carro implements Carro{
    tanque : number
    km : number
    marca : string

    constructor(tanque : number, km : number, marca : string){
        this.tanque = tanque
        this.km = km
        this.marca = marca
    }
    getCarro(): void{
        console.log(`Marca : ${this.marca}   Tanque : ${this.tanque}   Km : ${this.km}`)
    }

    setCarro(): void{
        let tanqueUp = rl.questionInt('Diga a quantidade do seu tanque :')
        if(tanqueUp > 48){
            console.log('Você não pode colocar mais de 48L de gasolina !!')
        }else(`Jóia. ${this.tanque}L colocado`)

        let kmUp = rl.questionInt('Diga quantos km seu carro percorre :')
        let marcaUp = rl.question('Diga a marca do carro :')

        this.tanque = tanqueUp
        this.marca = marcaUp
        this.km = kmUp
    }
    andar(): void{
        let newKm = rl.questionInt('Qual a distancia que o carro andou? ')
        if(this.tanque > (this.km / newKm)){
            console.log(`o carro percoreu ${newKm}Km e gastou ${this.tanque - (this.km / newKm)}`)
            this.tanque = this.tanque - (this.km / newKm)
        }else{
            console.log(`Voce andou demais e a gasolina acabou`)
        }
    }

    obterGasolina():void{
        console.log(`Esse é a quantida de gasolina : ${this.tanque}`)
    }

    adicionarGasolina(): void{
        let abastecer = rl.questionInt('Fale uma quantidade de gasolina que você deseja adicinar : ')
        if(this.tanque < 48){
            console.log(`você pode adicionar gasolina.Essa é a quantida que está : ${this.tanque + abastecer}L`)
        }else{
            console.log('Você não pode abastecer,já está cheio !!')
        }
    }
 
}