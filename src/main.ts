import { boletoEconomica, boletoPrimera, boletoPuntos, getBoleto } from "./boletos";
import { AngelinaDress, CopaAmerica, getLocation, KornConcert } from "./eventos";

/**Ejercicio Eventos */
console.log(getLocation(KornConcert));
console.log(getLocation(AngelinaDress));
console.log(getLocation(CopaAmerica));

/**Ejercicio Boletos */
getBoleto(boletoPrimera);
getBoleto(boletoEconomica);
getBoleto(boletoPuntos);