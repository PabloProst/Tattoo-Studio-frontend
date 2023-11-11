import React, { useState, useEffect } from "react";
import "./Login.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [msgError, setMsgError] = useState('');

  const functionHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const logMe = () => {

    logUser(credenciales)
        .then(
            resultado => {
                console.log(resultado)
                //Aqui guardaría el token........

                //Una vez guardado el token....nos vamos a home....
                setTimeout(()=>{
                    navigate("/");
                },500);
            }
        )
        .catch(error => {
          console.log(error)
          setMsgError(error.message);
        });

  }

  return (
      <div>
        
      </div>
  );
};
