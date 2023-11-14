import React, { useState, useEffect } from "react";
import "./Register.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [userError, setUserError] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
  })


  const functionHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorCheck = (e) => {

    let error = "";

    error = validator(e.target.name, e.target.value);

    setUserError((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: error,
    }));
  }

  const Submit = () => {
    console.log(user); // Agrega este log para verificar los datos del usuario antes de la llamada a la API
  
    for (let test1 in user) {
      if (user[test1] === "") {
        return;
      }
    }
  
    for (let test in userError) {
      if (userError[test] !== "") {
        return;
      }
    }
  
    registerUser(user)
      .then(
        resultado => {
          //si todo ha ido bien, redirigiremos a login...
          setTimeout(() => {
            navigate("/login");
          }, 500);
        }
      )
      .catch(error => console.log(error));
  }
  

  return (
    <div className="registerDesign">
      <label>Email</label>
      <CustomInput
        design={`inputDesign ${userError.emailError !== "" ? 'inputDesignError' : ''}`}
        type={"email"}
        name={"email"}
        placeholder={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.emailError}</div>
      <label>Password</label>
      <CustomInput
        design={`inputDesign ${userError.passwordError !== "" ? 'inputDesignError' : ''}`}
        type={"password"}
        name={"password"}
        placeholder={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.passwordError}</div>
      <label>Name</label>
      <CustomInput
        design={`inputDesign ${userError.nameError !== "" ? 'inputDesignError' : ''}`}
        type={"text"}
        name={"name"}
        placeholder={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.nameError}</div>
      <div className='buttonSubmit' onClick={Submit}>Register</div>
    </div>
  );
};