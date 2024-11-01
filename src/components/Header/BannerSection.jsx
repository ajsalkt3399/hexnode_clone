import React from 'react';
import Banner from '../../Assets/images/image_7.jpeg';
import Banner_top from '../../Assets/images/image_6.png';

function BannerSection({ style }) {
    return (
        <div className={`flex ${style} items-center justify-center`}>
            <div className='w-full h-full max-w-[610px] relative'>
                <div className='relative'>
                    <img src={Banner} alt="banner" className='w-full h-auto' />
                    <div className='absolute top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2'>
                        <img src={Banner_top} alt="banner" className='w-full h-auto' />
                    </div>
                    <div className='absolute top-1/2 '>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerSection;
