<template>
  <div class="topBar">
    <div class="topbar_searchBar">
      <searchBar />
      <div class="topbar_topbarLogo mobile">
        <topbarLogo />
      </div>
    </div>
    <div class="topbar_topbarLogo dashboard">
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
  .mobile {
    display: none;
  }
}
@media (max-width: 992px) {
  .topBar {
    flex-direction: column;
    padding: 10px;
  }

  .topbar_searchBar {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .dashboard {
    display: none;
  }
}
@media (max-width: 600px) {
  .topbar_searchBar{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
.mobile {
padding-top: 10px;  }

}

</style>