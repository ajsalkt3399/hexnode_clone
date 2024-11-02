import React from 'react';
import strings from '../../strings/strings';


function FeatureSection() {
    return (
        <div id="features" className="bg-[#fff] scroll-margin-top">
            <section className="py-[60px] lg:py-[80px] relative">
                <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"></div>
                <div className="w-[88%] mx-auto max-w-[1300px]">
                    <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[40px] md:pb-[60px] max-w-[800px] mx-auto">
                        {strings.FeatureSection.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] xl:gap-[80px]">
                        {strings.FeatureSection.features.map((feature, index) => (
                            <div key={index} className="max-w-[340px] md:max-w-[380px] mx-auto">
                                <div className="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
                                    <img
                                        alt={feature.alt}
                                        loading="lazy"
                                        width="380"
                                        height="240"
                                        className="relative"
                                        src={feature.image}
                                    />
                                </div>
                                <h2 className="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
                                    {feature.title}
                                </h2>
                                <p className="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeatureSection;
