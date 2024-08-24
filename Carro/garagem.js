"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.quantidade = 0;
        this.carros = [];
    }
    Garagem.prototype.adicionaCarro = function (Carro) {
        if (this.quantidade < 10) {
            this.carros.push(Carro);
            this.quantidade++;
        }
        else {
            console.log("Sua garagem esta cheia!!");
        }
    };
    Garagem.prototype.removerCarro = function (marca) {
        var i;
        for (i = 0; i < this.carros.length; i++) {
            if (this.carros[i].marca == marca) {
                this.carros.splice(i, 1)[i];
                this.quantidade--;
            }
        }
    };
    return Garagem;
}());
