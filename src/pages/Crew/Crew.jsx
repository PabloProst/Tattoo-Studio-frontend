import React, { useState, useEffect } from 'react';
import { GetCrew } from '../../services/apiCalls';
import './Crew.css'

export const Crew = () => {

  const [artists, setartists] = useState([]);

  useEffect(() => {

    if (artists.length === 0) {
      GetCrew()
        .then(
          artists => {
            console.log(artists)
            setartists(artists.data.data)
          }
        )
        .catch(error => console.log(error))
    }
  }, [artists]);


  return (
    <div className='crew-design'>
      {
        artists.length > 0
        ? ( 
          <>
              {
                artists.map(
                  artist => {
                    console.log("hola");
                    return (
                      <div className='artist-div' key={artist.id}>{artist.name}</div>
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
