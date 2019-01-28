<template>
  <section>
    <no-ssr>
      <sub-header></sub-header>
    </no-ssr>
    <p-share></p-share>
    <div class="p-sponsorProf">
      <div class="container sponsor-card-container">
        <div class="sponsor-card">
          <div class="sponsor-card-contents">
            <div class="title-box">
              <p class="rank" v-if="lank=='ダイアモンドプラン'">Platinum</p>
              <p class="rank" v-if="lank=='プラチナプラン'">Diamond</p>
              <p class="rank" v-if="lank=='ゴールドプラン'">Gold</p>
              <p class="rank" v-if="lank=='シルバープラン'">Silver</p>
              <p class="rank" v-if="lank=='ビールスポンサー'">Beer</p>
              <p class="rank" v-if="lank=='ランチスポンサー'">Lunch</p>
              <p class="rank" v-if="lank=='デザインスポンサー'">Design</p>
              <h1 class="sponsor-name">{{sponsor.name}}</h1>
            </div>
            <div class="logo" :style="logoImageStyle">
            </div>
            <p class="introduction">
              {{sponsor.pr}}
            </p>
            <a :href="sponsor.url" target="_blank" class="p-wantedItem-btn plan-page-btn">
              企画ページを見る
            </a>
          </div>
        </div>
        <a href="/2019" class="p-wantedItem-btn top-page-btn">
          TOPに戻る
        </a>
      </div>
    </div>
    <sub-footer></sub-footer>
  </section>
</template>

<script>
import subHeader from '~/components/HeaderSub.vue'
import pShare from '~/components/Share.vue'
import subFooter from '~/components/SubFooter.vue'

export default {
  components: {
    subHeader,
    pShare,
    subFooter
  },
  async asyncData({store,route}){
    const [sponsor] = await Promise.all([
      store.dispatch("fetchSponsorByName", route.params.name)
    ])
    return {
      lank: sponsor.label,
      sponsor: sponsor.sponsor
    }
  },
  computed:{
    logoImageStyle(){
      return {
        backgroundImage: `url(${this.sponsor.avatar})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_variable.scss";
@import "~/assets/scss/library/_mixin.scss";
.p-sponsorProf {
  padding-bottom: 100px;
  background-image: url("~assets/images/pattern.png");
  background-position: 0 60px;
  background-size: 415px auto;
  @include media_desktop {
    padding-bottom: 150px;
    background-size: 830px auto;
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
    @include btn;
  }
  &_text {
    margin-bottom: 40px;
  }
}

.sponsor-card-container{
  padding-top: 80px;
  @include media_desktop {
    padding-top: 120px;
  }
}

.sponsor-card {
  width: auto;
  background: #fff;

  @include media_desktop {
    max-width: 980px;
    width: 80%;
    margin: 0 auto ;
  }
  .sponsor-card-contents {
    margin-bottom: 50px;
    padding: 20px;

    @include media_desktop {
      margin-bottom: 80px;
      padding: 50px 65px;
    }

    .title-box {
      margin-bottom: 30px;
      .rank {
        font-size: 2rem;
        margin-bottom: 5px;
        font-family: 'Fugaz One', cursive;
      }
      .sponsor-name {
        font-weight: bold;
        font-size: 1.8rem;
        margin-bottom: 10px;

        @include media_desktop {
          font-size: 3rem;
          margin-bottom: 30px;
        }
      }
    }
    .logo {
      height: 270px;
      background: #fff;
      margin-bottom: 20px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
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
  font-size: 1.6rem;

  @include media_desktop {
    font-size: 1.8rem;
  }

  &::after {
    content: "\f35d";
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-size: .7em;
    font-style: normal;
    font-weight: bold;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    @include media_desktop {
      right: 20px;
    }
  }
}
.top-page-btn {
  color: #2d2c2f;
  background:
          -webkit-linear-gradient(45deg, transparent 10px, #fff 10px),
          -webkit-linear-gradient(135deg, transparent 10px, #fff 10px),
          -webkit-linear-gradient(225deg, transparent 10px, #fff 10px),
          -webkit-linear-gradient(315deg, transparent 10px, #fff 10px);
  background-position: bottom left, bottom right, top right, top left;
  font-size: 1.6rem;
  background-size: 51% 51%;
  background-repeat: no-repeat;
  position: relative;
  &::before {
    content: "\f104";
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-size: 1em;
    font-style: normal;
    font-weight: bold;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    color: #2d2c2f;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
