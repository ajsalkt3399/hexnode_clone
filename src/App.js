import React from 'react';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';
import NavBar from './components/Header/NavBar';
import Banner from './components/BannerSection/Banner';
import WhyHexSection from './components/WhyHexanodesSection/WhyHexSection';
import FeatureSection from './components/FeaturesSection/FeatureSection';
import PlatformsSection from './components/PlatformsSection/PlatformsSection';
import CustomerSection from './components/CustomersSection/CustomerSection';

function App() {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="bg-[#020A19]">
      <NavBar />

      {/* Main Sections */}
      <main className="max-xl:pt-[85px] pt-[130px]">
        <Banner />
        <WhyHexSection />
        <FeatureSection />
        <PlatformsSection />
        <CustomerSection/>
      </main>

      {/* Footer */}
      <div className="bg-[#f2f2f2]">
        <Footer style="custom_width" />
      </div>
    </div>
  );
}

export default App;
