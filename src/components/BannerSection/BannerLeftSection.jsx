// src/components/BannerLeftSection.js
import React from 'react';
import strings from '../../strings/strings';


function BannerLeftSection() {
    return (
        <div className="text-white">
            <div>{strings.Banner.heading}</div>
            <div>{strings.Banner.subheading}</div>
            <div>{strings.Banner.description}</div>
        </div>
    );
}

export default BannerLeftSection;
