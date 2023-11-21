import React, { useState, useEffect } from 'react';
import { MyAppointmentsUser } from '../../services/apiCalls';
import './MyAppointments.css';
import { useSelector } from "react-redux";
import userSlice, { userData } from "../userSlice";



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
                        <p>ID: {appointment.id}</p>
                        <p>DATE: {appointment.date}</p>
                        <p>TIME: {appointment.time}</p>
                        <div>===========================</div>
                      </div>
                    </div>
                  );
                })
              }
            </>
          )
          : (
            <div>Aún no han venido</div>
          )
      }
    </div>
  );
}