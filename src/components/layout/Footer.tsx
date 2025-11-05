import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.title}>Coffee Discovery</h3>
            <p className={styles.description}>
              Exploring specialty coffee beans and flavor profiles from around the world.
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Explore</h4>
              <ul className={styles.linkList}>
                <li><Link href="/" className={styles.link}>Coffee Catalog</Link></li>
                <li><Link href="/flavors" className={styles.link}>Flavor Profiles</Link></li>
                <li><Link href="/brewing" className={styles.link}>Brewing Guides</Link></li>
              </ul>
            </div>
            
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Learn</h4>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>Coffee Origins</a></li>
                <li><a href="#" className={styles.link}>Processing Methods</a></li>
                <li><a href="#" className={styles.link}>Roast Levels</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 Coffee Discovery Platform. Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};