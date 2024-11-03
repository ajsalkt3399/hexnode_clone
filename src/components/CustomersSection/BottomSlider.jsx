import React from 'react';
import Slider from 'react-slick';
import Saic from '../../Assets/images/saic.svg';
import Wolt from '../../Assets/images/wolt.svg';
import Polaris from '../../Assets/images/polaris.svg';
import Lowes from '../../Assets/images/lowes.svg';
import Marriott from '../../Assets/images/marriott-intl.svg';
import Gorillas from '../../Assets/images/gorillas.svg';
import Hilton from '../../Assets/images/hilton.svg';
import Costco from '../../Assets/images/costco.svg';

function BottomSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,      
  };

  return (
    <div className='relative w-full custom_width pt-[20px] pb-[60px] lg:pb-[80px] lg:pt-[30px] bg-[#FFFFFF]'>
      <Slider {...settings} className="relative  overflow-hidden">
        <div className='flex items-center justify-center h-[71px]'><img src={Saic} alt="SAIC" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Wolt} alt="Wolt" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Polaris} alt="Polaris" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Lowes} alt="Lowes" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Marriott} alt="Marriott" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Gorillas} alt="Gorillas" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Hilton} alt="Hilton" className="w-[180px]" /></div>
        <div className='flex items-center justify-center h-[71px]'><img src={Costco} alt="Costco" className="w-[180px]" /></div>
      </Slider>

      {/* Left gradient */}
      <div className='w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute top-0 left-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]'></div>
      {/* Right gradient */}
      <div className='w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] top-0 absolute right-0 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]'></div>
    </div>
  );
}

export default BottomSlider;
