import axios from 'axios'
import { Persona } from '../models/Persona.js'

const API_URL = 'http://localhost:8080'

/**
 * @returns {Promise<Persona[]>}
 */
export const getAllPersonas = async () => {
  try {
    const response = await axios.get(`${API_URL}/personas/all`)
    return response.data.map((p) => new Persona(p))
  } catch (error) {
    console.error('Error al obtener personas:', error)
    throw error
  }
}
