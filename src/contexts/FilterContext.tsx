'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CoffeeFilters } from '@/lib/types/filters';

interface FilterState {
  filters: CoffeeFilters;
  sortBy: 'name' | 'country' | 'roastLevel' | 'featured';
  sortOrder: 'asc' | 'desc';
}

type FilterAction =
  | { type: 'SET_FILTERS'; payload: CoffeeFilters }
  | { type: 'UPDATE_FILTER'; payload: { key: keyof CoffeeFilters; value: string[] | boolean | [number, number] | undefined } }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'SET_SORT'; payload: { sortBy: FilterState['sortBy']; sortOrder: FilterState['sortOrder'] } };

interface FilterContextType {
  state: FilterState;
  dispatch: React.Dispatch<FilterAction>;
  setFilters: (filters: CoffeeFilters) => void;
  updateFilter: (key: keyof CoffeeFilters, value: string[] | boolean | [number, number] | undefined) => void;
  clearFilters: () => void;
  setSort: (sortBy: FilterState['sortBy'], sortOrder: FilterState['sortOrder']) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const initialState: FilterState = {
  filters: {},
  sortBy: 'name',
  sortOrder: 'asc',
};

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    case 'UPDATE_FILTER':
      const newFilters = { ...state.filters };
      if (action.payload.value === undefined || 
          (Array.isArray(action.payload.value) && action.payload.value.length === 0)) {
        delete newFilters[action.payload.key];
      } else {
        (newFilters as Record<string, string[] | boolean | [number, number] | undefined>)[action.payload.key] = action.payload.value;
      }
      return {
        ...state,
        filters: newFilters,
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {},
      };
    case 'SET_SORT':
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder,
      };
    default:
      return state;
  }
}

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setFilters = (filters: CoffeeFilters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  const updateFilter = (key: keyof CoffeeFilters, value: string[] | boolean | [number, number] | undefined) => {
    dispatch({ type: 'UPDATE_FILTER', payload: { key, value } });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  const setSort = (sortBy: FilterState['sortBy'], sortOrder: FilterState['sortOrder']) => {
    dispatch({ type: 'SET_SORT', payload: { sortBy, sortOrder } });
  };

  const value: FilterContextType = {
    state,
    dispatch,
    setFilters,
    updateFilter,
    clearFilters,
    setSort,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};