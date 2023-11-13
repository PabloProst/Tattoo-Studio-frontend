import React from 'react';
import './TattooStyles.css';

export const TattooStyles = () => {
    return (
        <div className="bannerHeader">
            <div className="background-banner stylesBanner" style={{ backgroundImage: `url('../src/assets/img/bannerStyles.jpg')` }}>
                <div className="image-container">
                    <img className='image-tattoo' src='../src/assets/img/tattoo2.jpg' alt='Tattoo 2' />
                    <img className='image-tattoo' src='../src/assets/img/tattoo3.jpg' alt='Tattoo 3' />
                    <img className='image-tattoo' src='../src/assets/img/tattoo1.jpg' alt='Tattoo 1' />
                </div>
            </div>
        </div>
    );
};
