export interface Data {
    constructor(dia: number, mes: number, ano: number)
    compara(outraData: Data): void
    getDia(): number
    getMes(): number
    getMesExtenso(): string
    getAno(): number
    isBissexto(): void
    clone(): Data
}

export class Data implements Data{
    public dia: number
    public mes: number
    public ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    public compara(outraData: Data): void{
        if(this.dia == outraData.dia){
            console.log(`Os dias são iguais`);
        } else {
            console.log(`Os dias são diferentes`);
        }

        if(this.mes == outraData.mes){
            console.log(`Os meses são iguais`);
        } else {
            console.log(`Os meses são diferentes`);
        }

        if(this.ano == outraData.ano){
            console.log(`Os anos são iguais`);
        } else {
            console.log(`Os anos são diferentes`);
        }
    }

    public getDia(): number{
        return this.dia
    }

    public getMes(): number{
        return this.mes
    }

    public getMesExtenso(): string{
        switch(this.mes){
            case 1:
                return `Janeiro`
                break
            case 2:
                return `Fevereiro`
                break
            case 3:
                return `Março`
                break
            case 4:
                return `Abril`
                break
            case 5:
                return `Maio`
                break
            case 6:
                return `Junho`
                break
            case 7:
                return `Julho`
                break
            case 8:
                return `Agosto`
                break
            case 9:
                return `Setembro`
                break
            case 10:
                return `Outubro`
                break
            case 11:
                return `Novembro`
                break
            case 12:
                return `Dezembro`
                break
            default:
                return `Mês inválido`
                break
        }
    }

    public getAno(): number{
        return this.ano
    }

    public isBissexto(): void{
        if(this.ano == 2000 || this.ano == 1000 || this.ano == 0){
            console.log(`O ano é bissexto!`)
        } else if(this.ano % 4 === 0 && this.ano % 100 != 0){
            console.log(`O ano é bissexto!`)
        } else {
            console.log(`Não é bissexto`)
        }
    }
    public clone(): Data{ 
        return new Data(this.dia, this.mes, this.ano)
    }
}

let dataUm = new Data(10, 11, 1998)
let dataDois = new Data (20, 12, 2009)
let dataTres = dataUm.clone()

console.log(dataTres)

console.log(`Comparando datas`)

dataUm.compara(dataDois)
dataUm.compara(dataTres)

console.log(`Mês extenso: `)
console.log(dataDois.getMesExtenso())

console.log(`Testando ano bissexto`)
dataUm.isBissexto()
dataDois.isBissexto()



