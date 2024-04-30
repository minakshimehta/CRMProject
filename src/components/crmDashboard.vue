<template>
  <div class="dashboard-container">
    <div class="topbar">
      <div><topBar /></div>
    </div>
    <div class="sidebar">
      <leftMenuBar />
    </div>
    <div class="mainContainer">
      <div class="leftSideMainContain col-3 col-s-12">
        <div>
          <subheader />
        </div>
        <div class="profileDetailsPageUI">
          <profileDetailsPage />
        </div>
        <div>
          <userDetails />
        </div>
        <div>
          <tabDesign />
        </div>
      </div>
      <div class="rightSideMainContain col-3 col-s-12"><rightSubHeader /></div>
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
  flex-direction: row;
  height: calc(100vh - 80px);
  overflow: auto;
  width: calc(100vw - 56px);
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
  margin-right: 40px;
}
@media (max-width: 992px) {
  .leftSideMainContain {
    width: 100%;
  }
  .rightSideMainContain {
    width: 100%;
  }
  .mainContainer {
    flex-direction: column;
  }
}

.profileDetailsPageUI {
}
</style>
  