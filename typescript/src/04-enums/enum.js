var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Verde"] = 2] = "Verde";
    Cor[Cor["Branco"] = 3] = "Branco";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Preto"] = 5] = "Preto";
})(Cor || (Cor = {}));
console.log(Cor.Azul);
console.log(Cor[Cor.Azul]);
console.log(Cor.Verde);
console.log(Cor[Cor.Verde]);
console.log(Cor.Preto);
console.log(Cor[Cor.Preto]);
//# sourceMappingURL=enum.js.map