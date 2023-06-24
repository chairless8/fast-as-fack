<template>
  <div 
    class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
    :class="{ 'opacity-50': !existencia }"
    @click="emitirEvento"
  >
    <img :src="imagen" alt="" class="w-full h-32 sm:h-48 object-cover" />
    <div class="p-6 space-y-2">
      <div class="text-lg font-bold text-blue-700">{{ nombre }}</div>
      <div class="text-gray-700">{{ cantidad }} {{ unidad }}</div>
      <div class="text-sm text-gray-500">{{ fecha }}</div>
      <div v-if="!existencia" class="text-sm text-red-500">Agotado</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    imagen: {
      type: String,
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    unidad: {
      type: String,
      required: true
    },
    existencia: {
      type: Boolean,
      default: true
    },
    fecha: {
      type: String,
      required: true
    }
  },
  methods: {
    emitirEvento() {
      this.$emit('clickAlimento', this.nombre);
    }
  }
});
</script>
