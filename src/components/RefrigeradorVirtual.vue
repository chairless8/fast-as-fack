<!-- RefrigeradorVirtual.vue -->
<template>
  <div>
    dslakjndklasndkl
    <button @click="cambiarVista">{{ textoBoton }}</button>
    <router-view />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // aquí está la corrección

export default {
  setup() {
    const router = useRouter(); // aquí está la corrección
    const vistaLista = ref(true);
    const alimentos = ref([
      // Aquí deberías llenar la lista con los alimentos iniciales
      // Ej: { nombre: 'Leche', cantidad: 1, unidad: 'litro', existencia: true, fecha: '2023-07-01', imagen: '/ruta/a/imagen.jpg' }
    ]);

    const cambiarVista = () => {
      vistaLista.value = !vistaLista.value;
      router.push(vistaLista.value ? '/lista' : '/cuadricula');
    };

    return {
      alimentos,
      cambiarVista,
      textoBoton: vistaLista.value ? 'Ver en cuadrícula' : 'Ver en lista'
    };
  }
};
</script>
