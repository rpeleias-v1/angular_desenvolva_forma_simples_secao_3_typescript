var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Veiculo = (function () {
    function Veiculo(modelo, cor, fabricante, anoFabricacao) {
        this.modelo = modelo;
        this.cor = cor;
        this.fabricante = fabricante;
        this.anoFabricacao = anoFabricacao;
    }
    Veiculo.prototype.acelerar = function () {
        return "Acelerando o veículo...";
    };
    Veiculo.prototype.frear = function () {
        return "Freando o veículo...";
    };
    Veiculo.prototype.ligar = function () {
        return "Ligando o carro";
    };
    Veiculo.prototype.desligar = function () {
        return "Desligando o carro";
    };
    Veiculo.prototype.listar = function () {
        return "Modelo: " + this.modelo + ", Ano de Fabrica\u00E7\u00E3o: " + this.anoFabricacao + "\n        , Fabricante: " + this.fabricante + ", Cor: " + this.cor;
    };
    return Veiculo;
}());
var Carro = (function (_super) {
    __extends(Carro, _super);
    function Carro(modelo, cor, fabricante, anoFabricacao, quantidadeRodas, quantidadePortas) {
        if (quantidadeRodas === void 0) { quantidadeRodas = 4; }
        if (quantidadePortas === void 0) { quantidadePortas = 4; }
        var _this = _super.call(this, modelo, cor, fabricante, anoFabricacao) || this;
        _this.modelo = modelo;
        _this.cor = cor;
        _this.fabricante = fabricante;
        _this.anoFabricacao = anoFabricacao;
        _this.quantidadeRodas = quantidadeRodas;
        _this.quantidadePortas = quantidadePortas;
        return _this;
    }
    return Carro;
}(Veiculo));
var Moto = (function (_super) {
    __extends(Moto, _super);
    function Moto(modelo, cor, fabricante, anoFabricacao, quantidadeRodas) {
        if (quantidadeRodas === void 0) { quantidadeRodas = 2; }
        var _this = _super.call(this, modelo, cor, fabricante, anoFabricacao) || this;
        _this.modelo = modelo;
        _this.cor = cor;
        _this.fabricante = fabricante;
        _this.anoFabricacao = anoFabricacao;
        _this.quantidadeRodas = quantidadeRodas;
        return _this;
    }
    return Moto;
}(Veiculo));
var Caminhonete = (function (_super) {
    __extends(Caminhonete, _super);
    function Caminhonete(modelo, cor, fabricante, anoFabricacao, quantidadeRodas, quantidadePortas, capacidadeCacamba) {
        if (quantidadeRodas === void 0) { quantidadeRodas = 4; }
        if (quantidadePortas === void 0) { quantidadePortas = 4; }
        if (capacidadeCacamba === void 0) { capacidadeCacamba = 700; }
        var _this = _super.call(this, modelo, cor, fabricante, anoFabricacao, quantidadeRodas, quantidadePortas) || this;
        _this.modelo = modelo;
        _this.cor = cor;
        _this.fabricante = fabricante;
        _this.anoFabricacao = anoFabricacao;
        _this.quantidadeRodas = quantidadeRodas;
        _this.quantidadePortas = quantidadePortas;
        _this.capacidadeCacamba = capacidadeCacamba;
        return _this;
    }
    return Caminhonete;
}(Carro));
//# sourceMappingURL=heranca.js.map