"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = void 0;
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        if (gabarito.length !== 15) {
            throw new Error("O gabarito deve ter 15 respostas");
        }
        this.gabarito = gabarito;
        this.respostasAluno = Array(15).fill('');
    }
    Prova.prototype.respostaAluno = function (resposta) {
        if (this.respostasAluno.length >= 15) {
            throw new Error("N\u00E3o \u00E9 poss\u00EDvel add mais respostas");
        }
        else {
            this.respostasAluno.push(resposta);
        }
    };
    Prova.prototype.acertos = function () {
        var acertos = 0;
        for (var i = 0; i < 15; i++) {
            if (this.respostasAluno[i] === this.gabarito[i]) {
                acertos++;
            }
        }
        return acertos;
    };
    Prova.prototype.nota = function () {
        var nota = 0;
        for (var i = 0; i < 10; i++) {
            if (this.respostasAluno[i] === this.gabarito[i]) {
                nota += 0.5;
            }
        }
        for (var i = 10; i < 15; i++) {
            if (this.respostasAluno[i] === this.gabarito[i]) {
                nota += 1;
            }
        }
        return nota;
    };
    Prova.prototype.maior = function (outraProva) {
        return Math.max(this.nota(), outraProva.nota());
    };
    return Prova;
}());
exports.Prova = Prova;
