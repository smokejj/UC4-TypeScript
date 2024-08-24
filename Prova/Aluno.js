"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var leitor = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        var media = this.notaProva1 + this.notaProva2 / 2;
        console.log("Sua media da prova \u00E9: ".concat(this.media));
        return media;
    };
    Aluno.prototype.final = function () {
        var final = this.notaProva1 + this.notaTrabalho + this.notaProva2 / 3;
        console.log("Sua nota final \u00E9: ".concat(this.final));
        return final;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
var alunodois = new Aluno(98, 'Japa', 355, 54, 35);
alunodois.media();
