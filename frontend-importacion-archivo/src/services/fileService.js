import axios from 'axios'

const API_URL = 'http://localhost:9090/files'

export const fileService = {
  // Listar archivos
  async listar() {
    try {
      const response = await axios.get(`${API_URL}/listar`)
      return response.data
    } catch (error) {
      console.error('Error listar archivos:', error)
      throw error
    }
  },

  // Descargar archivo
  download(id) {
    window.open(`${API_URL}/download/${id}`, '_blank')
  },

  // Eliminar archivo
  async eliminar(id) {
    try {
      await axios.delete(`${API_URL}/delete/${id}`)
    } catch (error) {
      console.error('Error al eliminar archivo:', error)
      throw error
    }
  },

  // Subir archivo
  async subir(file) {
    try {
      const formData = new FormData()
      formData.append('file', file)
      await axios.post(`${API_URL}/upload`, formData)
    } catch (error) {
      console.error('Error al subir archivo:', error)
      throw error
    }
  }
}