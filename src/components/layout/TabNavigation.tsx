'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './TabNavigation.module.scss';

interface Tab {
  id: string;
  label: string;
  href: string;
}

const tabs: Tab[] = [
  { id: 'catalog', label: 'Catalog', href: '/' },
  { id: 'flavors', label: 'Flavors', href: '/flavors' },
  { id: 'brewing', label: 'Brewing', href: '/brewing' }
];

export const TabNavigation: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getActiveTab = () => {
    if (pathname === '/') return 'catalog';
    if (pathname.startsWith('/flavors')) return 'flavors';
    if (pathname.startsWith('/brewing')) return 'brewing';
    return 'catalog';
  };

  const activeTab = getActiveTab();

  return (
    <nav className={styles.navigation}>
      <button
        className={styles.mobileToggle}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`${styles.tabs} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};