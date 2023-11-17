import axios from 'axios';

export const GetCrew = async () => {

  return await axios.get(`http://localhost:3430/list`);
}


export const logUser = async (body) => {

    let user = {
        email : body.email,
        password: body.password
    }

    return await axios.post(`http://localhost:3430/login`, user);
}

export const registerUser = async (body) => {

   return await axios.post('http://localhost:3430/register', body);
  };

  export const updateProfile = async (profile, datosRdxUser) => {
    try {
      const tokenHeader = {
        headers: {
          'Authorization': `Bearer ${datosRdxUser.credentials.token}`
        }
      };
  
      return await axios.put('http://localhost:3430/update', profile, tokenHeader);
    } catch (error) {
      console.log(error);
    }
  };

