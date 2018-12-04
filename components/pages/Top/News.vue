<template>
  <div class="top-news container" style="width: 980px">
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

<style lang="scss"scoped>
.top-news {
  margin-bottom: 164px;
  &_title {
    font-family: 'Fugaz One', cursive;
    font-size: 50px;
    font-weight: normal;
    display: flex;
    align-items: center;
    &:before {
      content: "";
      flex-grow: 1;
      height: 2px;
      background: #000;
      margin-right:20px;
    }
    &:after {
      content: "";
      flex-grow: 1;
      height: 2px;
      background: #000;
      margin-left:20px;
    }
  }
}
</style>
