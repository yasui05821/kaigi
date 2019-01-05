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
    margin-bottom: 60px;
    width: 100%;
    text-align: center;
    font-size: 2rem;

    @include media_desktop {
      margin-bottom: 100px;
    }

    @include media_desktop {
      font-size: 2.5rem;
    }

    &-contents {
      padding-top: 20px;
      transform: translate(-50%,-5px);
      width: calc(100% - 38px);
      max-width: calc(980px - 38px);
      background: $clr-main;
      position: relative;
      left: 50% ;
      z-index: 10;

      @include media_desktop {
        padding-top: 35px;
      }
    }

    &-icon {
      display: inline-block;
      font-size: 2rem;
      transform: translateY(4px);

      @include media_desktop{
        font-size: 3rem;
        transform: translateY(5px);
      }

    }
  }

</style>
