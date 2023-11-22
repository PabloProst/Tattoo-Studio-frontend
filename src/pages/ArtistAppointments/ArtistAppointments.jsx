import React, { useState, useEffect } from 'react';
import './ArtistAppointments.css';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { MyArtistAppointments } from '../../services/apiCalls';


export const ArtistAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const rdxUserData = useSelector(userData);

  useEffect(() => {
    console.log(rdxUserData.credentials.token);
    if (appointments && appointments.length === 0) {
      MyArtistAppointments(rdxUserData.credentials.token)
        .then(result => {
          console.log(result);
          setAppointments(result.data.data);
        })
        .catch(error => console.log(error));
    }
  }, []);

  return (
    <div className='appointments-design'>
      {
        appointments && appointments.length > 0
          ? (
            <>
              {
                appointments.map(appointment => {
                  return (
                    <div className='my-appointment-container' key={appointment.id}>
                      <div className='appointments-div'>
                        <p>DATE: {appointment.date}</p>
                        <p>TIME: {appointment.time}</p>
                        <p>USER: {appointment.user.name}</p>
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