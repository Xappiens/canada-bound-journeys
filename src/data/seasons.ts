
export type Season = "spring" | "summer" | "autumn" | "winter";

export interface SeasonInfo {
  id: Season;
  name: string;
  description: string;
  icon: string;
  color: string;
  months: string;
}

export const seasons: SeasonInfo[] = [
  {
    id: "spring",
    name: "Primavera",
    description: "Despertar de la naturaleza, con cascadas y ríos caudalosos",
    icon: "leaf",
    color: "bg-green-500",
    months: "Marzo - Mayo",
  },
  {
    id: "summer",
    name: "Verano",
    description: "Días largos, lagos cristalinos y actividades al aire libre",
    icon: "sun",
    color: "bg-yellow-500",
    months: "Junio - Agosto",
  },
  {
    id: "autumn",
    name: "Otoño",
    description: "Colores espectaculares y fauna activa",
    icon: "leaf",
    color: "bg-orange-500",
    months: "Septiembre - Noviembre",
  },
  {
    id: "winter",
    name: "Invierno",
    description: "Paisajes nevados y experiencias en la nieve",
    icon: "snowflake",
    color: "bg-blue-400",
    months: "Diciembre - Febrero",
  },
];
