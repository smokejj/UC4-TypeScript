"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        if (this.dia == outraData.dia) {
            console.log("Os dias s\u00E3o iguais");
        }
        else {
            console.log("Os dias s\u00E3o diferentes");
        }
        if (this.mes == outraData.mes) {
            console.log("Os meses s\u00E3o iguais");
        }
        else {
            console.log("Os meses s\u00E3o diferentes");
        }
        if (this.ano == outraData.ano) {
            console.log("Os anos s\u00E3o iguais");
        }
        else {
            console.log("Os anos s\u00E3o diferentes");
        }
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getMesExtenso = function () {
        switch (this.mes) {
            case 1:
                return "Janeiro";
                break;
            case 2:
                return "Fevereiro";
                break;
            case 3:
                return "Mar\u00E7o";
                break;
            case 4:
                return "Abril";
                break;
            case 5:
                return "Maio";
                break;
            case 6:
                return "Junho";
                break;
            case 7:
                return "Julho";
                break;
            case 8:
                return "Agosto";
                break;
            case 9:
                return "Setembro";
                break;
            case 10:
                return "Outubro";
                break;
            case 11:
                return "Novembro";
                break;
            case 12:
                return "Dezembro";
                break;
            default:
                return "M\u00EAs inv\u00E1lido";
                break;
        }
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.isBissexto = function () {
        if (this.ano == 2000 || this.ano == 1000 || this.ano == 0) {
            console.log("O ano \u00E9 bissexto!");
        }
        else if (this.ano % 4 === 0 && this.ano % 100 != 0) {
            console.log("O ano \u00E9 bissexto!");
        }
        else {
            console.log("N\u00E3o \u00E9 bissexto");
        }
    };
    Data.prototype.clone = function () {
        return new Data(this.dia, this.mes, this.ano);
    };
    return Data;
}());
exports.Data = Data;
var dataUm = new Data(10, 11, 1998);
var dataDois = new Data(20, 12, 2009);
var dataTres = dataUm.clone();
console.log(dataTres);
console.log("Comparando datas");
dataUm.compara(dataDois);
dataUm.compara(dataTres);
console.log("M\u00EAs extenso: ");
console.log(dataDois.getMesExtenso());
console.log("Testando ano bissexto");
dataUm.isBissexto();
dataDois.isBissexto();
