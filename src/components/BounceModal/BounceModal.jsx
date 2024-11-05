import React, { useEffect, useRef } from 'react';
import Image from "../../Assets/images/trail_bg.jpeg";
import Close from "../../Assets/images/close_icon_popup.svg";

function BounceModal({ setItsTimeToBounce }) {
    const modalRef = useRef(null); // Create a ref for the modal container

    const handleClose = () => {
        setItsTimeToBounce(false);
    };

    const handleClickOutside = (event) => {
        // Check if the click is outside the modalRef
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        // Prevent background scrolling when the modal is open
        document.body.style.overflow = 'hidden';

        // Set up event listener for clicks outside the modal
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove the event listener and reset overflow
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,.6)] flex justify-center items-center  z-50'>
            <div ref={modalRef} className='relative flex flex-col justify-center rounded-[25px]  w-[650px] max-md:w-[90%] z-50 overflow-hidden'>
                <img src={Image} alt="" className='w-full' /> {/* Adjust width to ensure it fits the container */}

                <div className="absolute top-[10px] right-[10px] h-[20px] p-1 cursor-pointer w-[20px]">
                    <img src={Close} alt="" onClick={handleClose} />
                </div>
                <div className='absolute flex flex-col   text-left justify-start p-6 max-md:p-4 w-[60%] max-[900px]:w-[70%] max-md:w-[80%] max-[500px]:w-[92%]  max-[500px]:text-[15px]'>
                    <div className=' text-[#020a19] mulishbold text-[30px] max-md:text-[25px]   '>Get a free Hexnode UEM demo</div>
                    <p className=' text-[#515151] mulishsemibold text-[18px] max-md:text-[13px] max-[500px]:hidden'>We'll personalize this session so you can gain deeper insights and get started quickly.

                    </p>
                    <button onClick={handleClose} class="pulsingButton">SCHEDULE DEMO</button>
                </div>


            </div>
        </div>



    );
}

export default BounceModal;
