import React from 'react';
import './MainSearch.css';
import { SearchInput } from '../../atoms/SearchInput/SearchInput';
import { SearchBoton } from '../../atoms/SearchBoton/SearchBoton';

export function MainSearch() {
  return (
    <div className="MainSearch">
      <SearchInput />
      <SearchBoton />
    </div>
  );
}
