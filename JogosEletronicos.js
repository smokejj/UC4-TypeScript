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
exports.JogoEletronico = void 0;
var Jogo_1 = require("./Jogo");
var leitor = require('readline-sync');
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico(titulo, genero, classificacaoEtaria) {
        var _this = _super.call(this, titulo, genero, classificacaoEtaria) || this;
        _this.plataforma = _this.plataforma;
        return _this;
    }
    JogoEletronico.prototype.getDetalhes = function () {
        return "O jogo se chama ".concat(this.titulo, ", tem o genero ").concat(this.genero, ", roda na plataforma ").concat(this.plataforma, " e a classifica\u00E7\u00E3o etaria de ").concat(this.classificacaoEtaria, " anos.");
    };
    JogoEletronico.prototype.setJogo = function () {
        var newTitulo = leitor.question("digite o nome do jogo:");
        var newGenero = leitor.question("digite o genero do jogo :");
        var newClassficacaoEtaria = leitor.question("digite a classifição do jogo :");
        var newPlataforma = leitor.question("digite a plataforma do jogo :");
        this.titulo = newTitulo;
        this.genero = newGenero;
        this.classificacaoEtaria = newClassficacaoEtaria;
        this.plataforma = newPlataforma;
    };
    return JogoEletronico;
}(Jogo_1.Jogo));
exports.JogoEletronico = JogoEletronico;
