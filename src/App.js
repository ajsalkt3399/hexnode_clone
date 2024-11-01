// src/App.js
import React from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';
import NavBar from './components/Header/NavBar';
import Banner from './components/BannerSection/Banner';


function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };
  return (
    <div className="bg-[#020A19] ">
      <NavBar />


      {/* Main Sections */}
      <main className=''>
        <Banner />

    
      </main>


      {/* Footer */}
      <div className='bg-[#f2f2f2] '>
        <Footer style="custom_width" />
      </div>

    </div>
  );
}

export default App;
