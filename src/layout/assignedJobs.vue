<template>
  <div>

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
  <div>
      <div class="table-responsive">
  <table>
    
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td><img src="../assets/avatar.png" alt="Avatar" /></td>
        <td>{{ item.column1 }}</td>
        <td>{{ item.column2 }}</td>
        <td>{{ item.column3 }}</td>
        <td>{{ item.column4 }}</td>
        <td>{{ item.column5 }}</td>
        <td><input type="checkbox" v-model="item.switchValue" /></td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false },
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', switchValue: false }
      ]
    };
  }
};
</script>

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
.table-responsive {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #ffffff;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr {
  border-bottom: 1px solid #e9ecef;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

</style>