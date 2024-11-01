import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Button';
import logo from '../../Assets/images/LOGO.svg';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <div className={` fixed top-0 left-0 w-full z-50 py-4 transition-colors duration-300 ${scrolled ? 'bg-white text-[#020A19]' : 'bg-[#020A19] text-white'}`}>
            <div className='flex justify-between items-center custom_width'>
                <div className='flex justify-between items-center '>
                    <div className='w-[120px]'>
                        <img src={logo} alt="Logo" className={`${scrolled ? '' : 'invert_color'}`} />
                    </div>
                    <div className="flex space-x-4">
                        <a href="#why-hexnodes" className="cursor-pointer">Why Hexnodes</a>
                        <a href="#features" className="cursor-pointer">Features</a>
                        <a href="#platforms" className="cursor-pointer">Platforms</a>
                        <a href="#customers" className="cursor-pointer">Customers</a>
                    </div>
                </div>
                <div>
                    <Button label="14 DAY FREE TRIAL" customStyle="bg-red-500 hover:bg-red-600 focus:bg-[#FF0000]" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
