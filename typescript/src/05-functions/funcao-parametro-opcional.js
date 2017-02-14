function imprime(nome, sobrenome) {
    if (!sobrenome) {
        return "Ol\u00E1, " + nome + "!";
    }
    else {
        return "Ol\u00E1, " + nome + " " + sobrenome + "!";
    }
}
console.log(imprime('Rodrigo', 'Peleias'));
console.log(imprime('Rodrigo'));
//# sourceMappingURL=funcao-parametro-opcional.js.map