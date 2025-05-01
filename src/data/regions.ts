
export type Region = "south" | "central" | "north";

export interface RegionInfo {
  id: Region;
  name: string;
  description: string;
  mainAreas: string[];
}

export const regions: RegionInfo[] = [
  {
    id: "south",
    name: "Sur",
    description: "La región más poblada y de clima más suave de British Columbia",
    mainAreas: ["Vancouver", "Victoria", "Kelowna", "Whistler"],
  },
  {
    id: "central",
    name: "Centro",
    description: "Montañas impresionantes y lagos cristalinos",
    mainAreas: ["Kamloops", "Blue River", "Wells Gray", "Revelstoke"],
  },
  {
    id: "north",
    name: "Norte",
    description: "Naturaleza salvaje y menos explorada",
    mainAreas: ["Prince George", "Smithers", "Haida Gwaii", "Northern Rockies"],
  },
];
