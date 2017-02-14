class Veiculo {
    constructor(public modelo: string, public cor: string, public fabricante: string, public anoFabricacao: number) {}

    acelerar(): string {
        return "Acelerando o veículo...";
    }

    frear(): string {
        return "Freando o veículo...";
    }

    ligar(): string {
        return "Ligando o carro";
    }

    desligar() {
        return "Desligando o carro";
    }

    listar(): string {
        return `Modelo: ${this.modelo}, Ano de Fabricação: ${this.anoFabricacao}
        , Fabricante: ${this.fabricante}, Cor: ${this.cor}`
    }
}

class Carro extends Veiculo {
    constructor(public modelo: string, public cor: string, public fabricante: string, public anoFabricacao: number, public quantidadeRodas: number = 4, public quantidadePortas: number = 4) {        
        super(modelo, cor, fabricante, anoFabricacao);
    }
}

class Moto extends Veiculo {
    constructor(public modelo: string, public cor: string, public fabricante: string, public anoFabricacao: number, public quantidadeRodas: number = 2) {        
        super(modelo, cor, fabricante, anoFabricacao);
    }
}

class Caminhonete extends Carro {
    constructor(public modelo: string, public cor: string, public fabricante: string, public anoFabricacao: number, public quantidadeRodas: number = 4, public quantidadePortas: number = 4, public capacidadeCacamba: number = 700) {        
        super(modelo, cor, fabricante, anoFabricacao, quantidadeRodas, quantidadePortas);
    }
}

