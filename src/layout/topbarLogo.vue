<template>
  <div class="logo_container">
 
    <div class="desktop">
      <img src="../assets/logo.png" alt="" class="imgLogo" />
    </div>
  
  </div>
</template>
<script setup>
</script>
<style scoped>
.mobileView {
  width: 50px;
  height: 50px;
  float: left;
  margin-top: 8px;
}
.logo_container {
  display: flex;
}
@media (min-width: 991px) {
  .mobileView {
    display: none;
  }
}
</style>