import React from 'react';
import './AboutUs.css';

export const AboutUs = () => {
    return (
        <div className='aboutUsDesign'>
            <div className='aboutUsDiv'>
                <img className='aboutUsLogo' src='../src/assets/img/tattooLogo.png' alt="Logo" />
                <div className='textAboutUs'>
                    <p>Dynamic Ink Tattoo Studio, nestled in Benimaclet, Valencia, offers a distinctive tattooing experience. Since 2014, we seamlessly merge the authenticity of traditional studios with modern facilities and an exceptional artistic team.</p>
                    <p>Committed to delivering top-quality tattoos with premium materials and personalized service, Dynamic Ink guides you from custom design to aftercare. Our passion for tattooing shines in every project as we evolve, embracing new creative challenges. Join us at Dynamic Ink for an exceptional tattooing experience!</p>
                </div>
            </div>
        </div>
    );
};
