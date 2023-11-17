import React from 'react';
import './MenuAppointments.css';
import { Navigate, useNavigate } from 'react-router-dom';


export const MenuAppointments = () => {
    const navigate = useNavigate();
    return (
        <div className="menu-design">
            <div className='title-appo'>APPOINTMENTS</div>
            <div className='btn-appo' onClick={() => navigate('/myappointments')}>LIST</div>
            <div className='btn-appo'>CREATE</div>
            <div className='btn-appo'>EDIT</div>
            <div className='btn-appo'>DELETE</div>
        </div>
    );
};