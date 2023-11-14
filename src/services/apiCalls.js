import axios from 'axios';

export const bringArtists = async () => {
  try {
    const response = await axios.get('http://localhost:3430/list');
    const artists = response.data; // Suponiendo que la respuesta de la API es un array de objetos con las propiedades correctas
    const artistNames = artists.map(artist => artist.name);

    return artistNames;
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error; // Puedes manejar los errores según tus necesidades
  }
};
export const logUser = async (body) => {

    let user = {
        username : body.email,
        password: body.password
    }
    //SIMULACRO DE CONEXION REAL A API
    return await axios.post(`https://dummyjson.com/auth/login`, user);

}

export const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3430/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };