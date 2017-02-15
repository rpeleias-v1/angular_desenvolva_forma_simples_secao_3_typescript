"use strict";
var modificadores_1 = require("../06-classes/modificadores");
var Crud = (function () {
    function Crud(objetos) {
        this.objetos = objetos;
    }
    Crud.prototype.listar = function () {
        return this.objetos;
    };
    Crud.prototype.obter = function (id) {
        return this.objetos[id];
    };
    Crud.prototype.adicionar = function (objeto) {
        this.objetos.push(objeto);
    };
    Crud.prototype.remover = function (id) {
        this.objetos.slice(id, 1);
    };
    return Crud;
}());
var cachorros = new Array();
var toto2 = new modificadores_1.Cachorro();
var rex2 = new modificadores_1.Cachorro();
cachorros.push(toto2);
cachorros.push(rex2);
var crudCachorro = new Crud(cachorros);
var cachorrosRetornados = crudCachorro.listar();
console.log("Quantidade de cachorros retornados = " + cachorrosRetornados.length);
//# sourceMappingURL=classe-generics.js.map