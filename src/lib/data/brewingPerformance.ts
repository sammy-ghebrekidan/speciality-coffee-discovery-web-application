import { Coffee } from '../types/coffee';

export interface BrewingMethodPerformance {
  method: string;
  suitabilityScore: number; // 1-10 scale
  difficulty: 'Easy' | 'Medium' | 'Hard';
  highlightedCharacteristics: string[];
  pros: string[];
  cons: string[];
  recommendedFor: string[];
  icon: string;
  description: string;
}

export interface BrewingRecommendation {
  bestMethods: BrewingMethodPerformance[];
  goodMethods: BrewingMethodPerformance[];
  notRecommended: BrewingMethodPerformance[];
}

// Base brewing method templates
const brewingMethodTemplates = {
  'Pour Over (V60)': {
    icon: '☕',
    difficulty: 'Medium' as const,
    baseDescription: 'Highlights bright acidity and complex flavors through precise control',
    strengths: ['acidity', 'complexity', 'clarity'],
    weaknesses: ['body'],
    idealFor: ['light roasts', 'floral coffees', 'bright coffees']
  },
  'French Press': {
    icon: '🫖',
    difficulty: 'Easy' as const,
    baseDescription: 'Full immersion brewing that emphasizes body and richness',
    strengths: ['body', 'richness', 'oils'],
    weaknesses: ['clarity', 'brightness'],
    idealFor: ['dark roasts', 'full body coffees', 'chocolate notes']
  },
  'Espresso': {
    icon: '☕',
    difficulty: 'Hard' as const,
    baseDescription: 'Concentrated extraction that intensifies all characteristics',
    strengths: ['intensity', 'crema', 'concentration'],
    weaknesses: ['requires skill', 'equipment dependent'],
    idealFor: ['medium-dark roasts', 'balanced coffees', 'milk drinks']
  },
  'Chemex': {
    icon: '⏳',
    difficulty: 'Medium' as const,
    baseDescription: 'Clean, bright extraction with excellent clarity',
    strengths: ['clarity', 'brightness', 'clean finish'],
    weaknesses: ['body', 'oils filtered out'],
    idealFor: ['light roasts', 'floral coffees', 'citrus notes']
  },
  'AeroPress': {
    icon: '💨',
    difficulty: 'Easy' as const,
    baseDescription: 'Versatile brewing with good body and clarity balance',
    strengths: ['versatility', 'consistency', 'travel friendly'],
    weaknesses: ['small batch size'],
    idealFor: ['all roast levels', 'travel', 'consistent results']
  },
  'Cold Brew': {
    icon: '🧊',
    difficulty: 'Easy' as const,
    baseDescription: 'Low acidity, smooth extraction perfect for hot weather',
    strengths: ['low acidity', 'smoothness', 'concentrate'],
    weaknesses: ['time intensive', 'muted flavors'],
    idealFor: ['dark roasts', 'chocolate notes', 'low acid preference']
  },
  'Moka Pot': {
    icon: '⚡',
    difficulty: 'Medium' as const,
    baseDescription: 'Strong, concentrated coffee with unique character',
    strengths: ['strength', 'traditional', 'stovetop'],
    weaknesses: ['can be bitter', 'limited control'],
    idealFor: ['dark roasts', 'Italian style', 'strong coffee lovers']
  },
  'Siphon': {
    icon: '🔬',
    difficulty: 'Hard' as const,
    baseDescription: 'Theatrical brewing method with excellent flavor clarity',
    strengths: ['clarity', 'theater', 'precise temperature'],
    weaknesses: ['complex setup', 'fragile equipment'],
    idealFor: ['light-medium roasts', 'special occasions', 'flavor clarity']
  }
};

// Algorithm to calculate brewing method performance based on coffee characteristics
export const calculateBrewingPerformance = (coffee: Coffee): BrewingRecommendation => {
  const methods: BrewingMethodPerformance[] = [];

  Object.entries(brewingMethodTemplates).forEach(([methodName, template]) => {
    let score = 5; // Base score
    const pros: string[] = [];
    const cons: string[] = [];
    const highlightedCharacteristics: string[] = [];
    const recommendedFor: string[] = [];

    // Analyze coffee characteristics and adjust score
    
    // Acidity analysis
    if (coffee.flavorProfile.acidity >= 7) {
      if (template.strengths.includes('acidity') || template.strengths.includes('brightness')) {
        score += 2;
        pros.push('Highlights bright acidity beautifully');
        highlightedCharacteristics.push('Bright acidity');
      }
      if (template.weaknesses.includes('acidity')) {
        score -= 1;
        cons.push('May over-emphasize acidity');
      }
    } else if (coffee.flavorProfile.acidity <= 4) {
      if (template.strengths.includes('body') || methodName === 'Cold Brew') {
        score += 1;
        pros.push('Perfect for low-acid preference');
      }
    }

    // Body analysis
    if (coffee.flavorProfile.body >= 7) {
      if (template.strengths.includes('body') || template.strengths.includes('richness')) {
        score += 2;
        pros.push('Emphasizes full body and richness');
        highlightedCharacteristics.push('Full body');
      }
      if (template.weaknesses.includes('body')) {
        score -= 1;
        cons.push('May reduce body perception');
      }
    } else if (coffee.flavorProfile.body <= 4) {
      if (template.strengths.includes('clarity') || template.strengths.includes('brightness')) {
        score += 1;
        pros.push('Maintains delicate body perfectly');
      }
    }

    // Roast level analysis
    if (coffee.roastLevel === 'LIGHT') {
      if (template.idealFor.includes('light roasts')) {
        score += 2;
        pros.push('Ideal for light roast characteristics');
        recommendedFor.push('Light roast enthusiasts');
      }
      if (methodName === 'French Press' || methodName === 'Moka Pot') {
        score -= 1;
        cons.push('May not extract light roast optimally');
      }
    } else if (coffee.roastLevel === 'DARK' || coffee.roastLevel === 'MEDIUM_DARK') {
      if (template.idealFor.includes('dark roasts')) {
        score += 2;
        pros.push('Perfect for dark roast flavors');
        recommendedFor.push('Dark roast lovers');
      }
      if (methodName === 'Pour Over (V60)' || methodName === 'Chemex') {
        score -= 0.5;
        cons.push('May highlight bitter notes');
      }
    }

    // Flavor notes analysis
    const hasFloralNotes = coffee.flavorProfile.flavorNotes.some(note => 
      ['floral', 'jasmine', 'tea-like', 'bergamot'].includes(note)
    );
    const hasChocolateNotes = coffee.flavorProfile.flavorNotes.some(note => 
      ['chocolate', 'cocoa', 'dark chocolate'].includes(note)
    );
    const hasFruitNotes = coffee.flavorProfile.flavorNotes.some(note => 
      ['citrus', 'berry', 'fruity', 'tropical fruit'].includes(note)
    );

    if (hasFloralNotes && template.idealFor.includes('floral coffees')) {
      score += 1.5;
      pros.push('Showcases delicate floral notes');
      highlightedCharacteristics.push('Floral aromatics');
      recommendedFor.push('Floral note lovers');
    }

    if (hasChocolateNotes && template.idealFor.includes('chocolate notes')) {
      score += 1.5;
      pros.push('Enhances rich chocolate flavors');
      highlightedCharacteristics.push('Chocolate richness');
      recommendedFor.push('Chocolate note enthusiasts');
    }

    if (hasFruitNotes && (template.strengths.includes('acidity') || template.strengths.includes('brightness'))) {
      score += 1;
      pros.push('Brings out vibrant fruit characteristics');
      highlightedCharacteristics.push('Fruit complexity');
    }

    // Processing method considerations
    if (coffee.processingMethod === 'NATURAL' && template.strengths.includes('body')) {
      score += 1;
      pros.push('Complements natural processing sweetness');
    }

    if (coffee.processingMethod === 'WASHED' && template.strengths.includes('clarity')) {
      score += 1;
      pros.push('Highlights washed processing clarity');
    }

    // Special method considerations
    if (methodName === 'Espresso') {
      if (coffee.flavorProfile.body >= 6 && coffee.flavorProfile.sweetness >= 6) {
        score += 1;
        pros.push('Excellent crema and balance for espresso');
        recommendedFor.push('Espresso enthusiasts', 'Milk drink lovers');
      } else {
        score -= 1;
        cons.push('May lack body for optimal espresso');
      }
    }

    if (methodName === 'Cold Brew') {
      if (coffee.flavorProfile.acidity <= 5 && hasChocolateNotes) {
        score += 1.5;
        pros.push('Perfect for smooth cold extraction');
        recommendedFor.push('Cold coffee lovers', 'Low acid preference');
      }
    }

    // Ensure score stays within bounds
    score = Math.max(1, Math.min(10, score));

    // Add general recommendations based on difficulty
    if (template.difficulty === 'Easy') {
      recommendedFor.push('Beginners');
    } else if (template.difficulty === 'Hard') {
      recommendedFor.push('Experienced brewers');
    }

    // Create the performance object
    methods.push({
      method: methodName,
      suitabilityScore: Math.round(score * 10) / 10,
      difficulty: template.difficulty,
      highlightedCharacteristics: [...new Set(highlightedCharacteristics)],
      pros: [...new Set(pros)],
      cons: [...new Set(cons)],
      recommendedFor: [...new Set(recommendedFor)],
      icon: template.icon,
      description: template.baseDescription
    });
  });

  // Sort methods by suitability score
  methods.sort((a, b) => b.suitabilityScore - a.suitabilityScore);

  // Categorize methods
  const bestMethods = methods.filter(m => m.suitabilityScore >= 7.5);
  const goodMethods = methods.filter(m => m.suitabilityScore >= 6 && m.suitabilityScore < 7.5);
  const notRecommended = methods.filter(m => m.suitabilityScore < 6);

  return {
    bestMethods,
    goodMethods,
    notRecommended
  };
};

// Get the top 3 recommended brewing methods for a coffee
export const getTopBrewingMethods = (coffee: Coffee): BrewingMethodPerformance[] => {
  const recommendations = calculateBrewingPerformance(coffee);
  return [...recommendations.bestMethods, ...recommendations.goodMethods].slice(0, 3);
};