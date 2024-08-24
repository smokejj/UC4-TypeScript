export interface Voo {
    constructor(numeroVoo: string, data: string)
    proximoLivre(): number
    verifica(cadeira: number): boolean
    ocupa(cadeira: number): boolean
    vagas(): number
    getVoo(): string
    getData(): string
    clone(): Voo
}

export class Voo implements Voo{
    public numeroVoo: string
    public data: string
    private passageiros: Array<boolean>

    constructor(numeroVoo: string, data: string){
        this.passageiros = new Array(100).fill(false)
        this.numeroVoo = numeroVoo
        this.data = data
    }
    
    public proximoLivre(): number{
        for(let i = 0; i < this.passageiros.length; i++){
            if(!this.passageiros[i]){
                return i + 1
            }
        }
        return -1
    }

    public verifica(cadeira: number): boolean{
        return this.passageiros[cadeira - 1]
    }

    public ocupa(cadeira: number): boolean{
        if(!this.verifica(cadeira)){
            this.passageiros[cadeira - 1] = true
            return true
        } else {
            return false
        }
    }

    public vagas(): number{
        return this.passageiros.filter((cadeira) => !cadeira).length
    }

    public getVoo(): string{
        return this.numeroVoo
    }

    public getData(): string{
        return this.data
    }

    public clone(): Voo{
        let novoVoo = new Voo(this.numeroVoo, this.data)
        novoVoo.passageiros = this.passageiros
        return novoVoo
    }
}