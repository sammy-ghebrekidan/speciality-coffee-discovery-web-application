import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee } from '@/lib/types/coffee';
import { getCoffeeBeanIllustration } from '@/components/ui/CoffeeBeanIllustrations';
import { getContinentColor } from '@/lib/utils/continentColors';
import { getRegionInfo } from '@/lib/data/regionInfo';
import styles from './CoffeeCard.module.scss';

interface CoffeeCardProps {
  coffee: Coffee;
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const formatRoastLevel = (roastLevel: string) => {
    return roastLevel.replace('_', ' ').toLowerCase();
  };

  const continentColor = getContinentColor(coffee.origin.country);
  const regionInfo = coffee.origin.region 
    ? getRegionInfo(coffee.origin.country, coffee.origin.region) 
    : null;

  return (
    <Link href={`/coffee/${coffee.id}`} className={styles.cardLink}>
      <article className={styles.coffeeCard}>
        <div 
          className={styles.imageContainer}
          style={{ backgroundColor: continentColor }}
        >
          {coffee.imageUrl ? (
            <Image
              src={coffee.imageUrl}
              alt={coffee.name}
              width={280}
              height={200}
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholderImage}>
              {(() => {
                const BeanComponent = getCoffeeBeanIllustration();
                return <BeanComponent className={styles.coffeeBeanIcon} size={80} />;
              })()}
            </div>
          )}
          {coffee.featured && (
            <div className={styles.featuredBadge}>
              Featured
            </div>
          )}
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.coffeeName}>{coffee.name}</h3>
          
          <p className={styles.coffeeOrigin}>
            {coffee.origin.country}
            {coffee.origin.region && ` • ${coffee.origin.region}`}
          </p>
          
          <p className={styles.roastLevel}>
            {formatRoastLevel(coffee.roastLevel)}
          </p>
          
          <div className={styles.flavorProfile}>
            {coffee.flavorProfile.flavorNotes.slice(0, 3).map((note, index) => (
              <span key={index} className={styles.flavorTag}>
                {note}
              </span>
            ))}
          </div>
          
          {regionInfo && (
            <div className={styles.regionHint}>
              <span className={styles.regionIcon}>🌍</span>
              <span className={styles.regionText}>
                {regionInfo.altitude} • {regionInfo.climate.split(' ')[0]} climate
              </span>
            </div>
          )}

        </div>
      </article>
    </Link>
  );
};