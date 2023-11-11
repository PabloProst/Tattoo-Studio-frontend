import React from 'react';
import './BannerHome.css';

export const Banner = () => {
    return (
        <div>
            <div className="bannerHeader">
                <img className='headerBanner' src='../src/assets/img/bannerHeader.jpg' alt="bannerHeader" />
                <div className='textBanner'>DYNAMIC INK</div>
            </div>
        </div>
    );
};
