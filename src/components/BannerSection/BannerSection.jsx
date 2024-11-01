import React from 'react';
import Banner from '../../Assets/images/image_7.jpeg';
import Banner_top from '../../Assets/images/image_6.png';

function BannerSection({ style }) {
    return (
        <>
            <div className="w-full max-w-full md:max-w-[610px] order-1 xl:order-2">
                <div className="w-full max-w-[610px] relative mx-auto">
                    <div className="w-full h-full max-w-[610px]">
                        <img src={Banner} alt="banner" className="w-full h-auto" />
                    </div>
                    <div className="absolute w-full h-full top-0 z-10 pointer-events-none">
                        <img src={Banner_top} alt="banner overlay" className="w-full h-auto" />
                    </div>

                    {/* Badge 1 */}
                    <div className=" flex bg-[#FCD598] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[14%] left-[5%] sm:left-[13%] md:left-[6%] overflow-hidden">
                        <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] transform -translate-x-[2%] -translate-y-1/2 -hover:scale-[20]"></div>
                        <div className="w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] transform -translate-x-[2%] -translate-y-1/2">
                            <div className="w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021">
                                    <path d="M-1939.354-218.176l5.416,5.14,9.4-8.917" transform="translate(1940.042 222.678)" fill="none" stroke="#db962c" strokeWidth="2"></path>
                                </svg>
                            </div>
                        </div>
                        <span className="text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1">Password policy applied</span>
                    </div>

                    {/* Badge 2 */}
                    <div className=" flex bg-[#C3E1E7] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[40%] right-[-2%] sm:right-[-1%] md:right-[-6%] overflow-hidden">
                        <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] transform -translate-x-[2%] -translate-y-1/2 -hover:scale-[20]"></div>
                        <div className="w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] transform -translate-x-[2%] -translate-y-1/2">
                            <div className="w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021">
                                    <path d="M-1939.354-218.176l5.416,5.14,9.4-8.917" transform="translate(1940.042 222.678)" fill="none" stroke="#44aec4" strokeWidth="2"></path>
                                </svg>
                            </div>
                        </div>
                        <span className="text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1">TvOS Kiosk Active</span>
                    </div>

                    {/* Badge 3 */}
                    <div className=" flex bg-[#BCDCBE] z-20 rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute bottom-[13%] right-[26%] z-2 overflow-hidden">
                        <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] transform translate-x-[-2%] min-[391px]:left-[3%] top-[50%] min-[391px]:top-[51%] translate-y-[-50%] -hover:scale-[20]"></div>
                        <div className="w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] translate-x-[-2%] min-[391px]:left-[3%] top-[50%] min-[391px]:top-[51%] translate-y-[-50%]">
                            <div className="w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.188" height="11.021" viewBox="0 0 16.188 11.021">
                                    <path d="M-1939.354-218.176l5.416,5.14,9.4-8.917" transform="translate(1940.042 222.678)" fill="none" stroke="#35943b" strokeWidth="2"></path>
                                </svg>
                            </div>
                        </div>
                        <span className="text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1">Device Enrolled</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerSection;
