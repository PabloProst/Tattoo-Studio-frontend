import React, { useState, useEffect } from 'react';
import { ListAllAppointments } from '../../services/apiCalls';
import './AllAppointments.css'

export const AllAppointments = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
  
      if (appointments.length === 0) {
        ListAllAppointments()
          .then(
            appointments => {
              setAppointments(appointments.data.appointments)
            }
          )
          .catch(error => console.log(error))
      }
    }, [appointments]);
  
  
    return (
      <div className='appointments-design'>
        {
          appointments.length > 0
          ? ( 
            <>
                {
                  appointments.map(
                    appointments => {
                      console.log("hola");
                      return (
                        <div className='appointments-div' key={appointments.id}>
                        <p>ID: {appointments.id}</p>
                        <p>Fecha: {appointments.date}</p>
                        <p>user: {appointments.user.name}</p>
                        <p>artist: {appointments.artist.name}</p>
                        <p>style: {appointments.artist.style}</p>
                        <div>===========================</div>
                      </div>                        )
                      }
                      )
                    }
              </>
            )
            : (
              <div>Aún no han venido</div>
              )
            }
      </div>
    )
  }