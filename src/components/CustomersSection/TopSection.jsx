import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Imageone from '../../Assets/images/image_9.png';
import Imagetwo from '../../Assets/images/image_11.png';
import Imagethree from '../../Assets/images/image_21.png';




function TopSection() {
    const sliderRef = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);

    const reviews = [
        {
            id: 1,
            text: "Hexnode is of great value. Works great with Android and iOS!",
            author: "Justin Modrak",
            position: "Technology Coordinator",
            company: "East Troy Community School District",
            image: Imageone, // Replace with your image source
        },
        {
            id: 2,
            text: "Most complete MDM solution I found, and I tested many of them, including major names.",
            author: "Dalibor Kruljac",
            position: "",
            company: "KAMELEYA LTD",
            image: Imagetwo,
        },
        {
            id: 3,
            text: "It seemed to be in-line with everything we were looking at.",
            author: "Chris Robinson",
            position: "Executive Account Manager, NCS",
            company: "",
            image: Imagethree,
        },
    ];

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        afterChange: (current) => setSlideIndex(current), // update index after each slide change
    };

    const isLastSlide = slideIndex === 2; // adjust according to the number of slides (2 for a total of 3 slides)
    const isFirstSlide = slideIndex === 0;

    return (
        <div>
            <section className="pt-[60px] pb-[20px] lg:pt-[80px] lg:pb-[30px] bg-[#FFFFFF] relative">
                <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0" id="customers"></div>
                <div className="w-[88%] mx-auto max-w-[1300px]">
                    <h2 className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px]">What our customers say</h2>
                    <div className="max-w-[280px] sm:max-w-[400px] md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0">
                        <ul className="cusreviewslider_slider-wrapper__VBzwn">
                            <div className="slick-slider slick-initialized" dir="ltr">
                                <button
                                    onClick={() => sliderRef.current.slickPrev()}
                                    className={`flex items-center justify-center bottom-[-80px] absolute leading-[0px] ${isFirstSlide ? 'cursor-not-allowed opacity-50' : ''} left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] lg:left-[-60px]`}
                                >
                                    <div className='w-[20px] h-[35px]  flex justify-center items-center'>
                                        <img alt="previous arrow" loading="lazy" decoding="async" data-nimg="1" className="mx-auto  object-scale-down" src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg" />
                                    </div>

                                </button>
                                <div className="">
                                    <div className=" "  >
                                        <Slider ref={sliderRef} {...settings} className="relative overflow-hidden">
                                            {reviews.map((review) => (
                                                <div key={review.id} className="slick-slide outline-none">
                                                    <div>
                                                        <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative ">
                                                            <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
                                                                <img src={review.image} alt={review.author} className='w-full h-full object-auto'/>
                                                            </div>
                                                            <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow">
                                                                <div className="md:min-h-[135px] md:max-h-[135px] md:overflow-scroll px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px] cusreviewslider_hide-scrollbar__lQqUC">
                                                                    <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                                                                        &quot;{review.text}&quot;
                                                                    </h4>
                                                                </div>
                                                                <div className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5">
                                                                    <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">
                                                                        {review.author}
                                                                    </p>
                                                                    {review.position && (
                                                                        <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                                                                            {review.position}
                                                                        </small>
                                                                    )}
                                                                    {review.company && (
                                                                        <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70">
                                                                            {review.company}
                                                                        </small>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>

                                    </div>
                                </div>
                                <button
                                    onClick={() => sliderRef.current.slickNext()}
                                    className={`flex items-center justify-center bottom-[-80px] absolute leading-[0px] ${isLastSlide ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} left-[50%] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] lg:bottom-[50%] translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] lg:left-[unset] lg:right-[-60px]`}
                                >   <div className='w-[20px] h-[35px] flex justify-center items-center'>
                                        <img alt="next arrow" loading="lazy" width="9" height="17" decoding="async" data-nimg="1" className="object-scale-down mx-auto opacity-75 group-hover:opacity-100 " src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg" />
                                    </div> </button>

                            </div>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TopSection
