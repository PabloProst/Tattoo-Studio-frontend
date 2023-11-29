import React, { useState, useEffect } from 'react';
import { DeleteAppointment, MyAppointmentsUser, ModifyAppointment } from '../../services/apiCalls';
import './MyAppointments.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [modifyAppointmentData, setModifyAppointmentData] = useState({
    id: '',
    artist: '',
    date: '',
    time: '',
  });
  const [isModifying, setIsModifying] = useState(false);
  const rdxUserData = useSelector(userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MyAppointmentsUser(rdxUserData.credentials.token);
        if (result.data.data) {
          setAppointments(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!appointments.length) {
      fetchData();
    }
  }, [appointments, rdxUserData.credentials.token]);

  const handleDeleteAppointment = async (id) => {
    try {
      await DeleteAppointment(rdxUserData.credentials.token);

      if (appointments) {
        setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleModifyAppointment = (id) => {
    const appointmentToModify = appointments.find(appointment => appointment.id === id);
    if (appointmentToModify) {
      setModifyAppointmentData({
        id: appointmentToModify.id,
        artist: appointmentToModify.artist.name,
        date: appointmentToModify.date,
        time: appointmentToModify.time,
      });
      setIsModifying(true);
    }
  };

  const handleUpdateAppointment = async () => {
    try {
      console.log('Token de autenticación:', rdxUserData.credentials.token);
      console.log('Datos de cita a modificar:', modifyAppointmentData);
  
      const response = await ModifyAppointment(rdxUserData.credentials.token, modifyAppointmentData);
      console.log('Respuesta del servidor:', response.data);
  
      setIsModifying(false);
      alert("MODIFIED");
    } catch (error) {
      console.error('Error al modificar la cita:', error.message);
      console.log(error.response?.data);

    }
  };

  return (
    <div className='my-appointments-design'>
      {appointments && appointments.length && appointments.length > 0 ? (
        <>
          {appointments.map(appointment => (
            <div className='my-appointment-container' key={appointment.id}>
              <div className='my-appointments-div'>
                <div>DATE: {appointment.date}</div>
                <div>TIME: {appointment.time}</div>
                <div>ARTIST: {appointment.artist.name}</div>
                <button onClick={() => handleDeleteAppointment(appointment.id)} className='text-danger bg-dark btn'>
                  Delete
                </button>
                <button onClick={() => handleModifyAppointment(appointment.id)} className='btn btn-primary'>
                  Modify
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>No appointments</div>
      )}

      {isModifying && (
        <div className="modify-appointment-div">
          <div>ARTIST</div>
          <input
            type='text'
            name='artist'
            onChange={(e) => setModifyAppointmentData({ ...modifyAppointmentData, artist: e.target.value })}
            value={modifyAppointmentData.artist}
            required
          ></input>
          <div>DATE</div>
          <input
            type='date'
            name='date'
            onChange={(e) => setModifyAppointmentData({ ...modifyAppointmentData, date: e.target.value })}
            value={modifyAppointmentData.date}
            required
          ></input>
          <div>TIME</div>
          <input
            type='time'
            name='time'
            onChange={(e) => setModifyAppointmentData({ ...modifyAppointmentData, time: e.target.value })}
            value={modifyAppointmentData.time}
            required
          ></input>
          <button onClick={handleUpdateAppointment}>UPDATE</button>
        </div>
      )}
    </div>
  );
};
