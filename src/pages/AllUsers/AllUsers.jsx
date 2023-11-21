import React, { useState, useEffect } from 'react';
import { ListAllUsers } from '../../services/apiCalls';
import './AllUsers.css'
import { useSelector } from "react-redux";
import userSlice, { userData } from "../userSlice";

export const AllUsers = () => {

  const rdxUserData = useSelector(userData);

  const [users, setUsers] = useState([]);

  useEffect(() => {

    if (users.length === 0) {
      ListAllUsers(rdxUserData.credentials.token)
        .then(
          users => {
            console.log(users.data.users)
            setUsers(users.data.users)
          }
        )
        .catch(error => console.log(error))
    }
  }, [users]);


  return (
    <div className='users-design'>
      {
        users.length > 0
        ? ( 
          <>
              {
                users.map(
                  users => {
                    console.log("hola");
                    return (
                      <div className='users-div' key={users.id}>{users.name}</div>
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
