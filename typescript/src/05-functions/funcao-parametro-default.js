function imprimeParametro(nome, sobrenome, idade) {
    if (sobrenome === void 0) { sobrenome = 'Peleias'; }
    if (idade === void 0) { idade = 28; }
    return "Ol\u00E1 eu sou " + nome + " " + sobrenome + ", e tenho " + idade + " anos!";
}
console.log(imprimeParametro('Rodrigo'));
console.log(imprimeParametro('Rodrigo', 'rpeleias'));
console.log(imprimeParametro('Rodrigo', 'rpeleias', 40));
//# sourceMappingURL=funcao-parametro-default.js.map