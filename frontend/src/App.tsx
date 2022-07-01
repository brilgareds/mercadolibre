import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Breadcrumb } from './components/atoms/Breadcrumb/Breadcrumb';
import { HeaderContent } from './components/organisms/HeaderContent/HeaderContent';
import { Home } from './components/templates/Home/Home';
import { ItemDetail } from './components/templates/Results/ItemDetail/ItemDetail';
import { Results } from './components/templates/Results/Results';

function App() {
  return (
    <div className="main-container">
      <header>
        <div>
          <HeaderContent />
        </div>
      </header>

      <main>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<> </>} />
              <Route path="/*" element={<Breadcrumb />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<Results />} />
              <Route path="/items/:id" element={<ItemDetail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
}

export default App;
