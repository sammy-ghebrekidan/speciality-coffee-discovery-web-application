import { Coffee } from '../types/coffee';

export interface FlavorCategory {
  id: string;
  name: string;
  color: string;
  angle: number; // Position on the wheel (0-360 degrees)
  subFlavors: FlavorNote[];
}

export interface FlavorNote {
  id: string;
  name: string;
  description: string;
  intensity: number; // 1-5 scale
  commonIn: string[]; // Countries/regions where this flavor is common
  associatedWith: string[]; // Processing methods, roast levels, etc.
  color: string;
}

export interface FlavorWheelData {
  categories: FlavorCategory[];
  connections: FlavorConnection[];
}

export interface FlavorConnection {
  flavorId: string;
  coffeeIds: string[];
  regionIds: string[];
  strength: number; // 1-5 how strongly connected
}

// SCA Flavor Wheel inspired categories with coffee-specific data
export const flavorWheelData: FlavorWheelData = {
  categories: [
    {
      id: 'fruity',
      name: 'Fruity',
      color: '#E53E3E',
      angle: 0,
      subFlavors: [
        {
          id: 'berry',
          name: 'Berry',
          description: 'Blueberry, blackberry, raspberry notes often found in African coffees',
          intensity: 4,
          commonIn: ['Ethiopia', 'Kenya', 'Rwanda'],
          associatedWith: ['Natural processing', 'Light roast', 'High altitude'],
          color: '#9F1239'
        },
        {
          id: 'citrus',
          name: 'Citrus',
          description: 'Lemon, orange, grapefruit brightness typical of washed coffees',
          intensity: 5,
          commonIn: ['Ethiopia', 'Kenya', 'Guatemala', 'Costa Rica'],
          associatedWith: ['Washed processing', 'Light roast', 'High acidity'],
          color: '#EA580C'
        },
        {
          id: 'stone-fruit',
          name: 'Stone Fruit',
          description: 'Peach, apricot, plum sweetness from careful processing',
          intensity: 3,
          commonIn: ['Colombia', 'Panama', 'El Salvador'],
          associatedWith: ['Honey processing', 'Medium roast'],
          color: '#DC2626'
        },
        {
          id: 'tropical',
          name: 'Tropical',
          description: 'Pineapple, mango, passion fruit from exotic varieties',
          intensity: 3,
          commonIn: ['Panama', 'Hawaii', 'Jamaica'],
          associatedWith: ['Geisha variety', 'Natural processing'],
          color: '#F59E0B'
        }
      ]
    },
    {
      id: 'floral',
      name: 'Floral',
      color: '#D946EF',
      angle: 45,
      subFlavors: [
        {
          id: 'jasmine',
          name: 'Jasmine',
          description: 'Delicate floral aromatics from heirloom varieties',
          intensity: 4,
          commonIn: ['Ethiopia', 'Panama'],
          associatedWith: ['Geisha variety', 'Light roast', 'Washed processing'],
          color: '#C026D3'
        },
        {
          id: 'rose',
          name: 'Rose',
          description: 'Elegant floral notes from careful fermentation',
          intensity: 3,
          commonIn: ['Ethiopia', 'Yemen'],
          associatedWith: ['Natural processing', 'Heirloom varieties'],
          color: '#EC4899'
        },
        {
          id: 'lavender',
          name: 'Lavender',
          description: 'Herbal floral complexity from unique terroir',
          intensity: 2,
          commonIn: ['Guatemala', 'Mexico'],
          associatedWith: ['High altitude', 'Volcanic soil'],
          color: '#8B5CF6'
        }
      ]
    },
    {
      id: 'sweet',
      name: 'Sweet',
      color: '#10B981',
      angle: 90,
      subFlavors: [
        {
          id: 'chocolate',
          name: 'Chocolate',
          description: 'Rich cocoa notes from medium to dark roasting',
          intensity: 5,
          commonIn: ['Brazil', 'Colombia', 'Guatemala', 'Mexico'],
          associatedWith: ['Medium-dark roast', 'Natural processing'],
          color: '#059669'
        },
        {
          id: 'caramel',
          name: 'Caramel',
          description: 'Sweet, buttery notes from Maillard reactions',
          intensity: 4,
          commonIn: ['Colombia', 'Costa Rica', 'Honduras'],
          associatedWith: ['Medium roast', 'Honey processing'],
          color: '#D97706'
        },
        {
          id: 'vanilla',
          name: 'Vanilla',
          description: 'Smooth sweetness from careful roasting',
          intensity: 3,
          commonIn: ['Jamaica', 'Hawaii', 'Peru'],
          associatedWith: ['Medium roast', 'Aged beans'],
          color: '#F59E0B'
        },
        {
          id: 'honey',
          name: 'Honey',
          description: 'Natural sweetness from honey processing',
          intensity: 4,
          commonIn: ['Costa Rica', 'El Salvador', 'Brazil'],
          associatedWith: ['Honey processing', 'High sugar content'],
          color: '#FBBF24'
        }
      ]
    },
    {
      id: 'nutty',
      name: 'Nutty',
      color: '#92400E',
      angle: 135,
      subFlavors: [
        {
          id: 'almond',
          name: 'Almond',
          description: 'Sweet nuttiness from medium roasting',
          intensity: 3,
          commonIn: ['Brazil', 'Peru', 'Bolivia'],
          associatedWith: ['Medium roast', 'Natural processing'],
          color: '#A16207'
        },
        {
          id: 'hazelnut',
          name: 'Hazelnut',
          description: 'Rich, buttery nut flavors',
          intensity: 4,
          commonIn: ['Colombia', 'Brazil', 'Guatemala'],
          associatedWith: ['Medium roast', 'Full body'],
          color: '#92400E'
        },
        {
          id: 'walnut',
          name: 'Walnut',
          description: 'Complex nutty bitterness',
          intensity: 2,
          commonIn: ['Mexico', 'Nicaragua'],
          associatedWith: ['Medium-dark roast'],
          color: '#78350F'
        }
      ]
    },
    {
      id: 'spicy',
      name: 'Spicy',
      color: '#DC2626',
      angle: 180,
      subFlavors: [
        {
          id: 'cinnamon',
          name: 'Cinnamon',
          description: 'Warm spice notes from roasting',
          intensity: 3,
          commonIn: ['Guatemala', 'Mexico', 'India'],
          associatedWith: ['Medium roast', 'Volcanic soil'],
          color: '#B91C1C'
        },
        {
          id: 'clove',
          name: 'Clove',
          description: 'Intense spice from unique processing',
          intensity: 2,
          commonIn: ['Indonesia', 'India', 'Yemen'],
          associatedWith: ['Natural processing', 'Monsoon processing'],
          color: '#991B1B'
        },
        {
          id: 'black-pepper',
          name: 'Black Pepper',
          description: 'Sharp spice complexity',
          intensity: 2,
          commonIn: ['India', 'Indonesia'],
          associatedWith: ['Robusta variety', 'Dark roast'],
          color: '#7F1D1D'
        }
      ]
    },
    {
      id: 'earthy',
      name: 'Earthy',
      color: '#65A30D',
      angle: 225,
      subFlavors: [
        {
          id: 'forest',
          name: 'Forest',
          description: 'Woody, mushroom-like earthiness',
          intensity: 3,
          commonIn: ['Indonesia', 'India', 'Papua New Guinea'],
          associatedWith: ['Wet hulling', 'Natural processing'],
          color: '#4D7C0F'
        },
        {
          id: 'tobacco',
          name: 'Tobacco',
          description: 'Dry, leafy complexity from aging',
          intensity: 2,
          commonIn: ['Guatemala', 'Nicaragua', 'Cuba'],
          associatedWith: ['Dark roast', 'Aged beans'],
          color: '#365314'
        },
        {
          id: 'cedar',
          name: 'Cedar',
          description: 'Woody, resinous notes',
          intensity: 2,
          commonIn: ['Guatemala', 'Mexico'],
          associatedWith: ['Medium-dark roast', 'Volcanic soil'],
          color: '#166534'
        }
      ]
    },
    {
      id: 'roasted',
      name: 'Roasted',
      color: '#44403C',
      angle: 270,
      subFlavors: [
        {
          id: 'smoky',
          name: 'Smoky',
          description: 'Charred, barbecue-like notes from dark roasting',
          intensity: 4,
          commonIn: ['Guatemala', 'Indonesia', 'India'],
          associatedWith: ['Dark roast', 'French roast'],
          color: '#292524'
        },
        {
          id: 'burnt',
          name: 'Burnt',
          description: 'Intense roasted character',
          intensity: 3,
          commonIn: ['Italy', 'France', 'Spain'],
          associatedWith: ['Very dark roast', 'Espresso'],
          color: '#1C1917'
        },
        {
          id: 'ashy',
          name: 'Ashy',
          description: 'Dry, powdery roasted notes',
          intensity: 2,
          commonIn: ['Over-roasted beans'],
          associatedWith: ['Over-roasting', 'Poor quality'],
          color: '#0C0A09'
        }
      ]
    },
    {
      id: 'other',
      name: 'Other',
      color: '#6B7280',
      angle: 315,
      subFlavors: [
        {
          id: 'wine',
          name: 'Wine-like',
          description: 'Fermented, alcoholic complexity',
          intensity: 4,
          commonIn: ['Ethiopia', 'Kenya', 'Yemen'],
          associatedWith: ['Natural processing', 'Over-fermentation'],
          color: '#7C2D12'
        },
        {
          id: 'tea',
          name: 'Tea-like',
          description: 'Light, delicate astringency',
          intensity: 3,
          commonIn: ['Ethiopia', 'China', 'Myanmar'],
          associatedWith: ['Light roast', 'High altitude'],
          color: '#15803D'
        },
        {
          id: 'medicinal',
          name: 'Medicinal',
          description: 'Herbal, pharmaceutical notes',
          intensity: 1,
          commonIn: ['Processing defects'],
          associatedWith: ['Over-fermentation', 'Poor processing'],
          color: '#374151'
        }
      ]
    }
  ],
  connections: [
    // This would be populated based on actual coffee data analysis
    // For now, we'll generate this dynamically based on coffee flavor profiles
  ]
};

// Function to get flavors by category
export const getFlavorsByCategory = (categoryId: string): FlavorNote[] => {
  const category = flavorWheelData.categories.find(cat => cat.id === categoryId);
  return category ? category.subFlavors : [];
};

// Function to find coffees with specific flavor notes
export const getCoffeesWithFlavor = (flavorId: string, coffees: Coffee[]): Coffee[] => {
  return coffees.filter(coffee => 
    coffee.flavorProfile.flavorNotes.some((note: string) => 
      note.toLowerCase().includes(flavorId) || 
      flavorId.includes(note.toLowerCase())
    )
  );
};

// Function to get regions associated with a flavor
export const getRegionsForFlavor = (flavorId: string): string[] => {
  for (const category of flavorWheelData.categories) {
    const flavor = category.subFlavors.find(f => f.id === flavorId);
    if (flavor) {
      return flavor.commonIn;
    }
  }
  return [];
};

// Function to analyze coffee and return dominant flavors
export const analyzeCoffeeFlavors = (coffee: Coffee): FlavorNote[] => {
  const dominantFlavors: FlavorNote[] = [];
  
  for (const category of flavorWheelData.categories) {
    for (const flavor of category.subFlavors) {
      // Check if coffee has this flavor note
      const hasFlavorNote = coffee.flavorProfile.flavorNotes.some((note: string) =>
        note.toLowerCase().includes(flavor.name.toLowerCase()) ||
        flavor.name.toLowerCase().includes(note.toLowerCase())
      );
      
      // Check if coffee is from a region known for this flavor
      const fromKnownRegion = flavor.commonIn.includes(coffee.origin.country);
      
      if (hasFlavorNote || fromKnownRegion) {
        dominantFlavors.push(flavor);
      }
    }
  }
  
  return dominantFlavors.slice(0, 5); // Return top 5 dominant flavors
};