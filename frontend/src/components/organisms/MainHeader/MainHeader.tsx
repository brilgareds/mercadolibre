import React from 'react';
import './MainHeader.css';
import { MainSearch } from '../../molecules/MainSearch/MainSearch';
import { LogoML } from '../../atoms/LogoML/LogoML';

export function MainHeader() {
  return (
    <div className="main-header">
      <LogoML />
      <MainSearch />
    </div>
  );
}
