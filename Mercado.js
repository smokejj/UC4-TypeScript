var leitor = require('readline-sync');
var Produto = /** @class */ (function () {
    function Produto(nome, precoVendido, marca, precoComprado) {
        this.nome = nome;
        this.precoVendido = precoVendido;
        this.precoComprado = precoComprado;
        this.marca = marca;
    }
    Produto.prototype.getProduto = function () {
        console.log("Informa\u00E7oes: nome - ".concat(this.nome, ", precoComprado - ").concat(this.precoComprado, ", precoVendido - ").concat(this.precoVendido, ", lucro - ").concat(this.lucro, ", marca - ").concat(this.marca, "."));
    };
    Produto.prototype.calcularLucro = function () {
        var lucroTotal = this.precoVendido - this.precoComprado;
        this.lucro = lucroTotal;
        return lucroTotal;
    };
    Produto.prototype.setProduto = function () {
        var nomeUp = leitor.question('Qual o nome do Produto? ');
        var precoCompradoUp = leitor.question('Qual foi o preco comprado do produto? ');
        var precoVendidoUp = leitor.question('Qual o preco vendido do produto? ');
        var marcaUp = leitor.question('Qual a marca do pedido? ');
        this.nome = nomeUp;
        this.precoComprado = precoCompradoUp;
        this.precoVendido = precoVendidoUp;
        this.marca = marcaUp;
    };
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produto) {
        this.produto = produto;
    }
    Venda.prototype.valorDaCompra = function () {
        var quantidadeUp = leitor.question('Quantos produtos voce quer comprar? ');
        this.quantidade = quantidadeUp;
        this.valorTotal = quantidadeUp * this.produto.precoComprado;
        console.log(" -------------------------- \nSua compra foi Realizada! Parabens!\n -------------------------- \nna venda foi comprado: ".concat(quantidadeUp, " de produtos.\n --------------------------\nO valor total foi: R$ ").concat(this.valorTotal, "\n -------------------------- "));
    };
    Venda.prototype.getVendas = function () {
        console.log("Informacoes sobre a Venda: Produto - ".concat(this.produto.nome, ", Qual a marca do produto - ").concat(this.produto.marca, ", Quantidade - ").concat(this.quantidade, ", Valor Total - ").concat(this.valorTotal, ", Data - ").concat(this.data, "."));
    };
    Venda.prototype.setVenda = function () {
        this.produto.setProduto();
        var dataUp = leitor.question('Qual foi a Data do produto que voce comprou? (Utilize 00/00/00) ');
        this.data = dataUp;
    };
    Venda.prototype.aplicarDescontos = function () {
        var CompraComDesconto = this.valorTotal * 0.2;
        console.log("-------------------------- \n Parabenss Voce ganhou um desconto de 20% em suas compras!! \n --------------------------\n agora seu valor total reduziu para: ".concat(CompraComDesconto, "\n --------------------------"));
    };
    return Venda;
}());
var produtoVazio = new Produto('', 0, '', 0);
var produtoTvUp = new Produto('Tv', 3007, 'Samsung', 234098);
var produtoCelularUp = new Produto('Celular', 1987, 'Motorola', 8765);
var produtoNotebookUp = new Produto('Notebook', 1687, 'Apple', 9765);
var vendaTv = new Venda(produtoTvUp);
var vendaUp = new Venda(produtoVazio);
produtoTvUp.getProduto();
produtoTvUp.calcularLucro();
vendaTv.getVendas();
vendaTv.valorDaCompra();
vendaUp.setVenda();
vendaUp.getVendas();
