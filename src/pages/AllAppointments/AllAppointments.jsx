import React, { useState, useEffect } from 'react';
import { ListAllAppointments } from '../../services/apiCalls';
import './AllAppointments.css'
import { useSelector } from "react-redux";
import { userData } from "../userSlice";


export const AllAppointments = () => {
  const rdxUserData = useSelector(userData);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    if (appointments.length === 0) {
      ListAllAppointments(rdxUserData.credentials.token)
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
                      <div className='appointments-div' key={appointments.id}>
                        <p>ID: {appointments.id}</p>
                        <p>DATE: {appointments.date}</p>
                        <p>TIME: {appointments.time}</p>
                        <p>ARTIST: {appointments.artist.name}</p>
                        <p>USER: {appointments.user.name}</p>
                      </div>
                    )
                  }
                )
              }
            </>
          )
          : (
            <div>No appointments</div>
          )
      }
    </div>
  )
}