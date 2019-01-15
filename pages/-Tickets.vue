<template>
<!--
  <section class="p-tickets">
    <div class="container">
      <h2 class="c-title">Tickets</h2>
      <p class="p-tickets-message">チケット発売開始しました！</p>
      <a href="#" target="_blank" class="p-tickets-btn">チケット購入！</a>
    </div>
  </section>
-->
</template>

<script>
    export default {
        name: "Hero"
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-tickets {
    @include space_section;

    &-soon{
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      margin: 3.2rem 0;
    }

    &-message{
      margin-bottom: 50px;
      text-align: center;
      font-size: 1.8rem;
      padding: 0 2rem;
    }

    &-btn {
      @include btn;
    }

  }

</style>
