import React from 'react';
import './ArtistPanel.css';
import { useNavigate } from 'react-router-dom';


export const ArtistPanel = () => {
    const navigate = useNavigate();
    return (
        <div className="artist-panel-design">
            <div className='artist-panel-div'>
            <div className='title-appo'>ARTIST</div>
            <div className='btn-appo' onClick={() => navigate('/artist/appointments')}>MY APPOINTMENTS</div>            </div>
        </div>
    );
};