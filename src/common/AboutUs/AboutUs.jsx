import React from 'react';
import './AboutUs.css';

export const AboutUs = () => {
    return (
        <div className='aboutUsDesign'>
            <div className='aboutUsDiv'>
                <img className='aboutUsLogo' src='../src/assets/img/tattooLogo.png' alt="Logo" />
                <div className='textAboutUs'>
                    <p><span className='colourText'>Dynamic Ink Tattoo Studio</span>, nestled in Benimaclet, Valencia, offers a distinctive tattooing experience. Since <span className='colourText'>2014</span>, we seamlessly merge the authenticity of traditional studios with modern facilities and an exceptional <span className='colourText'>artistic team</span>.</p>
                    <p>Committed to delivering top-quality tattoos with <span className='colourText'>premium materials</span> and personalized service, Dynamic Ink guides you from custom design to aftercare. Our <span className='colourText'>passion</span> for tattooing shines in every project as we evolve, embracing new creative challenges. Join us at Dynamic Ink for an exceptional tattooing <span className='colourText'>experience</span>!</p>
                </div>
            </div>
        </div>
    );
};
