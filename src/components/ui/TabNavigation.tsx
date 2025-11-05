import React from 'react';
import styles from './TabNavigation.module.scss';

export interface Tab {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div className={`${styles.tabNavigation} ${className}`}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''} ${
              tab.disabled ? styles.disabled : ''
            }`}
            onClick={() => !tab.disabled && onTabChange(tab.id)}
            disabled={tab.disabled}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            <span className={styles.tabLabel}>{tab.label}</span>
            {tab.count !== undefined && (
              <span className={styles.tabCount}>({tab.count})</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};