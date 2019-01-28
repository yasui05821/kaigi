<template>
  <section class="p-staff">
    <div class="container">
      <h2 class="c-title">Staff</h2>
      <div class="staffs">
        <div class="staffs_leader" v-if="cheafs.length">
          <p class="staffs_post" ><i class="material-icons">stars</i>実行委員長</p>
          <a class="staff_item" v-for="(cheaf,index) in cheafs" :key="index" v-bind="linkBinder(cheaf)">
            <img v-if="cheaf.avatar_url" :src="cheaf.avatar_url" alt="">
            <span>{{cheaf.name}}</span>
          </a>
        </div>
        <div v-if="cores.length">
          <span class="staffs_post" ><i class="material-icons">account_circle</i>コアスタッフ</span>
          <div class="staffs_core">
            <a class="staff_item" v-for="(core,index) in cores" :key="index" v-bind="linkBinder(core)">
              <img v-if="core.avatar_url" :src="core.avatar_url" alt="">
              <img v-else src="~/assets/images/icon_default.png" alt="">
              <span>{{core.name}}</span>
            </a>
          </div>
        </div>
        <div v-if="onthedoors.length">
          <span class="staffs_post" ><i class="material-icons">supervised_user_circle</i>当日スタッフ</span>
          <div class="staffs_day" rel="noopener">
            <a class="staff_item" v-for="(onthedoor,index) in onthedoors" :key="index" v-bind="linkBinder(onthedoor)">
              <img v-if="onthedoor.avatar_url" :src="onthedoor.avatar_url" alt="">
              <img v-else src="~/assets/images/icon_default.png" alt="">
              <span>{{onthedoor.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Staff",
    props:{
      staffs: {
        type: Object,
        required: true
      }
    },
    computed: {
      cheafs(){
        return this.staffs["実行委員長"] || []
      },
      cores(){
        return this.staffs["コアスタッフ"] || []
      },
      onthedoors(){
        return this.staffs["当日スタッフ"] || []
      }
    },
    methods:{
      linkBinder(staff){
        if(staff.url){
          return {
            href: staff.url,
            target: "_blank",
            rel: "noopener"
          }
        }else{
          return {

          }
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-staff {
    @include space_section;

    .staffs_post {
      display: inline-block;
      margin-bottom: 20px;
      font-size: 1.7rem;
      font-weight: bold;

      @include media_desktop {
        margin-bottom: 30px;
      }

      i {
        vertical-align: -.2em;
      }
    }

    .staff_item {
      display: inline-block;
      margin: 0 0 30px;
      padding: 0 10px;
      text-align: center;
      box-sizing: border-box;
      color: inherit;

      &:hover {
        opacity: .8;
        img {
          border-radius: 20px;
          background: #2D2C2F;
        }
      }

      img {
        margin: 0 auto 4px;
        border-radius: 50%;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        @include media_desktop {
          margin: 0 auto 10px;
          width: 100%;
          height: 100%;
          max-width: 80px;
          max-height: 80px;
        }
      }
      span {
        display: inline-block;
        max-width: 100%;
        word-wrap: break-word;
        font-size: 1.6rem;
        line-height: 1.7;
      }
    }

    .staffs_leader {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      .staffs_post{
        margin-right: 40px;
      }
      .staff_item {
        width: calc(100% / 4);

        @include media_desktop {
          margin: 0;
          width: calc(100% / 8);
        }
      }
    }

    .staffs_core {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: 40px;
      max-width: 100%;

      @include media_desktop {
        margin-bottom: 60px;
      }

      .staff_item {
        width: calc(100% / 4);

        @include media_desktop {
          margin: 0 0 30px;
          width: calc(100% / 8);
        }
      }

    }

    .staffs_day {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: 40px;
      max-width: 100%;

      @include media_desktop {
        margin-bottom: 60px;
      }

      .staff_item {
        width: calc(100% / 4);

        @include media_desktop {
          margin: 0 0 30px;
          width: calc(100% / 8);
        }
      }
    }


  }

</style>
