// src/components/BannerLeftSection.js
import React, { useState } from 'react';
import strings from '../../strings/strings';
import Button from '../Buttons/Button';

function BannerLeftSection() {
    const [formData, setFormData] = useState({ email: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
        setError('');
    };

    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = () => {
        if (!formData.email) {
            setError('Please enter a valid email address.');

            setTimeout(() => {
                setError('');
            }, 1000);
            return;
        }
        if (!isEmailValid(formData.email)) {
            setError('Please enter a valid email address.');
            setTimeout(() => {
                setError('');

            }, 1000);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="text-white max-xl:max-w-[554px] max-w-[518px]">
            <h2 className='text-[rgb(191,193,197,60%)] mulishsemibold max-xl:text-center text-[16px] leading-[20px] xl:text-left font-semibold mb-[15px]'>{strings.Banner.heading}</h2>
            <h1 className='text-[#FFFFFF] text-[34px] leading-[44px] max-xl:text-center lg:text-[42px] lg:leading-[53px] xl:text-left mulishbold mb-[15px] antialiased'>{strings.Banner.subheading}</h1>
            <div className="text-[rgb(255,255,255,75%)] mulishsemibold max-xl:text-center  font-normal text-[18px] leading-[28px] text-left mb-[19px]">{strings.Banner.description}</div>
            <div className='flex gap-2 max-sm:flex-col'>
                <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    id="signup-email"
                    className="text-base text-black leading-tight w-full h-14 rounded px-2.5 placeholder-gray-400"
                    value={formData.email}
                    onChange={handleEmailChange}
                />
                <Button
                    label="LETS TRY IT OUT!"
                    customStyle="bg-red-500 hover:bg-red-600 h-14 w-[285px] max-sm:w-[100%] focus:bg-[#FF0000]"
                    loading={loading}
                    onClick={handleSubmit}
                />
            </div>
            <div className="text-white h-[10px] justify-center flex">{error && error}</div>{/* Error message below input */}
        </div>
    );
}

export default BannerLeftSection;
