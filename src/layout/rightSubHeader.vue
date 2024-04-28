<template>
  <div>
    <div class="rightIcon">
      <div class="svgContainer">
        <img src="../assets/note.svg" alt="" class="svgIconUI" />
      </div>
      <div class="svgContainer">
        <img src="../assets/call.svg" alt="" class="svgIconUI" />
      </div>
      <div class="svgContainer">
        <img src="../assets/check.svg" alt="" class="svgIconUI" />
      </div>
      <div class="svgContainer">
        <img src="../assets/calendar.svg" alt="" class="svgIconUI" />
      </div>
    </div>
    <div class="noteheader">
      <div class="noteData">All</div>
      <div class="noteData">Notes & Calls</div>
      <div class="noteData">Tasks</div>
      <div class="noteData">Meeting</div>
      <div class="noteData">Files</div>
    </div>
    <div class="allNoteData">
      <div class="noteHeaderIcon">
        <div class="noteSvg">
          <img src="../assets/note.svg" alt="" style="width: 15px; height: 15px;"/>
        </div>
        <div class="noteText"></div>
        <div class="todo"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rightIcon {
  display: flex;
  padding-left: 10px;
}
.svgIconUI {
  width: 20px;
  height: 20px;
}
.svgContainer {
  margin: 20px 10px;
  background-color: #e6f1ff;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.noteheader {
  height: 50px;
  border: 1px solid #f1f3f5;
  background-color: #e9ecef;

  display: flex;
  align-items: center;
}
.noteData {
  font-size: 13px;
  font-weight: 600;
  color: #343a40;
  padding: 0px 10px;
}
.allNoteData {
  border: 1px solid #e9ecef;
  height: 188px;

  border-radius: 5px;
  border: 1px solid #e9ecef;
  opacity: 0px;
  margin: 10px;
}
.noteSvg {
  margin: 20px 10px;
  background-color: #e6f1ff;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>