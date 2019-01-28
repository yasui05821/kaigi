<template>
  <section class="p-staff">
    <div class="container">
      <h2 class="c-title">Staff</h2>
      <div class="staffs">
        <div class="staffs_leader">
          <p class="staffs_post" ><i class="material-icons">stars</i>実行委員長</p>
          <div class="staff_item">
            <img src="https://via.placeholder.com/150" alt="">
            <span>田中太郎</span>
          </div>
        </div>
        <span class="staffs_post" ><i class="material-icons">account_circle</i>コアスタッフ</span>
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
        <span class="staffs_post" ><i class="material-icons">supervised_user_circle</i>当日スタッフ</span>
        <div class="staffs_day">
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

    .staffs_post {
      display: inline-block;
      margin-bottom: 20px;
      font-size: 1.7rem;
      font-weight: bold;

      @include media_desktop {
        margin-bottom: 30px;
      }

      i {
        vertical-align: -.2em;
      }
    }

    .staff_item {
      display: inline-block;
      margin: 0 0 30px;
      padding: 0 10px;
      text-align: center;
      box-sizing: border-box;
      img {
        margin: 0 auto 4px;
        border-radius: 50%;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        @include media_desktop {
          margin: 0 auto 10px;
          width: 80px;
          height: 80px;
        }
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
      margin-bottom: 10px;

      .staffs_post{
        margin-right: 40px;
      }
      .staff_item {
        width: calc(100% / 4);

        @include media_desktop {
          margin: 0;
          width: calc(100% / 8);
        }
      }
    }

    .staffs_core {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
      max-width: 100%;

      .staff_item {
        width: calc(100% / 4);

        @include media_desktop {
          margin: 0;
          width: calc(100% / 8);
        }
      }

    }

    .staffs_day {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
      max-width: 100%;

      .staff_item {
        width: calc(100% / 4);

        @include media_desktop {
          margin: 0;
          width: calc(100% / 8);
        }
      }
    }


  }

</style>