<template>
  <section class="p-hero">
    <div class="container">
      <h1 class="p-hero-title">
        <img src="~assets/images/logo.svg" alt="PHPerKaigi2019">
      </h1>
      <div class="p-hero-sns">
        <i class="p-hero-snsIcon fab fa-twitter"></i>
        <div class="p-hero-snsGroup">
          <div class="p-hero-hash">
            <span>Hashtag！</span>
            <a href="">#phperKaigi</a>
          </div>
          <div class="p-hero-follow">
            <span>Follow me！</span>
            <a href="">@phperkaigi</a>
          </div>
        </div>
      </div>
      <article class="p-info">
        <h2 class="p-info-catch">PHPerによるPHPerのためのお祭り、今年も開催！</h2>
        <div class="p-info-sumally">
          <div class="p-info-total">
            <span>
              トータル
              <br>
            <em>３</em>
              日開催！
            </span>

          </div>
          <div class="p-info-schedule">
            <ul>
              <li>
                <span class="p-info-date">3.29</span>
                <span class="p-info-week"><em>金</em></span>
                <span class="p-info-time">16:00-</span>
                <span class="p-info-subject">前夜祭</span>
              </li>
              <li>
                <span class="p-info-date">3.30</span>
                <span class="p-info-week"><em>土</em></span>
                <span class="p-info-time">10:00-</span>
                <span class="p-info-subject">本編１日目</span>
              </li>
              <li>
                <span class="p-info-date">3.31</span>
                <span class="p-info-week"><em>日</em></span>
                <span class="p-info-time">10:00-</span>
                <span class="p-info-subject">本編２日目</span>
              </li>
            </ul>
        </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Hero"
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";
  .p-hero {
    max-width: 2500px;
    padding-top: 80px;
    height: 1030px;
    background-image: url("~assets/images/pattern.png");
    background-size: 65%;
    text-align: center;
    position: relative;

    &-title {
      margin: 0 auto 60px;
      width: 550px;
     }

    &-sns {
      display: inline-flex;
      align-items: center;
      border-radius: 9999px;
      margin: 0 auto 80px;
      padding: 15px 40px;
      background: white;
     }
    &-snsIcon {
      display: inline-block;
      color: $clr-black;
      font-size: 3rem;
     }
    &-snsGroup {
      display: inline-flex;
      margin-left: 30px;
      color: #A3A3A3;
     }
    &-hash {
      text-align: center;
      span {
        display: block;
        font-size: 1.4rem;
        margin-bottom: -3px;
      }
      a {
        display: block;
        font-size: 2rem;
      }
    }
    &-follow {
      margin-left: 30px;
      text-align: center;
      span {
        display: block;
        font-size: 1.4rem;
        margin-bottom: -3px;
      }
      a {
        display: block;
        font-size: 2rem;

      }
    }
  }
  .p-info {
    width: 100%;
    max-width: 980px;
    border-radius: 30px 30px 0 0;
    border: 4px solid white;
    border-bottom: none;
    padding: 60px 20px 0px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: $clr-main;

    &-catch {
      margin-bottom: 2em;
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: 3px;
    }

    &-sumally {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-total{
      width: 120px;
      height: 120px;
      font-size: 1.7rem;
      letter-spacing: -1px;
      border-radius: 50%;
      background: white;
      span {
        display: inline-block;
        transform: translateY(56%);
        line-height: 1.5;
      }
      em {
        font-size: 2rem;
        font-weight: bold;
        font-style: normal;
        letter-spacing: -.2em;
      }

    }
    &-schedule{
      margin-left: 50px;
      font-size: 4rem;
      font-weight: normal;
      text-align: left;
      ul {
        padding: 0;
        list-style: none;
      }
      li {
        margin-bottom: .5rem;
      }
    }
    &-date{
      display: inline-block;
      margin-right: 3px;
      width: 84px;

    }
    &-week {
      display: inline-block;
      margin-right: 5px;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      color: white;
      vertical-align: -13px;
      text-align: center;
      background: $clr-black;
      em {
        display: inline-block;
        font-size: 1.8rem;
        font-weight: normal;
        font-style: normal;
        transform: translateY(-21px);
      }

    }
    &-time {
      display: inline-block;
      margin-right: 8px;
      font-size: 1.8rem;
      vertical-align: 8px;

    }
    &-subject {
      font-size: 3rem;
    }
  }

</style>
