import React, { useState, useEffect } from 'react';
import { ListAllUsers } from '../../services/apiCalls';
import './AllUsers.css';

export const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      ListAllUsers()
        .then(response => {
          console.log(response);
          if (response.data && Array.isArray(response.data)) {
            setUsers(response.data);
          } else {
            console.error('La estructura de la respuesta de la API es incorrecta.');
          }
        })
        .catch(error => console.log(error));
    }
  }, [users]);

  return (
    <div className='users-design'>
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <div className='users-div' key={user.id}>
              <p>ID: {user.id}</p>
              <p>Email: {user.email}</p>
              {Object.entries(user).map(([key, value]) => (
                typeof value !== 'function' && typeof value !== 'object' && (
                  <p key={key}>{key}: {value}</p>
                )
              ))}
            </div>
          ))}
        </>
      ) : (
        <div>Aún no han venido</div>
      )}
    </div>
  );
};
