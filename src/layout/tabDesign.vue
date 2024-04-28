<template>
  <div>
    <div class="tabsHeader">
      <div v-for="tab in tabNames" :key="tab" class="tabsBtn">{{ tab }}</div>
    </div>
    <div>
      <assignedJobs />
    </div>
  </div>
</template>

<script>
import assignedJobs from "./assignedJobs.vue";

export default {
  components: { assignedJobs },
  data() {
    return {
      tabNames: [
        "All Details",
        "Assigned Jobs",
        "Related Emails",
        "Candidate Questions",
        "Hotlists",
        "Related Deals6",
        "Contact(s) Pitched",
      ],
    };
  },
};
</script>

 
<style scoped>
.tabsHeader {
  background-color: #e9ecef;
  color: #343a40;
  display: flex;
  margin-bottom: -10px;
}
.tabsBtn {
  padding: 15px 32px;
  font-size: 13px;
  font-weight: 600;
}
.tabsBtn:hover {
  background-color: white;
  color: #1170ca;
  border-bottom: 3px solid #1170ca;
}
</style>