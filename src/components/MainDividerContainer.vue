<template>
  <div class="contenedor-principal">
    <div class="contenedor-izquierdo">
      <RefrigeradorVirtual />
    </div>
    <div class="contenedor-derecho">
      <input type="text" placeholder="Ingrese texto aquí">
    </div>
  </div>
</template>

<script lang="ts">
import RefrigeradorVirtual from "./RefrigeradorVirtual.vue";

export default {
  name: "App",
  components: {
    RefrigeradorVirtual,
  },
};
</script>

<style scoped>
.contenedor-principal {
  display: flex;
  height: 100%;
  width: 100%;
}

.contenedor-izquierdo {
  flex: 1;
  background-color: #eee;
}

.contenedor-derecho {
  flex: 1;
  background-color: #ddd;
}
</style>
