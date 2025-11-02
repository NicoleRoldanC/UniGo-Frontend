import axios from 'axios'

const API_URL = 'http://localhost:8080/personas'

export const getAllPersonas = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`)
    return response.data
  } catch (error) {
    console.error('Error al obtener personas:', error)
    throw error
  }
}
