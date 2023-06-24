<template>
  <nav class="nav-bar">
    <div class="nav-bar-section nav-bar-left">
      <a href="#">Left</a>
    </div>
    <div class="nav-bar-section nav-bar-middle">
      <h1>Component Title</h1>
    </div>
    <div class="nav-bar-section nav-bar-right">
      <button @click="consoleLog('Button 1 clicked')">Button 1</button>
      <button @click="consoleLog('Button 2 clicked')">Button 2</button>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "ComponentName",
  methods: {
    consoleLog(message: string) {
      console.log(message);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  background-color: #5651a1;
  padding: 10px;
  border-radius: 0 0 8px 8px;
}

.nav-bar-section {
  display: flex;
  align-items: center;
}

.nav-bar-left {
  justify-content: flex-start;
}

.nav-bar-middle {
  justify-content: center;
}

.nav-bar-right {
  justify-content: flex-end;
}

.nav-bar-right button {
  margin-left: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
}

.nav-bar-right button:hover {
  background-color: #3e8e41;
}

</style>
