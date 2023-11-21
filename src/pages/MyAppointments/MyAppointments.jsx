import React, { useState, useEffect } from 'react';
import { DeleteAppointment, MyAppointmentsUser } from '../../services/apiCalls';
import './MyAppointments.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";



export const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const rdxUserData = useSelector(userData);

  useEffect(() => {
    console.log(rdxUserData.credentials.token);
    if (appointments && appointments.length === 0) {
      MyAppointmentsUser(rdxUserData.credentials.token)
        .then(result => {
          console.log(result);
          setAppointments(result.data.data);
        })
        .catch(error => console.log(error));
    }
  }, [appointments]);

  const handleDeleteAppointment = async (id) => {
    try {
      await DeleteAppointment(rdxUserData.credentials.token);
      setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='appointments-design'>
      {
        appointments && appointments.length > 0
          ? (
            <>
              {
                appointments.map(appointment => {
                  return (
                    <div className='my-appointment-container'>
                      <div className='appointments-div' key={appointment.id}>
                        <p>DATE: {appointment.date}</p>
                        <p>TIME: {appointment.time}</p>
                        <p>ARTIST: {appointment.artist.name}</p>
                        <button onClick={() => handleDeleteAppointment(appointment.id)} className='text-danger bg-dark'>Delete</button>
                        <div>===========================</div>
                      </div>
                    </div>
                  );
                })
              }
            </>
          )
          : (
            <div>No appointments</div>
          )
      }
    </div>
  );
}