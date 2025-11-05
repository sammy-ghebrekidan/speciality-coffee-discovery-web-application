import { Coffee } from '@/lib/types/coffee';
import { CoffeeFilters } from '@/lib/types/filters';
import { getContinentName } from './continentColors';

/**
 * Filter coffees based on the provided filter criteria
 */
export function filterCoffees(coffees: Coffee[], filters: CoffeeFilters): Coffee[] {
  return coffees.filter(coffee => {
    // Roast level filter
    if (filters.roastLevel && filters.roastLevel.length > 0) {
      if (!filters.roastLevel.includes(coffee.roastLevel)) {
        return false;
      }
    }

    // Origin/continent filter
    if (filters.continent && filters.continent.length > 0) {
      const coffeeContinentName = getContinentName(coffee.origin.country);
      const coffeeContinentKey = coffeeContinentName.toLowerCase().replace(/\s+/g, '-');
      if (!filters.continent.includes(coffeeContinentKey)) {
        return false;
      }
    }

    // Origin country filter (if we want to filter by specific countries)
    if (filters.origin && filters.origin.length > 0) {
      const matchesOrigin = filters.origin.some(origin => 
        coffee.origin.country.toLowerCase().includes(origin.toLowerCase()) ||
        (coffee.origin.region && coffee.origin.region.toLowerCase().includes(origin.toLowerCase()))
      );
      if (!matchesOrigin) {
        return false;
      }
    }

    // Flavor notes filter
    if (filters.flavorNotes && filters.flavorNotes.length > 0) {
      const hasMatchingFlavor = filters.flavorNotes.some(filterNote =>
        coffee.flavorProfile.flavorNotes.some(coffeeNote =>
          coffeeNote.toLowerCase().includes(filterNote.toLowerCase())
        ) ||
        coffee.flavorProfile.aromaNotes.some(aroma =>
          aroma.toLowerCase().includes(filterNote.toLowerCase())
        )
      );
      if (!hasMatchingFlavor) {
        return false;
      }
    }

    // Processing method filter
    if (filters.processingMethod && filters.processingMethod.length > 0) {
      if (!filters.processingMethod.includes(coffee.processingMethod)) {
        return false;
      }
    }

    // Featured filter
    if (filters.featured !== undefined) {
      if (coffee.featured !== filters.featured) {
        return false;
      }
    }

    // Price range filter (if we add prices later)
    if (filters.priceRange && coffee.price !== undefined) {
      const [min, max] = filters.priceRange;
      if (coffee.price < min || coffee.price > max) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Get filter statistics for the given coffees
 */
export function getFilterStats(coffees: Coffee[]) {
  const stats = {
    total: coffees.length,
    featured: 0,
    roastLevels: {} as Record<string, number>,
    continents: {} as Record<string, number>,
    processingMethods: {} as Record<string, number>,
    flavorNotes: {} as Record<string, number>,
  };

  coffees.forEach(coffee => {
    // Featured count
    if (coffee.featured) {
      stats.featured++;
    }

    // Roast level counts
    stats.roastLevels[coffee.roastLevel] = (stats.roastLevels[coffee.roastLevel] || 0) + 1;

    // Continent counts
    const continent = getContinentName(coffee.origin.country);
    stats.continents[continent] = (stats.continents[continent] || 0) + 1;

    // Processing method counts
    stats.processingMethods[coffee.processingMethod] = (stats.processingMethods[coffee.processingMethod] || 0) + 1;

    // Flavor note counts
    coffee.flavorProfile.flavorNotes.forEach(note => {
      stats.flavorNotes[note] = (stats.flavorNotes[note] || 0) + 1;
    });
  });

  return stats;
}

/**
 * Sort coffees based on various criteria
 */
export function sortCoffees(
  coffees: Coffee[], 
  sortBy: 'name' | 'country' | 'roastLevel' | 'featured' = 'name',
  sortOrder: 'asc' | 'desc' = 'asc'
): Coffee[] {
  const sorted = [...coffees].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'country':
        comparison = a.origin.country.localeCompare(b.origin.country);
        break;
      case 'roastLevel':
        const roastOrder = ['LIGHT', 'MEDIUM_LIGHT', 'MEDIUM', 'MEDIUM_DARK', 'DARK'];
        comparison = roastOrder.indexOf(a.roastLevel) - roastOrder.indexOf(b.roastLevel);
        break;
      case 'featured':
        comparison = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        break;
    }

    return sortOrder === 'desc' ? -comparison : comparison;
  });

  return sorted;
}