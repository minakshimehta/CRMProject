<template>
  <div class="assigned_Jobs">
    <div class="assigned_Jobs_Header">
      <div>Assigned Job to William Sample</div>
    </div>
    <div class="assigned_Jobs_Header">
      <div class="assignedBtnContainer">
        <button class="AssignJob">Assign To Job</button>
        <button class="allAssignJob">View All Assigned Jobs</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.assigned_Jobs {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  font-size: 13px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
}
.assigned_Jobs_Header {
  flex: 1;
  padding: 10px;
}
.assignedBtnContainer {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
}
.AssignJob {
  font-size: 13px;
  font-weight: 600;
  width: 113px;
  height: 35px;
  gap: 10px;
  border-radius: 6px;
  color: #ffff;
  background-color: #2570ca;
  border: none;
  margin-right: 10px;
}
.allAssignJob {
  font-size: 13px;
  font-weight: 600;
  height: 35px;
  gap: 10px;
  border-radius: 6px;
  color: #343a40;
  border: 0.5px solid #343a40;
  background-color: #ffffff;
}
@media (max-width: 768px) {
  .assigned_Jobs {
    flex-direction: assigned_Jobs_Header;
  }
  .assigned_Jobs_Header {
    flex: 1;
    margin-bottom: 10px;
  }
}
</style>