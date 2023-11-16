import React, { useState, useEffect } from "react";
import "./Profile.css";

import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";


//Importo elementos para conexión a RDX en modo lectura
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
import { updateProfile } from "../../services/apiCalls";

export const Profile = () => {
  //Instancio a RDX en modo lectura
  const datosRdxUser = useSelector(userData);

  //Variables de estado con hook useState en las que voy a guardar los valores de los input
  const [profile, setProfile] = useState({
    name: datosRdxUser.credentials.name,
    email: datosRdxUser.credentials.email,
  });
  console.log("datos guardados");
  console.log(profile);

  const [profileError, setProfileError] = useState({
    nameError: '',
    emailError: ''
  });

  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    //RDX se puede seguir como un hook de useState... por lo tanto seguimos

    console.log(datosRdxUser);
  }, [datosRdxUser]);

  console.log("estoy por aqui");
  const errorCheck = (e) => {

    let error = "";

    error = validator(e.target.name, e.target.value);

    setProfileError((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: error,
    }));
  }

  const functionHandler = (e) => {
    setProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const printData = () => {
    console.log("estoy imprimiendo el profile editado");
    console.log(profile);
  }

  const sendData = async () => {
    updateProfile(profile)
      .then(
        resultado => {
          setTimeout(() => {
            setIsEnabled(true)
            alert("PROFILE EDITED")
          }, 500);
        }
        )
        .catch(error => console.log(error));
      }
      
      return (
    <div className="profileDesign">
      {console.log(`aca imprimo profile`)};
      {console.log(profile)}
      <div className="text-profile">NAME</div>
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.nameError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"name"}
        placeholder={""}
        value={profile.name}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className="text-profile">EMAIL</div>
      <CustomInput
        disabled={isEnabled}
        design={`inputDesign ${
          profileError.emailError !== "" ? "inputDesignError" : ""
        }`}
        type={"email"}
        name={"email"}
        placeholder={""}
        value={profile.email}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      {
        isEnabled 
        ? (<div className="editDesign" onClick={() => {setIsEnabled(!isEnabled); printData();}}>EDIT</div>)
        : (<div className="sendDesign" onClick={() => {sendData(); printData();}}>SEND</div>)
      }
    </div>
  );
}