<template>
  <div style="" class="subheaderContainer">
    <div class="candidatesDetails">
      <div style="color: #1f5fac">Candidates</div>
      <span style="display: flex; align-items: center; margin: 10px 8px">
        <img src="../assets/arrow.svg" alt=""
      /></span>
      <span style="color: #495057; margin-right: 8px">Robert Hardy</span>
      <span class="CandidatesID">ID - 231</span>
    </div>
    <div class="requestProfileBtn">
      <requestProfileBtn />
    </div>
  </div>
</template>
<script setup>
import requestProfileBtn from "./requestProfileBtn.vue";
</script>
<style scoped>
.subheaderContainer {
  border-style: solid;
  border-color: var(--N300, #e9ecef);
  min-height: 50px;
  border: 0px 1px 1px 0px;
  opacity: 0px;
  background-color: #f8f9fa;
  display: flex;
  padding: 0px 10px;
}
.candidatesDetails {
  font-size: 13px;
  font-weight: 600;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 50%;
}
.requestProfileBtn {
  display: flex;
  width: 50%;
  align-items: center;
  align-content: space-around;
  justify-content: flex-end;
}

@media (max-width: 992px) {
  .candidatesDetails {
    width: 100%;
    /* display: grid; */
  }
  .requestProfileBtn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    /* padding: 2px; */
    margin: 0px -5px;
  }
  .subheaderContainer {
    display: grid;
  }
  .subheaderContainer {
    min-height: 100px;
    max-height: 200px;
  }
}
.CandidatesID {
  border: 1px solid var(--N300, #e9ecef);
  font-size: 12px;
  font-weight: 500;
  color: #343a40;
  padding: 3px, 6px, 3px, 6px;
  border-radius: 5px;
  height: 20px;
  width: 58px;
  text-align: center;
}
</style>