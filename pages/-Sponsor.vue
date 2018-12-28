<template>
  <div class="p-sponsor container" >
    <h2 class="top-sponsor_title mb-5">Sponsor</h2>
    <div class="sponsorDiamond">
      <div class="sponsorDiamond_rank">Diamond</div>
      <div class="sponsorList-diamond">
        <div class="sponsorList-diamond_item" v-for="(val,key) in sponsors.Diamond" :key="key">
          <div class="sponsorList-diamond_logo" :title="val.name"></div>
          <router-link to="#" class="sponsorList-diamond_button">
            紹介ページを見る
          </router-link>
        </div>
      </div>
    </div>
    <div class="sponsorPlatinum">
      <div class="sponsorPlatinum_rank">Platinum</div>
      <div class="sponsorList-platinum">
        <div class="sponsorList-platinum_item" v-for="(val,key) in sponsors.Platinum" :key="key">
          <div class="sponsorList-platinum_logo" :title="val.name"></div>
          <router-link to="#" class="sponsorList-platinum_button">
            紹介ページを見る
          </router-link>
        </div>
      </div>
    </div>
    <div class="sponsorGold">
      <div class="sponsorGold_rank">Gold</div>
      <div class="sponsorList-gold">
        <div class="sponsorList-gold_item" v-for="(val,key) in sponsors.Gold" :key="key">
          <div class="sponsorList-gold_logo" :title="val.name"></div>
          <router-link to="#" class="sponsorList-gold_button">
            紹介ページを見る
          </router-link>
        </div>
      </div>
    </div>
    <div class="sponsorSilver">
      <div class="sponsorSilver_rank">Silver</div>
      <div class="sponsorList-silver">
        <div class="sponsorList-silver_item" v-for="(val,key) in sponsors.Silver" :key="key">
          <div class="sponsorList-silver_logo" :title="val.name"></div>
          <router-link to="#" class="sponsorList-silver_button">
            紹介ページを見る
          </router-link>
        </div>
      </div>
    </div>
    <div class="sponsorLunch">
      <div class="sponsorLunch_rank">Lunch</div>
      <div class="sponsorList-lunch">
        <div class="sponsorList-lunch_item" v-for="(val,key) in sponsors.Lunch" :key="key">
          <div class="sponsorList-lunch_logo" :title="val.name"></div>
          <router-link to="#" class="sponsorList-lunch_button">
            紹介ページを見る
          </router-link>
        </div>
      </div>
    </div>
    <div class="sponsorBeer">
      <div class="sponsorBeer_rank">Beer</div>
      <div class="sponsorList-beer">
        <div class="sponsorList-beer_item" v-for="(val,key) in sponsors.Beer" :key="key">
          <div class="sponsorList-beer_logo" :title="val.name"></div>
          <router-link to="#" class="sponsorList-beer_button">
            紹介ページを見る
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Sponsor",
    data() {
      const gold = [];
      const silver = [];
      for(let i=0 ; i<4; i++) {
        gold.push({
          name: "sample",
          src: "",
          img: ""
        })
      }
      for(let i=0 ; i<5; i++) {
        silver.push({
          name: "sample",
          src: "",
          img: ""
        })
      }
      return {
        sponsors: {
          Diamond: [
            {
              name: "sample",
              src: "",
              img: ""
            },
            {
              name: "sample",
              src: "",
              img: ""
            }
          ],
          Platinum: [
            {
              name: "sample",
              src: "",
              img: ""
            },
            {
              name: "sample",
              src: "",
              img: ""
            },
            {
              name: "sample",
              src: "",
              img: ""
            }
          ],
          Gold: gold,
          Silver: silver,
          Lunch: [
            {
              name: "sample",
              src: "",
              img: ""
            },{
              name: "sample",
              src: "",
              img: ""
            }
          ],
          Beer: [{
            name: "sample",
            src: "",
            img: "",
          }]
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_mixin.scss";
  @mixin space_rank {
    margin-bottom: 50px;
    @include media_desktop {
      margin-bottom: 80px;
    }
  }
  @mixin rank {
    font-family: 'Fugaz One', cursive;
    display: block;
    margin-bottom: .5em;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 1px;
    text-align: center;
    @include media_desktop {
      margin-bottom: 2em;
    }
  }
  @mixin logo {
    width: 100%;
    background-image: url("https://via.placeholder.com/600x600");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
    &::after {
      display: block;
      content: "";
      padding-top: 100%;
    }
  }
  @mixin button {
    display: block;
    padding: 10px 10px;
    font-size: 1rem;
    color: white;
    text-align: center;
    position: relative;
    background: black;
    @include media_desktop {
      padding: 20px 10px;
    }
    &::after {
      content: "\f054";
      display: inline-block;
      font-family: "Font Awesome 5 Free";
      font-size: 1em;
      font-style: normal;
      font-weight: bold;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      color: #fff;
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      @include media_desktop {
        right: 10px;
      }
    }
  }
  // Diamond section
  .p-sponsor {
    .sponsorDiamond {
      @include space_rank
    }
    .sponsorDiamond_rank {
      @include rank;
    }
    .sponsorList-diamond {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .sponsorList-diamond_item {
      margin-bottom: 30px;
      width: 100%;
      @include media_desktop {
        margin-right: 40px;
        width: calc((100% - 40px) / 2);
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }
    }
    .sponsorList-diamond_logo {
      @include logo;
    }
    .sponsorList-diamond_button {
      @include button;
    }
    // Platinum section

    .sponsorPlatinum {
      @include space_rank;
    }
    .sponsorPlatinum_rank {
      @include rank;
    }
    .sponsorList-platinum {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .sponsorList-platinum_item {
      margin-bottom: 30px;
      width: 100%;
      @include media_desktop {
        margin-right: 40px;
        width: calc((100% - 80px) / 3);
        &:nth-of-type(3n) {
          margin-right: 0;
        }
      }
    }
    .sponsorList-platinum_logo {
      @include logo;
    }
    .sponsorList-platinum_button {
      @include button;
    }
    .sponsorGold {
      @include space_rank;
    }
    .sponsorGold_rank {
      @include rank;
    }
    .sponsorList-gold {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .sponsorList-gold_item {
      margin-bottom: 30px;
      width: 100%;
      @include media_desktop {
        margin-right: 40px;
        width: calc((100% - 120px) / 4);
        &:nth-of-type(4n) {
          margin-right: 0;
        }
      }
    }
    .sponsorList-gold_logo {
      @include logo;
    }
    .sponsorList-gold_button {
      @include button;
    }
    // sponsor SILVER
    .sponsorSilver {
      @include space_rank;
      text-align: center;
    }
    .sponsorSilver_rank {
      @include rank;
    }
    .sponsorList-silver{
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
    }
    .sponsorList-silver_item{
      margin-right: 10px;
      margin-bottom: 20px;
      width: calc((100% - 20px) / 3);
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      @include media_desktop {
        margin-right: 40px;
        margin-bottom: 30px;
        width: calc((100% - 160px) / 5);
        &:nth-of-type(3n) {
          margin-right: 40px;
        }
        &:nth-of-type(5n) {
          margin-right: 0;
        }
      }
    }
    .sponsorList-silver_logo{
      @include logo;
    }
    .sponsorList-silver_button{
      @include button;
    }
    // Lunch section
    .sponsorLunch {
      @include space_rank;
      text-align: center;
    }
    .sponsorLunch_rank {
      @include rank;
    }
    .sponsorList-lunch{
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .sponsorList-lunch_item{
      margin-right: 10px;
      margin-bottom: 20px;
      @include media_desktop {
        margin-right: 40px;
        margin-bottom: 30px;
        width: calc((100% - 40px) / 4);
        &:nth-of-type(2n) {
          margin-right: 0;
        }
      }
    }
    .sponsorList-lunch_logo{
      @include logo;
    }
    .sponsorList-lunch_button{
      @include button;
    }
    // Beer section
    .sponsorBeer {
      @include space_rank;
      text-align: center;
    }
    .sponsorBeer_rank {
      @include rank;
    }
    .sponsorList-beer{
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .sponsorList-beer_item{
      margin-right: 10px;
      margin-bottom: 20px;
      @include media_desktop {
        margin-bottom: 30px;
        width: calc((100% - 160px) / 5);
        &:nth-of-type(1n) {
          margin-right: 0;
        }
      }
    }
    .sponsorList-beer_logo{
      @include logo;
    }
    .sponsorList-beer_button{
      @include button;
    }

  }
.top-sponsor {
  &_title {
    @include secTitle
  }
}
</style>
