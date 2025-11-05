export interface RegionInfo {
  country: string;
  region: string;
  climate: string;
  altitude: string;
  soilType: string;
  harvestSeason: string;
  processingTradition: string;
  flavorCharacteristics: string[];
  uniqueFactors: string[];
  description: string;
}

export const regionDatabase: Record<string, RegionInfo> = {
  // Ethiopia
  'Ethiopia-Yirgacheffe': {
    country: 'Ethiopia',
    region: 'Yirgacheffe',
    climate: 'Tropical highland climate with distinct wet and dry seasons',
    altitude: '1,700-2,200 meters above sea level',
    soilType: 'Rich volcanic soil with excellent drainage',
    harvestSeason: 'October to December',
    processingTradition: 'Traditional washed processing with 72-hour fermentation',
    flavorCharacteristics: ['Bright acidity', 'Floral aromatics', 'Tea-like body', 'Citrus notes'],
    uniqueFactors: [
      'Birthplace of coffee with ancient heirloom varieties',
      'High altitude creates slow cherry maturation',
      'Cool nights preserve delicate flavor compounds',
      'Traditional shade-grown cultivation methods'
    ],
    description: 'Yirgacheffe is renowned as the birthplace of coffee, where wild Arabica still grows in ancient forests. The region\'s high altitude, volcanic soil, and traditional processing methods create coffees with unparalleled floral complexity and bright, wine-like acidity that has made it a benchmark for specialty coffee worldwide.'
  },

  // Colombia
  'Colombia-Huila': {
    country: 'Colombia',
    region: 'Huila',
    climate: 'Equatorial climate with two rainy seasons and consistent temperatures',
    altitude: '1,200-2,100 meters above sea level',
    soilType: 'Volcanic ash soil rich in organic matter',
    harvestSeason: 'March to June, October to December',
    processingTradition: 'Fully washed with careful fermentation control',
    flavorCharacteristics: ['Balanced acidity', 'Medium body', 'Chocolate notes', 'Caramel sweetness'],
    uniqueFactors: [
      'Two harvest seasons due to equatorial location',
      'Magdalena River valley creates unique microclimate',
      'Small family farms with meticulous care',
      'Volcanic soil provides excellent mineral content'
    ],
    description: 'Huila\'s diverse microclimates and volcanic soils create ideal conditions for coffee cultivation. The region\'s two harvest seasons and careful processing traditions produce consistently balanced coffees with rich chocolate notes and bright citrus undertones, representing the best of Colombian coffee craftsmanship.'
  },

  // Guatemala
  'Guatemala-Antigua': {
    country: 'Guatemala',
    region: 'Antigua',
    climate: 'Subtropical highland climate with distinct wet and dry seasons',
    altitude: '1,500-1,700 meters above sea level',
    soilType: 'Volcanic pumice soil with excellent drainage',
    harvestSeason: 'December to March',
    processingTradition: 'Sun-dried patio processing with careful moisture control',
    flavorCharacteristics: ['Full body', 'Smoky undertones', 'Spice complexity', 'Dark chocolate'],
    uniqueFactors: [
      'Surrounded by three active volcanoes',
      'Volcanic ash creates mineral-rich soil',
      'Cool nights and warm days ideal for flavor development',
      'Traditional patio drying methods'
    ],
    description: 'Antigua\'s dramatic volcanic landscape creates one of the world\'s most distinctive coffee terroirs. Surrounded by three active volcanoes, the region\'s mineral-rich soil and unique microclimate produce full-bodied coffees with characteristic smoky undertones and complex spice notes that reflect the dramatic landscape.'
  },

  // Brazil
  'Brazil-Santos': {
    country: 'Brazil',
    region: 'Santos',
    climate: 'Tropical climate with distinct wet and dry seasons',
    altitude: '600-1,200 meters above sea level',
    soilType: 'Red clay soil rich in iron oxide',
    harvestSeason: 'May to September',
    processingTradition: 'Natural sun-drying on concrete patios',
    flavorCharacteristics: ['Low acidity', 'Nutty flavors', 'Chocolate notes', 'Full body'],
    uniqueFactors: [
      'Largest coffee producing region in the world',
      'Mechanized harvesting and processing',
      'Natural processing enhances sweetness',
      'Consistent quality through modern techniques'
    ],
    description: 'Santos represents Brazil\'s coffee excellence through scale and innovation. The region\'s red clay soils, natural processing methods, and advanced agricultural techniques produce smooth, low-acid coffees with rich nutty and chocolate characteristics that form the backbone of many espresso blends worldwide.'
  },

  // Kenya
  'Kenya-Nyeri': {
    country: 'Kenya',
    region: 'Nyeri',
    climate: 'Equatorial highland climate with two rainy seasons',
    altitude: '1,300-2,000 meters above sea level',
    soilType: 'Red volcanic soil with high phosphorus content',
    harvestSeason: 'October to December, June to August',
    processingTradition: 'Double fermentation washed process',
    flavorCharacteristics: ['Wine-like acidity', 'Black currant notes', 'Full body', 'Complex fruit'],
    uniqueFactors: [
      'Mount Kenya\'s volcanic slopes provide ideal terroir',
      'Double fermentation enhances fruit characteristics',
      'Cooperative system ensures quality control',
      'SL28 and SL34 cultivars create unique flavor profile'
    ],
    description: 'Nyeri\'s position on Mount Kenya\'s slopes creates exceptional terroir for coffee cultivation. The region\'s red volcanic soil, double fermentation processing, and unique SL cultivars produce coffees with distinctive wine-like acidity and black currant notes that have made Kenyan coffee legendary among connoisseurs.'
  },

  // Costa Rica
  'Costa Rica-Tarrazú': {
    country: 'Costa Rica',
    region: 'Tarrazú',
    climate: 'Tropical highland climate with distinct wet and dry seasons',
    altitude: '1,200-1,900 meters above sea level',
    soilType: 'Volcanic soil with excellent drainage',
    harvestSeason: 'December to March',
    processingTradition: 'Honey and washed processing with precise control',
    flavorCharacteristics: ['Bright acidity', 'Honey sweetness', 'Citrus notes', 'Clean finish'],
    uniqueFactors: [
      'Strict altitude requirements for classification',
      'Honey processing creates unique sweetness',
      'Micromill revolution improving quality',
      'Sustainable farming practices'
    ],
    description: 'Tarrazú\'s high-altitude volcanic slopes and innovative processing methods create some of Costa Rica\'s finest coffees. The region\'s honey processing tradition and micromill revolution have produced coffees with perfect balance of bright acidity, natural sweetness, and clean citrus notes that exemplify Central American excellence.'
  },

  // Jamaica
  'Jamaica-Blue Mountain': {
    country: 'Jamaica',
    region: 'Blue Mountain',
    climate: 'Tropical maritime climate with high humidity and rainfall',
    altitude: '900-1,500 meters above sea level',
    soilType: 'Well-draining volcanic soil with high organic content',
    harvestSeason: 'September to February',
    processingTradition: 'Fully washed with extended fermentation',
    flavorCharacteristics: ['Mild acidity', 'Perfect balance', 'Subtle complexity', 'Clean finish'],
    uniqueFactors: [
      'Protected designation of origin',
      'Constant cloud cover creates unique microclimate',
      'Hand-picked and processed with extreme care',
      'Limited production area increases exclusivity'
    ],
    description: 'Blue Mountain\'s misty peaks and protected growing conditions create one of the world\'s most prized coffees. The region\'s constant cloud cover, volcanic soil, and meticulous hand-processing produce exceptionally balanced coffees with subtle complexity and perfect harmony that commands premium prices globally.'
  },

  // Hawaii
  'United States-Kona, Hawaii': {
    country: 'United States',
    region: 'Kona, Hawaii',
    climate: 'Tropical climate with consistent temperatures and afternoon cloud cover',
    altitude: '150-900 meters above sea level',
    soilType: 'Young volcanic soil with excellent drainage',
    harvestSeason: 'August to January',
    processingTradition: 'Wet processing with careful sun-drying',
    flavorCharacteristics: ['Low acidity', 'Smooth body', 'Nutty flavors', 'Chocolate notes'],
    uniqueFactors: [
      'Only commercial coffee grown in the United States',
      'Volcanic slopes of Mauna Loa provide ideal terroir',
      'Afternoon cloud cover protects from harsh sun',
      'Small family farms with artisanal processing'
    ],
    description: 'Kona\'s unique position on volcanic slopes creates America\'s only commercial coffee region. The combination of volcanic soil, consistent climate, and afternoon cloud cover produces smooth, low-acid coffees with distinctive nutty and chocolate characteristics that represent Hawaiian coffee excellence.'
  },

  // Yemen
  'Yemen-Mocha': {
    country: 'Yemen',
    region: 'Mocha',
    climate: 'Arid highland climate with minimal rainfall',
    altitude: '1,000-2,500 meters above sea level',
    soilType: 'Rocky, mineral-rich soil with excellent drainage',
    harvestSeason: 'October to December',
    processingTradition: 'Ancient natural sun-drying methods',
    flavorCharacteristics: ['Wine-like complexity', 'Chocolate notes', 'Fruity acidity', 'Full body'],
    uniqueFactors: [
      'Ancient coffee cultivation dating back centuries',
      'Terraced mountain farms with traditional methods',
      'Natural processing enhances fruit characteristics',
      'Heirloom varieties with unique genetics'
    ],
    description: 'Yemen\'s ancient coffee traditions and challenging growing conditions create some of the world\'s most complex coffees. The region\'s terraced mountain farms, natural processing methods, and heirloom varieties produce wines-like coffees with intense fruit characteristics that reflect thousands of years of coffee cultivation heritage.'
  },

  // Rwanda
  'Rwanda-Nyamasheke': {
    country: 'Rwanda',
    region: 'Nyamasheke',
    climate: 'Tropical highland climate with two rainy seasons',
    altitude: '1,500-2,000 meters above sea level',
    soilType: 'Volcanic soil with high organic content',
    harvestSeason: 'March to July',
    processingTradition: 'Fully washed with careful quality control',
    flavorCharacteristics: ['Bright acidity', 'Floral notes', 'Clean body', 'Citrus complexity'],
    uniqueFactors: [
      'Post-genocide coffee industry renaissance',
      'Cooperative washing stations ensure quality',
      'High altitude creates slow cherry maturation',
      'Focus on specialty coffee production'
    ],
    description: 'Rwanda\'s coffee renaissance has transformed Nyamasheke into a specialty coffee powerhouse. The region\'s high altitude, volcanic soil, and cooperative washing stations produce exceptionally clean coffees with bright acidity and complex floral notes that showcase Rwanda\'s commitment to quality coffee production.'
  },

  // Panama
  'Panama-Boquete': {
    country: 'Panama',
    region: 'Boquete',
    climate: 'Tropical highland climate with consistent temperatures',
    altitude: '1,200-2,000 meters above sea level',
    soilType: 'Volcanic soil enriched by mineral deposits',
    harvestSeason: 'December to March',
    processingTradition: 'Innovative processing methods with precise control',
    flavorCharacteristics: ['Exceptional complexity', 'Floral aromatics', 'Tea-like body', 'Tropical fruit'],
    uniqueFactors: [
      'Home to the famous Geisha variety',
      'Innovative processing techniques',
      'Microclimate diversity within small area',
      'Premium auction prices for exceptional lots'
    ],
    description: 'Boquete\'s diverse microclimates and innovative farming practices have revolutionized specialty coffee. The region\'s volcanic soil, careful processing methods, and famous Geisha variety produce coffees with unprecedented complexity and floral characteristics that command record auction prices worldwide.'
  }
};

// Function to get region information by country and region
export const getRegionInfo = (country: string, region: string): RegionInfo | null => {
  const key = `${country}-${region}`;
  return regionDatabase[key] || null;
};

// Function to get all available regions for a country
export const getRegionsByCountry = (country: string): RegionInfo[] => {
  return Object.values(regionDatabase).filter(region => region.country === country);
};