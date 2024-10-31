// src/App.js
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RedButton from './components/Buttons/RedButton';
import './App.css';
import './index.css';


function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return (
    <div>
      <Header />
      <main>
      <div className="App">
      <RedButton
        label="Click Me" 
        customStyle="text-lg shadow-lg " 
        onClick={handleClick} 
      />
    
    </div>
    <div className='mulishbold'>drrerr</div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
