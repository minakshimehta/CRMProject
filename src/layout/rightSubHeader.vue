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
    <div class="notepaper">
      <div class="noteData">All</div>
      <div class="noteData">Notes & Calls</div>
      <div class="noteData">Tasks</div>
      <div class="noteData">Meeting</div>
      <div class="noteData">Files</div>
    </div>
    <div class="allNoteData">
      <div class="noteHeaderIcon">
        <div class="noteSvg">
          <img
            src="../assets/note.svg"
            alt=""
            style="width: 15px; height: 15px"
          />
        </div>
        <div class="Note">Note</div>
        <div><button class="todo">To Do</button></div>
      </div>
      <div class="contantNote">
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </div>
      <div class="association">1 Association(s)</div>
      <div class="userDetails">
        <div style="display: flex">
          <img src="../assets/user.svg" alt="" />
          <span style="font-size: 13px; font-weight: 400; margin-left: 8px"
            >John Doe
          </span>
        </div>
        <div>
          <div style="display: flex">
            <img src="../assets/time.svg" alt="" />
            <span style="font-size: 13px; font-weight: 400; margin-left: 8px"
              >Jul 12, 2023, 11:54 am</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="allNoteData">
      <div class="noteHeaderIcon">
        <div class="noteSvg">
          <img
            src="../assets/note.svg"
            alt=""
            style="width: 15px; height: 15px"
          />
        </div>
        <div class="Note">Note</div>
        <div><button class="todo">To Do</button></div>
      </div>
      <div class="contantNote">
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </div>
      <div class="association">1 Association(s)</div>
      <div class="userDetails">
        <div style="display: flex">
          <img src="../assets/user.svg" alt="" />
          <span style="font-size: 13px; font-weight: 400; margin-left: 8px"
            >John Doe
          </span>
        </div>
        <div>
          <div style="display: flex">
            <img src="../assets/time.svg" alt="" />
            <span style="font-size: 13px; font-weight: 400; margin-left: 8px"
              >Jul 12, 2023, 11:54 am</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="allNoteData">
      <div class="noteHeaderIcon">
        <div class="noteSvg">
          <img
            src="../assets/note.svg"
            alt=""
            style="width: 15px; height: 15px"
          />
        </div>
        <div class="Note">Note</div>
        <div><button class="todo">To Do</button></div>
      </div>
      <div class="contantNote">
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </div>
      <div class="association">1 Association(s)</div>
      <div class="userDetails">
        <div style="display: flex">
          <img src="../assets/user.svg" alt="" />
          <span style="font-size: 13px; font-weight: 400; margin-left: 8px"
            >John Doe
          </span>
        </div>
        <div>
          <div style="display: flex">
            <img src="../assets/time.svg" alt="" />
            <span style="font-size: 13px; font-weight: 400; margin-left: 8px"
              >Jul 12, 2023, 11:54 am</span
            >
          </div>
        </div>
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
.notepaper {
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
  min-height: 188px;
  border-radius: 5px;
  border: 1px solid #e9ecef;
  opacity: 0px;
  /* margin: 10px;
   */
   margin-top: 10px;
  padding: 20px;
}
.noteSvg {
  /* margin: 20px 10px; */
  background-color: #e6f1ff;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
}
.Note {
  font-size: 13px;
  font-weight: 600;
  color: #2570ca;
  margin-left: 8px;
}
.todo {
  border: 1px solid #f1f3f5;
  background-color: #f1f3f5;
  width: 46px;
  height: 20px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  margin-left: 20px;
}
.noteHeaderIcon {
  display: flex;
  align-items: center;
}
.contantNote {
  font-size: 13px;
  font-weight: 400;
  color: #343a40;
  margin-top: 10px;
}
.association {
  font-size: 13px;
  font-weight: 600;
  color: #2570ca;
  margin-top: 10px;
}
.userDetails {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  flex-wrap: wrap;

}


</style>