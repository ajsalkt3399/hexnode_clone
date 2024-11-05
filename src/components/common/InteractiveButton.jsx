import React, { useState } from 'react';
import InteractiveModal from './InteractiveModal';


function InteractiveButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <div
                onClick={toggleModal}
                className='fixed bottom-0 right-0 w-[48px] h-[48px] z-30 rounded-full bg-[#2E72F6] flex justify-center items-center p-[13px] m-4 cursor-pointer'
            >
                {isModalOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`fill-white transition-transform duration-500 ${isModalOpen ? 'rotate-180' : ''}`}
                    >
                        <path d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 32"
                        className={`fill-white transition-transform duration-50 ${!isModalOpen ? 'rotate-0' : ''}`}
                    >
                        <path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path>
                    </svg>
                )}
            </div>

            {isModalOpen && <InteractiveModal isModalOpen={isModalOpen} />}

        </div>
    );
}

export default InteractiveButton;