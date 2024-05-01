<template>
  <div class="searchBar_Container">
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search Pipedrive"
        class="inputBox"
      />
    </form>
  </div>
</template>

<style scoped>
.inputBox {
  width: 360px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 16px;
  height: 40px;
  background-color: #f8f9fa;
  background-image: url("../assets/search.svg");
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: 5px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #e9ecef;
  outline: none;
}
@media (max-width: 992px){
  .searchBar_Container{

    width: 100% !important;
    padding: 20px;
  }
  .inputBox {
    width: 100%;
  }
}
</style>

<style scoped>


</style>