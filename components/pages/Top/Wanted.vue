<template>
  <div class="top-wanted container" style="width: 980px">
    <h2 class="top-wanted_title">Wanted</h2>
    <div class="top-wanted_content">
      <div class="top-wanted_section mt-5 mr-3">
        <div class="top-wanted_icon  mb-3">
          <i class="material-icons">
            thumb_up
          </i>
        </div>
        <h3 class="top-wanted_subtitle mb-4">スポンサー募集</h3>
        <p class="top-wanted_text ">PHPerKaigi2019にご協賛いただけるスポンサー様を募集しております。各種スポンサー特典をご用意しております。詳細は応募ページにてご確認ください</p>
        <a href="" class="top-wanted_btn">
          スポンサーに応募
        </a>
      </div>
      <div class="top-wanted_section mt-5 ml-3">
        <div class="top-wanted_icon mb-3">
          <i class="material-icons">
            mic
          </i>
        </div>
        <h3 class="top-wanted_subtitle mb-4">スピーカー募集</h3>
        <p class="top-wanted_text ">PHPerKaigi2019にご協賛いただけるスポンサー様を募集しております。各種スポンサー特典をご用意しております。詳細は応募ページにてご確認ください</p>
        <a href="" class="top-wanted_btn">
          スピーカーに応募
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Wanted"
    }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_mixin.scss";
.top-wanted {
  &_content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 190px;
  }
  &_title {
    font-family: 'Fugaz One', cursive;
    font-size: 50px;
    font-weight: normal;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      flex-grow: 1;
      height: 2px;
      background: #000;
      margin-right:20px;
    }
    &:after {
      content: "";
      flex-grow: 1;
      height: 2px;
      background: #000;
      margin-left:20px;
    }
  }
  &_icon {
    i {
      font-size: 63px;
    }
  }
  &_section {
    text-align: center;
    width: 430px;
  }
  &_subtitle {
    font-size: 1.4rem;
  }
  &_btn {
    @include btn
  }
  &_text {
    margin-bottom: 40px;
  }
}
</style>
