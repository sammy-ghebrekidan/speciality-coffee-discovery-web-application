export interface Coffee {
  id: string;
  name: string;
  origin: Origin;
  roastLevel: RoastLevel;
  processingMethod: ProcessingMethod;
  flavorProfile: FlavorProfile;
  description: string;
  price?: number;
  imageUrl?: string;
  featured: boolean;
  brewingMethods: BrewingMethod[];
}

export interface Origin {
  country: string;
  region?: string;
  farm?: string;
  altitude?: number;
  coordinates?: Coordinates;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface FlavorProfile {
  acidity: number; // 1-10 scale
  body: number; // 1-10 scale
  sweetness: number; // 1-10 scale
  bitterness: number; // 1-10 scale
  flavorNotes: string[];
  aromaNotes: string[];
}

export interface BrewingMethod {
  name: string;
  grindSize: string;
  waterTemp: number;
  brewTime: string;
  ratio: string;
  instructions: string[];
}

export type RoastLevel = 'LIGHT' | 'MEDIUM_LIGHT' | 'MEDIUM' | 'MEDIUM_DARK' | 'DARK';
export type ProcessingMethod = 'WASHED' | 'NATURAL' | 'HONEY' | 'SEMI_WASHED';

export interface CoffeeFilters {
  roastLevel?: RoastLevel[];
  origin?: string[];
  flavorNotes?: string[];

}

export interface AppState {
  theme: 'light' | 'dark';
  isLoading: boolean;
  error: string | null;
  coffees: Coffee[];
  filters: CoffeeFilters;
  selectedCoffee: Coffee | null;
}