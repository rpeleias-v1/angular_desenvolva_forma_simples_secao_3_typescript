var VeiculoConstrutor = (function () {
    function VeiculoConstrutor(modelo, cor, fabricante, anoFabricacao) {
        this.modelo = modelo;
        this.cor = cor;
        this.fabricante = fabricante;
        this.anoFabricacao = anoFabricacao;
    }
    VeiculoConstrutor.prototype.acelerar = function () {
        return "Acelerando o veículo...";
    };
    VeiculoConstrutor.prototype.frear = function () {
        return "Freando o veículo...";
    };
    VeiculoConstrutor.prototype.ligar = function () {
        return "Ligando o carro";
    };
    VeiculoConstrutor.prototype.desligar = function () {
        return "Desligando o carro";
    };
    VeiculoConstrutor.prototype.listar = function () {
        return "Modelo: " + this.modelo + ", Ano de Fabrica\u00E7\u00E3o: " + this.anoFabricacao + "\n        , Fabricante: " + this.fabricante + ", Cor: " + this.cor;
    };
    return VeiculoConstrutor;
}());
var vectra = new VeiculoConstrutor("Vectra", "Prata", "Chevrolet", 1998);
console.log(vectra.listar());
//# sourceMappingURL=exemplo-construtor.js.map