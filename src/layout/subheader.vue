<template>
  <div
    style="
      border-style: solid;
      border-color: var(--N300, #e9ecef);
      height: 50px;
      border: 0px 1px 1px 0px;
      opacity: 0px;
      background-color: #f8f9fa;
      display: flex;
      padding: 0px 10px;

    "
  >
    <div class="candidatesDetails">
      <div style="color: #1f5fac">Candidates</div>
      <span style="display: flex; align-items: center; margin: 10px 8px">
        <img src="../assets/arrow.svg" alt=""
      /></span>
      <span style="color: #495057; margin-right: 8px">Robert Hardy</span>
      <span
        style="
          border: 1px solid var(--N300, #e9ecef);
          font-size: 12px;
          font-weight: 500;
         color: #343A40;
         padding: 3px, 6px, 3px, 6px;
         border-radius: 5px;
         height: 20px;
         width: 58px;
         text-align: center;
        "
        >ID - 231</span
      >
    </div>
    <div></div>
  </div>
</template>
<style scoped>
.candidatesDetails {
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.candidateUI {
  text-align: center;
}
</style>