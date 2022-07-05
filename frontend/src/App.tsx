import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import './App.css';
import { Home } from './components/templates/Home/Home';
import { Results } from './components/templates/Results/Results';
import { Breadcrumb } from './components/atoms/Breadcrumb/Breadcrumb';
import { ItemDetail } from './components/templates/Results/ItemDetail/ItemDetail';
import { HeaderContent } from './components/organisms/HeaderContent/HeaderContent';

function App() {
  return (
    <Router>
      <div className="main-container">
        <header>
          <div>
            <HeaderContent />
          </div>
        </header>

        <main>
          <div>
            <Routes>
              <Route path="/" element={<> </>} />
              <Route path="/items" element={<Breadcrumb />} />
              <Route path="/items/:id" element={<Breadcrumb />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<Results />} />
              <Route path="/items/:id" element={<ItemDetail />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
