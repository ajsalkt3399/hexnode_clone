import React, { useState } from 'react';
import Android from '../../Assets/images/android.jpeg';
import Ios from '../../Assets/images/ios.jpeg';
import Windows from '../../Assets/images/windows.jpeg';
import Macos from '../../Assets/images/macos.jpeg';
import Tvos from '../../Assets/images/tvos.jpeg';
import Fireos from '../../Assets/images/fireos.jpeg';

function PlatformsSection() {
    const [visiblePlatform, setVisiblePlatform] = useState(0);
    const [currentImage, setCurrentImage] = useState(Android); // Default image

    const platforms = [
        {
            name: "Android",
            image: Android,
            description: "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
        },
        {
            name: "iOS",
            image: Ios,
            description: "Manage iOS devices effectively with features tailored for Apple’s ecosystem, ensuring security and productivity.",
        },
        {
            name: "Windows",
            image: Windows,
            description: "Deploy and manage Windows devices with ease, ensuring security compliance and operational efficiency.",
        },
        {
            name: "macOS",
            image: Macos,
            description: "Empower your macOS devices with robust management capabilities to keep them secure and compliant.",
        },
        {
            name: "tvOS",
            image: Tvos,
            description: "Manage tvOS devices seamlessly, providing your organization with the tools to control and monitor media devices.",
        },
        {
            name: "Fire OS",
            image: Fireos,
            description: "Secure and manage your Fire OS devices for enhanced productivity and security in your organization.",
        }
    ];
    const handleToggle = (index) => {
        // Check if the clicked platform is already visible
        if (visiblePlatform === index) {
            // Do nothing if the same platform is clicked again
            return;
        }
        // Otherwise, update the visible platform and current image
        setVisiblePlatform(index);
        setCurrentImage(platforms[index].image);
    };
    return (
        <div id='platforms' className='bg-[#F7F7F7] scroll-margin-top'>
            <div className='custom_width py-[60px] lg:pt-[80px] lg:pb-[80px]'>
                <h2 className='antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-sm:max-w-[1300px] max-sm:w-[88%] mx-auto'>
                    Multi-platform Endpoint Management
                </h2>
                <p className="hidden md:block text-[16px] md:text-[18px] leading-[28px] text-center font-regular text-[#333333]">
                    Devices of varying platforms? Hexnode thrives in a diverse environment.
                </p>
                <div className='flex max-md:flex-col '>
                    <div className='rounded-[20px] max-md:hidden overflow-hidden transition-all duration-300 ease-out inline-block opacity-100'>
                        <img src={currentImage} alt="" className='max-h-[565px]' /> {/* Display the current image */}
                    </div>
                    <div className='min-h-[375px] md:w-[54%] md:max-w-[700px] shrink-0 w-full relative pl-[40px]'>
                        {platforms.map((platform, index) => (
                            <>
                                {visiblePlatform === index && (<div className='md:hidden  w-[88%] max-w-[320px] xs:max-w-[340px] mx-auto  rounded-[10px] overflow-hidden active  my-[20px]'>
                                    <img src={currentImage} alt="" className='max-w-[340px] h-[320px]' /> {/* Display the current image */}
                                </div>)}
                                <div className={`group active ${visiblePlatform === index ? 'bg-[#fff] border   border-solid border-[#D7D7D7] ' : 'bg-transparent'} rounded-[15px] px-[30px]  mx-[30px]`}>
                                    <h3
                                        onClick={() => handleToggle(index)}
                                        className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] ${!(visiblePlatform === index || visiblePlatform === index + 1) && index !== platforms.length - 1 ? 'border-b-[1px] border-solid border-[#D7D7D7]' : ''} text-left transition-[padding] duration-300 ease-in-out py-[15px]`}
    >
                                        {platform.name}
                                    </h3>
                                    {visiblePlatform === index && (
                                        <div className="block relative transition-all duration-300 ease-out">
                                            <div className="pb-[30px]">
                                                <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                                                    {platform.description}
                                                </p>
                                                <a
                                                    rel="noreferrer"
                                                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold hidden md:inline-block mt-[20px]"
                                                    href="#"
                                                >
                                                    Try Hexnode on your endpoints
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatformsSection;
