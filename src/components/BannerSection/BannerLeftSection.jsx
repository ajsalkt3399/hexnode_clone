// src/components/BannerLeftSection.js
import React from 'react';
import strings from '../../strings/strings';
import Button from '../Buttons/Button';


function BannerLeftSection() {
    return (
        <div className="text-white max-xl:max-w-[554px]">
            <h2 className='text-[rgb(191,193,197,60%)] mulishsemibold text-[16px] leading-[20px] xl:text-left font-semibold mb-[15px]'>{strings.Banner.heading}</h2>
            <h1 className='text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left mulishbold antialiased'>{strings.Banner.subheading}</h1>
            <div className="text-[rgb(255,255,255,75%)] mulishsemibold font-normal text-[18px] leading-[28px] text-left mb-[15px]">{strings.Banner.description}</div>
            <div className='flex gap-2'>
                <input placeholder="Email" type="text" name="email" id="signup-email"
                    class="text-base leading-tight w-full h-14 rounded px-2.5 
         
              placeholder-gray-400"
                    value="">

                </input>
                <Button label="LETS TRY IT OUT!" customStyle="bg-red-500 hover:bg-red-600 h-14 w-[265px] focus:bg-[#FF0000]  " />
            </div>
        </div>
    );
}

export default BannerLeftSection;
