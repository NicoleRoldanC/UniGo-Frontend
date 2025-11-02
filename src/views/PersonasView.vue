<template>
  <div class="personas-container">
    <h1>Listado de Personas</h1>

    <div v-if="loading">Cargando personas...</div>

    <div v-else>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Vehículo</th>
            <th>Rol</th>
            <th>Licencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="persona in personas" :key="persona.id">
            <td>{{ persona.id }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.apellido }}</td>
            <td>{{ persona.telefono }}</td>
            <td>{{ persona.idVehiculo }}</td>
            <td>{{ persona.idRol }}</td>
            <td>
              <a :href="persona.urlLicencia" target="_blank">{{ persona.urlLicencia }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllPersonas } from '../services/personaService.js'

const personas = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await getAllPersonas()
    personas.value = data
  } catch (error) {
    console.error('Error al cargar personas:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.personas-container {
  padding: 2rem;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1e1e1e;
}

th, td {
  border: 1px solid #555;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #333;
}
</style>
