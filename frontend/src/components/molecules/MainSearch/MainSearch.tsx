import React from 'react';
import './MainSearch.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SearchInput } from '../../atoms/SearchInput/SearchInput';
import { SearchBoton } from '../../atoms/SearchBoton/SearchBoton';

export function MainSearch() {
  const { querySearcher } = useSelector((state:any) => state.items);
  const navigate = useNavigate();

  const search = (e: any) => {
    e.preventDefault();
    navigate(`/items?search=${querySearcher}`);
  };

  return (
    <form className="MainSearch" onSubmit={(e) => { search(e); }}>
      <SearchInput />
      <SearchBoton />
    </form>
  );
}
