<template>
  <div>
    <div class="dashboard-container">
      <leftMenuBar /> 
      <topBar />
      <div class="main-content">
        <!-- Your main content goes here -->
      </div>
    </div>
  </div>
</template>
<script setup>
import leftMenuBar from "../layout/leftMenuBar.vue";
import topBar from "../layout/topBar.vue";
</script>
<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
}
</style>