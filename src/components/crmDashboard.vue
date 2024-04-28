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
        <div><editForm /></div>
        <div>
          <userDetails />
        </div>
        <div>
          <tabDesign />
        </div>
      </div>
      <div class="rightSideMainContain"><rightSubHeader /></div>
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
import editForm from "../layout/editForm.vue";
import rightSubHeader from "../layout/rightSubHeader.vue";
</script>


  

  
  <style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* box-shadow: 0px 1px 3px 0px #00000012;
  box-shadow: 0px 1px 2px -2px #0000000f;
  box-shadow: 0px 0px 1px 1px #0000000d; */
  position: fixed;
  left: 57px;
 
}
.mainContainer {
  display: flex;
  height: calc(100vh - 80px);
  overflow: auto;
}
.leftSideMainContain {
  width: 75%;
  border-width: 0px, 1px, 1px, 0px;
  border-style: solid;
  border-color: var(--N300, #e9ecef);

}
.rightSideMainContain {
  width: 25%;
  border-width: 0px, 1px, 1px, 0px;
  border-style: solid;
  border-color: var(--N300, #e9ecef);
}
@media (max-width: 992px) {
  .leftSideMainContain {
    width: 100%;
  }
}

.profileDetailsPageUI {
}
</style>
  