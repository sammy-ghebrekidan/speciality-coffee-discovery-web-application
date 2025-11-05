'use client';

import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { Coffee } from '@/lib/types/coffee';
import { CoffeeFilter } from './CoffeeFilter';
import { ProductGrid } from './ProductGrid';
import { useFilter } from '@/contexts/FilterContext';
import { filterCoffees, sortCoffees, getFilterStats } from '@/lib/utils/filterCoffees';
import styles from './CoffeeCatalog.module.scss';

interface CoffeeCatalogProps {
  coffees: Coffee[];
  loading?: boolean;
  error?: string;
}

export const CoffeeCatalog: React.FC<CoffeeCatalogProps> = ({
  coffees,
  loading = false,
  error,
}) => {
  const { state, setFilters, setSort } = useFilter();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayedCount, setDisplayedCount] = useState(24);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isFiltersSticky, setIsFiltersSticky] = useState(false);
  const stickyFiltersRef = useRef<HTMLDivElement>(null);

  // Apply filters and sorting
  const processedCoffees = useMemo(() => {
    const filtered = filterCoffees(coffees, state.filters);
    return sortCoffees(filtered, state.sortBy, state.sortOrder);
  }, [coffees, state.filters, state.sortBy, state.sortOrder]);

  // Get displayed coffees (lazy loaded)
  const displayedCoffees = useMemo(() => {
    return processedCoffees.slice(0, displayedCount);
  }, [processedCoffees, displayedCount]);

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(24);
  }, [state.filters, state.sortBy, state.sortOrder]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (isLoadingMore || displayedCount >= processedCoffees.length) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Load more when user is 200px from bottom
    if (scrollTop + windowHeight >= documentHeight - 200) {
      setIsLoadingMore(true);
      
      // Simulate loading delay for better UX
      setTimeout(() => {
        setDisplayedCount(prev => Math.min(prev + 24, processedCoffees.length));
        setIsLoadingMore(false);
      }, 500);
    }
  }, [isLoadingMore, displayedCount, processedCoffees.length]);

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Sticky filter effect
  useEffect(() => {
    const handleStickyScroll = () => {
      if (stickyFiltersRef.current) {
        const rect = stickyFiltersRef.current.getBoundingClientRect();
        // Check if the element is stuck to the top (with small tolerance)
        const isSticky = rect.top <= 0;
        setIsFiltersSticky(isSticky);
      }
    };

    // Initial check
    handleStickyScroll();
    
    // Use requestAnimationFrame for better performance
    let ticking = false;
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleStickyScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    window.addEventListener('resize', handleStickyScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      window.removeEventListener('resize', handleStickyScroll);
    };
  }, []);

  // Get statistics for display
  const stats = useMemo(() => {
    return getFilterStats(processedCoffees);
  }, [processedCoffees]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, sortOrder] = event.target.value.split('-') as [
      'name' | 'country' | 'roastLevel' | 'featured',
      'asc' | 'desc'
    ];
    setSort(sortBy, sortOrder);
  };

  if (loading) {
    return (
      <div className={styles.catalog}>
        <div className={styles.header}>
          <h1 className={styles.title}>Coffee Catalog</h1>
        </div>
        <ProductGrid coffees={[]} loading={loading} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.catalog}>
        <div className={styles.header}>
          <h1 className={styles.title}>Coffee Catalog</h1>
        </div>
        <ProductGrid coffees={[]} error={error} />
      </div>
    );
  }

  return (
    <div className={styles.catalog}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>Explore Coffee Beans</h1>
            <p className={styles.subtitle}>
              Discover {coffees.length} specialty coffee beans from around the world
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.coffeeBeansPattern}>
              <div className={styles.bean}></div>
              <div className={styles.bean}></div>
              <div className={styles.bean}></div>
              <div className={styles.bean}></div>
              <div className={styles.bean}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div 
        ref={stickyFiltersRef} 
        className={`${styles.stickyFilters} ${isFiltersSticky ? styles.scrolled : ''}`}
      >
        <CoffeeFilter
          coffees={coffees}
          filters={state.filters}
          onFiltersChange={setFilters}
          className={styles.filterSection}
        />
      </div>

      {/* Results Header */}
      <div className={styles.resultsHeader}>
        <div className={styles.resultsInfo}>
          <span className={styles.resultsCount}>
            Showing {displayedCoffees.length} of {processedCoffees.length} {processedCoffees.length === 1 ? 'coffee' : 'coffees'}
            {processedCoffees.length !== coffees.length && (
              <span className={styles.filteredText}> (filtered from {coffees.length})</span>
            )}
          </span>
        </div>

        <div className={styles.resultsControls}>
          {/* Sort Dropdown */}
          <div className={styles.sortControl}>
            <label htmlFor="sort-select" className={styles.sortLabel}>
              Sort by:
            </label>
            <select
              id="sort-select"
              className={styles.sortSelect}
              value={`${state.sortBy}-${state.sortOrder}`}
              onChange={handleSortChange}
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="country-asc">Country (A-Z)</option>
              <option value="country-desc">Country (Z-A)</option>
              <option value="roastLevel-asc">Roast (Light to Dark)</option>
              <option value="roastLevel-desc">Roast (Dark to Light)</option>
              <option value="featured-desc">Featured First</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className={styles.viewToggle}>
            <button
              className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="1" width="6" height="6" rx="1"/>
                <rect x="9" y="1" width="6" height="6" rx="1"/>
                <rect x="1" y="9" width="6" height="6" rx="1"/>
                <rect x="9" y="9" width="6" height="6" rx="1"/>
              </svg>
            </button>
            <button
              className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="2" width="14" height="2" rx="1"/>
                <rect x="1" y="7" width="14" height="2" rx="1"/>
                <rect x="1" y="12" width="14" height="2" rx="1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Grid */}
      <div className={`${styles.gridContainer} ${styles[viewMode]}`}>
        <ProductGrid 
          coffees={displayedCoffees} 
          loading={false}
          error={undefined}
        />
        
        {/* Load More Indicator */}
        {isLoadingMore && (
          <div className={styles.loadingMore}>
            <div className={styles.loadingSpinner}></div>
            <span>Loading more coffee beans...</span>
          </div>
        )}
        
        {/* Load More Button (fallback for users who prefer clicking) */}
        {!isLoadingMore && displayedCount < processedCoffees.length && (
          <div className={styles.loadMoreSection}>
            <button 
              className={styles.loadMoreButton}
              onClick={() => {
                setIsLoadingMore(true);
                setTimeout(() => {
                  setDisplayedCount(prev => Math.min(prev + 24, processedCoffees.length));
                  setIsLoadingMore(false);
                }, 300);
              }}
            >
              Load More Coffee Beans ({processedCoffees.length - displayedCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Results Summary */}
      {processedCoffees.length > 0 && displayedCount >= processedCoffees.length && (
        <div className={styles.resultsSummary}>
          <div className={styles.summaryStats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{stats.featured}</span>
              <span className={styles.statLabel}>Featured</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{Object.keys(stats.continents).length}</span>
              <span className={styles.statLabel}>Regions</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{Object.keys(stats.roastLevels).length}</span>
              <span className={styles.statLabel}>Roast Types</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{Object.keys(stats.flavorNotes).length}</span>
              <span className={styles.statLabel}>Flavor Notes</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};