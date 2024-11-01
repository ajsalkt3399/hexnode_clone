// src/App.js
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import './index.css';


function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return (
    <div>
      <Header style=""/>
      <main className='h-[2000px]'>
dd
      </main>
      <div className='bg-[#f2f2f2] '>
        <Footer style="custom_width" />
      </div>
     
    </div>
  );
}

export default App;
