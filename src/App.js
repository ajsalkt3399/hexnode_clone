import React, { Suspense, lazy, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';
import NavBar from './components/Header/NavBar';
import Banner from './components/BannerSection/Banner';
import WhyHexSection from './components/WhyHexanodesSection/WhyHexSection';
import FeatureSection from './components/FeaturesSection/FeatureSection';
import PlatformsSection from './components/PlatformsSection/PlatformsSection';
import CustomerSection from './components/CustomersSection/CustomerSection';
import GetHexnodesSection from './components/Footer/GetHexnodesSection';
import InteractiveButton from './components/common/InteractiveButton';
import BounceModal from './components/BounceModal/BounceModal';

function App() {
  const [itsTimeToBounce, setItsTimeToBounce] = useState(false);

  
  const handleClick = () => {
    alert('Button Clicked!');
  };
  useEffect(() => {
    // if (!Cookies.get('nopopup')) {
      setItsTimeToBounce(true);
      // Cookies.set('nopopup', true, { expires: 1 });
    // }
  }, []);

  return (
    <>
      <div className="bg-[#020A19]">
        <NavBar />

        {/* Main Sections */}
        <main className="max-xl:pt-[85px] pt-[130px]">
          <Suspense fallback={<div>Loading...</div>}>
            <Banner />
            <WhyHexSection />
            <FeatureSection />
            <PlatformsSection />
            <CustomerSection />
            <GetHexnodesSection />
          </Suspense>
        </main>

        {/* Footer */}
        <div className="bg-[#f2f2f2]">
          <Footer />
        </div>

      </div>

      <InteractiveButton />
      {itsTimeToBounce &&
        <BounceModal setItsTimeToBounce={setItsTimeToBounce} />
      }

    </>
  );
}

export default App;
