import React from 'react';
import BannerSection from './BannerSection';
import BannerLeftSection from './BannerLeftSection';
import strings from '../../strings/strings'; // Adjust the import path as necessary

function Banner({ style }) {
    return (
        <div className='bg-[#020A19]'>
            <div className='custom_width flex max-xl:flex-col-reverse max-xl:items-center justify-between items-center gap-[150px] max-xl:p-[0px_0_30px]  p-[0px_0_60px] bg-[#020A19]'>
                <BannerLeftSection />
                <BannerSection />
            </div>

            <div className="bg-[#1A1C2B] md:py-[30px]">
                <div className="w-[88%] max-w-[1300px] mx-auto">
                    <div className="flex flex-col max-md:items-center md:flex-row justify-center mx-[0px] md:justify-between md:mx-[-10px] lg:mx-[-25px] xl:mx-[-45px]">
                        {strings.BannerBottom.map((BannerBottom, index) => (
                            <React.Fragment key={index}>
                                <a
                                    target="_blank"
                                    className=" max-w-[340px] md:max-w-[27%] flex-[0_0_100%] md:flex-[0_0_27%] px-[0px] py-[40px] md:py-[0px] md:px-[10px] lg:px-[25px] xl:px-[45px] transition-all duration-500 ease-in-out hover:mt-[-5px] hover:mb-[5px]"
                                    href={BannerBottom.url}
                                >
                                    <div className="flex flex-col items-center md:items-baseline ">
                                        <div className="flex mb-[15px]">
                                            <div className="flex items-center min-w-[82px] max-w-[156px] max-h-[25px] w-full h-full">
                                                <img
                                                    alt={BannerBottom.altText}
                                                    loading="lazy"
                                                    width="156"
                                                    height="25"
                                                    className="w-full max-w-full h-[25px] object-cover"
                                                    src={BannerBottom.img}
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="text-[14px] leading-[22px] text-[rgb(255,255,255,60%)] text-center md:text-left">{BannerBottom.text}</p>
                                        </div>
                                    </div>
                                </a>
                                {index < strings.BannerBottom.length - 1 && (
                                    <div className="w-[107px] md:w-[1px] bg-[rgb(255,255,255,20%)] basis-[1px] last:hidden"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
