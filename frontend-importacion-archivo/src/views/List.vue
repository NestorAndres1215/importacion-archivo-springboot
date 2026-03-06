<template>
  <div class="container mt-4">
    <h2 class="mb-4 file-title text-center">Listado de Archivos</h2>
    <div class="table-responsive shadow-sm">
      <table class="table table-hover align-middle mb-0">
        <thead class="table-header-custom text-white">
          <tr>
            <th scope="col" class="text-center">Archivo</th>
            <th scope="col" class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="file in files" :key="file.id">
            <td class="text-center">
              <i class="fas fa-file-alt text-primary me-2"></i>
              {{ file.name }}
            </td>
            <td class="text-center">
              <div class="d-flex justify-content-center gap-2">
                <button class="btn btn-success btn-sm" @click="handleDownload(file.id)">
                  <i class="fas fa-download me-1"></i> Descargar
                </button>
                <button class="btn btn-danger btn-sm" @click="handleDelete(file.id)">
                  <i class="fas fa-trash me-1"></i> Eliminar
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="files.length === 0">
            <td colspan="2" class="text-center text-muted">No hay archivos disponibles</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'ListView',
  setup() {
    const files = ref([])

    const fetchFiles = async () => {
      try {
        const res = await axios.get('http://localhost:9090/files/listar')
        files.value = res.data
      } catch (error) {
        console.error('Error al obtener archivos:', error)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron obtener los archivos'
        })
      }
    }

    const handleDownload = (id) => {
      window.open(`http://localhost:9090/files/download/${id}`, '_blank')
    }

    const handleDelete = async (id) => {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      })

      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:9090/files/delete/${id}`)
          await fetchFiles()
          Swal.fire({
            icon: 'success',
            title: 'Eliminado',
            text: 'El archivo ha sido eliminado correctamente'
          })
        } catch (error) {
          console.error('Error al eliminar archivo:', error)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo eliminar el archivo'
          })
        }
      }
    }

    onMounted(fetchFiles)

    return { files, handleDownload, handleDelete }
  }
}
</script>

<style scoped>
.file-title {
  color: #0b2545;
  /* Azul marino */
  font-weight: 700;
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  align-items: center;
}

.table-header-custom {
  background-color: #0b2545;
  /* Azul marino igual al título */
}
</style>