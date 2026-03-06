<template>
  <div class="d-flex flex-column justify-content-center align-items-center vh-100 ">
    <div class="card shadow-lg p-5 text-center home-card">
      <h1 class="mb-4 text-primary">
        <i class="fas fa-file-import bounce-icon"></i> Gestión de Archivos
      </h1>
      <p class="text-muted mb-4">
        Administra tus archivos de forma rápida y segura.
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <button class="btn btn-primary btn-lg btn-hover" @click="$router.push('/upload')">
          <i class="fas fa-upload me-2"></i> Subir Archivo
        </button>
        <button class="btn btn-outline-secondary btn-lg btn-hover" @click="$router.push('/list')">
          <i class="fas fa-list me-2"></i> Listado de Archivos
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>


.home-card {
  border-radius: 1rem;
  max-width: 500px;
}

.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


</style>