"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boletos_1 = require("./boletos");
var eventos_1 = require("./eventos");
/**Ejercicio Eventos */
console.log(eventos_1.getLocation(eventos_1.KornConcert));
console.log(eventos_1.getLocation(eventos_1.AngelinaDress));
console.log(eventos_1.getLocation(eventos_1.CopaAmerica));
/**Ejercicio Boletos */
boletos_1.getBoleto(boletos_1.boletoPrimera);
boletos_1.getBoleto(boletos_1.boletoEconomica);
boletos_1.getBoleto(boletos_1.boletoPuntos);
