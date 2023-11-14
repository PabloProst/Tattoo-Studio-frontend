import { React } from 'react';
import './Gallery.css';
import { TattoosMade } from '../../common/TattoosMade/TattoosMade';

export const Gallery = () => {
    return (
        <div className='gallery-container'>
            <TattoosMade/>
        </div>
    );
}
