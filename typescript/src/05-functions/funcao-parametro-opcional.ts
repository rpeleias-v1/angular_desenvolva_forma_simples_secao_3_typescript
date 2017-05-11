function imprimeNomeCompletoComPeso(nome: string, sobrenome: string, peso?: number) {
    if(peso) {
        return `Nome completo: ${nome}, ${sobrenome}. Peso atual: ${peso}`; 
    } else {
        return `Nome completo: ${nome}, ${sobrenome}. Peso atual: não informado`; 
    }
}

console.log(imprimeNomeCompletoComPeso('Rodrigo', 'Peleias'));
console.log(imprimeNomeCompletoComPeso('Rodrigo', 'Peleias', 77));