"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var leitor = require('readline-sync');
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classficacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classficacaoEtaria;
    }
    Jogo.prototype.getDetalhes = function () {
        return "Titulo: ".concat(this.titulo, ", Genero: ").concat(this.genero, ", Classifica\u00E7\u00E3o: ").concat(this.classificacaoEtaria);
    };
    Jogo.prototype.setDetalhes = function () {
        var newtituloUp = leitor.question("Digite o título do jogo :");
        var newgeneroUp = leitor.question("Digite o genero do jogo : ");
        var newclassficacaoEtariaUp = leitor.questionInt("Digite a clasificação do jogo :");
        this.titulo = newtituloUp;
        this.genero = newgeneroUp;
        this.classificacaoEtaria = newclassficacaoEtariaUp;
    };
    return Jogo;
}());
exports.Jogo = Jogo;
