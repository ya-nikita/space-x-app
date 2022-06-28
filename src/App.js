import React from 'react';

import './index.css';
import Header from './components/Header';
import SectionWrapper from './components/SectionWrapper';

function App() {
  return (
    <div className="app-container">
      <section className='main-section'>
        <Header />
        <SectionWrapper />
      </section>
    </div>
  );
}

export default App;
