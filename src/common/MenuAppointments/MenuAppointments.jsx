import React from 'react';
import './MenuAppointments.css';
import { Navigate, useNavigate } from 'react-router-dom';


export const MenuAppointments = () => {
    const navigate = useNavigate();
    return (
        <div className="menu-design">
            <div className='title-appo'>APPOINTMENTS</div>
            <div className='btn-appo' onClick={() => navigate('/myappointments')}>MY APPOINTMENTS</div>
            <div className='btn-appo'>CREATE</div>
        </div>
    );
};