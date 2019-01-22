<template>
  <section>
    <div class="sponsor-card">
      <div class="sponsor-card-contents">
        <div class="title-box">
          <p class="rank">Platinum</p>
          <h1 class="sponsor-name">株式会社カルテットコミュニケーションズ</h1>
        </div>
        <div class="logo">

        </div>
        <p class="introduction">
          私は時間とにかくこういう関係人という事のためになりたませ。同時にたくさんが存在社はしばしばそのふりだろたなりに用いよておきませがも説明しうたて、あいにくには思えれたないた。手伝いを読んんのもようやく将来へけっしてなですます。いくら大森さんへ成就国家それほど専攻を通り越します肴こういう事いつか戦争をというお妨害だませですたと
        </p>
        <a href="#" target="_blank" class="p-wantedItem-btn plan-page-btn">
          企画ページを見る
        </a>
      </div>
    </div>
    <a href="#" target="_blank" class="p-wantedItem-btn top-page-btn">
      TOPに戻る
    </a>
  </section>
</template>

<script>
export default {
  name: "sponsor"
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_variable.scss";
@import "~/assets/scss/library/_mixin.scss";

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
    @include btn;
  }
  &_text {
    margin-bottom: 40px;
  }
}

.sponsor-card {
  width: auto;
  margin: 120px 10px auto 10px;
  background: #fff;
  @include media_desktop {
    max-width: 980px;
    width: 80%;
    margin: 120px auto auto auto;
  }
  .sponsor-card-contents {
    padding: 30px 20px;
    @include media_desktop {
      padding: 50px 65px;
    }
    .title-box {
      margin-bottom: 30px;
      .rank {
        font-size: 2rem;
        margin-bottom: 5px;
      }
      .sponsor-name {
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 30px;
      }
    }
    .logo {
      height: 270px;
      background: #ebebeb;
      margin-bottom: 20px;
    }
    .introduction {
      margin-bottom: 60px;
    }
  }
}

.plan-page-btn {
  margin-bottom: 20px;
  position: relative;
  max-width: 100%;
  &::after {
    content: "\f35d";
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-size: .8em;
    font-style: normal;
    font-weight: bold;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    color: #fff;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    @include media_desktop {
      right: 20px;
    }
  }
}
.top-page-btn {
  color: #2d2c2f;
  margin: 100px auto 129px auto;
  background:
          -webkit-linear-gradient(45deg, transparent 10px, #fff 10px),
          -webkit-linear-gradient(135deg, transparent 10px, #fff 10px),
          -webkit-linear-gradient(225deg, transparent 10px, #fff 10px),
          -webkit-linear-gradient(315deg, transparent 10px, #fff 10px);
  background-position: bottom left, bottom right, top right, top left;
  background-size: 51% 51%;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: "\f104";
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-size: .8em;
    font-style: normal;
    font-weight: bold;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    color: #2d2c2f;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    @include media_desktop {
      left: 20px;
    }
  }
}
</style>