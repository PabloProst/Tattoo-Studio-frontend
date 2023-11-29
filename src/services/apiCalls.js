import axios from 'axios';

export const GetCrew = async () => {

  return await axios.get(`http://localhost:3430/list`);
}


export const logUser = async (body) => {

  let user = {
    email: body.email,
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

export const logAdmin = async (body) => {

  let artist = {
    email: body.email,
    password: body.password
  }

  return await axios.post(`http://localhost:3430/admin/login`, artist);
}


export const ListAllUsers = async (token) => {

  return await axios.get(`http://localhost:3430/admin/users`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const ListAllAppointments = async (token) => {
  return await axios.get(`http://localhost:3430/admin/allappointments`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}


export const MyAppointmentsUser = async (token) => {
  return await axios.get('http://localhost:3430/myappointments', {
    headers: { Authorization: `Bearer ${token}` }
  })
}


export const DeleteAppointment = async (token) => {
  return await axios.delete("http://localhost:3430/appointment/delete", {
    headers: { Authorization: `Bearer ${token}` },
  });
};


export const CreateAppointment = async (token, appointmentData) => {
  return await axios.post("http://localhost:3430/appointment/new", appointmentData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const MyArtistAppointments = async (token) => {
  return await axios.get("http://localhost:3430/admin/myappointments", {
    headers: { Authorization: `Bearer ${token}` },
  });
};


export const ModifyAppointment = async (token, appointmentData) => {
  return await axios.put("http://localhost:3430/appointment/modify", appointmentData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
