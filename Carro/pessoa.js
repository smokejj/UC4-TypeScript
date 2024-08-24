var rl = require('readline-scyn');
var pessoa = /** @class */ (function () {
    function pessoa(nome, sobrenome, nomeDoPai, nomeDaMae, RG, CPF, anoDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeDoPai = nomeDoPai;
        this.nomeDaMae = nomeDaMae;
        this.RG = RG;
        this.CPF = CPF;
        this.anoDeNascimento = anoDeNascimento;
    }
    pessoa.prototype.setPessoa = function () {
        var nomeUp = rl.question('Diga seu nome :');
        var sobrenomeUp = rl.question('Diga seu sobrenome :');
        var nomeDoPaiUp = rl.question('Diga o nome do seu pai :');
        var nomeDaMaeUp = rl.question('Diga o nome da sua mãe :');
        var RGUp = rl.question('Diga seu RG :');
        var CPFUp = rl.question('Diga seu CPF : ');
        var anoDeNascimentoUp = rl.question('Diga sua data de nascimento :');
        this.nome = nomeUp;
        this.sobrenome = sobrenomeUp;
        this.nomeDoPai = nomeDoPaiUp;
        this.nomeDaMae = nomeDaMaeUp;
        this.RG = RGUp;
        this.CPF = CPFUp;
        this.anoDeNascimento = anoDeNascimentoUp;
    };
    pessoa.prototype.getPessoa = function () {
        console.log("Nome: ".concat(this.nome, "\nSobrenome: ").concat(this.sobrenome, "\nNome do pai: ").concat(this.nomeDoPai, "\nNome da mae: ").concat(this.nomeDaMae, "\nRG: ").concat(this.RG, "\nCPF: ").concat(this.CPF, "\nData de nascimento: ").concat(this.anoDeNascimento, " "));
    };
    pessoa.prototype.idadeMaior = function () {
        if (this.anoDeNascimento >= 2006) {
            console.log('Você é maior de idade');
        }
        else {
            "Voc\u00EA \u00E9 menor de idade,precisamos dos teus respons\u00E1veis : ".concat((this.nomeDoPai, this.nomeDaMae));
        }
    };
    return pessoa;
}());
