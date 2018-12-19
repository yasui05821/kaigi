<template>
  <div class="top-sponsor container" style="width: 980px">
    <h2 class="top-sponsor_title">Sponsor</h2>
    <div class="top-sponsor_content ">
      <div class="top-sponsor_diamond">
        <div class="top-sponsor_icon"></div>
        <h3>ダイヤモンド</h3>
        <a href="" class="top-sponsor_large">
          <img src="" alt="">
        </a>
      </div>
      <div class="top-sponsor_platinum">
        <div class="top-sponsor_icon"></div>
        <h3>プラチナ</h3>
        <a href="" class="top-sponsor_medium">
          <img src="" alt="">
        </a>
      </div>
      <div class="top-sponsor_gold">
        <div class="top-sponsor_icon"></div>
        <h3>ダイヤモンド</h3>
        <a href="" class="top-sponsor_small">
          <img src="" alt="">
        </a>
      </div>
      <div class="top-sponsor_silver">
        <div class="top-sponsor_icon"></div>
        <h3>ダイヤモンド</h3>
        <a href="" class="top-sponsor_verySmall">
          <img src="" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Sponsor"
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_mixin.scss";
.top-sponsor {
  &_title {
    @include secTitle
  }
}
</style>
