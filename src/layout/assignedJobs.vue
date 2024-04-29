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

    <div class="assignData" v-for="(user, index) in users" :key="index">
      <div class="tableUI">
        <table>
          <tbody>
            <tr>
              <td style="width: 10px">
                <div class="tableAvatar">M</div>
              </td>
              <td>
                <div class="designationName">
                  {{ user.designationName }}
                </div>
                <div class="companyName">
                  {{ user.companyName }}
                </div>
              </td>
              <td>
                <div style="" class="userUI">
                  <span style="padding-right: 8px"
                    ><img
                      src="../assets/user.svg"
                      alt=""
                      style="width: 12px; height: 12px" /></span
                  >{{ user.name }}
                </div>
                <div class="userUI">
                  <span style="padding-right: 8px"
                    ><img
                      src="../assets/time.svg"
                      alt=""
                      style="width: 12px; height: 12px" /></span
                  >{{ user.year }}
                </div>
              </td>
              <td>
                <div>
                  <button class="assignBtnTable">assigned</button>
                </div>
              </td>
              <td>
                <div>
                  <button class="viewFile">View Files</button>
                </div>
              </td>
              <td>
                <label class="switch">
                  <input type="checkbox" v-model="toggle" />
                  <span class="slider"></span>
                </label>
              </td>
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
      users: [
        {
          designationName: "Senior Product Manager",
          companyName: "Recruit CRM",
          name: "William Sample",
          year: "Jul 10, 2023",
          email: "john@example.com",
          toggle: false,
        },
        {
          designationName: "Senior Product Manager",
          companyName: "Recruit CRM",
          name: "William Sample",
          year: "Jul 10, 2023",
          email: "john@example.com",
          toggle: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
.assigned_Jobs {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
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
@media (max-width: 992px) {
  .assigned_Jobs {
    flex-direction: column;
    lex-direction: column;
    align-items: flex-start;
    padding: 0px;
  }
  .assigned_Jobs_Header {
    flex: 1;
    margin-bottom: 10px;
  }
}

.assignData {
  border: 1px solid var(--N300, #e9ecef);
  height: 64px;
  gap: 0px;
  border-radius: 5px 0px 0px 0px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th,
tbody td {
  padding: 10px 5px;
  text-align: left;
}

thead th {
  background-color: #333;
  color: #fff;
}

img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
/* styles.css */

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.tableAvatar {
  background-color: #fbddb3;
  width: 43px;
  height: 40px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #f08c00;
  display: flex;
  align-items: center;
  justify-content: center;
}
.designationName {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
}
.companyName {
  font-size: 12px;
  font-weight: 500;
  color: #868e96;
}

.userUI {
  font-size: 12px;
  font-weight: 500;
  color: #495057;
}

.assignBtnTable {
  font-size: 13px;
  font-weight: 500;
  color: #495057;
  height: 24px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #f1f3f5;
  background-color: #f8f9fa;
  width: 72px;
  cursor: pointer;
}

.viewFile {
  width: 89px;
  height: 32px;
  padding: 8px 12px 8px 12px;
  border-radius: 6px;
  border: 1px solid #ced4da;
  box-shadow: 0px 1px 2px 0px #1018280d;
  background: var(--White, #ffffff);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.tableUI {
  padding: 5px 25px;
}
</style>