<template>
  <div class="topBar">
    <div class="topbar_topbarLogo foMobile">
      <topbarLogo />
    </div>
    <div class="topbar_searchBar">
      <searchBar />
    </div>
    <div class="topbar_topbarLogo Dashboard">
      <topbarLogo />
    </div>

    <div style="margin-right: 60px" class="topbarProfile">
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
  flex-direction: row;
  justify-content: space-between;
}
@media (min-width: 991px) {
  .foMobile {
    display: none !important;
  }
}
@media (max-width: 992px) {
  .topBar {
    flex-direction: column;
    padding: 10px;
    /* margin-right: 60px; */
  }

  .topbar_searchBar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Dashboard{

    display: none;
  }

  /* .topbarProfile {
    display: none !;
  } */
}

.mobile {
  padding-top: 10px;
}

.topbar_topbarLogo.foMobile {
  display: flex;
  justify-content: center;
}
</style>

<style lang="sass" scoped>
.topBar
  .topbar_topbarLogo,.topbar_searchBar, .topbarProfile

    margin-right: 50px
</style>