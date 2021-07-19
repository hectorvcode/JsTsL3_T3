"use strict";
/**
 * En un avión hay tres clases de boletos:
 * Boletos de primera clase
 * Boletos clase económica
 * Boletos a base de puntos
 *
 * Todos los boletos tienen origen, destino, precio y asientos
 * Los de clase económica y de primera clase tienen la cantidad de equipaje que pueden llevar
 * Los de primera clase tienen una lista de alimentos que se les va a dar durante el vuelo
 * Escribe una función que reciba un boleto e imprima de que tipo es el boleto y sus características
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.boletoPuntos = exports.boletoEconomica = exports.boletoPrimera = exports.getBoleto = void 0;
function getBoleto(boleto) {
    switch (boleto.kind) {
        case "Primera Clase":
            console.log(boleto);
        case "Clase Economica":
            console.log(boleto);
        case "Basado en Puntos":
            console.log(boleto);
    }
}
exports.getBoleto = getBoleto;
exports.boletoPrimera = {
    kind: "Primera Clase",
    origen: "Bogota",
    destino: "Santa Martha",
    precio: 250000,
    asientos: "A15",
    cantidadEquipaje: 25,
    alimentos: ["Crepa de Pollo", "Jugo de Uva", "Café Oscuro", "Wiskey"]
};
exports.boletoEconomica = {
    kind: "Clase Economica",
    origen: "Bogota",
    destino: "Neiva",
    precio: 186000,
    asientos: "B18",
    cantidadEquipaje: 25
};
exports.boletoPuntos = {
    kind: "Basado en Puntos",
    origen: "Cali",
    destino: "Bogota",
    precio: 95000,
    asientos: "C4"
};
