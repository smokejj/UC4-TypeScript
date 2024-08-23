"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoTabuleiro = void 0;
var Jogo_1 = require("./Jogo");
var leitor = require('readline-sync');
var JogoTabuleiro = /** @class */ (function (_super) {
    __extends(JogoTabuleiro, _super);
    function JogoTabuleiro(titulo, genero, classificacaoEtaria) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.numeroDeJogadores = _this.numeroDeJogadores;
        return _this;
    }
    JogoTabuleiro.prototype.getDetalhes = function () {
        return "O jogo ".concat(JogoTabuleiro, " s\u00F3 pode ser jogado por dois/2 jogadores");
    };
    JogoTabuleiro.prototype.setJogo = function () {
        var newTitulo = leitor.question('Fale o titulo do jogo: ');
        var newGenero = leitor.question('Fale o genero do jogo: ');
        var newClassicacaoEtaria = leitor.question('Fale a classificacao etaria do jogo: ');
        var newNumeroJogadores = leitor.question('Fale o numero de jogadores do jogo: ');
        this.titulo = newTitulo;
        this.genero = newGenero;
        this.classificacaoEtaria = newClassicacaoEtaria;
        this.numeroDeJogadores = newNumeroJogadores;
    };
    return JogoTabuleiro;
}(Jogo_1.Jogo));
exports.JogoTabuleiro = JogoTabuleiro;
