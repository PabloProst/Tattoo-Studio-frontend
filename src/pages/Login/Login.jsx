import React, { useState, useEffect } from "react";
import "./Login.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { useNavigate } from 'react-router-dom';
import { logUser } from "../../services/apiCalls";

//redux
import { useSelector, useDispatch } from "react-redux";  //useDispatch es necesario para emitir acciones
import { login, userData } from "../userSlice";
import { jwtDecode } from "jwt-decode";

export const Login = () => {

  const navigate = useNavigate();
  const rdxUserData = useSelector(userData);
  const dispatch = useDispatch();


  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [userError, setUserError] = useState({
    emailError: '',
    passwordError: ''
  })

  useEffect(() => {
    if (rdxUserData.credentials.token) {
      navigate("/")
    }
  }, [rdxUserData])

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

    const { email, password } = user;

    logUser({ email, password })
      .then(resultado => {
        let decodificado = jwtDecode(resultado.data.token);
        console.log(`token decoded:`);
        console.log(decodificado);
        dispatch(login({ credentials: resultado.data }));
        console.log(resultado.data);
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch(error => console.log(error));

  }

  return (
    <div className="registerDesign">
      <div className="login-border">
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
        <div className='buttonSumbit' onClick={Submit}>Login</div>
      </div>
    </div>
  );
};