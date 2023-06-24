<template>
  <div class="grid grid-cols-3 gap-4">
    <Alimento
      v-for="alimento in alimentos"
      :key="alimento.nombre"
      :nombre="alimento.nombre"
      :cantidad="alimento.cantidad"
      :unidad="alimento.unidad"
      :existencia="alimento.existencia"
      :fecha="alimento.fecha"
      :imagen="alimento.imagen"
      @clickAlimento="clickAlimento"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Alimento from './Alimento.vue';

interface AlimentoProps {
  nombre: string;
  cantidad: number;
  unidad: string;
  existencia: boolean;
  fecha: string;
  imagen: string;
}

const defaultAlimentos: AlimentoProps[] = [
  {
    nombre: 'Manzana',
    cantidad: 10,
    unidad: 'unidad',
    existencia: true,
    fecha: '2022-01-01',
    imagen: 'https://ruta/de/la/imagen.jpg'
  },
  {
    nombre: 'Plátano',
    cantidad: 5,
    unidad: 'unidad',
    existencia: true,
    fecha: '2022-01-02',
    imagen: 'https://ruta/de/la/imagen.jpg'
  }
];

export default defineComponent({
  components: {
    Alimento
  },
  props: {
    alimentos: {
      type: Array as () => AlimentoProps[],
      required: true,
      default: () => [...defaultAlimentos]
    }
  },
  methods: {
    clickAlimento(nombre: string) {
      console.log(`Hiciste clic en ${nombre}`);
    }
  },
  mounted() {
    console.log(this.alimentos);
  }
});
</script>
