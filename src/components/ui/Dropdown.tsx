'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';

export interface DropdownOption {
  value: string;
  label: string;
  count?: number;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  multiSelect?: boolean;
  placeholder?: string;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedValues,
  onSelectionChange,
  multiSelect = false,
  placeholder = 'Select...',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onSelectionChange(newValues);
    } else {
      onSelectionChange([value]);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    if (selectedValues.length === 1) {
      const option = options.find(opt => opt.value === selectedValues[0]);
      return option?.label || selectedValues[0];
    }
    return `${selectedValues.length} selected`;
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectionChange([]);
  };

  return (
    <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
      <label className={styles.label}>{label}</label>
      
      <div 
        className={`${styles.trigger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.displayText}>{getDisplayText()}</span>
        
        {selectedValues.length > 0 && (
          <button 
            className={styles.clearButton}
            onClick={clearSelection}
            type="button"
            aria-label="Clear selection"
          >
            ×
          </button>
        )}
        
        <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}>
          ▼
        </span>
      </div>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                selectedValues.includes(option.value) ? styles.selected : ''
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {multiSelect && (
                <input
                  type="checkbox"
                  checked={selectedValues.includes(option.value)}
                  onChange={() => {}} // Handled by onClick
                  className={styles.checkbox}
                />
              )}
              
              <span className={styles.optionLabel}>{option.label}</span>
              
              {option.count !== undefined && (
                <span className={styles.count}>({option.count})</span>
              )}
            </div>
          ))}
          
          {options.length === 0 && (
            <div className={styles.noOptions}>No options available</div>
          )}
        </div>
      )}
    </div>
  );
};