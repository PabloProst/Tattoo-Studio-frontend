import React, { useState } from 'react';
import './CreateAppointment.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { CreateAppointment } from '../../services/apiCalls';

export const CreateAppointmentUser = () => {

        const [appointmentData, setAppointmentData] = useState({
            artist: '',
            date: '',
            time: '',
        });
    
        const rdxUserData = useSelector(userData);
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setAppointmentData({
                ...appointmentData,
                [name]: value,
            });
        };

        
    const handleCreateAppointment = async () => {
        try {
            const response = await CreateAppointment(rdxUserData.credentials.token, appointmentData);
            console.log(response.data);
            alert("CREATED")
        } catch (error) {
            console.error('Error al crear la cita:', error.message);
            console.log(rdxUserData.credentials.token);   
            console.log(appointmentData);
        }
    };


    return (
        <div className="create-appointments-design">
            <div className='new-appointment-div'>
                <div>ARTIST</div>
                <input
                    type='text'
                    name='artist'
                    onChange={handleInputChange}
                    value={appointmentData.artist}
                    required
                ></input>
                <div>DATE</div>
                <input
                    type='date'
                    name='date'
                    onChange={handleInputChange}
                    value={appointmentData.date}
                    required
                ></input>
                <div>TIME</div>
                <input
                    type='time'
                    name='time'
                    onChange={handleInputChange}
                    value={appointmentData.time}
                    required
                ></input>
                <button onClick={handleCreateAppointment}>CREAR</button>
            </div>
        </div>
    );
}