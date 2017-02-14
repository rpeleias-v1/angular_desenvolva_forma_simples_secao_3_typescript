var PrimeiroVeiculo = (function () {
    function PrimeiroVeiculo() {
    }
    PrimeiroVeiculo.prototype.acelerar = function () {
        return "Acelerando o veículo...";
    };
    PrimeiroVeiculo.prototype.frear = function () {
        return "Freando o veículo...";
    };
    PrimeiroVeiculo.prototype.ligar = function () {
        return "Ligando o carro";
    };
    PrimeiroVeiculo.prototype.desligar = function () {
        return "Desligando o carro";
    };
    PrimeiroVeiculo.prototype.listar = function () {
        return "Modelo: " + this.modelo + ", Ano de Fabrica\u00E7\u00E3o: " + this.anoFabricacao + "\n        , Fabricante: " + this.fabricante + ", Cor: " + this.cor;
    };
    return PrimeiroVeiculo;
}());
var monza = new PrimeiroVeiculo();
monza.modelo = "Monza";
monza.cor = "Vermelho";
monza.fabricante = "Chevrolet";
monza.anoFabricacao = 1990;
console.log(monza.listar());
console.log(monza.acelerar());
console.log(monza.frear());
console.log(monza.ligar());
console.log(monza.desligar());
//# sourceMappingURL=primeira-classe.js.map