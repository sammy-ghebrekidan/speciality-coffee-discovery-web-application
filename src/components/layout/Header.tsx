import React from 'react';
import { TabNavigation } from './TabNavigation';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.logo}>Coffee Discovery</h1>
          <p className={styles.tagline}>Specialty beans & flavor profiles</p>
        </div>
        <TabNavigation />
      </div>
    </header>
  );
};