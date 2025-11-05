import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getCoffeeById } from '@/lib/data/mockCoffees';
import { ErrorBoundary } from '@/components/ui';
import { getCoffeeBeanIllustration } from '@/components/ui/CoffeeBeanIllustrations';
import { getRegionInfo } from '@/lib/data/regionInfo';
import { RegionInfo } from '@/components/coffee/RegionInfo';
import { BrewingRecommendations } from '@/components/coffee/BrewingRecommendations';
import styles from './page.module.scss';

interface CoffeeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoffeeDetailPage({ params }: CoffeeDetailPageProps) {
  const { id } = await params;
  const coffee = getCoffeeById(id);

  if (!coffee) {
    notFound();
  }

  const regionInfo = coffee.origin.region ? getRegionInfo(coffee.origin.country, coffee.origin.region) : null;

  return (
    <ErrorBoundary>
      <div className={styles.coffeeDetail}>
        <div className={styles.hero}>
          <div className={styles.imageContainer}>
            {coffee.imageUrl ? (
              <Image
                src={coffee.imageUrl}
                alt={coffee.name}
                width={400}
                height={300}
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholderImage}>
                {(() => {
                  const BeanComponent = getCoffeeBeanIllustration();
                  return <BeanComponent className={styles.coffeeBeanIcon} size={160} />;
                })()}
              </div>
            )}
          </div>
          
          <div className={styles.info}>
            <h1 className={styles.name}>{coffee.name}</h1>
            
            <div className={styles.origin}>
              <h3>Origin</h3>
              <p>{coffee.origin.country}</p>
              {coffee.origin.region && <p>{coffee.origin.region}</p>}
              {coffee.origin.farm && <p>{coffee.origin.farm}</p>}
              {coffee.origin.altitude && <p>{coffee.origin.altitude}m altitude</p>}
            </div>
            
            <div className={styles.processing}>
              <div className={styles.detail}>
                <span className={styles.label}>Roast Level</span>
                <span className={styles.value}>
                  {coffee.roastLevel.replace('_', ' ').toLowerCase()}
                </span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Processing</span>
                <span className={styles.value}>
                  {coffee.processingMethod.toLowerCase()}
                </span>
              </div>

            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          {regionInfo && (
            <RegionInfo regionInfo={regionInfo} />
          )}
          
          <BrewingRecommendations coffee={coffee} />
          
          <section className={styles.description}>
            <h2>Description</h2>
            <p>{coffee.description}</p>
          </section>
          
          <section className={styles.flavorProfile}>
            <h2>Flavor Profile</h2>
            <div className={styles.flavorScales}>
              <div className={styles.scale}>
                <span className={styles.scaleLabel}>Acidity</span>
                <div className={styles.scaleBar}>
                  <div 
                    className={styles.scaleFill}
                    style={{ width: `${coffee.flavorProfile.acidity * 10}%` }}
                  />
                </div>
                <span className={styles.scaleValue}>{coffee.flavorProfile.acidity}/10</span>
              </div>
              
              <div className={styles.scale}>
                <span className={styles.scaleLabel}>Body</span>
                <div className={styles.scaleBar}>
                  <div 
                    className={styles.scaleFill}
                    style={{ width: `${coffee.flavorProfile.body * 10}%` }}
                  />
                </div>
                <span className={styles.scaleValue}>{coffee.flavorProfile.body}/10</span>
              </div>
              
              <div className={styles.scale}>
                <span className={styles.scaleLabel}>Sweetness</span>
                <div className={styles.scaleBar}>
                  <div 
                    className={styles.scaleFill}
                    style={{ width: `${coffee.flavorProfile.sweetness * 10}%` }}
                  />
                </div>
                <span className={styles.scaleValue}>{coffee.flavorProfile.sweetness}/10</span>
              </div>
              
              <div className={styles.scale}>
                <span className={styles.scaleLabel}>Bitterness</span>
                <div className={styles.scaleBar}>
                  <div 
                    className={styles.scaleFill}
                    style={{ width: `${coffee.flavorProfile.bitterness * 10}%` }}
                  />
                </div>
                <span className={styles.scaleValue}>{coffee.flavorProfile.bitterness}/10</span>
              </div>
            </div>
            
            <div className={styles.flavorNotes}>
              <div className={styles.noteGroup}>
                <h4>Flavor Notes</h4>
                <div className={styles.tags}>
                  {coffee.flavorProfile.flavorNotes.map((note, index) => (
                    <span key={index} className={styles.tag}>
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className={styles.noteGroup}>
                <h4>Aroma Notes</h4>
                <div className={styles.tags}>
                  {coffee.flavorProfile.aromaNotes.map((note, index) => (
                    <span key={index} className={styles.tag}>
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {coffee.brewingMethods && coffee.brewingMethods.length > 0 && (
            <section className={styles.brewingMethods}>
              <h2>Brewing Methods</h2>
              {coffee.brewingMethods.map((method, index) => (
                <div key={index} className={styles.brewingMethod}>
                  <h3>{method.name}</h3>
                  <div className={styles.brewingSpecs}>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Grind Size</span>
                      <span className={styles.specValue}>{method.grindSize}</span>
                    </div>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Water Temp</span>
                      <span className={styles.specValue}>{method.waterTemp}°F</span>
                    </div>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Brew Time</span>
                      <span className={styles.specValue}>{method.brewTime}</span>
                    </div>
                    <div className={styles.spec}>
                      <span className={styles.specLabel}>Ratio</span>
                      <span className={styles.specValue}>{method.ratio}</span>
                    </div>
                  </div>
                  <div className={styles.instructions}>
                    <h4>Instructions</h4>
                    <ol>
                      {method.instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}