import React, { useState } from 'react';
import './SearchInput.css';

export function SearchInput() {
  const [search, setSearch] = useState('Apple ipod');

  return (
    <input
      type="text"
      placeholder="Nunca dejes de buscar"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
