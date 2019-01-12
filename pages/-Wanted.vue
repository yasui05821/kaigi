<template>
  <section class="p-wanted container">
    <h2 class="c-title">Wanted</h2>
    <div class="p-wanted-items">
      <section class="p-wantedItem">
        <div class="p-wantedItem-icon">
          <i class="material-icons">thumb_up</i>
        </div>
        <h3 class="p-wantedItem-title">スポンサー募集</h3>
        <p class="p-wantedItem-message">
          PHPerKaigi 2019をご支援頂けるスポンサー様を募集しています。
          詳細は資料請求フォームからご連絡ください。折り返しスポンサープログラムの詳細をお送りします。
        </p>
        <p>募集締切: 1/31（木）</p>
        <a href="https://fortee.jp/phperkaigi-2019/sponsor/brochure-request" target="_blank" class="p-wantedItem-btn">
          スポンサー資料請求
        </a>
      </section>
      <section class="p-wantedItem">
        <div class="p-wantedItem-icon">
          <i class="material-icons">mic</i>
        </div>
        <h3 class="p-wantedItem-title">スピーカー募集</h3>
        <p class="p-wantedItem-message">
          PHPerKaigi 2019を盛り上げるトークを募集しています。
          PHPのことでもそうでないことでも参加者が聞いて楽しいあなたの情熱をシェアしてください！
        </p>
        <p>募集締切: 1/21（月）12:00</p>
        <a href="https://fortee.jp/phperkaigi-2019/speaker/proposal/cfp" target="_blank" class="p-wantedItem-btn">
          トーク応募
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
@import "~/assets/scss/library/_variable.scss";
@import "~/assets/scss/library/_mixin.scss";
.p-wanted{
  @include space_section;

  &-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.p-wantedItem {
  width: 43rem;
  text-align: center;

  &:not(:last-of-type){
    margin-bottom: 90px;

    @include media_desktop {
      margin-bottom: 0;
    }

  }


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
      -webkit-linear-gradient(45deg, transparent 10px, $clr-black 10px),
      -webkit-linear-gradient(135deg, transparent 10px, $clr-black 10px),
      -webkit-linear-gradient(225deg, transparent 10px, $clr-black 10px),
      -webkit-linear-gradient(315deg, transparent 10px, $clr-black 10px);
    background-position: bottom left, bottom right, top right, top left;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    color: #ffffff;

    &:hover {
      opacity: .9;
      text-decoration: underline;
    }
  }
  &_text {
    margin-bottom: 40px;
  }
}
</style>
