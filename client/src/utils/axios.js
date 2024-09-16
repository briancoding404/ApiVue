import axios from 'axios'; // Importa axios directamente

// Crea una instancia personalizada de axios
const instance = axios.create({
  baseURL: 'http://localhost:3001/', // Asegúrate de que sea baseURL, no baseUrl
  headers: {
    'Content-Type': 'application/json', // Puedes agregar configuraciones adicionales como headers
  },
});

export default instance; // Exporta la instancia creada correctamente
