'use client';

import React, { useState } from 'react';
import { Coffee } from '@/lib/types/coffee';
import { calculateBrewingPerformance, BrewingMethodPerformance } from '@/lib/data/brewingPerformance';
import styles from './BrewingRecommendations.module.scss';

interface BrewingRecommendationsProps {
  coffee: Coffee;
  className?: string;
}

export const BrewingRecommendations: React.FC<BrewingRecommendationsProps> = ({ 
  coffee, 
  className = '' 
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const recommendations = calculateBrewingPerformance(coffee);

  const renderMethodCard = (method: BrewingMethodPerformance, category: 'best' | 'good' | 'not-recommended') => (
    <div 
      key={method.method}
      className={`${styles.methodCard} ${styles[category]} ${selectedMethod === method.method ? styles.selected : ''}`}
      onClick={() => setSelectedMethod(selectedMethod === method.method ? null : method.method)}
    >
      <div className={styles.methodHeader}>
        <div className={styles.methodIcon}>{method.icon}</div>
        <div className={styles.methodInfo}>
          <h4 className={styles.methodName}>{method.method}</h4>
          <div className={styles.methodMeta}>
            <span className={styles.score}>
              {method.suitabilityScore}/10
            </span>
            <span className={styles.difficulty}>
              {method.difficulty}
            </span>
          </div>
        </div>
        <div className={styles.scoreBar}>
          <div 
            className={styles.scoreFill}
            style={{ width: `${method.suitabilityScore * 10}%` }}
          />
        </div>
      </div>

      {selectedMethod === method.method && (
        <div className={styles.methodDetails}>
          <p className={styles.description}>{method.description}</p>
          
          {method.highlightedCharacteristics.length > 0 && (
            <div className={styles.section}>
              <h5 className={styles.sectionTitle}>Highlighted Characteristics</h5>
              <div className={styles.tagList}>
                {method.highlightedCharacteristics.map((char, index) => (
                  <span key={index} className={styles.characteristicTag}>
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}

          {method.pros.length > 0 && (
            <div className={styles.section}>
              <h5 className={styles.sectionTitle}>Why This Works</h5>
              <ul className={styles.prosList}>
                {method.pros.map((pro, index) => (
                  <li key={index} className={styles.prosItem}>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {method.cons.length > 0 && (
            <div className={styles.section}>
              <h5 className={styles.sectionTitle}>Considerations</h5>
              <ul className={styles.consList}>
                {method.cons.map((con, index) => (
                  <li key={index} className={styles.consItem}>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {method.recommendedFor.length > 0 && (
            <div className={styles.section}>
              <h5 className={styles.sectionTitle}>Recommended For</h5>
              <div className={styles.tagList}>
                {method.recommendedFor.map((rec, index) => (
                  <span key={index} className={styles.recommendedTag}>
                    {rec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className={`${styles.brewingRecommendations} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Brewing Method Performance</h3>
        <p className={styles.subtitle}>
          Recommendations based on {coffee.name}&apos;s flavor profile and characteristics
        </p>
      </div>

      {recommendations.bestMethods.length > 0 && (
        <div className={styles.category}>
          <h4 className={styles.categoryTitle}>
            <span className={styles.categoryIcon}>⭐</span>
            Best Methods (7.5+ score)
          </h4>
          <div className={styles.methodGrid}>
            {recommendations.bestMethods.map(method => renderMethodCard(method, 'best'))}
          </div>
        </div>
      )}

      {recommendations.goodMethods.length > 0 && (
        <div className={styles.category}>
          <h4 className={styles.categoryTitle}>
            <span className={styles.categoryIcon}>👍</span>
            Good Methods (6.0-7.4 score)
          </h4>
          <div className={styles.methodGrid}>
            {recommendations.goodMethods.map(method => renderMethodCard(method, 'good'))}
          </div>
        </div>
      )}

      {recommendations.notRecommended.length > 0 && (
        <div className={styles.category}>
          <h4 className={styles.categoryTitle}>
            <span className={styles.categoryIcon}>⚠️</span>
            Not Recommended (&lt;6.0 score)
          </h4>
          <div className={styles.methodGrid}>
            {recommendations.notRecommended.map(method => renderMethodCard(method, 'not-recommended'))}
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Scores are calculated based on roast level, flavor profile, processing method, and brewing characteristics. 
          Click on any method to see detailed recommendations.
        </p>
      </div>
    </div>
  );
};