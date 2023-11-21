import React, { useState, useEffect } from "react";
import "./AdminLogin.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { useNavigate } from 'react-router-dom';
import { logAdmin } from "../../services/apiCalls";

//redux
import { useSelector, useDispatch } from "react-redux";  //useDispatch es necesario para emitir acciones
import { login, userData } from "../userSlice";
import { jwtDecode } from "jwt-decode";

export const AdminLogin = () => {

  const navigate = useNavigate();
  const rdxUserData = useSelector(userData);
  const dispatch = useDispatch();
  
  
  const [artist, setArtist] = useState({
    email: '',
    password: ''
  })
  
  const [userError, setUserError] = useState({
    emailError: '',
    passwordError: ''
  })
  
  useEffect(()=>{
    if(rdxUserData.credentials.token){
      navigate("/")
    }
  },[rdxUserData])
  
  const functionHandler = (e) => {
    setArtist((prevState) => ({
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

    for (let test1 in artist) {
      if (artist[test1] === "") {
        return;
      }

    }

    for (let test in userError) {
      if (userError[test] !== "") {
        return;
      }
    }

    const { email, password } = artist;

    logAdmin({ email, password })
      .then(resultado => {
        let decodificado = jwtDecode(resultado.data.token);
        console.log(`token decoded:`);
        console.log(decodificado);
        dispatch(login({ credentials: resultado.data, role: decodificado.role }));
        console.log(resultado.data);
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch(error => console.log(error));
    
  }

  return (
    <div className="registerDesign">
      <label>Email</label>
      <CustomInput
        disabled={false}
        design={`inputDesign ${userError.emailError !== "" ? 'inputDesignError' : ''}`}
        type={"email"}
        name={"email"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.emailError}</div>
      <label>Password</label>
      <CustomInput
        disabled={false}
        design={`inputDesign ${userError.passwordError !== "" ? 'inputDesignError' : ''}`}
        type={"password"}
        name={"password"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='errorMsg'>{userError.passwordError}</div>
      <div className='buttonSubmit' onClick={Submit}>Login</div>
    </div>
  );
};