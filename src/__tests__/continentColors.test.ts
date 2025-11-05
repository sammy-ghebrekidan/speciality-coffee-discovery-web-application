import { getContinentColor, getContinentName, CONTINENT_COLORS } from '@/lib/utils/continentColors';

describe('Continent Colors', () => {
  describe('getContinentColor', () => {
    it('should return correct colors for South American countries', () => {
      expect(getContinentColor('Brazil')).toBe(CONTINENT_COLORS['south-america']);
      expect(getContinentColor('colombia')).toBe(CONTINENT_COLORS['south-america']);
      expect(getContinentColor('PERU')).toBe(CONTINENT_COLORS['south-america']);
    });

    it('should return correct colors for African countries', () => {
      expect(getContinentColor('Ethiopia')).toBe(CONTINENT_COLORS.africa);
      expect(getContinentColor('kenya')).toBe(CONTINENT_COLORS.africa);
      expect(getContinentColor('RWANDA')).toBe(CONTINENT_COLORS.africa);
    });

    it('should return correct colors for Central American countries', () => {
      expect(getContinentColor('Guatemala')).toBe(CONTINENT_COLORS['central-america']);
      expect(getContinentColor('costa rica')).toBe(CONTINENT_COLORS['central-america']);
    });

    it('should return correct colors for Asia-Pacific countries', () => {
      expect(getContinentColor('Indonesia')).toBe(CONTINENT_COLORS['asia-pacific']);
      expect(getContinentColor('vietnam')).toBe(CONTINENT_COLORS['asia-pacific']);
    });

    it('should return default color for unmapped countries', () => {
      expect(getContinentColor('Unknown Country')).toBe(CONTINENT_COLORS.other);
      expect(getContinentColor('')).toBe(CONTINENT_COLORS.other);
    });

    it('should handle case-insensitive input', () => {
      expect(getContinentColor('BRAZIL')).toBe(getContinentColor('brazil'));
      expect(getContinentColor('Brazil')).toBe(getContinentColor('BRAZIL'));
    });
  });

  describe('getContinentName', () => {
    it('should return correct continent names', () => {
      expect(getContinentName('Brazil')).toBe('South America');
      expect(getContinentName('Ethiopia')).toBe('Africa');
      expect(getContinentName('Guatemala')).toBe('Central America');
      expect(getContinentName('Indonesia')).toBe('Asia-Pacific');
    });

    it('should return default name for unmapped countries', () => {
      expect(getContinentName('Unknown Country')).toBe('Other Regions');
    });
  });

  describe('Color palette completeness', () => {
    it('should have all required continent colors defined', () => {
      const requiredContinents = [
        'south-america',
        'central-america', 
        'africa',
        'asia-pacific',
        'caribbean',
        'other'
      ];

      requiredContinents.forEach(continent => {
        expect(CONTINENT_COLORS[continent as keyof typeof CONTINENT_COLORS]).toBeDefined();
        expect(typeof CONTINENT_COLORS[continent as keyof typeof CONTINENT_COLORS]).toBe('string');
        expect(CONTINENT_COLORS[continent as keyof typeof CONTINENT_COLORS]).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });

    it('should include the specified base colors', () => {
      const baseColors = ['#9ABBC0', '#E7B6AF', '#D6CFC9', '#DAC663', '#E06C4A', '#6E7879'];
      const continentColorValues = Object.values(CONTINENT_COLORS);
      
      baseColors.forEach(color => {
        expect(continentColorValues).toContain(color);
      });
    });
  });
});