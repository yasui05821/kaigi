<template>
  <section class="p-news container" >
    <h2 class="c-title">News</h2>
    <div class="p-news-items">
      <p
        class="p-news-item"
        v-for="(_new,index) in news"
        :key="index"
      >
        <span class="p-news-date">2019.03.01</span>
      　<a class="p-news-link" href="">WebサイトOPENしました！</a>
      </p>
    </div>
    <p class="p-news-socialArea">
      <span class="p-news-socialIcon">
        <i class="fab fa-twitter mr-3"></i>
      </span>
      <a href="">PHPerKaigi公式アカウント</a>
      も最新情報を発信しています！ぜひフォローしてみてください。
    </p>
  </section>
</template>

<script>
    export default {
      name: "News",
      data(){
          return {
            news: [
              { date: "2019.03.01", link:"", message: "WebサイトOPENしました！"},
              { date: "2019.03.01", link:"", message: "WebサイトOPENしました！"},
              { date: "2019.03.01", link:"", message: "WebサイトOPENしました！"},
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_mixin.scss";
.p-news {
  margin-bottom: 15rem;
  &-items{
    margin-top: 4rem;
  }
  &-item{
    margin-bottom: 2rem;
  }
  &-date{
    display: inline-block;
    padding-right: 2rem;
  }
  &-socialArea{
    background: #FFF;
    padding: 1rem 2rem;
    border-radius: 999px;
    margin-top: 6rem;
  }
  &-socialIcon{

  }
}
</style>
