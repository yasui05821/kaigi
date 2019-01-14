<template>
  <section class="p-news container" >
    <h2 class="c-title">News</h2>
    <div class="p-news-items">
      <p
        class="p-news-item"
        v-for="_news in news"
      >
        <span class="p-news-date">{{$moment(_news.published).format('YYYY/MM/DD')}}</span>
      　<span>
        <a v-if="_news.url" :href="_news.url">{{_news.title}}</a>
        <span v-else>{{_news.title}}</span>
        </span>
      </p>
    </div>
    <p class="p-news-socialArea">
      <span class="p-news-socialIcon">
        <i class="fab fa-twitter mr-3"></i>
      </span>
      <a href="https://twitter.com/phperkaigi" target="_blank">PHPerKaigi公式アカウント</a>
      も最新情報を発信しています！ぜひフォローしてみてください。
    </p>
  </section>
</template>

<script>
    export default {
      props: {
        news: {
          type: Object,
          required: true
        }
      }, 
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";
.p-news {
  @include space_section;

  &-items{
    margin-top: 4rem;
  }
  &-item{
    margin-bottom: 2rem;
  }
  &-date{
    display: block;
    margin-right: 1em;

    @include media_desktop {
      display: inline-block;
    }
  }
  &-socialArea{
    border-radius: 999px;
    margin-top: 6rem;
    padding: 2rem;
    background: white;

    @include media_desktop {
      padding: 1rem 2rem;
    }


  }
  &-socialIcon{

  }
}
</style>
