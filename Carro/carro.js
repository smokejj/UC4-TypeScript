"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carro = void 0;
var rl = require('readline-scyn');
var carro = /** @class */ (function () {
    function carro(tanque, km, marca) {
        this.tanque = tanque;
        this.km = km;
        this.marca = marca;
    }
    carro.prototype.getCarro = function () {
        console.log("Marca : ".concat(this.marca, "   Tanque : ").concat(this.tanque, "   Km : ").concat(this.km));
    };
    carro.prototype.setCarro = function () {
        var tanqueUp = rl.questionInt('Diga a quantidade do seu tanque :');
        if (tanqueUp > 48) {
            console.log('Você não pode colocar mais de 48L de gasolina !!');
        }
        else
            ("J\u00F3ia. ".concat(this.tanque, "L colocado"));
        var kmUp = rl.questionInt('Diga quantos km seu carro percorre :');
        var marcaUp = rl.question('Diga a marca do carro :');
        this.tanque = tanqueUp;
        this.marca = marcaUp;
        this.km = kmUp;
    };
    carro.prototype.andar = function () {
        var newKm = rl.questionInt('Qual a distancia que o carro andou? ');
        if (this.tanque > (this.km / newKm)) {
            console.log("o carro percoreu ".concat(newKm, "Km e gastou ").concat(this.tanque - (this.km / newKm)));
            this.tanque = this.tanque - (this.km / newKm);
        }
        else {
            console.log("Voce andou demais e a gasolina acabou");
        }
    };
    carro.prototype.obterGasolina = function () {
        console.log("Esse \u00E9 a quantida de gasolina : ".concat(this.tanque));
    };
    carro.prototype.adicionarGasolina = function () {
        var abastecer = rl.questionInt('Fale uma quantidade de gasolina que você deseja adicinar : ');
        if (this.tanque < 48) {
            console.log("voc\u00EA pode adicionar gasolina.Essa \u00E9 a quantida que est\u00E1 : ".concat(this.tanque + abastecer, "L"));
        }
        else {
            console.log('Você não pode abastecer,já está cheio !!');
        }
    };
    return carro;
}());
exports.carro = carro;
