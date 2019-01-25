<template>
  <section class="p-hero" :class="{ 'is-active': isActive }">
    <div class="container">
      <h1 class="p-hero-title">
        <img src="~assets/images/logo.svg" alt="PHPerKaigi2019">
      </h1>
      <div class="p-hero-sns">
        <i class="p-hero-snsIcon fab fa-twitter"></i>
        <div class="p-hero-snsGroup">
          <div class="p-hero-hash">
            <span>Hashtag！</span>
            <a href="https://twitter.com/hashtag/phperkaigi?src=hash" target="_blank">#phperKaigi</a>
          </div>
          <div class="p-hero-follow">
            <span>Follow me！</span>
            <a href="https://twitter.com/phperkaigi" target="_blank">@phperkaigi</a>
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
  import anime from 'animejs'

  export default {
    name: "Hero",
    data: () => ({
      isActive: false
    }),
    methods: {
      activate() {
        this.isActive = true
      },
      deactivate() {
        this.isActive = false
      },
      animateTitle() {
        anime({
          targets: this.$el.querySelector('.p-hero-title img'),
          scale: [0, 1],
          duration: 1000,
          elasticity: 300
        })
      }
    },
    mounted() {
      window.addEventListener('load', this.activate)
      window.addEventListener('load', this.animateTitle)
    },
    destroyed() {
      window.removeEventListener('load', this.deactivate)
      window.removeEventListener('load', this.animateTitle)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  @keyframes slide {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(415px);
    }
  }

  @keyframes slide-desktop {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(830px);
    }
  }

  .p-hero {
    overflow: hidden;
    position: relative;
    z-index: 0;
    padding-top: 60px;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @include media_desktop {
      padding-top: 110px;
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      width: calc(100% + 415px);
      background-position: center;
      background-size: 415px auto;
      content: '';
      opacity: 0;
      transition: opacity 0.5s linear 1s;

      @include media_desktop {
        width: calc(100% + 830px);
        background-size: 830px auto;
      }
    }

    &::before {
      background-image: url("~assets/images/heroPattern_01.png");
    }

    &::after {
      background-image: url("~assets/images/heroPattern_02.png");
    }

    &.is-active{
      &::before,
      &::after {
        opacity: 1;
      }

      &::before {
        animation: slide 30s linear infinite;

        @include media_desktop {
          animation: slide-desktop 40s linear infinite;
        }
      }

      &::after {
        animation: slide 30s linear infinite reverse;

        @include media_desktop {
          animation: slide-desktop 40s linear infinite reverse;
        }
      }
    }

    &-title {
      margin: 0 auto 30px;
      width: 80%;


      @include media_desktop {
        margin: 0 auto 60px;
        max-width: 550px;
      }

      img {
        transform: scale(0);
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
      flex-shrink: 0;
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
