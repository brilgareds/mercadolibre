import React from 'react';
import './App.css';
import { Breadcrumb } from './components/atoms/Breadcrumb/Breadcrumb';
import { HeaderContent } from './components/organisms/HeaderContent/HeaderContent';
// import { Home } from './components/templates/Home/Home';
import { Results } from './components/templates/Results/Results';

function App() {
  // <Home />

  return (
    <div className="main-container">
      <header>
        <div>
          <HeaderContent />
        </div>
      </header>

      <main>
        <div>
          <Breadcrumb />
          <Results />
        </div>
      </main>
    </div>
  );
}

export default App;
