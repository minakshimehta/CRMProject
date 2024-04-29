<template>
  <div class="container">
    <div class="profileHeader">
      <div class="profileDEtails">
        <div class="avatarPD">
          <img
            src="../assets//avatar.png"
            alt=""
            style="width: 27px; height: 27px"
          />
        </div>

        <div
          style="
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <div class="namePD">
            {{ profileData.name }}
            <div style="margin-top: 4px">
              <span class="socialMediaIcons"
                ><img
                  src="../assets/fb.svg"
                  alt=""
                  style="width: 17px; height: 17px"
              /></span>
              <span class="socialMediaIcons"
                ><img
                  src="../assets/tw.svg"
                  alt=""
                  style="width: 17px; height: 17px"
              /></span>
              <span class="socialMediaIcons"
                ><img
                  src="../assets/fb.svg"
                  alt=""
                  style="width: 17px; height: 17px"
              /></span>
              <span class="socialMediaIcons"
                ><img
                  src="../assets/ld.svg"
                  alt=""
                  style="width: 17px; height: 17px"
              /></span>
              <span class="socialMediaIcons"
                ><img
                  src="../assets/fb.svg"
                  alt=""
                  style="width: 17px; height: 17px"
              /></span>
            </div>
          </div>

          <div class="designation_location">
            {{ profileData.designation }}
            <div>
              <span class="location1">{{ profileData.location.country }}</span>
              <span class="location2">{{ profileData.location.city }}</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="actionBtn"><actionBtn @editForm="editFormToggle" /></div>
    </div>
    <hr style="border: 1px solid #e9ecef; height: 1px" />
    <!-- contactDetails -->

    <div class="contactDetailsContainer" v-if="!isToggle">
      <div class="contactDetails">
        <div style="margin: 5px 10px; display: flex">
          <span style="padding-right: 10px">
            <img
              src="../assets/massage.svg"
              alt=""
              style="width: 17px; height: 17px; margin-top: 2px"
            />
          </span>

          <span class="email_Phone_UI">{{ profileData.contact.email }}</span>
        </div>
        <div style="margin: 5px 10px; display: flex">
          <span style="padding-right: 10px">
            <img
              src="../assets/phone.svg"
              alt=""
              style="width: 17px; height: 17px; margin-top: 2px"
            />
          </span>

          <span class="email_Phone_UI">{{ profileData.contact.phone }}</span>
        </div>
      </div>
      <div class="timedetailsContainer">
        <div style="margin: 5px 10px; display: flex">
          <span style="padding-right: 10px">
            <img
              src="../assets/user.svg"
              alt=""
              style="width: 17px; height: 17px; margin-top: 2px"
            />
          </span>

          <span class="userName">{{ profileData.user.name }}</span>
        </div>
        <div style="margin: 5px 10px; display: flex">
          <span style="padding-right: 10px"
            ><img
              src="../assets/time.svg"
              alt=""
              style="width: 17px; height: 17px; margin-top: 2px"
          /></span>

          <span class="time_Months">{{ profileData.user.lastActive }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div><edit-form /></div>
    </div>
    <hr style="border: 1px solid #e9ecef; height: 1px" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import editForm from "../layout/editForm.vue";
const isToggle = ref(false);

const profileData = {
  name: "William Sample",
  designation: "Senior Product Manager",
  location: {
    country: "United States",
    city: "Dallas",
  },
  contact: {
    email: "williamsample@gmail.com",
    phone: "+91 9021232326",
  },
  user: {
    name: "Phyllis Yang",
    lastActive: "Jul 14, 2023, 4:04 pm",
  },
};
import actionBtn from "./actionBtn.vue";

const editFormToggle = (event) => {
  isToggle.value = !isToggle.value;
};
</script>

<script setup>
</script>
<style scoped>
.profileHeader,
.contactDetailsContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.profileDEtails {
  width: 50%;
  display: flex;
  padding: 14px 15px;
}
.actionBtn {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.avatarPD {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #cce8dc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.namePD {
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #343a40;
  display: flex;
}
.designation_location {
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  color: #495057;
  display: flex;
}
.socialMediaIcons {
  margin-left: 8px;
}
.location1,
.location2 {
  font-size: 13px;
  font-weight: 400;
  color: #495057;
  margin-left: 35px;
}
.email_Phone_UI {
  font-size: 13px;
  font-weight: 600;
  margin-left: 5px;
  color: #1f5fac;
}

.contactDetails {
  flex: 1;
  padding: 10px;
  display: flex;
}
.timedetailsContainer {
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
}

.time_Months,
.userName {
  font-size: 13px;
  font-weight: 600;
  color: #343a40;
}
@media (max-width: 992px) {
  .profileHeader {
    flex-direction: column !important;
  }
  .timedetailsContainer,
  .contactDetails {
    flex: 1;
    margin-bottom: 5px;
    padding: 0px !important;
  }
  .timedetailsContainer {
    padding: 0px;
    justify-content: flex-start;
  }
  .profileDEtails {
    width: 100%;
  }
  .actionBtn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
}

@media (max-width: 500px) {
  .avatarPD {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #cce8dc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .namePD {
    font-size: 10px;
  }
  .designation_location {
    font-size: 8px;
  }
  .socialMediaIcons {
    margin-left: 5px;
  }
  .location1,
  .location2 {
    font-size: 10px;

    margin-left: 8px;
  }
}
</style>