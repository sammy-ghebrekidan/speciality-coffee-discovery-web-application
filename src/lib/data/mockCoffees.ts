import { Coffee } from '../types/coffee';

export const mockCoffees: Coffee[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    origin: {
      country: 'Ethiopia',
      region: 'Yirgacheffe',
      farm: 'Kochere Cooperative',
      altitude: 1900,
      coordinates: { lat: 6.1629, lng: 38.2003 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 9,
      body: 4,
      sweetness: 7,
      bitterness: 2,
      flavorNotes: ['floral', 'citrus', 'tea-like', 'bergamot'],
      aromaNotes: ['jasmine', 'lemon', 'honey']
    },
    description: 'A bright and floral coffee with distinctive wine-like acidity and complex citrus notes.',
    featured: true,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: [
          'Heat water to 205°F',
          'Grind 25g coffee to medium-fine',
          'Rinse filter and preheat dripper',
          'Add coffee and create small well',
          'Pour 50g water for 30s bloom',
          'Continue pouring in circular motions',
          'Total brew time: 3-4 minutes'
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Colombian Huila',
    origin: {
      country: 'Colombia',
      region: 'Huila',
      farm: 'Finca El Paraiso',
      altitude: 1650,
      coordinates: { lat: 2.5358, lng: -75.5156 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 7,
      sweetness: 8,
      bitterness: 4,
      flavorNotes: ['chocolate', 'caramel', 'orange', 'nuts'],
      aromaNotes: ['cocoa', 'vanilla', 'citrus']
    },
    description: 'A well-balanced coffee with rich chocolate notes and bright citrus undertones.',

    featured: true,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: [
          'Heat water to 200°F',
          'Grind 30g coffee coarsely',
          'Add coffee to French press',
          'Pour 450g hot water',
          'Stir gently and place lid',
          'Steep for 4 minutes',
          'Press down slowly and serve'
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Guatemalan Antigua',
    origin: {
      country: 'Guatemala',
      region: 'Antigua',
      farm: 'Finca San Sebastian',
      altitude: 1500,
      coordinates: { lat: 14.5592, lng: -90.7348 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 8,
      sweetness: 6,
      bitterness: 6,
      flavorNotes: ['dark chocolate', 'spice', 'smoke', 'cedar'],
      aromaNotes: ['tobacco', 'dark chocolate', 'spice']
    },
    description: 'A full-bodied coffee with smoky undertones and rich chocolate flavors.',

    featured: false,
    brewingMethods: [
      {
        name: 'Espresso',
        grindSize: 'Fine',
        waterTemp: 200,
        brewTime: '25-30 seconds',
        ratio: '1:2',
        instructions: [
          'Grind 18g coffee finely',
          'Distribute and tamp evenly',
          'Lock portafilter into machine',
          'Extract for 25-30 seconds',
          'Aim for 36g liquid output',
          'Serve immediately'
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Brazilian Santos',
    origin: {
      country: 'Brazil',
      region: 'Santos',
      farm: 'Fazenda Santa Monica',
      altitude: 1100,
      coordinates: { lat: -23.9608, lng: -46.3331 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 4,
      body: 6,
      sweetness: 7,
      bitterness: 5,
      flavorNotes: ['nutty', 'chocolate', 'caramel', 'low acidity'],
      aromaNotes: ['nuts', 'chocolate', 'sweet']
    },
    description: 'A smooth, low-acid coffee with nutty and chocolate characteristics.',

    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5-6 minutes',
        ratio: '1:17',
        instructions: [
          'Heat water to 200°F',
          'Grind 25g coffee to medium',
          'Add coffee to filter',
          'Pour water evenly over grounds',
          'Allow to drip through',
          'Total brew time: 5-6 minutes'
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Kenyan AA',
    origin: {
      country: 'Kenya',
      region: 'Nyeri',
      farm: 'Gakuyuni Cooperative',
      altitude: 1700,
      coordinates: { lat: -0.4167, lng: 36.9500 }
    },
    roastLevel: 'MEDIUM_LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 8,
      body: 6,
      sweetness: 6,
      bitterness: 3,
      flavorNotes: ['black currant', 'wine', 'citrus', 'bright'],
      aromaNotes: ['berry', 'wine', 'floral']
    },
    description: 'A bright and wine-like coffee with distinctive black currant notes.',

    featured: true,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30-3:00',
        ratio: '1:16',
        instructions: [
          'Heat water to 205°F',
          'Grind 22g coffee medium-fine',
          'Rinse V60 filter',
          'Add coffee and create well',
          'Pour 44g water for bloom (30s)',
          'Continue with spiral pours',
          'Finish by 2:30-3:00'
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Costa Rican Tarrazú',
    origin: {
      country: 'Costa Rica',
      region: 'Tarrazú',
      farm: 'Hacienda Alsacia',
      altitude: 1800,
      coordinates: { lat: 9.2806, lng: -83.8315 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'HONEY',
    flavorProfile: {
      acidity: 7,
      body: 6,
      sweetness: 8,
      bitterness: 3,
      flavorNotes: ['honey', 'citrus', 'chocolate', 'balanced'],
      aromaNotes: ['honey', 'citrus', 'floral']
    },
    description: 'A perfectly balanced coffee with honey sweetness and bright citrus acidity.',

    featured: false,
    brewingMethods: [
      {
        name: 'Chemex',
        grindSize: 'Medium-Coarse',
        waterTemp: 205,
        brewTime: '4-5 minutes',
        ratio: '1:15',
        instructions: [
          'Heat water to 205°F',
          'Grind 42g coffee medium-coarse',
          'Place filter in Chemex',
          'Rinse filter thoroughly',
          'Add coffee and bloom with 80g water',
          'Continue pouring in slow circles',
          'Total brew time: 4-5 minutes'
        ]
      }
    ]
  },
  // Additional 50 coffee varieties
  {
    id: '7',
    name: 'Jamaican Blue Mountain',
    origin: {
      country: 'Jamaica',
      region: 'Blue Mountain',
      farm: 'Wallenford Estate',
      altitude: 1200,
      coordinates: { lat: 18.0747, lng: -76.7951 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 7,
      sweetness: 8,
      bitterness: 3,
      flavorNotes: ['mild', 'balanced', 'nutty', 'sweet'],
      aromaNotes: ['floral', 'nutty', 'sweet']
    },
    description: 'One of the world\'s most prized coffees, known for its exceptional balance and mild flavor.',
    featured: true,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Heat water to 200°F', 'Grind coffee medium-fine', 'Pour in slow circles']
      }
    ]
  },
  {
    id: '8',
    name: 'Hawaiian Kona',
    origin: {
      country: 'United States',
      region: 'Kona, Hawaii',
      farm: 'Greenwell Farms',
      altitude: 800,
      coordinates: { lat: 19.6389, lng: -155.9969 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['smooth', 'nutty', 'chocolate', 'low acid'],
      aromaNotes: ['nutty', 'chocolate', 'caramel']
    },
    description: 'A smooth, rich coffee with low acidity and distinctive nutty chocolate notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:17',
        instructions: ['Grind medium', 'Add to filter', 'Pour hot water evenly']
      }
    ]
  },
  {
    id: '9',
    name: 'Yemeni Mocha',
    origin: {
      country: 'Yemen',
      region: 'Mocha',
      farm: 'Bani Matar',
      altitude: 2000,
      coordinates: { lat: 15.3694, lng: 44.1910 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 7,
      body: 8,
      sweetness: 6,
      bitterness: 5,
      flavorNotes: ['wine', 'chocolate', 'fruity', 'complex'],
      aromaNotes: ['wine', 'berry', 'chocolate']
    },
    description: 'An ancient coffee with wine-like complexity and rich chocolate undertones.',
    featured: true,
    brewingMethods: [
      {
        name: 'Turkish Coffee',
        grindSize: 'Extra Fine',
        waterTemp: 160,
        brewTime: '3-4 minutes',
        ratio: '1:10',
        instructions: ['Grind extra fine', 'Add to cezve with cold water', 'Heat slowly']
      }
    ]
  },
  {
    id: '10',
    name: 'Rwandan Bourbon',
    origin: {
      country: 'Rwanda',
      region: 'Nyamasheke',
      farm: 'Buf Coffee Cooperative',
      altitude: 1700,
      coordinates: { lat: -2.4667, lng: 29.1333 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 8,
      body: 5,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['bright', 'citrus', 'floral', 'clean'],
      aromaNotes: ['citrus', 'floral', 'honey']
    },
    description: 'A bright and clean coffee with excellent citrus acidity and floral notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Bloom for 30s', 'Pour in spiral motions', 'Finish by 2:30']
      }
    ]
  },
  {
    id: '11',
    name: 'Panamanian Geisha',
    origin: {
      country: 'Panama',
      region: 'Boquete',
      farm: 'Hacienda La Esmeralda',
      altitude: 1600,
      coordinates: { lat: 8.7832, lng: -82.4348 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 9,
      body: 4,
      sweetness: 8,
      bitterness: 2,
      flavorNotes: ['jasmine', 'tropical fruit', 'tea-like', 'elegant'],
      aromaNotes: ['jasmine', 'bergamot', 'tropical']
    },
    description: 'An exceptional coffee variety known for its jasmine-like aroma and tropical fruit flavors.',
    featured: true,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '3 minutes',
        ratio: '1:15',
        instructions: ['Use precise temperature', 'Pour slowly', 'Savor the aroma']
      }
    ]
  },
  {
    id: '12',
    name: 'Indonesian Sumatra',
    origin: {
      country: 'Indonesia',
      region: 'Sumatra',
      farm: 'Mandheling Cooperative',
      altitude: 1200,
      coordinates: { lat: 2.5000, lng: 98.5000 }
    },
    roastLevel: 'DARK',
    processingMethod: 'SEMI_WASHED',
    flavorProfile: {
      acidity: 3,
      body: 9,
      sweetness: 5,
      bitterness: 7,
      flavorNotes: ['earthy', 'herbal', 'full body', 'low acid'],
      aromaNotes: ['earthy', 'herbal', 'woody']
    },
    description: 'A full-bodied coffee with distinctive earthy and herbal characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Steep for 4 minutes', 'Press slowly', 'Serve immediately']
      }
    ]
  },
  {
    id: '13',
    name: 'Vietnamese Robusta',
    origin: {
      country: 'Vietnam',
      region: 'Dak Lak',
      farm: 'Buon Ma Thuot',
      altitude: 500,
      coordinates: { lat: 12.6667, lng: 108.0500 }
    },
    roastLevel: 'DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 2,
      body: 9,
      sweetness: 4,
      bitterness: 8,
      flavorNotes: ['strong', 'bitter', 'chocolate', 'robust'],
      aromaNotes: ['chocolate', 'nutty', 'strong']
    },
    description: 'A strong, full-bodied coffee with high caffeine content and robust flavor.',
    featured: false,
    brewingMethods: [
      {
        name: 'Vietnamese Phin',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:12',
        instructions: ['Use phin filter', 'Drip slowly', 'Serve with condensed milk']
      }
    ]
  },
  {
    id: '14',
    name: 'Peruvian Chanchamayo',
    origin: {
      country: 'Peru',
      region: 'Chanchamayo',
      farm: 'Villa Rica Cooperative',
      altitude: 1400,
      coordinates: { lat: -11.0667, lng: -75.3167 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['balanced', 'nutty', 'caramel', 'smooth'],
      aromaNotes: ['nutty', 'caramel', 'vanilla']
    },
    description: 'A well-balanced coffee with pleasant nutty and caramel characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Espresso',
        grindSize: 'Fine',
        waterTemp: 200,
        brewTime: '25-30 seconds',
        ratio: '1:2',
        instructions: ['Tamp evenly', 'Extract 25-30 seconds', 'Serve immediately']
      }
    ]
  },
  {
    id: '15',
    name: 'Bolivian Caranavi',
    origin: {
      country: 'Bolivia',
      region: 'Caranavi',
      farm: 'Finca Takesi',
      altitude: 1800,
      coordinates: { lat: -15.8333, lng: -67.5667 }
    },
    roastLevel: 'MEDIUM_LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 7,
      body: 5,
      sweetness: 8,
      bitterness: 3,
      flavorNotes: ['bright', 'fruity', 'chocolate', 'clean'],
      aromaNotes: ['fruity', 'chocolate', 'floral']
    },
    description: 'A bright and fruity coffee with clean chocolate notes and excellent sweetness.',
    featured: false,
    brewingMethods: [
      {
        name: 'Chemex',
        grindSize: 'Medium-Coarse',
        waterTemp: 205,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Rinse filter', 'Bloom 30 seconds', 'Pour in circles']
      }
    ]
  },
  {
    id: '16',
    name: 'Ecuadorian Vilcabamba',
    origin: {
      country: 'Ecuador',
      region: 'Vilcabamba',
      farm: 'Hacienda La Tola',
      altitude: 1500,
      coordinates: { lat: -4.2667, lng: -79.2167 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['balanced', 'citrus', 'chocolate', 'smooth'],
      aromaNotes: ['citrus', 'chocolate', 'nutty']
    },
    description: 'A smooth and balanced coffee with pleasant citrus and chocolate notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Pour steadily', 'Maintain even extraction', 'Enjoy the balance']
      }
    ]
  },
  {
    id: '17',
    name: 'Mexican Chiapas',
    origin: {
      country: 'Mexico',
      region: 'Chiapas',
      farm: 'Finca Irlanda',
      altitude: 1200,
      coordinates: { lat: 15.1833, lng: -92.6333 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 7,
      sweetness: 6,
      bitterness: 5,
      flavorNotes: ['chocolate', 'spice', 'nutty', 'medium body'],
      aromaNotes: ['chocolate', 'spice', 'nutty']
    },
    description: 'A medium-bodied coffee with rich chocolate and spice characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Moka Pot',
        grindSize: 'Fine',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:10',
        instructions: ['Fill bottom chamber', 'Pack coffee lightly', 'Heat until brewing stops']
      }
    ]
  },
  {
    id: '18',
    name: 'Honduran Marcala',
    origin: {
      country: 'Honduras',
      region: 'Marcala',
      farm: 'COMISAJUL Cooperative',
      altitude: 1400,
      coordinates: { lat: 14.1500, lng: -88.0333 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['balanced', 'caramel', 'citrus', 'clean'],
      aromaNotes: ['caramel', 'citrus', 'honey']
    },
    description: 'A clean and balanced coffee with pleasant caramel sweetness and citrus brightness.',
    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:17',
        instructions: ['Even water distribution', 'Consistent extraction', 'Serve fresh']
      }
    ]
  },
  {
    id: '19',
    name: 'Nicaraguan Jinotega',
    origin: {
      country: 'Nicaragua',
      region: 'Jinotega',
      farm: 'Finca San Jose',
      altitude: 1300,
      coordinates: { lat: 13.0833, lng: -86.0000 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['chocolate', 'orange', 'balanced', 'smooth'],
      aromaNotes: ['chocolate', 'citrus', 'sweet']
    },
    description: 'A smooth coffee with chocolate and orange notes, well-balanced and approachable.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Coarse grind', 'Steep 4 minutes', 'Press and serve']
      }
    ]
  },
  {
    id: '20',
    name: 'El Salvadoran Pacamara',
    origin: {
      country: 'El Salvador',
      region: 'Apaneca-Ilamatepec',
      farm: 'Finca Himalaya',
      altitude: 1500,
      coordinates: { lat: 13.8667, lng: -89.8000 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'HONEY',
    flavorProfile: {
      acidity: 8,
      body: 5,
      sweetness: 8,
      bitterness: 3,
      flavorNotes: ['fruity', 'wine-like', 'complex', 'bright'],
      aromaNotes: ['fruity', 'wine', 'floral']
    },
    description: 'A complex coffee with wine-like characteristics and bright fruity acidity.',
    featured: true,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Highlight the fruit notes', 'Pour with precision', 'Taste the complexity']
      }
    ]
  },
  {
    id: '21',
    name: 'Indian Monsooned Malabar',
    origin: {
      country: 'India',
      region: 'Malabar Coast',
      farm: 'Aspinwall & Co',
      altitude: 1000,
      coordinates: { lat: 11.2588, lng: 75.7804 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 2,
      body: 9,
      sweetness: 5,
      bitterness: 6,
      flavorNotes: ['musty', 'earthy', 'full body', 'unique'],
      aromaNotes: ['earthy', 'musty', 'spice']
    },
    description: 'A unique coffee exposed to monsoon winds, creating distinctive earthy and musty flavors.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Embrace the earthiness', 'Full immersion', 'Bold extraction']
      }
    ]
  },
  {
    id: '22',
    name: 'Thai Doi Chang',
    origin: {
      country: 'Thailand',
      region: 'Doi Chang',
      farm: 'Akha Ama Coffee',
      altitude: 1200,
      coordinates: { lat: 20.0833, lng: 99.8333 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['balanced', 'nutty', 'chocolate', 'smooth'],
      aromaNotes: ['nutty', 'chocolate', 'caramel']
    },
    description: 'A well-balanced Thai coffee with pleasant nutty and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Steady pour', 'Even extraction', 'Smooth finish']
      }
    ]
  },
  {
    id: '23',
    name: 'Philippine Barako',
    origin: {
      country: 'Philippines',
      region: 'Batangas',
      farm: 'Liberica Farms',
      altitude: 400,
      coordinates: { lat: 14.0000, lng: 121.0000 }
    },
    roastLevel: 'DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 3,
      body: 9,
      sweetness: 4,
      bitterness: 8,
      flavorNotes: ['strong', 'woody', 'smoky', 'intense'],
      aromaNotes: ['woody', 'smoky', 'earthy']
    },
    description: 'A rare Liberica variety with intense, woody flavors and full body.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Strong extraction', 'Full immersion', 'Bold flavor']
      }
    ]
  },
  {
    id: '24',
    name: 'Laotian Bolaven Plateau',
    origin: {
      country: 'Laos',
      region: 'Bolaven Plateau',
      farm: 'Sinouk Coffee',
      altitude: 1200,
      coordinates: { lat: 15.1667, lng: 106.2500 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 7,
      sweetness: 6,
      bitterness: 5,
      flavorNotes: ['chocolate', 'nutty', 'medium body', 'smooth'],
      aromaNotes: ['chocolate', 'nutty', 'caramel']
    },
    description: 'A smooth coffee from the volcanic soils of Bolaven Plateau with chocolate notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:17',
        instructions: ['Medium grind', 'Even brewing', 'Smooth extraction']
      }
    ]
  },
  {
    id: '25',
    name: 'Myanmar Shan State',
    origin: {
      country: 'Myanmar',
      region: 'Shan State',
      farm: 'Red Mountain Estate',
      altitude: 1400,
      coordinates: { lat: 21.0000, lng: 96.0000 }
    },
    roastLevel: 'MEDIUM_LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 7,
      body: 5,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['bright', 'citrus', 'floral', 'clean'],
      aromaNotes: ['citrus', 'floral', 'honey']
    },
    description: 'An emerging origin with bright acidity and clean floral characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Highlight brightness', 'Clean extraction', 'Floral notes']
      }
    ]
  },
  {
    id: '26',
    name: 'Chinese Yunnan',
    origin: {
      country: 'China',
      region: 'Yunnan',
      farm: 'Menglian Estate',
      altitude: 1600,
      coordinates: { lat: 24.0000, lng: 102.0000 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 7,
      sweetness: 6,
      bitterness: 5,
      flavorNotes: ['earthy', 'chocolate', 'nutty', 'medium body'],
      aromaNotes: ['earthy', 'chocolate', 'nutty']
    },
    description: 'A medium-bodied coffee with earthy characteristics and chocolate undertones.',
    featured: false,
    brewingMethods: [
      {
        name: 'Gongfu Brewing',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '2 minutes',
        ratio: '1:12',
        instructions: ['Multiple short steeps', 'Concentrate flavors', 'Traditional method']
      }
    ]
  },
  {
    id: '27',
    name: 'Tanzanian Peaberry',
    origin: {
      country: 'Tanzania',
      region: 'Mount Kilimanjaro',
      farm: 'Kilimanjaro Cooperative',
      altitude: 1500,
      coordinates: { lat: -3.0674, lng: 37.3556 }
    },
    roastLevel: 'MEDIUM_LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 8,
      body: 5,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['wine-like', 'citrus', 'bright', 'complex'],
      aromaNotes: ['wine', 'citrus', 'floral']
    },
    description: 'A unique peaberry with wine-like acidity and complex citrus characteristics.',
    featured: true,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '3 minutes',
        ratio: '1:16',
        instructions: ['Showcase the wine notes', 'Precise pouring', 'Complex extraction']
      }
    ]
  },
  {
    id: '28',
    name: 'Ugandan Bugisu',
    origin: {
      country: 'Uganda',
      region: 'Mount Elgon',
      farm: 'Bugisu Cooperative',
      altitude: 1800,
      coordinates: { lat: 1.2500, lng: 34.5000 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 6,
      bitterness: 4,
      flavorNotes: ['wine-like', 'chocolate', 'balanced', 'smooth'],
      aromaNotes: ['wine', 'chocolate', 'fruity']
    },
    description: 'A balanced coffee with wine-like characteristics and smooth chocolate notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Full immersion', 'Balanced extraction', 'Smooth finish']
      }
    ]
  },
  {
    id: '29',
    name: 'Burundian Kayanza',
    origin: {
      country: 'Burundi',
      region: 'Kayanza',
      farm: 'Heza Station',
      altitude: 1700,
      coordinates: { lat: -2.9167, lng: 29.6167 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 8,
      body: 5,
      sweetness: 8,
      bitterness: 2,
      flavorNotes: ['bright', 'fruity', 'floral', 'complex'],
      aromaNotes: ['fruity', 'floral', 'citrus']
    },
    description: 'A bright and complex coffee with excellent fruity and floral characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Bright extraction', 'Fruity highlights', 'Complex finish']
      }
    ]
  },
  {
    id: '30',
    name: 'Malawian Mapanga',
    origin: {
      country: 'Malawi',
      region: 'Thyolo',
      farm: 'Mapanga Estate',
      altitude: 1200,
      coordinates: { lat: -16.0667, lng: 35.1333 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['balanced', 'citrus', 'chocolate', 'clean'],
      aromaNotes: ['citrus', 'chocolate', 'nutty']
    },
    description: 'A clean and balanced coffee with pleasant citrus and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Chemex',
        grindSize: 'Medium-Coarse',
        waterTemp: 205,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Clean extraction', 'Balanced flavors', 'Smooth finish']
      }
    ]
  },
  {
    id: '31',
    name: 'Zambian Northern Province',
    origin: {
      country: 'Zambia',
      region: 'Northern Province',
      farm: 'Kateshi Estate',
      altitude: 1300,
      coordinates: { lat: -10.0000, lng: 31.0000 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 6,
      bitterness: 4,
      flavorNotes: ['balanced', 'nutty', 'chocolate', 'smooth'],
      aromaNotes: ['nutty', 'chocolate', 'caramel']
    },
    description: 'A smooth and balanced coffee with pleasant nutty and chocolate notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:17',
        instructions: ['Even extraction', 'Balanced brewing', 'Smooth result']
      }
    ]
  },
  {
    id: '32',
    name: 'Zimbabwean Chipinge',
    origin: {
      country: 'Zimbabwe',
      region: 'Chipinge',
      farm: 'Farfell Estate',
      altitude: 1100,
      coordinates: { lat: -20.2000, lng: 32.6167 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 7,
      sweetness: 6,
      bitterness: 5,
      flavorNotes: ['wine-like', 'chocolate', 'medium body', 'smooth'],
      aromaNotes: ['wine', 'chocolate', 'fruity']
    },
    description: 'A medium-bodied coffee with wine-like characteristics and chocolate undertones.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Medium body extraction', 'Wine notes', 'Chocolate finish']
      }
    ]
  },
  {
    id: '33',
    name: 'Cameroonian Boyo',
    origin: {
      country: 'Cameroon',
      region: 'Boyo',
      farm: 'Northwest Cooperative',
      altitude: 1400,
      coordinates: { lat: 6.2500, lng: 10.5000 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 4,
      body: 8,
      sweetness: 6,
      bitterness: 6,
      flavorNotes: ['full body', 'chocolate', 'earthy', 'robust'],
      aromaNotes: ['chocolate', 'earthy', 'nutty']
    },
    description: 'A full-bodied coffee with robust chocolate and earthy characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Full body brewing', 'Robust extraction', 'Earthy finish']
      }
    ]
  },
  {
    id: '34',
    name: 'Madagascan Sambava',
    origin: {
      country: 'Madagascar',
      region: 'Sambava',
      farm: 'Sambirano Valley',
      altitude: 800,
      coordinates: { lat: -14.2167, lng: 50.1667 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['unique', 'spice', 'chocolate', 'exotic'],
      aromaNotes: ['spice', 'chocolate', 'vanilla']
    },
    description: 'An exotic coffee with unique spice characteristics and chocolate undertones.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Exotic extraction', 'Spice highlights', 'Unique character']
      }
    ]
  },
  {
    id: '35',
    name: 'South African KwaZulu-Natal',
    origin: {
      country: 'South Africa',
      region: 'KwaZulu-Natal',
      farm: 'Beaver Creek Estate',
      altitude: 1000,
      coordinates: { lat: -29.0000, lng: 30.0000 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 6,
      sweetness: 6,
      bitterness: 4,
      flavorNotes: ['balanced', 'nutty', 'chocolate', 'mild'],
      aromaNotes: ['nutty', 'chocolate', 'caramel']
    },
    description: 'A mild and balanced coffee with pleasant nutty and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:17',
        instructions: ['Mild extraction', 'Balanced brewing', 'Gentle finish']
      }
    ]
  },
  {
    id: '36',
    name: 'Papua New Guinean Sigri',
    origin: {
      country: 'Papua New Guinea',
      region: 'Western Highlands',
      farm: 'Sigri Estate',
      altitude: 1600,
      coordinates: { lat: -5.5000, lng: 144.0000 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 8,
      sweetness: 6,
      bitterness: 6,
      flavorNotes: ['full body', 'earthy', 'chocolate', 'complex'],
      aromaNotes: ['earthy', 'chocolate', 'spice']
    },
    description: 'A full-bodied coffee with complex earthy and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Full body extraction', 'Complex flavors', 'Earthy finish']
      }
    ]
  },
  {
    id: '37',
    name: 'Australian Skybury',
    origin: {
      country: 'Australia',
      region: 'Atherton Tablelands',
      farm: 'Skybury Estate',
      altitude: 700,
      coordinates: { lat: -17.2667, lng: 145.4833 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['clean', 'balanced', 'nutty', 'smooth'],
      aromaNotes: ['nutty', 'caramel', 'clean']
    },
    description: 'A clean and balanced coffee with smooth nutty characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Clean extraction', 'Balanced brewing', 'Smooth finish']
      }
    ]
  },
  {
    id: '38',
    name: 'New Zealand Zealong',
    origin: {
      country: 'New Zealand',
      region: 'Bay of Plenty',
      farm: 'Zealong Estate',
      altitude: 200,
      coordinates: { lat: -37.7500, lng: 176.0833 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 7,
      body: 4,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['bright', 'clean', 'citrus', 'delicate'],
      aromaNotes: ['citrus', 'floral', 'clean']
    },
    description: 'A delicate and bright coffee with clean citrus characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Delicate extraction', 'Bright highlights', 'Clean finish']
      }
    ]
  },
  {
    id: '39',
    name: 'Cuban Serrano Superior',
    origin: {
      country: 'Cuba',
      region: 'Sierra Maestra',
      farm: 'Turquino Estate',
      altitude: 1000,
      coordinates: { lat: 20.0000, lng: -76.8333 }
    },
    roastLevel: 'DARK',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 4,
      body: 8,
      sweetness: 5,
      bitterness: 7,
      flavorNotes: ['strong', 'tobacco', 'chocolate', 'robust'],
      aromaNotes: ['tobacco', 'chocolate', 'earthy']
    },
    description: 'A robust coffee with distinctive tobacco and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Espresso',
        grindSize: 'Fine',
        waterTemp: 200,
        brewTime: '25-30 seconds',
        ratio: '1:2',
        instructions: ['Strong extraction', 'Robust flavors', 'Bold finish']
      }
    ]
  },
  {
    id: '40',
    name: 'Dominican Barahona',
    origin: {
      country: 'Dominican Republic',
      region: 'Barahona',
      farm: 'Ramirez Estate',
      altitude: 1200,
      coordinates: { lat: 18.2083, lng: -71.1000 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 7,
      sweetness: 6,
      bitterness: 5,
      flavorNotes: ['balanced', 'chocolate', 'nutty', 'smooth'],
      aromaNotes: ['chocolate', 'nutty', 'caramel']
    },
    description: 'A smooth and balanced coffee with pleasant chocolate and nutty notes.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Balanced extraction', 'Smooth brewing', 'Chocolate finish']
      }
    ]
  },
  {
    id: '41',
    name: 'Puerto Rican Yauco',
    origin: {
      country: 'Puerto Rico',
      region: 'Yauco',
      farm: 'Hacienda San Pedro',
      altitude: 900,
      coordinates: { lat: 18.0333, lng: -66.8500 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 4,
      body: 8,
      sweetness: 6,
      bitterness: 6,
      flavorNotes: ['full body', 'chocolate', 'low acid', 'rich'],
      aromaNotes: ['chocolate', 'nutty', 'caramel']
    },
    description: 'A rich, full-bodied coffee with low acidity and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Moka Pot',
        grindSize: 'Fine',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:10',
        instructions: ['Rich extraction', 'Full body', 'Chocolate notes']
      }
    ]
  },
  {
    id: '42',
    name: 'Haitian Bleu des Cayes',
    origin: {
      country: 'Haiti',
      region: 'Cayes',
      farm: 'Cooperative Cafeiere',
      altitude: 1500,
      coordinates: { lat: 18.2000, lng: -73.7500 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['balanced', 'citrus', 'chocolate', 'smooth'],
      aromaNotes: ['citrus', 'chocolate', 'floral']
    },
    description: 'A balanced coffee with pleasant citrus and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Balanced extraction', 'Citrus highlights', 'Smooth finish']
      }
    ]
  },
  {
    id: '43',
    name: 'Trinidad Maracas',
    origin: {
      country: 'Trinidad and Tobago',
      region: 'Maracas Valley',
      farm: 'Maracas Estate',
      altitude: 600,
      coordinates: { lat: 10.7500, lng: -61.4167 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 5,
      body: 7,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['fruity', 'chocolate', 'sweet', 'tropical'],
      aromaNotes: ['fruity', 'chocolate', 'tropical']
    },
    description: 'A sweet coffee with tropical fruit and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Tropical extraction', 'Sweet notes', 'Fruity finish']
      }
    ]
  },
  {
    id: '44',
    name: 'Martinique Peaberry',
    origin: {
      country: 'Martinique',
      region: 'Mount Pelée',
      farm: 'Habitation Clement',
      altitude: 800,
      coordinates: { lat: 14.7500, lng: -61.0833 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 8,
      body: 4,
      sweetness: 8,
      bitterness: 2,
      flavorNotes: ['bright', 'floral', 'citrus', 'elegant'],
      aromaNotes: ['floral', 'citrus', 'honey']
    },
    description: 'An elegant peaberry with bright floral and citrus characteristics.',
    featured: true,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Elegant extraction', 'Floral highlights', 'Bright finish']
      }
    ]
  },
  {
    id: '45',
    name: 'Guadeloupean Bonifieur',
    origin: {
      country: 'Guadeloupe',
      region: 'Basse-Terre',
      farm: 'Domaine de Bellevue',
      altitude: 700,
      coordinates: { lat: 16.0000, lng: -61.7333 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'HONEY',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 8,
      bitterness: 3,
      flavorNotes: ['honey', 'tropical', 'balanced', 'sweet'],
      aromaNotes: ['honey', 'tropical', 'floral']
    },
    description: 'A sweet coffee with honey processing and tropical fruit characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Chemex',
        grindSize: 'Medium-Coarse',
        waterTemp: 205,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Honey sweetness', 'Tropical notes', 'Balanced extraction']
      }
    ]
  },
  {
    id: '46',
    name: 'Omani Dhofar',
    origin: {
      country: 'Oman',
      region: 'Dhofar',
      farm: 'Salalah Plantation',
      altitude: 1000,
      coordinates: { lat: 17.0167, lng: 54.1000 }
    },
    roastLevel: 'MEDIUM_DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 4,
      body: 8,
      sweetness: 5,
      bitterness: 6,
      flavorNotes: ['spice', 'date', 'chocolate', 'exotic'],
      aromaNotes: ['spice', 'date', 'chocolate']
    },
    description: 'An exotic coffee with distinctive spice and date characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Turkish Coffee',
        grindSize: 'Extra Fine',
        waterTemp: 160,
        brewTime: '3-4 minutes',
        ratio: '1:10',
        instructions: ['Exotic spices', 'Traditional method', 'Date sweetness']
      }
    ]
  },
  {
    id: '47',
    name: 'Saudi Arabian Jazan',
    origin: {
      country: 'Saudi Arabia',
      region: 'Jazan',
      farm: 'Fayfa Mountains',
      altitude: 1800,
      coordinates: { lat: 17.5333, lng: 43.3833 }
    },
    roastLevel: 'DARK',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 3,
      body: 9,
      sweetness: 4,
      bitterness: 7,
      flavorNotes: ['intense', 'spice', 'date', 'robust'],
      aromaNotes: ['spice', 'date', 'earthy']
    },
    description: 'An intense coffee with robust spice and date characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Arabic Coffee',
        grindSize: 'Fine',
        waterTemp: 180,
        brewTime: '10 minutes',
        ratio: '1:8',
        instructions: ['Traditional spices', 'Long brewing', 'Cardamom addition']
      }
    ]
  },
  {
    id: '48',
    name: 'Fijian Taveuni',
    origin: {
      country: 'Fiji',
      region: 'Taveuni Island',
      farm: 'Taveuni Coffee',
      altitude: 400,
      coordinates: { lat: -16.8500, lng: 179.9667 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 5,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['tropical', 'clean', 'citrus', 'island'],
      aromaNotes: ['tropical', 'citrus', 'floral']
    },
    description: 'A clean island coffee with tropical and citrus characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Cold Brew',
        grindSize: 'Coarse',
        waterTemp: 70,
        brewTime: '12 hours',
        ratio: '1:8',
        instructions: ['Cold extraction', 'Tropical flavors', 'Island vibes']
      }
    ]
  },
  {
    id: '49',
    name: 'Vanuatuan Tanna',
    origin: {
      country: 'Vanuatu',
      region: 'Tanna Island',
      farm: 'Tanna Coffee',
      altitude: 600,
      coordinates: { lat: -19.5333, lng: 169.4500 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'NATURAL',
    flavorProfile: {
      acidity: 5,
      body: 6,
      sweetness: 7,
      bitterness: 4,
      flavorNotes: ['volcanic', 'fruity', 'unique', 'island'],
      aromaNotes: ['fruity', 'volcanic', 'tropical']
    },
    description: 'A unique volcanic island coffee with distinctive fruity characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Volcanic terroir', 'Unique character', 'Island extraction']
      }
    ]
  },
  {
    id: '50',
    name: 'Canadian British Columbia',
    origin: {
      country: 'Canada',
      region: 'British Columbia',
      farm: 'Kicking Horse Coffee',
      altitude: 1200,
      coordinates: { lat: 51.1784, lng: -116.9717 }
    },
    roastLevel: 'DARK',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 3,
      body: 9,
      sweetness: 5,
      bitterness: 8,
      flavorNotes: ['bold', 'smoky', 'chocolate', 'robust'],
      aromaNotes: ['smoky', 'chocolate', 'roasted']
    },
    description: 'A bold, dark-roasted coffee with smoky and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'French Press',
        grindSize: 'Coarse',
        waterTemp: 200,
        brewTime: '4 minutes',
        ratio: '1:15',
        instructions: ['Bold extraction', 'Dark roast', 'Smoky finish']
      }
    ]
  },
  {
    id: '51',
    name: 'Nepalese Himalayan',
    origin: {
      country: 'Nepal',
      region: 'Gulmi',
      farm: 'Himalayan Coffee',
      altitude: 1600,
      coordinates: { lat: 28.0833, lng: 83.2833 }
    },
    roastLevel: 'MEDIUM_LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 7,
      body: 5,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['bright', 'citrus', 'floral', 'mountain'],
      aromaNotes: ['citrus', 'floral', 'honey']
    },
    description: 'A bright mountain coffee with citrus and floral characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'V60',
        grindSize: 'Medium-Fine',
        waterTemp: 205,
        brewTime: '2:30',
        ratio: '1:16',
        instructions: ['Mountain terroir', 'Bright extraction', 'Floral finish']
      }
    ]
  },
  {
    id: '52',
    name: 'Sri Lankan Ceylon',
    origin: {
      country: 'Sri Lanka',
      region: 'Kandy',
      farm: 'Pedro Estate',
      altitude: 1400,
      coordinates: { lat: 7.2906, lng: 80.6337 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 6,
      sweetness: 6,
      bitterness: 4,
      flavorNotes: ['citrus', 'chocolate', 'balanced', 'clean'],
      aromaNotes: ['citrus', 'chocolate', 'spice']
    },
    description: 'A balanced Ceylon coffee with citrus and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Ceylon character', 'Balanced extraction', 'Clean finish']
      }
    ]
  },
  {
    id: '53',
    name: 'Taiwanese Alishan',
    origin: {
      country: 'Taiwan',
      region: 'Alishan',
      farm: 'Zou Coffee',
      altitude: 1200,
      coordinates: { lat: 23.4667, lng: 120.8000 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'HONEY',
    flavorProfile: {
      acidity: 8,
      body: 4,
      sweetness: 8,
      bitterness: 2,
      flavorNotes: ['honey', 'floral', 'tea-like', 'delicate'],
      aromaNotes: ['honey', 'floral', 'tea']
    },
    description: 'A delicate coffee with honey sweetness and tea-like characteristics.',
    featured: true,
    brewingMethods: [
      {
        name: 'Gongfu Brewing',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '2 minutes',
        ratio: '1:12',
        instructions: ['Delicate extraction', 'Tea-like brewing', 'Honey sweetness']
      }
    ]
  },
  {
    id: '54',
    name: 'South Korean Jeju',
    origin: {
      country: 'South Korea',
      region: 'Jeju Island',
      farm: 'Jeju Coffee',
      altitude: 300,
      coordinates: { lat: 33.3617, lng: 126.5292 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 6,
      body: 5,
      sweetness: 7,
      bitterness: 3,
      flavorNotes: ['clean', 'citrus', 'mild', 'island'],
      aromaNotes: ['citrus', 'clean', 'floral']
    },
    description: 'A clean island coffee with mild citrus characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Pour Over',
        grindSize: 'Medium-Fine',
        waterTemp: 200,
        brewTime: '3-4 minutes',
        ratio: '1:16',
        instructions: ['Island character', 'Clean extraction', 'Mild finish']
      }
    ]
  },
  {
    id: '55',
    name: 'Japanese Okinawa',
    origin: {
      country: 'Japan',
      region: 'Okinawa',
      farm: 'Okinawa Coffee',
      altitude: 200,
      coordinates: { lat: 26.2124, lng: 127.6792 }
    },
    roastLevel: 'LIGHT',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 7,
      body: 4,
      sweetness: 7,
      bitterness: 2,
      flavorNotes: ['delicate', 'floral', 'clean', 'subtle'],
      aromaNotes: ['floral', 'clean', 'subtle']
    },
    description: 'A delicate Japanese coffee with subtle floral characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Siphon',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '3 minutes',
        ratio: '1:15',
        instructions: ['Japanese precision', 'Delicate extraction', 'Subtle flavors']
      }
    ]
  },
  {
    id: '56',
    name: 'Malaysian Cameron Highlands',
    origin: {
      country: 'Malaysia',
      region: 'Cameron Highlands',
      farm: 'BOH Plantations',
      altitude: 1500,
      coordinates: { lat: 4.4667, lng: 101.3833 }
    },
    roastLevel: 'MEDIUM',
    processingMethod: 'WASHED',
    flavorProfile: {
      acidity: 5,
      body: 6,
      sweetness: 6,
      bitterness: 4,
      flavorNotes: ['balanced', 'nutty', 'chocolate', 'highland'],
      aromaNotes: ['nutty', 'chocolate', 'caramel']
    },
    description: 'A balanced highland coffee with nutty and chocolate characteristics.',
    featured: false,
    brewingMethods: [
      {
        name: 'Drip Coffee',
        grindSize: 'Medium',
        waterTemp: 200,
        brewTime: '5 minutes',
        ratio: '1:17',
        instructions: ['Highland character', 'Balanced brewing', 'Nutty finish']
      }
    ]
  }
];

export const getFeaturedCoffees = (): Coffee[] => {
  return mockCoffees.filter(coffee => coffee.featured);
};

export const getCoffeeById = (id: string): Coffee | undefined => {
  return mockCoffees.find(coffee => coffee.id === id);
};

export const getCoffeesByOrigin = (country: string): Coffee[] => {
  return mockCoffees.filter(coffee => 
    coffee.origin.country.toLowerCase().includes(country.toLowerCase())
  );
};

export const getCoffeesByFlavorNotes = (flavorNotes: string[]): Coffee[] => {
  return mockCoffees.filter(coffee =>
    flavorNotes.some(note =>
      coffee.flavorProfile.flavorNotes.some(coffeeNote =>
        coffeeNote.toLowerCase().includes(note.toLowerCase())
      )
    )
  );
};