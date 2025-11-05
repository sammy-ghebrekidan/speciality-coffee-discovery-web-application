'use client';

import React, { useState } from 'react';
import { FlavorWheel } from '@/components/flavor/FlavorWheel';
import { FlavorNote } from '@/lib/data/flavorWheel';
import { Coffee } from '@/lib/types/coffee';
import { mockCoffees } from '@/lib/data/mockCoffees';
import { CoffeeCard } from '@/components/coffee/CoffeeCard';
import { ErrorBoundary } from '@/components/ui';
import styles from './page.module.scss';

export default function FlavorsPage() {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorNote | null>(null);
  const [relatedCoffees, setRelatedCoffees] = useState<Coffee[]>([]);

  const handleFlavorSelect = (flavor: FlavorNote, coffees: Coffee[]) => {
    setSelectedFlavor(flavor);
    setRelatedCoffees(coffees);
  };

  return (
    <ErrorBoundary>
      <div className={styles.flavorsPage}>
        <FlavorWheel 
          coffees={mockCoffees}
          onFlavorSelect={handleFlavorSelect}
        />

        {selectedFlavor && relatedCoffees.length > 0 && (
          <div className={styles.resultsSection}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsTitle}>
                ☕ Coffees with {selectedFlavor.name} Notes
              </h2>
              <p className={styles.resultsSubtitle}>
                Discover {relatedCoffees.length} coffee{relatedCoffees.length !== 1 ? 's' : ''} that showcase {selectedFlavor.name.toLowerCase()} characteristics
              </p>
            </div>

            <div className={styles.coffeeGrid}>
              {relatedCoffees.map(coffee => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))}
            </div>
          </div>
        )}

        <div className={styles.insightsSection}>
          <h2 className={styles.insightsTitle}>🧠 Flavor Science & Insights</h2>
          <div className={styles.insightsGrid}>
            <div className={styles.insightCard}>
              <div className={styles.insightIcon}>🌱</div>
              <h3>Origin Impact</h3>
              <p>Altitude, climate, and soil composition contribute up to 60% of a coffee&apos;s flavor profile. Ethiopian coffees often exhibit floral notes due to their high-altitude growing conditions.</p>
              <div className={styles.insightStat}>
                <span className={styles.statNumber}>60%</span>
                <span className={styles.statLabel}>Flavor from Origin</span>
              </div>
            </div>
            
            <div className={styles.insightCard}>
              <div className={styles.insightIcon}>🔥</div>
              <h3>Roasting Chemistry</h3>
              <p>The Maillard reaction during roasting creates over 800 volatile compounds. Light roasts preserve origin flavors, while dark roasts develop caramelized notes.</p>
              <div className={styles.insightStat}>
                <span className={styles.statNumber}>800+</span>
                <span className={styles.statLabel}>Flavor Compounds</span>
              </div>
            </div>
            
            <div className={styles.insightCard}>
              <div className={styles.insightIcon}>👃</div>
              <h3>Aroma Perception</h3>
              <p>80% of what we taste is actually smell. Coffee releases over 40 aromatic compounds that our nose detects before the first sip.</p>
              <div className={styles.insightStat}>
                <span className={styles.statNumber}>80%</span>
                <span className={styles.statLabel}>Taste is Smell</span>
              </div>
            </div>
            
            <div className={styles.insightCard}>
              <div className={styles.insightIcon}>⚗️</div>
              <h3>Processing Methods</h3>
              <p>Natural processing enhances fruity flavors, washed processing highlights acidity, and honey processing balances sweetness and clarity.</p>
              <div className={styles.insightStat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Main Methods</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tipsSection}>
          <h2 className={styles.tipsTitle}>💡 Pro Tasting Tips</h2>
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipNumber}>1</span>
              <div className={styles.tipContent}>
                <h4>Smell First</h4>
                <p>Take a deep inhale before tasting. Your nose can detect flavors your tongue might miss.</p>
              </div>
            </div>
            <div className={styles.tip}>
              <span className={styles.tipNumber}>2</span>
              <div className={styles.tipContent}>
                <h4>Temperature Matters</h4>
                <p>Different flavors emerge as coffee cools. Try tasting at multiple temperatures.</p>
              </div>
            </div>
            <div className={styles.tip}>
              <span className={styles.tipNumber}>3</span>
              <div className={styles.tipContent}>
                <h4>Cleanse Your Palate</h4>
                <p>Use water or plain crackers between tastings to reset your taste buds.</p>
              </div>
            </div>
            <div className={styles.tip}>
              <span className={styles.tipNumber}>4</span>
              <div className={styles.tipContent}>
                <h4>Take Notes</h4>
                <p>Keep a flavor journal to track your preferences and discoveries over time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}