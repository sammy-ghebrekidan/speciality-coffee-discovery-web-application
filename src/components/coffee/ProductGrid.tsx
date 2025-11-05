import React from 'react';
import { Coffee } from '@/lib/types/coffee';
import { CoffeeCard } from './CoffeeCard';
import { LoadingSpinner } from '@/components/ui';
import styles from './ProductGrid.module.scss';

interface ProductGridProps {
  coffees: Coffee[];
  loading?: boolean;
  error?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  coffees,
  loading = false,
  error
}) => {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner size="lg" />
        <p className={styles.loadingText}>Brewing coffee data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>
          Failed to load coffee data: {error}
        </p>
      </div>
    );
  }

  if (coffees.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyIcon}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="40"
              cy="40"
              rx="30"
              ry="25"
              fill="currentColor"
              opacity="0.2"
            />
            <path
              d="M20 40 Q40 25 60 40 Q40 55 20 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
        <h3 className={styles.emptyTitle}>No coffee beans found</h3>
        <p className={styles.emptyText}>
          Try adjusting your filters or search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};