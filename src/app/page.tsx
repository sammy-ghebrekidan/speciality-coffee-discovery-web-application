'use client';

import React from 'react';
import { mockCoffees } from '@/lib/data/mockCoffees';
import { CoffeeCatalog } from '@/components/coffee/CoffeeCatalog';
import { FilterProvider } from '@/contexts/FilterContext';
import { ErrorBoundary } from '@/components/ui';
import styles from './page.module.scss';

export default function Home() {
  return (
    <ErrorBoundary>
      <FilterProvider>
        <div className={styles.page}>
          <main className={styles.main}>
            <CoffeeCatalog coffees={mockCoffees} />
          </main>
        </div>
      </FilterProvider>
    </ErrorBoundary>
  );
}
