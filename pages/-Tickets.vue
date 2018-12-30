<template>
  <section class="p-tickets">
    <div class="container">
      <h2 class="c-title">Tickets</h2>
      <p class="p-tickets-soon"> Comming soon ...</p>
      <p class="p-tickets-message"> 2019年２月頃発売予定です。お楽しみに！</p>
    </div>
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

  .p-tickets {
    @include space_section;

    &-soon{
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      margin: 3.2rem 0;
    }
    &-message{
      text-align: center;
      font-size: 2rem;
      padding: 0 2rem;
    }

  }

</style>
