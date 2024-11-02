import React from 'react';

import strings from '../../strings/strings';
import Logo_img from '../../Assets/images/hexnode-app-icon.svg';

function WhyHexSection() {
  return (
    <div id='why-hexnodes' className=' bg-[#fff] scroll-margin-top '>
      <section className=" py-[60px] lg:py-[80px] bg-[#F7F7F7] relative">
        <div className="absolute top-[-65px]  opacity-0 w-[0px] h-[0px] m-0" ></div>
        <div className="w-[88%] mx-auto max-w-[1300px]">
          <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[10px] max-w-[800px] mx-auto">{strings.WhyHexnode.title}</h2>
          <div className="flex flex-wrap justify-center items-start md:justify-between relative">
            {strings.WhyHexnode.cardData.map((item, index) => (
              <div key={item.index} className={` max-w-[340px]  hover:mt-[-20px]   md:max-w-[48%] xl:max-w-[480px] flex items-center basis-full md:basis-[47%] lg:basis-[100%]  xl:basis-1/2 flex-shrink-0 my-[10px] md:my-[20px] xl:my-0 xl:h-[320px] transition-all duration-300 ease-in-out `}>
                <div className={` relative z-[10]  p-[20px]   lg:p-[40px] lg:pb-[20px] rounded-[16px] border border-[#D7D7D7] bg-[#FFFFFF] my-[10px] first:mt-0 last:mb-0 group transition-all duration-300 ease-in-out whyHexnode_resourceTransitionKit__BGUBE`}>
                  <div >
                    <div className="flex items-center space-x-[10px] ">
                      <div className="flex justify-center w-full max-w-[28px] lg:max-w-[40px] h-full">
                      <img src={item.icon} alt="icon" />
                      </div>
                      <h4 className="antialiased text-[20px] lg:text-[24px] leading-[32px] text-left font-bold text-[#020a19]">{item.title}</h4>
                    </div>
                    <p className="text-[16px]  lg:text-[18px] leading-[28px] text-left font-regular text-[#333333] xl:pb-[10px] mt-[15px] mb-[15px] lg:mb-[20px]">{item.description}</p>
                  </div>
                  <a rel="noreferrer" className="text-[16px]  lg:text-[18px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block lg:pb-[10px] delay-[50ms] transition-all duration-[0.3s] ease-out xl:absolute xl:opacity-0 bottom-[5px] xl:invisible xl:group-hover:opacity-[1] xl:group-hover:visible" href={item.link}>Try Hexnode on your endpoints</a>
                </div>
              </div>
            ))}
            <div className="whyHexnode_hexnodeAnimationWrap__zQlMr hidden xl:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="relative z-[10] max-w-[85px] xl:max-w-[105px]">
                <img alt="Hexnode App Icon" loading="lazy" width="200" height="80" decoding="async" data-nimg="1" className="w-auto h-auto mx-auto" src={Logo_img} />
              </div>
              <div className="line-wrapper">
                <div className="line-animation left-top absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[-170px] z-[5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                    <path id="path" d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02" transform="translate(19047.193 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
                  </svg>
                </div>
                <div className="line-animation right-top absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[-170px] z-[5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                    <path id="path" d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02" transform="translate(19047.195 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
                  </svg>
                </div>
                <div className="line-animation left-bottom absolute top-[50%] left-[50%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[40px] z-[5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                    <path id="path" d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02" transform="translate(19047.193 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
                  </svg>
                </div>
                <div className="line-animation right-bottom absolute top-[50%] left-[50%] translate-x-[20px] xl:translate-x-[30px] translate-y-[40px] z-[5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
                    <path id="path" d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02" transform="translate(19047.195 5014.062)" fill="none" stroke="#020a19" stroke-linecap="round" stroke-width="1" stroke-dasharray="7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <a rel="noreferrer" className="text-[18px] leading-[28px] text-[#DD0735] font-semibold text-center block md:hidden mt-[20px]" href="https://www.hexnode.com/mobile-device-management/cloud/signup/">Try Hexnode on your endpoints</a>
        </div>
      </section>
    </div>
  );
}

export default WhyHexSection;
