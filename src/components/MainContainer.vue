<template>
  <div class="contenido">
    <NavBar />
    <div class="contenedor-principal">
      <MainDividerContainer />
    </div>
    <footer>
      This is the footer.
    </footer>
  </div>
</template>

<script lang="ts">
import NavBar from "./NavBar.vue";
import MainDividerContainer from "./MainDividerContainer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MainDividerContainer,
  },
};
</script>

<style scoped>
.contenido {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 20px); /* Subtract footer height from viewport height */
}

.contenedor-principal {
  flex-grow: 1; /* Use flex-grow instead of height to take all available space */
}

/* Styling for the footer */
footer {
  background-color: #f5f5f5;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: sticky;
  bottom: 0;
  z-index: 1; /* make the footer appear on top */
  transition: transform 0.2s ease-in-out; /* add a hover effect */
  transform: translateY(0); /* set default state */
}

/* Hover effect */
footer:hover {
  transform: translateY(-5px);
}

/* Styling for the rest of the page */
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
</style>
