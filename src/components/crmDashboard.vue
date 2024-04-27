<template>
  <div class="dashboard-container">
    <div class="topbar">
      <div><topBar /></div>
    </div>
    <div class="sidebar">
      <leftMenuBar />
    </div>
    <div class="mainContainer">
      <div class="leftSideMainContain">
        <div>
          <subheader />
        </div>
        <div class="profileDetailsPageUI">
          <profileDetailsPage />
        </div>
        <div>
          <userDetails/>
        </div>
        <div>
          <tabDesign/>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
import leftMenuBar from "../layout/leftMenuBar.vue";
import topBar from "../layout/topBar.vue";
import tabDesign from "../layout/tabDesign.vue";
import subheader from "../layout/subheader.vue";
import profileDetailsPage from "../layout/profileDetailsPage.vue";
import userDetails from "../layout/userDetails.vue";

</script>















  

  
  <style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 1px 3px 0px #00000012;
  box-shadow: 0px 1px 2px -2px #0000000f;
  box-shadow: 0px 0px 1px 1px #0000000d;
  position: fixed;
  left: 57px;
}
.mainContainer {
  display: flex;
  
}
.leftSideMainContain {
  width: 70%;
  border-width: 0px, 1px, 1px, 0px;

border-style: solid;

border-color: var(--N300, #E9ECEF);


}
@media (max-width: 992px) {
  .leftSideMainContain {
    width: 100%;
  }
}

.profileDetailsPageUI {


}
</style>
  