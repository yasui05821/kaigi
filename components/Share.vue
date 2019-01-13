<template>
  <section class="p-share">
    <span class="p-share-title">Share</span>
    <span class="p-share-border"></span>
    <a href="http://twitter.com/share?url=https://phperkaigi.jp/2019/&amp;text=PHPerKaigi 2019" target="_blank" class="p-share-twitter">
      <img src="~assets/images/shareIcon_twitter.svg" alt="share-twitter">
    </a>
    <a href="https://www.facebook.com/sharer.php?src=bm&u=https://phperkaigi.jp/2019/&t=PHPerKaigi 2019" target="_blank" class="p-share-facebook">
      <img src="~assets/images/shareIcon_facebook.svg" alt="share-facebook">
    </a>
    <a href="http://b.hatena.ne.jp/add?mode=confirm&amp;url=https://phperkaigi.jp/2019/&amp;title=https://phperkaigi.jp/2019/
" target="_blank" class="p-share-hatena">
      <img src="~assets/images/shareIcon_hateb.svg" alt="share-hatena">
    </a>
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

.p-share{
  display: none;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 120px;
  left: 20px;
  z-index: 1000;

  @include media_desktop {
    display: flex;
  }

  &-title {
    display: inline-block;
    margin-bottom: 10px;
    font-family: 'Fugaz One', cursive;
    font-size: 3rem;
    font-weight: normal;
    font-feature-settings : "palt" 1;
    writing-mode: vertical-rl;
    letter-spacing: 1px;

  }
  &-border {
    display: inline-block;
    margin-bottom: 25px;
    border-radius: 9999px;
    width: 2px;
    height: 130px;
    background: $clr-black;
  }
  &-twitter {
    display: inline-block;
    margin-bottom: 20px;
    width: 35px;
    height: 35px;

  }
  &-facebook {
    display: inline-block;
    margin-bottom: 20px;
    width: 35px;
    height: 35px;

  }
  &-hatena {
    display: inline-block;
    margin-bottom: 20px;
    width: 35px;
    height: 35px;
  }

}

</style>
