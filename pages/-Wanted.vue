<template>
  <section class="p-wanted container">
    <h2 class="c-title">Wanted</h2>
    <div class="p-wanted-items">
      <section class="p-wantedItem">
        <div class="p-wantedItem-icon">
          <i class="material-icons">thumb_up</i>
        </div>
        <h3 class="p-wantedItem-title">スポンサー募集</h3>
        <p class="p-wantedItem-message">PHPerKaigi2019にご協賛いただけるスポンサー様を募集しております。各種スポンサー特典をご用意しております。詳細は応募ページにてご確認ください</p>
        <a href="" class="p-wantedItem-btn">
          スポンサーに応募
        </a>
      </section>
      <section class="p-wantedItem">
        <div class="p-wantedItem-icon">
          <i class="material-icons">mic</i>
        </div>
        <h3 class="p-wantedItem-title">スピーカー募集</h3>
        <p class="p-wantedItem-message">PHPerKaigi2019にご協賛いただけるスポンサー様を募集しております。各種スポンサー特典をご用意しております。詳細は応募ページにてご確認ください</p>
        <a href="" class="p-wantedItem-btn">
          スピーカーに応募
        </a>
      </section>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Wanted"
    }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_mixin.scss";
.p-wanted{
  margin-bottom: 19rem;
  &-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.p-wantedItem {
  width: 43rem;
  text-align: center;
  padding-top: 5rem;
  @include media_desktop {
    width: 50%;
    padding: 0 20px;
  }
  &-icon {
    background: #FFF;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    @include media_desktop {
    }
    i {
      display: block;
      font-size: 5rem;
    }
  }
  &-title {
    font-size: 2.6rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }
  &-message {
    font-size: 1.6rem;
    line-height: 2;
    margin-bottom: 3rem;
  }
  &-btn {
    display: block;
    margin: 0 auto;
    width: 30rem;
    max-width: 80%;
    font-size: 2rem;
    text-decoration: none;
    line-height: 3;
    background:
      -webkit-linear-gradient(45deg, transparent 10px, #2c2c2c 10px),
      -webkit-linear-gradient(135deg, transparent 10px, #2c2c2c 10px),
      -webkit-linear-gradient(225deg, transparent 10px, #2c2c2c 10px),
      -webkit-linear-gradient(315deg, transparent 10px, #2c2c2c 10px);
    background-position: bottom left, bottom right, top right, top left;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    color: #ffffff;

    &:hover {
      background:
        -webkit-linear-gradient(45deg, transparent 10px, #2c2c2c 10px),
        -webkit-linear-gradient(135deg, transparent 10px, #2c2c2c 10px),
        -webkit-linear-gradient(225deg, transparent 10px, #2c2c2c 10px),
        -webkit-linear-gradient(315deg, transparent 10px, #2c2c2c 10px);
    }
  }
  &_text {
    margin-bottom: 40px;
  }
}
</style>
