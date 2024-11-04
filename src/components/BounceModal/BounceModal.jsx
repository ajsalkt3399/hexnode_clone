import React, { useEffect, useRef } from 'react';
import Image from "../../Assets/images/trail_bg.jpeg";
import Close from "../../Assets/images/close_icon_popup.svg";
import Button from '../Buttons/Button';

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
        <div className='fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,.6)] flex justify-center items-center z-50'>
            <div ref={modalRef} className='relative flex flex-col justify-center rounded-[25px] items-center w-[550px] max-md:w-[90%] z-50 overflow-hidden'>
                <img src={Image} alt="" className='w-full' /> {/* Adjust width to ensure it fits the container */}

                <div className="absolute top-[10px] right-[10px] h-[20px] p-1 cursor-pointer w-[20px]">
                    <img src={Close} alt="" onClick={handleClose} />
                </div>

                <div className='absolute top-[50%' onClick={handleClose}>
                    <button className="relative inline-flex items-center justify-center w-40 h-20 text-white font-medium bg-red-500 rounded-lg overflow-hidden transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <div className="absolute inset-0 bg-white opacity-25 animate-pulse" />
                        <div className="relative z-10 w-[70%] h-[70%] bg-red-600 flex items-center justify-center rounded-md">
                            <span>SHEDULE DEMO</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>



    );
}

export default BounceModal;
