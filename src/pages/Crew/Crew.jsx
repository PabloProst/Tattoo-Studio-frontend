import React, { useEffect, useState } from 'react';
import { bringArtists } from '../../services/apiCalls';
import { Container, Row, Col } from 'react-bootstrap';
import './Crew.css';

export const Crew = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      bringArtists()
        .then((results) => {
          setArtists(results);
        })
        .catch((error) => console.log(error));
    }
  }, [artists]);

  return (
    <div className="crewDesign">
      {artists.length > 0 ? (
        <Container>
          <Row>
            {artists.map((artistName, index) => {
              return (
                <Col sm={12} lg={6} xl={2} xxl={2} key={index}>
                  <div>
                    <h3>{artistName}</h3>
                    {/* No hay 'id', 'email' o 'style' en 'artistName', ya que ahora es solo un nombre */}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <div>Aún no han venido artistas</div>
      )}
    </div>
  );
};
