import React from 'react';
import BannerSection from './BannerSection';
import BannerLeftSection from './BannerLeftSection';
import strings from '../../strings/strings'; // Adjust the import path as necessary

function Banner({ style }) {
    return (
        <div className='bg-[#020A19]'>
            <div className='custom_width flex max-xl:flex-col-reverse max-xl:items-center justify-between items-center gap-[150px]  max-xl:p-[85px_0_30px]  p-[130px_0_60px] bg-[#020A19]'>
                <BannerLeftSection />
                <BannerSection />
            </div>
            <div className='bg-[#1A1C2B]'>
                <div className="md:py-[30px] flex custom_width">
                    {strings.BannerBottom.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.url} 
                            className="flex flex-col py-4 transition-all duration-500 ease-in-out hover:mt-[-5px] cursor-pointer" // Added transition and hover effect
                            target="_blank" // Optional: open in a new tab
                            rel="noopener noreferrer" // Security best practice when using target="_blank"
                        >
                            <div className='flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full'>
                                <img src={item.img} alt={`Banner Image ${index + 1}`} className='' />
                            </div>
                            <div className="text-white">{item.text}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;
