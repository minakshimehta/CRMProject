<template>
  <div class="topBar">
    <div>
      <searchBar />
    </div>
    <div>
      <topbarLogo />
    </div>
    <div style="margin-right: 60px">
      <profile />
    </div>
  </div>
</template>

<script setup>
import topbarLogo from "./topbarLogo.vue";
import searchBar from "./searchBar.vue";
import profile from "./profile.vue";
</script>
<style scoped>
.topBar {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
}
</style>