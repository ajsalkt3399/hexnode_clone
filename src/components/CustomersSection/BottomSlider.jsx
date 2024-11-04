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

  const images = [
    { src: Saic, alt: "SAIC" },
    { src: Wolt, alt: "Wolt" },
    { src: Polaris, alt: "Polaris" },
    { src: Lowes, alt: "Lowes" },
    { src: Marriott, alt: "Marriott" },
    { src: Gorillas, alt: "Gorillas" },
    { src: Hilton, alt: "Hilton" },
    { src: Costco, alt: "Costco" },
  ];

  return (
    <div className='relative w-full custom_width pt-[20px] pb-[60px] lg:pb-[80px] lg:pt-[30px] bg-[#FFFFFF]'>
      <Slider {...settings} className="relative overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className='flex items-center justify-center h-[71px]'>
            <img src={image.src} alt={image.alt} className="w-[180px]" />
          </div>
        ))}
      </Slider>

      {/* Left gradient */}
      <div className='w-[70px] sm:w-[100px] h-[100%]  absolute top-0 left-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]'></div>
      {/* Right gradient */}
      <div className='w-[70px] sm:w-[100px] h-[100%]  top-0 absolute right-0 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]'></div>
    </div>
  );
}

export default BottomSlider;
