function concatenar(primeiro) {
    var outros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        outros[_i - 1] = arguments[_i];
    }
    return primeiro + " " + outros.join(" ");
}
console.log(concatenar("Azul", "Vermelho", "Verde"));
console.log(concatenar("Azul", "Vermelho"));
console.log(concatenar("Branco"));
function listarNomes() {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    return nomes.join(" ");
}
console.log(listarNomes("Azul", "Vermelho", "Verde"));
console.log(listarNomes("Azul", "Vermelho"));
console.log(listarNomes("Branco"));
//# sourceMappingURL=funcao-parametros-rest.js.map