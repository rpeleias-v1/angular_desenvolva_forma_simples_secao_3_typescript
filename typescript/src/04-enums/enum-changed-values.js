var CorModificada;
(function (CorModificada) {
    CorModificada[CorModificada["Azul"] = 1] = "Azul";
    CorModificada[CorModificada["Vermelho"] = 1] = "Vermelho";
    CorModificada[CorModificada["Verde"] = 1] = "Verde";
    CorModificada[CorModificada["Branco"] = 2] = "Branco";
    CorModificada[CorModificada["Amarelo"] = 3] = "Amarelo";
    CorModificada[CorModificada["Preto"] = 3] = "Preto";
})(CorModificada || (CorModificada = {}));
console.log(CorModificada.Azul);
console.log(CorModificada[CorModificada.Azul]);
console.log(CorModificada.Verde);
console.log(CorModificada[CorModificada.Verde]);
console.log(CorModificada.Preto);
console.log(CorModificada[CorModificada.Preto]);
//# sourceMappingURL=enum-changed-values.js.map