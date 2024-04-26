<template>
  <div>
    <div class="tab">
      <button
        class="tablinks"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="openCity(tab)"
        :class="{ active: activeTab === tab }"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tabcontent" :id="tab" :class="{ active: activeTab === tab }">
      hello
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      activeTab: "London",
      tabs: [
        "All Details",
        "Assigned Jobs",
        "Related Emails",
        "Candidate Questions",
        "Hotlists",
        "Related Deals",
        "Contact(s) Pitched",
      ],
    };
  },
  methods: {
    openCity(cityName) {
      this.activeTab = cityName;
    },
  },
};
</script>

<style  scoped>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.tabcontent.active {
  display: block;
}
</style>