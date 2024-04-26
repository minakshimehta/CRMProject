<template>
  <div>
    <form>
      <input type="text" name="search" placeholder="Search Pipedrive" />
    </form>
  </div>
</template>

<style scoped>
input[type="text"] {
  max-width: 360px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 16px;
  height: 40px;
  background-color: white;
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-size: 35px 25px;
  background-position: 5px;
  padding: 12px 20px 12px 40px;
  border: 1px solid var(--N300, #E9ECEF)
  
}

</style>