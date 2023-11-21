import React from 'react';
import './AdminPanel.css';
import { useNavigate } from 'react-router-dom';


export const AdminPanel = () => {
    const navigate = useNavigate();
    return (
        <div className="admin-panel-design">
            <div className='admin-panel-div'>
            <div className='title-appo'>ADMIN</div>
            <div className='btn-appo' onClick={() => navigate('/allusers')}>LIST ALL USERS</div>
            <div className='btn-appo' onClick={() => navigate('/allappointments')}>LIST ALL APOINTMENTS</div>
            </div>
        </div>
    );
};