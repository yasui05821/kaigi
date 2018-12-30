<template>
  <div class="p-about container">
    <h2 class="c-title">About</h2>
    <div class="p-about-items">
      <div class="p-aboutItem1">
        <img class="p-aboutItem1-photo" src="~/assets/images/about.jpg" alt="">
        <h3 class="p-aboutItem1-title">開催概要</h3>
        <dl>
          <div class="p-aboutItem1-row">
            <dt>開催：</dt>
            <dd>2019年3月29日（金）〜3月31日（日）</dd>
          </div>
          <div class="p-aboutItem1-row">
            <dt>場所：</dt>
            <dd>練馬区立区民・産業プラザ Coconeriホール</dd>
          </div>
          <div class="p-aboutItem1-row">
            <dt>対象：</dt>
            <dd>PHP関連エンジニア 最大400名</dd>
          </div>
          <div class="p-aboutItem1-row">
            <dt>主催：</dt>
            <dd>PHPerKaigi 2019 実行委員会</dd>
          </div>
        </dl>
      </div>
      <div class="p-aboutItem2">
        <h3 class="p-aboutItem2-title">PHPerKaigi 2019について</h3>
        <p class="p-aboutItem2-message">PHPerKaigi（ペチパーカイギ）は、PHPer、つまり、現在PHPを使用している方、過去にPHPを使用していた方、これからPHPを使いたいと思っている方、そしてPHPが大好きな方たちが、技術的なノウハウとPHP愛を共有するためのイベントです。
        <p class="p-aboutItem2-message"> 公募されたスピーカーによるトークセッションはもちろん、数人で特定のテーマについてディスカッションするInteractive Round Tableや、アンカンファレンス、懇親会など、日本中から集まったPHPerたちと技術的な話を思う存分するための企画を検討中です。</p>
        <p class="p-aboutItem2-message">2019年3月29日（金）〜3月31日（日）はPHPerたちのお祭りです！<br> 歴戦の勇者みたいな方はもちろん、初心者の方にも、全てのPHPerが 楽しめるイベントです。スケジュール、空けておいて下さい！</p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_mixin.scss";
.p-about {
  &-items {
    display: flex;
    flex-flow: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3rem;
  }
}

.p-aboutItem1 {
  width: 100%;
  @include media_desktop {
    margin-left: 80px;
    width: 41rem;
  }
  &-photo{
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    border-radius: 2rem;
  }
  &-title {
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  & dl{
  }
  &-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2px;
  }
  & dt{
    width: 5rem;
    display: block;
    @include media_desktop {
      display: inline-block;
    }
  }
  & dd{
    width: 35rem;
    display: inline-block;
  }
}

.p-aboutItem2{
  width: 100%;
  @include media_desktop {
    width: calc(100% - 41rem - 80px);
  }
  &-title{
    font-size: 2.5rem;
    margin-bottom: 2rem;
    @include media_desktop {
      margin-bottom: 5rem;
      font-size: 2.8rem;
    }
  }
  &-message{
    margin-bottom: 2rem;
    @include media_desktop {
      font-size: 1.8rem;
      line-height: 1.8;
    }

  }
}

.p-hoge{
  &_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 170px;
  }
  &_subtitle {
    font-size: 1.5rem;
  }
  &_desc {
    width: 80%;
    @include media_desktop {
      width: 50%;
    }
  }
  &_details {
    width: 80%;
    font-size: 0.8rem;
    img {
      border-radius: 20px;
      width: 100%;
    }
    @include media_desktop {
      padding-left:80px;
      width: 50%;
      font-size: 1rem;
    }
  }
  &_overview{
    font-weight: bold;
  }
}

</style>
