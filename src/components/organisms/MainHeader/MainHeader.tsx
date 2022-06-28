import React from 'react';
import './MainHeader.css';
import { MainSearch } from '../../molecules/MainSearch/MainSearch';
import { LogoMeli } from '../../atoms/LogoMeli/LogoMeli';

export function MainHeader() {
  return (
    <div className="main-header">
      <LogoMeli />
      <MainSearch />
    </div>
  );
}
