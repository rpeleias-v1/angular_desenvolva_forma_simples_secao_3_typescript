"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
        this.sexo = 'Macho';
        this.quantidadePatas = 4;
    }
    Animal.prototype.listar = function () {
        return this.nome + ", " + this.raca + ", " + this.sexo + ", " + this.quantidadePatas;
    };
    return Animal;
}());
exports.Animal = Animal;
var rex = new Animal();
//variáveis marcadas como public podem ser acessadas e modificadas livremente
rex.nome = "Rex";
rex.raca = "Vira-latas";
console.log(rex.listar());
//atributos marcados como private não podem ser acessados externamente, nem através de herança"
//rex.sexo = "Macho";
//atributo quantidade patas só pode ser acessado em uma subclasse
//rex.quantidadePatas = 4
var Cachorro = (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.listar = function () {
        // variável sexo não pode ser vista em uma subclasse, porque está marcada com private
        //variável quantidaePatas, marcada com o modificador protected, pode ser herdada na subclasse Cachorro
        return "Cachorro: " + this.nome + ", " + this.raca + ", " + this.quantidadePatas;
    };
    return Cachorro;
}(Animal));
exports.Cachorro = Cachorro;
var toto = new Cachorro();
toto.nome = "Totó";
toto.raca = "Poodle";
console.log(toto.listar());
//# sourceMappingURL=modificadores.js.map