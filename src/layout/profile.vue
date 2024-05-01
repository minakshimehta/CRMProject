<template>
  <div class="profile_Icon">
    <div class="profileIcons">
      <div class="">
        <button class="plusBtn">+</button>
      </div>

      <div class="divider"></div>

      <div class="svgContainer">
        <img src="../assets/wishlist.svg" alt="" class="profileSvgUI" />
      </div>

      <div class="svgContainer">
        <img src="../assets/massage.svg" alt="" class="profileSvgUI" />
      </div>
      <div class="svgContainer">
        <img src="../assets/notification.svg" alt="" class="profileSvgUI" />
      </div>
    </div>
    <!-- profileCard -->
    <div class="profile-card">
      <div class="avatar">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt=""
          style="border-radius: 40%; width: 32px; height: 32px"
        />
      </div>
      <div class="info">
        <h2 class="name">Phyllis Yang</h2>
        <p class="designation">Silicon Links Inc</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plusBtn {
  border: 1px solid #1170ca;
  border-radius: 40px;
  width: 40px;
  height: 40px;
  background: var(--B600---Brand, #1170ca);
  color: #ffff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.svgContainer {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #c8ccd2;
  box-shadow: 0px 1px 2px 0px #2a36470d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
}
.profile_Icon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.profileIcons,
.profile-card {
  display: flex;
  flex-direction: row;
  align-items: center;

  /* flex-wrap: wrap;
  justify-content: center;
  align-items: center; */
}
.profileSvgUI {
  width: 20px;
  height: 20px;
}
</style>

<style scoped>
.divider {
  border-left: 2px solid #c8ccd2;
  height: 20px;
  margin: 0 20px;
}
@media (max-width: 1102px) {
  .profileSvgUI {
    width: 15px;
    height: 15px;
  }
  .svgContainer {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 992px) {
  .profile_Icon {
    justify-content: flex-start;
    margin-top: 10px;
  }
  .profileSvgUI {
    width: 15px;
    height: 15px;
  }
  .svgContainer {
    width: 30px;
    height: 30px;
  }
  .plusBtn {
    border-radius: 30px;
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 768px) {
  .divider {
    border-left: none;
    border-top: 2px solid #c8ccd2;
    width: 1px;
    height: auto;
    margin: 20px 0;
  }
}
.profile-card {
  display: flex;
  align-items: center;
  padding-top: 10px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ccc;
}

.info {
  color: #192435;
  margin-left: 10px;
}

.name {
  font-size: 12px;
  font-weight: 600;
}
.designation {
  font-weight: 400;
  font-size: 12px;
  margin-top: -2px;
}
</style>