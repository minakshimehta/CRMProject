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
          <userDetails />
        </div>
        <div>
          <tabDesign />
        </div>
      </div>
      <div class="rightSideMainContain "><rightSubHeader /></div>
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
  position: fixed;
  left: 57px;
}
.mainContainer {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 110px);
  overflow: auto;
  /* width: calc(100vw - 57px); */
}
.leftSideMainContain {
  width: 75%;
  border-width: 0px, 1px, 1px, 0px;
  border-style: solid;
  border-color: var(--N300, #e9ecef);
  border-bottom: none !important;
}
.rightSideMainContain {
  width: 25%;
  border-width: 0px, 1px, 1px, 0px;
  border-style: solid;
  border-color: var(--N300, #e9ecef);
  padding-right: 20px;
  border-bottom: none !important;

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
  