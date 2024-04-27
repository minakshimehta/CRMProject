<template>
  <div>
    <div class="actionBtnUiContainer">
      <div><button class="btnUIAction contactLink">Contact Linked</button></div>
      <div>
        <button class="btnUIAction svgIcons">
          <img src="../assets/star.svg" alt="" />
        </button>
      </div>
      <div>
        <button class="btnUIAction svgIcons">
          <img src="../assets/star1.svg" alt="" />
        </button>
      </div>
      <div>
        <button class="btnUIAction svgIcons">
          <img src="../assets//pencil.svg" alt="" />
        </button>
      </div>
      <div>
        <button class="btnUIAction svgIcons">
          <img src="../assets/threedot.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template> 


<style scoped>

.actionBtnUiContainer{

    display: flex;
}
.btnUIAction {
  padding: 8px 12px 8px 12px;
  gap: 10px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid var(--Netural---500, #ced4da);
  box-shadow: 0px 1px 2px 0px #1018280d;
  border-radius: 5px;
  color: #ffff;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;
}
.svgIcons {
  width: 32px;
  height: 32px;
}
.contactLink {
  background-color: #fceaea;
  border: 1px solid var(--Red---200, #f6c1c1);
  color: #e03131;
}
</style>