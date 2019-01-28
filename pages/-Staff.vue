<template>
  <section class="p-staff">
    <div class=" container">
      <h2 class="c-title">Staff</h2>
      <div class="staffs">
        <div class="staffs_leader">
          <p class="staffs_post" ><i class="material-icons">stars</i>実行委員長</p>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
        </div>
        <span class="staffs_post" ><i class="material-icons">stars</i>コアスタッフ</span>
        <div class="staffs_core">
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
        </div>
        <div class="staffs_day"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Staff"
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-staff {
    @include space_section;

    .staffs {

    }
    .staffs_post {
      display: inline-block;
      font-size: 1.7rem;
      font-weight: bold;

      i {
        vertical-align: -.2em;
      }
    }

    .staff_item {
      margin: 0 30px 30px;
      display: inline-block;
      text-align: center;
      img {
        margin: 0 auto 10px;
        border-radius: 50%;
        display: block;
        width: 90px;
        height: 90px;
        object-fit: cover;
      }
      span {
        display: inline-block;
        font-size: 1.6rem;
        line-height: 1.7;
      }
    }

    .staffs_leader {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;

      .staffs_post{
        margin-right: 40px;
      }
    }

    .staffs_core {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;

      .staffs_post{
        margin-right: 40px;
      }

    }

    .staffs_day {
      display: flex;
      justify-content: center;
      align-items: center;

      .staffs_post{
        margin-right: 40px;
      }
    }


  }

</style>