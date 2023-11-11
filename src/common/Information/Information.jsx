import React from 'react';
import './Information.css';

export const Information = () => {
    return (
        <div>
            <div className='informationDiv'>
                <div className='informationText'>
                    ADRESS
                    <span className='informationTextUnder'>Av. Valencia 2023</span>
                    <span className='informationTextUnder'>46000</span>
                </div>
                <div className='informationText'>
                    CONTACT
                    <span className='informationTextUnder'>965 23 21 21</span>
                    <span className='informationTextUnder'>dynamicink@email.com</span>
                </div>
                <div className='informationText'>
                    SCHEDULE
                    <span className='informationTextUnder'>Monday to Fryday 10:00 - 21:00</span>
                    <span className='informationTextUnder'>Saturday 10:00 - 16:00</span>
                </div>
            </div>
        </div>
    );
};
