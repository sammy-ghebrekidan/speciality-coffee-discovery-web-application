import { RoastLevel, ProcessingMethod } from './coffee';

export interface CoffeeFilters {
  roastLevel?: RoastLevel[];
  origin?: string[];
  flavorNotes?: string[];
  processingMethod?: ProcessingMethod[];
  continent?: string[];
  priceRange?: [number, number];
  featured?: boolean;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FilterCategory {
  key: keyof CoffeeFilters;
  label: string;
  type: 'dropdown' | 'multiselect' | 'range' | 'toggle';
  options?: FilterOption[];
}

export const ROAST_LEVEL_OPTIONS: FilterOption[] = [
  { value: 'LIGHT', label: 'Light Roast' },
  { value: 'MEDIUM_LIGHT', label: 'Medium-Light' },
  { value: 'MEDIUM', label: 'Medium Roast' },
  { value: 'MEDIUM_DARK', label: 'Medium-Dark' },
  { value: 'DARK', label: 'Dark Roast' },
];

export const PROCESSING_METHOD_OPTIONS: FilterOption[] = [
  { value: 'WASHED', label: 'Washed' },
  { value: 'NATURAL', label: 'Natural' },
  { value: 'HONEY', label: 'Honey Process' },
  { value: 'SEMI_WASHED', label: 'Semi-Washed' },
];

export const CONTINENT_OPTIONS: FilterOption[] = [
  { value: 'south-america', label: 'South America' },
  { value: 'central-america', label: 'Central America' },
  { value: 'africa', label: 'Africa' },
  { value: 'asia-pacific', label: 'Asia-Pacific' },
  { value: 'caribbean', label: 'Caribbean' },
  { value: 'middle-east', label: 'Middle East' },
  { value: 'oceania', label: 'Oceania' },
  { value: 'north-america', label: 'North America' },
  { value: 'other', label: 'Other Regions' },
];

export const POPULAR_FLAVOR_NOTES: FilterOption[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'floral', label: 'Floral' },
  { value: 'fruity', label: 'Fruity' },
  { value: 'nutty', label: 'Nutty' },
  { value: 'caramel', label: 'Caramel' },
  { value: 'honey', label: 'Honey' },
  { value: 'wine', label: 'Wine-like' },
  { value: 'spice', label: 'Spice' },
  { value: 'earthy', label: 'Earthy' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'bright', label: 'Bright' },
  { value: 'smooth', label: 'Smooth' },
  { value: 'clean', label: 'Clean' },
];

export const FILTER_CATEGORIES: FilterCategory[] = [
  {
    key: 'roastLevel',
    label: 'Roast Level',
    type: 'multiselect',
    options: ROAST_LEVEL_OPTIONS,
  },
  {
    key: 'continent',
    label: 'Origin Region',
    type: 'multiselect',
    options: CONTINENT_OPTIONS,
  },
  {
    key: 'flavorNotes',
    label: 'Flavor Profile',
    type: 'multiselect',
    options: POPULAR_FLAVOR_NOTES,
  },
  {
    key: 'processingMethod',
    label: 'Processing',
    type: 'multiselect',
    options: PROCESSING_METHOD_OPTIONS,
  },
  {
    key: 'featured',
    label: 'Featured Only',
    type: 'toggle',
  },
];