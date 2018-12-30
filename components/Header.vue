<template>
  <section class="p-header">
    <div class="container p-header-container">
      <section class="p-headerLogo">
        <img class="p-headerLogo-logo" src="~/assets/images/textLogo-black.svg" alt="PHPerKaigi 2019">
      </section>
      <section class="p-headerNav">
        <ul class="p-headerNav-items">
          <li :class="itemClass('#wanted')"><a href="#wanted" @click="scroll">Wanted</a></li>
          <li :class="itemClass('#news')"><a href="#news" @click="scroll">News</a></li>
          <li :class="itemClass('#about')"><a href="#about" @click="scroll">About</a></li>
          <li :class="itemClass('#sponsor')"><a href="#sponsor" @click="scroll">Sponsor</a></li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import VueScrollTo from "vue-scrollto"
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    itemClass(href){
      const rect = document.querySelector(href).getBoundingClientRect()
      this.scrollY = this.scrollY // to make react by scroll
      return {
        "p-headerNav-item": true,
        "active": rect.y < 120 && rect.y > -1 * rect.height
      }
    },
    scroll(e){
      VueScrollTo.scrollTo(e.target.getAttribute("href"),500, {
        offset: -100
      })
    },
    handleScroll(){
      this.scrollY = window.scrollY;
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/library/_mixin.scss";
@import "~/assets/scss/library/_variable.scss";

.p-header{
  position: fixed;
  z-index: 1000;
  height: 7rem;
  width: 100%;
  background: $clr-main;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  border-bottom: 2px #fff solid;
  &-container{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}

.p-headerLogo{
  &-logo{
    width: 17rem;
  }
}

.p-headerNav{
  display: none;
  @include media_desktop {
    display: block;
  }

  &-items{
    padding: 0;
    margin: 0;
  }
  &-item{
    display: inline-block;
    font-family: 'Fugaz One', cursive;
    padding: .5rem 3rem;
    border-radius: 999rem;
    a{
      color: #2c2c2c;
    }
  }
  &-item.active{
    background: #FFF;

  }
}

</style>
