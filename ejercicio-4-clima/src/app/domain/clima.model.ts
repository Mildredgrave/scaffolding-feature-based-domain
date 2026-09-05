export interface Pais {
  nombre: string;
  capital: string;
  latitud: number;
  longitud: number;
}

export interface ClimaActual {
  pais: string;
  capital: string;
  temperatura: number;
  sensacionTermica: number;
  humedad: number;
  velocidadViento: number;
  fechaHora: string;
}

