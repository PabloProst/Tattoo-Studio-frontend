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
              console.log(appointments)
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
                        <div className='appointments-div' key={appointments.id}>{appointments.id}</div>
                        )
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