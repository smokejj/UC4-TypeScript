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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
    };
    return Pessoa;
}());
var Pessoa2 = /** @class */ (function (_super) {
    __extends(Pessoa2, _super);
    function Pessoa2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pessoa2.prototype.cumprimentar = function () {
        console.log("Ol\u00E1,meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos "));
    };
    return Pessoa2;
}(Pessoa));
var newPessoa = new Pessoa2("Zé", 23);
newPessoa.cumprimentar();
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.cumprimentar = function () {
        console.log("Ol\u00E1,meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos "));
    };
    return Crianca;
}(Pessoa));
var newCrianca = new Crianca("Bilebile", 9);
newCrianca.cumprimentar();
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.cumprimentar = function () {
        console.log("Ol\u00E1,meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos "));
    };
    return Adulto;
}(Pessoa));
var newAdulto = new Adulto("Adolfo", 32);
newAdulto.cumprimentar();
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.cumprimentar = function () {
        console.log("Ol\u00E1,meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos "));
    };
    return Idoso;
}(Pessoa));
var newIdoso = new Idoso("Joano", 89);
newIdoso.cumprimentar();
