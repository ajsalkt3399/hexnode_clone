import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Button';
import logo from '../../Assets/images/LOGO.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen &&
                <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
            }

            <div
                className={`fixed top-0 left-0 w-full z-30 py-4 transition-colors duration-300 h-[69px] 
                border-b-[1px] ${scrolled || isHovered || isOpen ? 'bg-white text-[#020A19] border-[#D7D7D7]' : 'bg-[#020A19] text-white border-transparent'}
                `}

                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`flex justify-between  items-center custom_width `}>
                    <div className='flex justify-between items-center gap-5'>
                        <div className='w-[120px] flex justify-center items-center mb-[8px]'>


                            <img
                                src={logo}
                                alt="Logo"
                                className={`${(scrolled || isHovered || isOpen) ? '' : 'invert'}`} // Apply invert filter
                            />

                        </div>
                        <div className="flex gap-5 max-xl:hidden text-[15px] mulishbold">
                            <a href="#why-hexnodes" className="cursor-pointer">Why Hexnodes</a>
                            <a href="#features" className="cursor-pointer">Features</a>
                            <a href="#platforms" className="cursor-pointer">Platforms</a>
                            <a href="#customers" className="cursor-pointer">Customers</a>
                        </div>
                    </div>

                    <Button label="14 DAY FREE TRIAL" customStyle="bg-red-500 hover:bg-red-600 focus:bg-[#FF0000] max-xl:hidden" />
                </div>

                <div className={`hidden max-xl:block absolute  right-[50px]    top-[23px]`} style={{zIndex: 100}}>
                    <button
                        onClick={toggleMenu}
                        className={`flex flex-col items-center  justify-center w-[26px] h-auto space-y-1 ${scrolled || isHovered || isOpen ? 'bg-white' : 'bg-black'
                            } rounded-full transition-colors duration-300`}
                    >
                        <div
                            className={`w-8 h-1 ${scrolled || isHovered || isOpen ? 'bg-black' : 'bg-white'} transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
                        ></div>
                        <div
                            className={`w-8 h-1 ${scrolled || isHovered || isOpen ? 'bg-black' : 'bg-white'} transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
                        ></div>
                        <div
                            className={`w-8 h-1 ${scrolled || isHovered || isOpen ? 'bg-black' : 'bg-white'} transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        ></div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
