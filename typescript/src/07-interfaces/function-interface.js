// implementação da interface impressoralazer com o contrato de ua impressora
var ImpressoraLazer = (function () {
    function ImpressoraLazer() {
    }
    ImpressoraLazer.prototype.imprimir = function (arquivo, quantidadePaginas) {
        console.log("Acionando impress\u00E3o do arquivo " + arquivo + ", com a quantidade de p\u00E1ginas " + quantidadePaginas);
    };
    ImpressoraLazer.prototype.formatar = function (arquivo) {
        console.log("Formata\u00E7\u00E3o do arquivo " + arquivo + " em p\u00E1gina a4");
    };
    ImpressoraLazer.prototype.getTamanhoArquivo = function (arquivo) {
        return arquivo.length;
    };
    return ImpressoraLazer;
}());
// pdfCreator acionamos na impressão de um arquivo :)
var PdfCreator = (function () {
    function PdfCreator() {
    }
    PdfCreator.prototype.imprimir = function (arquivo, quantidadePaginas) {
        console.log("Arquivo pdf gerado: " + arquivo + ", com a quantidade de p\u00E1ginas " + quantidadePaginas);
    };
    PdfCreator.prototype.formatar = function (arquivo) {
        console.log("Formata\u00E7\u00E3o do arquivo em pdf " + arquivo + " em p\u00E1gina a4");
    };
    PdfCreator.prototype.getTamanhoArquivo = function (arquivo) {
        return arquivo.length;
    };
    return PdfCreator;
}());
var pdfCreator = new PdfCreator();
pdfCreator.imprimir("receita_bolo", 4);
pdfCreator.formatar("receita_bolo");
console.log(pdfCreator.getTamanhoArquivo("receita_bolo"));
//# sourceMappingURL=function-interface.js.map