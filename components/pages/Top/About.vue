<template>
  <div class="top-about container" style="width: 980px">
    <h2 class="top-about_title">About</h2>
    <div class="top-about_content">
      <div class="top-about_desc mt-5">
        <h3 class="top-about_subtitle mb-5">PHPerKaigi 2019について</h3>
        <p class="top-about_text mb-4">PHPerKaigi（ペチパーカイギ）は、PHPer、つまり、現在PHPを使用している方、過去にPHPを使用していた方、これからPHPを使いたいと思っている方、そしてPHPが大好きな方たちが、技術的なノウハウとPHP愛を共有するためのイベントです。
        <p class="top-about_text mb-4"> 公募されたスピーカーによるトークセッションはもちろん、数人で特定のテーマについてディスカッションするInteractive Round Tableや、アンカンファレンス、懇親会など、日本中から集まったPHPerたちと技術的な話を思う存分するための企画を検討中です。</p>
        <p class="top-about_text">2019年3月29日（金）〜3月31日（日）はPHPerたちのお祭りです！<br> 歴戦の勇者みたいな方はもちろん、初心者の方にも、全てのPHPerが 楽しめるイベントです。スケジュール、空けておいて下さい！</p>
      </div>
      <div class="top-about_details mt-5">
        <img src="https://placehold.jp/410x250.png" alt="">
        <h6 class="top-about_overview mt-4">開催概要</h6>
        <p class="top-about_schedule">開催： 2019年3月29日（金）〜3月31日（日）</p>
        <p class="top-about_place">場所： 練馬区立区民・産業プラザ Coconeriホール</p>
        <p class="top-about_target">対象： PHP関連エンジニア 最大400名</p>
        <p class="top-about_sponsorship">主催 ：PHPerKaigi 2019 実行委員会 <br><br>　　　（実行委員長: 長谷川智希 / @tomzoh）</p>
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
.top-about {
  &_title {
    @include secTitle
  }
  &_content {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 170px;
  }
  &_desc {
    width: 50%;
  }
  &_details {
    width: 50%;
    padding-left:80px;
    img {
      border-radius: 20px;
      width: 100%;
    }
  }
  &_overview{
    font-weight: bold;
  }
}
</style>
