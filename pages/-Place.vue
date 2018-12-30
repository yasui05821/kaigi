<template>
  <section class="p-place">
    <p class="p-place-contents">
      <div class="container">
        <i class="p-place-icon material-icons">
          place
        </i>
        練馬区立区民・産業プラザ  Coconeriホール
      </div>
    </p>
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

  .p-place {
    border-top: 4px solid white;
    margin-bottom: 100px;
    width: 100%;
    text-align: center;
    font-size: 2.5rem;

    &-contents {
      padding-top: 35px;
      transform: translate(-50%,-3px);
      width: 980px;
      background: $clr-main;
      position: relative;
      left: 50% ;
      z-index: 10;
    }

    &-icon {
      display: inline-block;
      font-size: 3rem;
      transform: translateY(5px);

    }
  }

</style>
