// import React, { useState, useEffect } from "react";
// import "./Profile.css";

// import { CustomInput } from "../../common/CustomInput/CustomInput";
// import { validator } from "../../services/useful";


// //Importo elementos para conexión a RDX en modo lectura
// import { useSelector } from "react-redux";
// import { userData } from "../userSlice";
// import { updateProfile } from "../../services/apiCalls";
// import { useNavigate } from 'react-router-dom';

//  //Instancio navigate para poder navegar
 
//  export const Profile = () => {
//   //Instancio a RDX en modo lectura
//   const datosRdxUser = useSelector(userData);

//   //Variables de estado con hook useState en las que voy a guardar los valores de los input
//   const [profile, setProfile] = useState({
//     name: datosRdxUser.credentials.name,
//     email: datosRdxUser.credentials.email,
//   });

//   const [profileError, setProfileError] = useState({
//     nameError: '',
//     emailError: ''
//   });

//   const [isEnabled, setIsEnabled] = useState(true);

//   useEffect(() => {
//     //RDX se puede seguir como un hook de useState... por lo tanto seguimos
//   }, [datosRdxUser]);

//   const errorCheck = (e) => {

//     let error = "";

//     error = validator(e.target.name, e.target.value);

//     setProfileError((prevState) => ({
//         ...prevState,
//         [e.target.name + 'Error']: error,
//     }));
//   }

//   const functionHandler = (e) => {
//     setProfile((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }

//   const sendData = () => {
//     updateProfile(profile, datosRdxUser.credentials)
//       .then(
//         resultado => {
//             setIsEnabled(true)          
//         }
//         )
//         .catch(error => console.log(error));
//       }
  
      
//       return (
//     <div className="profileDesign">
//       <div className="text-profile">NAME</div>
//       <CustomInput
//         disabled={isEnabled}
//         design={`inputDesign ${
//           profileError.nameError !== "" ? "inputDesignError" : ""
//         }`}
//         type={"text"}
//         name={"name"}
//         placeholder={""}
//         value={profile.name}
//         functionProp={functionHandler}
//         functionBlur={errorCheck}
//         />
//       <div className="text-profile">EMAIL</div>
//       <CustomInput
//         disabled={isEnabled}
//         design={`inputDesign ${
//           profileError.emailError !== "" ? "inputDesignError" : ""
//         }`}
//         type={"email"}
//         name={"email"}
//         placeholder={""}
//         value={profile.email}
//         functionProp={functionHandler}
//         functionBlur={errorCheck}
//       />
//       {
//         isEnabled 
//         ? (<div className="editDesign" onClick={() => setIsEnabled(!isEnabled)}>EDIT</div>)
//         : (<div className="sendDesign" onClick={() => sendData()}>SEND</div>)
//       }
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./Profile.css";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { validator } from "../../services/useful";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { updateProfile } from "../../services/apiCalls";
import { useDispatch } from "react-redux";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const datosRdxUser = useSelector(userData);
  const [profile, setProfile] = useState({
    name: datosRdxUser.credentials.name,
    email: datosRdxUser.credentials.email,
  });
  const token = datosRdxUser.credentials.token;
  const [profileError, setProfileError] = useState({
    nameError: '',
    emailError: ''
  });
  const [isEnabled, setIsEnabled] = useState(true);
  
  useEffect(() => {
    if (!datosRdxUser.credentials) {
      navigate("/");
    }
  }, [datosRdxUser]);
  
  useEffect(() => {
    console.log("Perfil actualizado:", profile);
  }, [profile]);

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

  const sendData = () => {
    updateProfile(profile, datosRdxUser)
      .then(result => {
        console.log("Datos enviados");
        console.log(profile);
        console.log(token);
       dispatchEvent(login(profile));
        setIsEnabled(true);
      })
      .catch(error => {
        console.log(error);
        setIsEnabled(true);
      });
  }

  return (
    <div className="profileDesign">
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
      {isEnabled
        ? (<div className="editDesign" onClick={() => setIsEnabled(!isEnabled)}>Editar</div>)
        : (<div className="sendDesign" onClick={() => sendData()}>Enviar</div>)
      }
    </div>
  );
};
