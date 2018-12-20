<template>
  <div class="top-news container" >
    <h2 class="top-news_title mb-5">News</h2>
    <div class="top-news_news mb-5">
      <p >2019.03.01　<a href="">WebサイトOPENしました！</a></p>
      <p >2019.03.01　<a href="">WebサイトOPENしました！</a></p>
      <p >2019.03.01　<a href="">WebサイトOPENしました！</a></p>
    </div>
    <p class="top-news_message">
      <i class="fab fa-twitter mr-3" style="font-size: 1.5rem"></i>
      <a href="">PHPerKaigi公式アカウント</a>
      も最新情報を発信しています！ぜひフォローしてみてください。
    </p>
  </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_mixin.scss";
.top-news {
  width: 100%;
  max-width: 980px;
  padding-bottom: 164px;
  &_title {
    @include secTitle
  }
}
</style>
