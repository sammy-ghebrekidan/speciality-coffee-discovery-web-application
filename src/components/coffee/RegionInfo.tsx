'use client';

import React from 'react';
import { RegionInfo as RegionInfoType } from '@/lib/data/regionInfo';
import styles from './RegionInfo.module.scss';

interface RegionInfoProps {
  regionInfo: RegionInfoType;
  className?: string;
}

export const RegionInfo: React.FC<RegionInfoProps> = ({ regionInfo, className = '' }) => {
  return (
    <div className={`${styles.regionInfo} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {regionInfo.region}, {regionInfo.country}
        </h3>
        <div className={styles.subtitle}>Coffee Growing Region</div>
      </div>

      <div className={styles.description}>
        <p>{regionInfo.description}</p>
      </div>

      <div className={styles.details}>
        <div className={styles.detailGrid}>
          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Climate</div>
            <div className={styles.detailValue}>{regionInfo.climate}</div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Altitude</div>
            <div className={styles.detailValue}>{regionInfo.altitude}</div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Soil Type</div>
            <div className={styles.detailValue}>{regionInfo.soilType}</div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Harvest Season</div>
            <div className={styles.detailValue}>{regionInfo.harvestSeason}</div>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Processing</div>
            <div className={styles.detailValue}>{regionInfo.processingTradition}</div>
          </div>
        </div>
      </div>

      <div className={styles.characteristics}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Flavor Characteristics</h4>
          <div className={styles.tagList}>
            {regionInfo.flavorCharacteristics.map((characteristic, index) => (
              <span key={index} className={styles.tag}>
                {characteristic}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Unique Factors</h4>
          <ul className={styles.factorList}>
            {regionInfo.uniqueFactors.map((factor, index) => (
              <li key={index} className={styles.factor}>
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};