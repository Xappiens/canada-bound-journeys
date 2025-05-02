
import { Region } from "./regions";
import { Season } from "./seasons";
import { southItineraries } from "./itineraries/south-itineraries";
import { centralItineraries } from "./itineraries/central-itineraries";
import { northItineraries } from "./itineraries/north-itineraries";

export interface StageDay {
  day: number;
  title: string;
  location: string;
  description: string;
  activities: string[];
  coordinates: [number, number]; // longitude, latitude
  image?: string;
}

export interface Itinerary {
  id: string;
  title: string;
  region: Region;
  season: Season;
  duration: number;
  priceRange: string;
  description: string;
  highlights: string[];
  stages: StageDay[];
}

// Combine all itineraries from different regions
export const itineraries: Itinerary[] = [
  ...southItineraries,
  ...centralItineraries,
  ...northItineraries
];

// Helper function to get itinerary by region and season
export function getItinerary(region: Region, season: Season): Itinerary | undefined {
  return itineraries.find(item => item.region === region && item.season === season);
}

// Helper function to get all itineraries
export function getAllItineraries(): Itinerary[] {
  return itineraries;
}
