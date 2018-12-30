<template>
  <section class="p-share">
    <span class="p-share-title">Sahre</span>
    <span class="p-share-border"></span>
    <!--TODO リンクテキストおよびOGPの設定-->
    <a href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fdeveloper.twitter.com%2Fen%2Fdocs%2Ftwitter-for-websites%2Ftweet-button%2Foverview.html&amp;ref_src=twsrc%5Etfw&amp;text=Guides%20%E2%80%94%20Twitter%20Developers&amp;tw_p=tweetbutton&amp;url=https%3A%2F%2Fdeveloper.twitter.com%2Fen%2Fdocs%2Ftwitter-for-websites%2Ftweet-button%2Foverview.html" class="p-share-twitter">
      <img src="~assets/images/shareIcon_twitter.svg" alt="share-twitter">
    </a>
    <a href="" class="p-share-facebook">
      <img src="~assets/images/shareIcon_facebook.svg" alt="share-facebook">
    </a>
    <a href="" class="p-share-hatena">
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
