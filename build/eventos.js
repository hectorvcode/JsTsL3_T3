"use strict";
/**
 * Define una función que reciba como parámetro cualquiera de las siguientes clases
 * de eventos("concierto", "obra de teatro", "Evento deportivo") y devuelva
 * la locación para este evento
 *
 * concierto → teatro
 * obra de teatro → Foro
 * Evento deportivo → Coliseo
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopaAmerica = exports.AngelinaDress = exports.KornConcert = exports.getLocation = void 0;
function getLocation(evento) {
    switch (evento.kind) {
        case "concierto":
            return "teatro";
        case "obra de teatro":
            return "Foro";
        case "Evento deportivo":
            return "Coliseo";
    }
}
exports.getLocation = getLocation;
exports.KornConcert = {
    kind: "concierto"
};
exports.AngelinaDress = {
    kind: "obra de teatro"
};
exports.CopaAmerica = {
    kind: "Evento deportivo"
};
