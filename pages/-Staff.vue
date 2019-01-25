<template>
  <div class="p-staff container">
    <h2 class="c-title mb-5">Staff</h2>
    <div class="staff-boxes">
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample Sample Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">ああああああああああああああああ</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
      <div class="staff-box">
        <img src="https://via.placeholder.com/150" class="staff-img">
        <span class="staff-name">Sample</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Staff"
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_mixin.scss";

  .p-staff {
    @include space_section;
    .staff-boxes {
      padding-top: 30px;
      display: flex;
      flex-wrap: wrap;
      .staff-box {
        height: 160px;
        text-align: center;
        width: calc(100% / 3);
        @include media_desktop {
          width: calc(100% / 7);
        }
        .staff-img {
          border-radius: 1000px;
          margin: 0 auto;
        }
        .staff-name {
          display: inline-block;
          margin: 10px auto;
          line-height: 1;
        }
      }
    }
  }

</style>