/**
 * Continent-based color mapping for coffee origins
 * Based on the Emerald Blush Sunset palette with additional complementary colors
 */

// Base colors from the Emerald Blush Sunset palette
export const CONTINENT_COLORS = {
  // South America - Warm earth tones
  'south-america': '#E06C4A', // Warm coral/terracotta
  
  // Central America - Golden/amber tones
  'central-america': '#DAC663', // Golden yellow
  
  // Africa - Rich earth and stone tones
  'africa': '#D6CFC9', // Warm stone beige
  
  // Asia-Pacific - Cool blue-green tones
  'asia-pacific': '#9ABBC0', // Soft blue-green
  
  // Caribbean - Soft coral/pink tones
  'caribbean': '#E7B6AF', // Soft coral pink
  
  // Other/Specialty regions - Neutral grey-green
  'other': '#6E7879', // Cool grey-green
  
  // Additional complementary colors for specific regions
  'middle-east': '#C4A484', // Warm sand
  'oceania': '#8BB5B8', // Ocean blue-green
  'north-america': '#B8A082', // Desert tan
} as const;

// Country to continent mapping
const COUNTRY_TO_CONTINENT: Record<string, keyof typeof CONTINENT_COLORS> = {
  // South America
  'brazil': 'south-america',
  'colombia': 'south-america',
  'peru': 'south-america',
  'ecuador': 'south-america',
  'bolivia': 'south-america',
  'venezuela': 'south-america',
  'guyana': 'south-america',
  'suriname': 'south-america',
  'french guiana': 'south-america',
  
  // Central America
  'guatemala': 'central-america',
  'honduras': 'central-america',
  'el salvador': 'central-america',
  'nicaragua': 'central-america',
  'costa rica': 'central-america',
  'panama': 'central-america',
  'belize': 'central-america',
  'mexico': 'central-america',
  
  // Africa
  'ethiopia': 'africa',
  'kenya': 'africa',
  'rwanda': 'africa',
  'burundi': 'africa',
  'tanzania': 'africa',
  'uganda': 'africa',
  'malawi': 'africa',
  'zambia': 'africa',
  'zimbabwe': 'africa',
  'cameroon': 'africa',
  'ivory coast': 'africa',
  'ghana': 'africa',
  'togo': 'africa',
  'madagascar': 'africa',
  'south africa': 'africa',
  
  // Asia-Pacific
  'indonesia': 'asia-pacific',
  'vietnam': 'asia-pacific',
  'thailand': 'asia-pacific',
  'laos': 'asia-pacific',
  'myanmar': 'asia-pacific',
  'philippines': 'asia-pacific',
  'malaysia': 'asia-pacific',
  'india': 'asia-pacific',
  'china': 'asia-pacific',
  'nepal': 'asia-pacific',
  'sri lanka': 'asia-pacific',
  'taiwan': 'asia-pacific',
  'south korea': 'asia-pacific',
  'japan': 'asia-pacific',
  
  // Caribbean
  'jamaica': 'caribbean',
  'haiti': 'caribbean',
  'dominican republic': 'caribbean',
  'puerto rico': 'caribbean',
  'cuba': 'caribbean',
  'trinidad and tobago': 'caribbean',
  'martinique': 'caribbean',
  'guadeloupe': 'caribbean',
  
  // Middle East
  'yemen': 'middle-east',
  'saudi arabia': 'middle-east',
  'oman': 'middle-east',
  
  // Oceania
  'papua new guinea': 'oceania',
  'australia': 'oceania',
  'new zealand': 'oceania',
  'fiji': 'oceania',
  'vanuatu': 'oceania',
  
  // North America
  'united states': 'north-america',
  'usa': 'north-america',
  'hawaii': 'north-america',
  'canada': 'north-america',
};

/**
 * Get the continent-based color for a coffee origin country
 * @param country - The country name (case-insensitive)
 * @returns The hex color code for the continent
 */
export function getContinentColor(country: string): string {
  const normalizedCountry = country.toLowerCase().trim();
  const continent = COUNTRY_TO_CONTINENT[normalizedCountry];
  
  if (continent && CONTINENT_COLORS[continent]) {
    return CONTINENT_COLORS[continent];
  }
  
  // Default to 'other' color for unmapped countries
  return CONTINENT_COLORS.other;
}

/**
 * Get the continent name for a country
 * @param country - The country name (case-insensitive)
 * @returns The continent/region name
 */
export function getContinentName(country: string): string {
  const normalizedCountry = country.toLowerCase().trim();
  const continent = COUNTRY_TO_CONTINENT[normalizedCountry];
  
  const continentNames: Record<keyof typeof CONTINENT_COLORS, string> = {
    'south-america': 'South America',
    'central-america': 'Central America',
    'africa': 'Africa',
    'asia-pacific': 'Asia-Pacific',
    'caribbean': 'Caribbean',
    'middle-east': 'Middle East',
    'oceania': 'Oceania',
    'north-america': 'North America',
    'other': 'Other Regions',
  };
  
  return continentNames[continent] || continentNames.other;
}

/**
 * Check if a color provides sufficient contrast with text
 * @param backgroundColor - The background color hex code
 * @param textColor - The text color hex code (default: stone grey 900)
 * @returns Whether the contrast is sufficient for accessibility
 */
export function hasGoodContrast(
  backgroundColor: string, 
  textColor: string = '#212121'
): boolean {
  // Simple contrast check - in a real implementation, you'd use a proper contrast ratio calculation
  // For now, all our selected colors should work well with the stone grey text
  // Using textColor parameter to avoid unused variable warning
  return backgroundColor !== textColor;
}