import React, { useEffect } from 'react';
import $ from 'jquery';
import Button from '../Buttons/Button';

function HamburgerMenu({ isOpen, toggleMenu }) {
    const menuItems = [
        { label: 'Why Hexnode', href: '/solutions/hexnode-uem/#why-hexnodes' },
        { label: 'Features', href: '/solutions/hexnode-uem/#features' },
        { label: 'Platforms', href: '/solutions/hexnode-uem/#platforms' },
        { label: 'Customers', href: '/solutions/hexnode-uem/#customers' }
    ];

    useEffect(() => {
        const handleScrollToggle = () => {
            if (window.innerWidth < 1280 && isOpen) {
                $('body').addClass('no-scroll');
            } else {
                $('body').removeClass('no-scroll');
            }
        };

        handleScrollToggle();

        window.addEventListener('resize', handleScrollToggle);

        return () => {
            $('body').removeClass('no-scroll');
            window.removeEventListener('resize', handleScrollToggle);
        };
    }, [isOpen]);

    const handleMenuClick = (href) => {
        toggleMenu();
        window.location.href = href;
    };

    return (
        <>
            <div className={`fixed left-0 top-0 w-[100%] h-[100vh] z-40 xl:hidden flex justify-between items-center bg-[rgba(0,0,0,.6)] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`w-[50%] h-[100vh] max-sm:w-0`} onClick={toggleMenu}></div>

                <div className={`w-[50%] h-[100vh] bg-[#fff] max-sm:w-[100%] text-black pt-[70px] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="text-[16px] text-[#BFC0C1] leading-[13px] list-none flex justify-between m-0 px-0 flex-col w-full xl:flex-row xl:w-[unset]" role="menubar" aria-label="Navigation drawer">
                        {menuItems.map((item, index) => (
                            <li key={index} className=" text-[15px] text-[#101420] leading-[24px] border-b-[1px] border-solid border-[#f3f3f3] flex items-start px-[30px] py-[20px] cursor-pointer xl:text-[#fff] xl:border-0 xl:pl-[0px] xl:pr-[3px] xl:pt-[0px] xl:pb-[0px] xl:even:mx-[25px] xl:cursor-default" role="none">
                                <button className="text-[15px] leading-[24px] cursor-pointer w-full nav-link xl:leading-[20px]" onClick={() => handleMenuClick(item.href)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-white max-w-[100%] ml-auto px-[30px] pt-[30px] pb-[20px] w-full xl:max-w-[unset] xl:w-[unset] xl:ml-[unset] xl:bg-[transparent] xl:p-[unset]">
                        <div className="w-full flex justify-center">
                            <Button label="TRY HEXNODE FOR FREE" customStyle="bg-[#DD0735] w-[350px] max-w-[90%] hover:bg-[#AA232F] flex items-center justify-center py-[15px] transition-all duration-300 ease-out rounded-[3px]" />
                        </div>
                        <div className="flex justify-center items-center mt-[20px] mb-[10px] xl:hidden">
                            <a target="_self" rel="nofollow" role="link" aria-label="Login" className="inline-block nav-bar_login-btn-ctrl__4QBMi" href="https://www.hexnode.com/mobile-device-management/sign-in/">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HamburgerMenu;
