import React, { useState, useEffect } from 'react';
import { getAppointmentsUser } from '../../services/apiCalls'; 
import './MyAppointments.css';

export const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (appointments.length === 0) {
      getAppointmentsUser()
        .then(result => {
          console.log(result);
          setAppointments(result.data.data);
        })
        .catch(error => console.log(error));
    }
  }, [appointments]);

  return (
    <div className='appointments-user-design'>
      {appointments.length > 0 ? (
        <>
          {appointments.map(appointment => {
            console.log("hola");
            return (
              <div className='appointment-div' key={appointment.id}>
                {appointment.name}
              </div>
            );
          })}
        </>
      ) : (
        <div>No hay citas disponibles</div>
      )}
    </div>
  );
};
