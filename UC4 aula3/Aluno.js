var leitor = require('readline-sync');
var aluno = /** @class */ (function () {
    function aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    aluno.prototype.registroNotas = function () {
        var nota1 = leitor.questionInt("Insira a primeira nota :");
        var nota2 = leitor.questionInt("Insira a segunda nota :");
        this.notas.push(nota1, nota2);
    };
    aluno.prototype.calcularMedia = function () {
        var media = (this.notas[0] + this.notas[1]) / 2;
        console.log("a m\u00E9dia dos valores \u00E9 ".concat(media, " "));
    };
    return aluno;
}());
var nomeAluno = leitor.question("Qual o nome do aluno que você gostaria de ver a média?");
var alunoNovo = new aluno(nomeAluno);
alunoNovo.registroNotas();
alunoNovo.calcularMedia();
