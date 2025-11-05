'use client';

import React, { useState, useMemo } from 'react';
import { Coffee } from '@/lib/types/coffee';
import { CoffeeFilters, FILTER_CATEGORIES, FilterOption } from '@/lib/types/filters';
import { getContinentName } from '@/lib/utils/continentColors';
import { Dropdown } from '@/components/ui/Dropdown';
import { TabNavigation, Tab } from '@/components/ui/TabNavigation';
import styles from './CoffeeFilter.module.scss';

interface CoffeeFilterProps {
  coffees: Coffee[];
  filters: CoffeeFilters;
  onFiltersChange: (filters: CoffeeFilters) => void;
  className?: string;
}

export const CoffeeFilter: React.FC<CoffeeFilterProps> = ({
  coffees,
  filters,
  onFiltersChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  // Generate dynamic options with counts
  const dynamicOptions = useMemo(() => {
    const originOptions: FilterOption[] = [];
    const flavorOptions: FilterOption[] = [];
    const continentCounts: Record<string, number> = {};
    const flavorCounts: Record<string, number> = {};

    coffees.forEach(coffee => {
      // Count origins
      const country = coffee.origin.country;
      const continent = getContinentName(country);
      continentCounts[continent] = (continentCounts[continent] || 0) + 1;

      // Count flavor notes
      coffee.flavorProfile.flavorNotes.forEach(note => {
        flavorCounts[note] = (flavorCounts[note] || 0) + 1;
      });
    });

    // Create origin options
    Object.entries(continentCounts).forEach(([continent, count]) => {
      originOptions.push({
        value: continent.toLowerCase().replace(/\s+/g, '-'),
        label: continent,
        count,
      });
    });

    // Create flavor options (top flavors)
    Object.entries(flavorCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 15)
      .forEach(([flavor, count]) => {
        flavorOptions.push({
          value: flavor,
          label: flavor.charAt(0).toUpperCase() + flavor.slice(1),
          count,
        });
      });

    return { originOptions, flavorOptions };
  }, [coffees]);

  // Create tabs with counts
  const tabs: Tab[] = useMemo(() => {
    const totalCount = coffees.length;
    const featuredCount = coffees.filter(c => c.featured).length;
    
    return [
      { id: 'all', label: 'All Coffees', count: totalCount },
      { id: 'featured', label: 'Featured', count: featuredCount },
      { id: 'light', label: 'Light Roasts', count: coffees.filter(c => c.roastLevel === 'LIGHT').length },
      { id: 'medium', label: 'Medium Roasts', count: coffees.filter(c => c.roastLevel === 'MEDIUM').length },
      { id: 'dark', label: 'Dark Roasts', count: coffees.filter(c => c.roastLevel === 'DARK').length },
    ];
  }, [coffees]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Apply quick filters based on tab
    let newFilters: CoffeeFilters = { ...filters };
    
    switch (tabId) {
      case 'all':
        newFilters = {};
        break;
      case 'featured':
        newFilters = { featured: true };
        break;
      case 'light':
        newFilters = { roastLevel: ['LIGHT', 'MEDIUM_LIGHT'] };
        break;
      case 'medium':
        newFilters = { roastLevel: ['MEDIUM'] };
        break;
      case 'dark':
        newFilters = { roastLevel: ['MEDIUM_DARK', 'DARK'] };
        break;
    }
    
    onFiltersChange(newFilters);
  };

  const handleFilterChange = (key: keyof CoffeeFilters, values: string[]) => {
    const newFilters = { ...filters };
    
    if (values.length === 0) {
      delete newFilters[key];
    } else {
      (newFilters as Record<string, string[] | boolean | [number, number] | undefined>)[key] = values;
    }
    
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    setActiveTab('all');
    onFiltersChange({});
  };

  const hasActiveFilters = Object.keys(filters).length > 0;

  return (
    <div className={`${styles.coffeeFilter} ${className}`}>
      {/* Tab Navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        className={styles.tabNavigation}
      />

      {/* Filter Controls */}
      <div className={styles.filterControls}>
        <div className={styles.filterRow}>
          <Dropdown
            label="Roast Level"
            options={FILTER_CATEGORIES.find(c => c.key === 'roastLevel')?.options || []}
            selectedValues={filters.roastLevel || []}
            onSelectionChange={(values) => handleFilterChange('roastLevel', values)}
            multiSelect
            placeholder="Any roast"
          />

          <Dropdown
            label="Origin Region"
            options={dynamicOptions.originOptions}
            selectedValues={filters.continent || []}
            onSelectionChange={(values) => handleFilterChange('continent', values)}
            multiSelect
            placeholder="Any region"
          />

          <Dropdown
            label="Flavor Profile"
            options={dynamicOptions.flavorOptions}
            selectedValues={filters.flavorNotes || []}
            onSelectionChange={(values) => handleFilterChange('flavorNotes', values)}
            multiSelect
            placeholder="Any flavor"
          />

          <Dropdown
            label="Processing"
            options={FILTER_CATEGORIES.find(c => c.key === 'processingMethod')?.options || []}
            selectedValues={filters.processingMethod || []}
            onSelectionChange={(values) => handleFilterChange('processingMethod', values)}
            multiSelect
            placeholder="Any method"
          />
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className={styles.filterActions}>
            <button 
              className={styles.clearButton}
              onClick={clearAllFilters}
              type="button"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className={styles.activeFilters}>
          <span className={styles.activeFiltersLabel}>Active filters:</span>
          <div className={styles.filterTags}>
            {Object.entries(filters).map(([key, values]) => {
              if (!values || (Array.isArray(values) && values.length === 0)) return null;
              
              const displayValues = Array.isArray(values) ? values : [values.toString()];
              return displayValues.map(value => (
                <span key={`${key}-${value}`} className={styles.filterTag}>
                  {value}
                  <button
                    className={styles.removeTag}
                    onClick={() => {
                      const currentValues = filters[key as keyof CoffeeFilters] as string[];
                      const newValues = Array.isArray(currentValues) 
                        ? currentValues.filter(v => v !== value)
                        : [];
                      handleFilterChange(key as keyof CoffeeFilters, newValues);
                    }}
                    type="button"
                    aria-label={`Remove ${value} filter`}
                  >
                    ×
                  </button>
                </span>
              ));
            })}
          </div>
        </div>
      )}
    </div>
  );
};