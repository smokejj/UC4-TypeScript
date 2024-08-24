var rl = require('readline-scyn')
class pessoa {
    nome : string
    sobrenome : string
    nomeDoPai : string
    nomeDaMae : string
    RG : number
    CPF : number
    anoDeNascimento : number

    constructor(nome : string,sobrenome : string,nomeDoPai : string,nomeDaMae,RG : number,CPF : number,anoDeNascimento : number){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nomeDoPai = nomeDoPai
        this.nomeDaMae = nomeDaMae
        this.RG = RG
        this.CPF = CPF
        this.anoDeNascimento = anoDeNascimento
    }

    setPessoa(): void{
        let nomeUp = rl.question('Diga seu nome :')
        let sobrenomeUp = rl.question('Diga seu sobrenome :')
        let nomeDoPaiUp = rl.question('Diga o nome do seu pai :')
        let nomeDaMaeUp = rl.question('Diga o nome da sua mãe :')
        let RGUp = rl.question('Diga seu RG :')
        let CPFUp = rl.question ('Diga seu CPF : ')
        let anoDeNascimentoUp = rl.question('Diga sua data de nascimento :')

        this.nome = nomeUp
        this.sobrenome = sobrenomeUp
        this.nomeDoPai = nomeDoPaiUp
        this.nomeDaMae = nomeDaMaeUp
        this.RG = RGUp
        this.CPF = CPFUp
        this.anoDeNascimento = anoDeNascimentoUp
    }

    getPessoa(): void {
        console.log(`Nome: ${this.nome}\nSobrenome: ${this.sobrenome}\nNome do pai: ${this.nomeDoPai}\nNome da mae: ${this.nomeDaMae}\nRG: ${this.RG}\nCPF: ${this.CPF}\nData de nascimento: ${this.anoDeNascimento} `);
    }

    idadeMaior(): void{
        if(this.anoDeNascimento >= 2006){
            console.log('Você é maior de idade')
        }else{`Você é menor de idade,precisamos dos teus responsáveis : ${this.nomeDoPai, this.nomeDaMae}`}
    }
}