<template>
  <div class="dashboard-container">
    <div class="topbar">
      <div class="brand">Dashboard</div>
      
    </div>
    <div class="sidebar" :class="{ collapsed: isMenuCollapsed }">
      <!-- Sidebar content -->
    </div>
    <div class="main-content">
      <!-- Your main content goes here -->
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Dashboard",
  data() {
    return {
    };
  },
  methods: {
   
  },
};
</script>
  
  <style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  box-shadow: 0px 1px 3px 0px #00000012;
  box-shadow: 0px 1px 2px -2px #0000000f;
  box-shadow: 0px 0px 1px 1px #0000000d;
}

.topbar {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 20px;
}



.sidebar {
  background-color: #333;
  color: #fff;
  width: 200px;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 60px;
}

.main-content {
  flex: 1;
}
</style>
  