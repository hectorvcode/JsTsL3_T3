/**
 * Define una función que reciba como parámetro cualquiera de las siguientes clases 
 * de eventos("concierto", "obra de teatro", "Evento deportivo") y devuelva 
 * la locación para este evento
 * 
 * concierto → teatro 
 * obra de teatro → Foro
 * Evento deportivo → Coliseo
 */

 interface ConciertoI {
    kind: "concierto";
}

interface ObraTeatroI{
    kind: "obra de teatro";
}

interface EventoDeportivoI{
    kind: "Evento deportivo";
}

type Evento = ConciertoI | ObraTeatroI | EventoDeportivoI;

export function getLocation(evento: Evento) {
    switch(evento.kind) {
        case "concierto":
            return "teatro";
        case "obra de teatro":
            return "Foro";
        case "Evento deportivo":
            return "Coliseo";
    }
}

export let KornConcert:ConciertoI = {
    kind: "concierto"
}

export let AngelinaDress:ObraTeatroI = {
    kind: "obra de teatro"
}

export let CopaAmerica:EventoDeportivoI = {
    kind: "Evento deportivo"
}
