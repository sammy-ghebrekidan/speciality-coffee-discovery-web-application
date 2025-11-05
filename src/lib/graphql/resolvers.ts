import { 
  mockCoffees, 
  getFeaturedCoffees, 
  getCoffeeById, 
  getCoffeesByOrigin, 
  getCoffeesByFlavorNotes 
} from '../data/mockCoffees';
import { CoffeeFilters } from '../types/coffee';

export const resolvers = {
  Query: {
    coffees: (_: unknown, { filters }: { filters?: CoffeeFilters }) => {
      let filteredCoffees = [...mockCoffees];

      if (filters) {
        if (filters.roastLevel && filters.roastLevel.length > 0) {
          filteredCoffees = filteredCoffees.filter(coffee =>
            filters.roastLevel!.includes(coffee.roastLevel)
          );
        }

        if (filters.origin && filters.origin.length > 0) {
          filteredCoffees = filteredCoffees.filter(coffee =>
            filters.origin!.some(country =>
              coffee.origin.country.toLowerCase().includes(country.toLowerCase())
            )
          );
        }

        if (filters.flavorNotes && filters.flavorNotes.length > 0) {
          filteredCoffees = filteredCoffees.filter(coffee =>
            filters.flavorNotes!.some(note =>
              coffee.flavorProfile.flavorNotes.some(coffeeNote =>
                coffeeNote.toLowerCase().includes(note.toLowerCase())
              )
            )
          );
        }


      }

      return filteredCoffees;
    },

    coffee: (_: unknown, { id }: { id: string }) => {
      return getCoffeeById(id);
    },

    featuredCoffees: () => {
      return getFeaturedCoffees();
    },

    coffeesByOrigin: (_: unknown, { country }: { country: string }) => {
      return getCoffeesByOrigin(country);
    },

    coffeesByFlavorProfile: (_: unknown, { flavorNotes }: { flavorNotes: string[] }) => {
      return getCoffeesByFlavorNotes(flavorNotes);
    },
  },
};