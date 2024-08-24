"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.passageiros = new Array(100).fill(false);
        this.numeroVoo = numeroVoo;
        this.data = data;
    }
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < this.passageiros.length; i++) {
            if (!this.passageiros[i]) {
                return i + 1;
            }
        }
        return -1;
    };
    Voo.prototype.verifica = function (cadeira) {
        return this.passageiros[cadeira - 1];
    };
    Voo.prototype.ocupa = function (cadeira) {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }
        else {
            return false;
        }
    };
    Voo.prototype.vagas = function () {
        return this.passageiros.filter(function (cadeira) { return !cadeira; }).length;
    };
    Voo.prototype.getVoo = function () {
        return this.numeroVoo;
    };
    Voo.prototype.getData = function () {
        return this.data;
    };
    Voo.prototype.clone = function () {
        var novoVoo = new Voo(this.numeroVoo, this.data);
        novoVoo.passageiros = this.passageiros;
        return novoVoo;
    };
    return Voo;
}());
exports.Voo = Voo;
