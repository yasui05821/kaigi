<template>
  <div class="top-wanted container" style="width: 980px">
    <h2 class="top-wanted_title mb-5">Wanted</h2>
    <div class="top-wanted_content">
      <div class="top-wanted_section">
        <div class="top-wanted_icon mb-3">
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
      <div class="top-wanted_section">
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
.top-wanted {
  &_content {
    display: flex;
    justify-content: space-between;
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
      height: 1px;
      background: #000;
      margin:0 .4em;
    }
    &:after {
      content: "";
      flex-grow: 1;
      height: 1px;
      background: #000;
      margin:0 .4em;
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
    line-height:65px;
    display: inline-block;
    width: 300px;
    height: 65px;
    background:
      -webkit-linear-gradient(45deg, transparent 10px, #2c2c2c 10px), -webkit-linear-gradient(135deg, transparent 10px, #2c2c2c 10px), -webkit-linear-gradient(225deg, transparent 10px, #2c2c2c 10px), -webkit-linear-gradient(315deg, transparent 10px, #2c2c2c 10px);
    background-position: bottom left, bottom right, top right, top left;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    color: #ffffff;
  }
  &_text {
    margin-bottom: 40px;
  }
}
</style>
