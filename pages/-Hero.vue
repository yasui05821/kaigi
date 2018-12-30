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
                <div class="p-info-detail">
                  <span class="p-info-time">16:00-</span>
                  <span class="p-info-subject">前夜祭</span>
                </div>
              </li>
              <li>
                <span class="p-info-date">3.30</span>
                <span class="p-info-week"><em>土</em></span>
                <div class="p-info-detail">
                  <span class="p-info-time">10:00-</span>
                  <span class="p-info-subject">本編１日目</span>
                </div>
              </li>
              <li>
                <span class="p-info-date">3.31</span>
                <span class="p-info-week"><em>日</em></span>
                <div class="p-info-detail">
                  <span class="p-info-time">10:00-</span>
                  <span class="p-info-subject">本編２日目</span>
                </div>
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
    padding-top: 60px;
    height: 750px;
    background-image: url("~assets/images/pattern.png");
    background-size: 100%;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @include media_desktop {
      height: 1100px;
      padding-top: 110px;
      background-size: 65%;
    }

    &-title {
      margin: 0 auto 30px;
      width: 80%;


      @include media_desktop {
        margin: 0 auto 60px;
        max-width: 550px;
      }
     }

    &-sns {
      display: inline-flex;
      margin: 0 auto 20px;
      padding: 10px 25px 15px 20px;
      align-items: center;
      border-radius: 9999px;
      background: white;

      @include media_desktop {
        margin: 0 auto 80px;
        padding: 15px 40px;
      }
     }
    &-snsIcon {
      display: inline-block;
      color: $clr-black;
      font-size: 2rem;

      @include media_desktop {
        font-size: 3rem;
      }

     }
    &-snsGroup {
      display: inline-flex;
      margin-left: 8px;
      color: #A3A3A3;

      @include media_desktop {
        margin-left: 30px;
      }

     }
    &-hash {
      text-align: center;
      span {
        display: block;
        font-size: 1.2rem;
        margin-bottom: -3px;

        @include media_desktop {
          font-size: 1.4rem;
        }
      }
      a {
        display: block;
        font-size: 1.8rem;
        text-decoration: none;

        @include media_desktop {
          font-size: 2rem;
        }
      }
    }
    &-follow {
      margin-left: 15px;
      text-align: center;

      @include media_desktop {
        margin-left: 30px;
      }

      span {
        display: block;
        font-size: 1.2rem;
        margin-bottom: -3px;

        @include media_desktop {
          font-size: 1.4rem;
        }
      }
      a {
        display: block;
        font-size: 1.8rem;
        text-decoration: none;

        @include media_desktop {
          font-size: 2rem;
        }
      }
    }
  }
  .p-info {
    border-radius: 30px 30px 0 0;
    border: 4px solid white;
    border-bottom: none;
    padding: 30px 10px 0px;
    width: calc(100% - 20px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: $clr-main;
    box-sizing: border-box;

    @include media_desktop {
      padding: 60px 20px 0px;
      width: 100%;
      max-width: 980px;
    }

    &-catch {
      margin-bottom: 1em;
      font-size: 1.8rem;
      line-height: 1.5;
      font-weight: bold;
      letter-spacing: 3px;

      @include media_desktop {
        margin-bottom: 2em;
        font-size: 2.5rem;
      }
    }

    &-sumally {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @include media_desktop {
        justify-content: center;
      }
    }

    &-total{
      margin-left: 5px;
      width: 90px;
      height: 90px;
      font-size: 1.5rem;
      letter-spacing: -1px;
      border-radius: 50%;
      background: white;


      @include media_desktop {
        margin-left: 0;
        width: 120px;
        height: 120px;
        font-size: 1.7rem;
      }

      span {
        display: inline-block;
        transform: translateY(46%);
        line-height: 1.5;
        @include media_desktop {
          transform: translateY(56%);
        }
      }
      em {
        font-size:  1.7rem;
        font-weight: bold;
        font-style: normal;
        letter-spacing: -.2em;

        @include media_desktop {
          font-size: 2rem;
        }
      }

    }
    &-schedule{
      margin-left: 20px;
      text-align: left;
      flex-grow: 1;

      @include media_desktop {
        margin-left: 50px;
        flex-grow: 0;
      }

      ul {
        padding: 0;
        list-style: none;
      }
      li {
          margin-bottom: 1rem;

        @include media_desktop {
          margin-bottom: .5rem;
        }
      }
    }
    &-date{
      display: inline-block;
      margin-right: 3px;
      width: 60px;
      font-size: 2.8rem;
      font-weight: normal;

      @include media_desktop {
        width: 84px;
        font-size: 4rem;
      }

    }
    &-week {
      display: inline-block;
      margin-right: 5px;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      color: white;
      vertical-align: 6px;
      text-align: center;
      background: $clr-black;

      @include media_desktop {
        width: 35px;
        height: 35px;
        vertical-align: 13px;
      }

      em {
        display: inline-block;
        font-size: 1.6rem;
        font-weight: bold;
        font-style: normal;
        transform: translateY(1px);

        @include media_desktop {
          font-size: 1.8rem;
          font-weight: normal;
          transform: translateY(3px);
        }

      }

    }
    &-detail {
      display: block;

      @include media_desktop {
        display: inline-block;
      }
    }

    &-time {
      display: inline-block;
      margin-right: 8px;
      font-size: 1.4rem;
      vertical-align: 9px;

      @include media_desktop {
        font-size: 1.8rem;
      }
    }
    &-subject {
      font-size: 2rem;
      vertical-align: 6px;

      @include media_desktop {
        font-size: 3rem;
      }
    }
  }

</style>
