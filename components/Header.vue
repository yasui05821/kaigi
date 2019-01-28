<template>
  <section class="p-header">
    <div class="container p-header-container">
      <section class="p-headerLogo">
        <a href="/2019">
          <img class="p-headerLogo-logo" src="~/assets/images/textLogo-black.svg" alt="PHPerKaigi 2019">
        </a>
      </section>
      <section class="p-headerNav">
        <ul class="p-headerNav-items">
          <li :class="itemClass('#wanted')"><a href="#wanted" @click.prevent="scroll">Wanted</a></li>
          <li :class="itemClass('#news')"><a href="#news" @click.prevent="scroll">News</a></li>
          <li :class="itemClass('#about')"><a href="#about" @click.prevent="scroll">About</a></li>
          <li :class="itemClass('#sponsor')"><a href="#sponsor" @click.prevent="scroll">Sponsor</a></li>
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
  height: 50px;
  width: 100%;
  background: $clr-main;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 3px white solid;

  @include media_desktop {
    height: 60px;
  }

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
    a{
      color: $clr-black;
      text-decoration: none;
    }
  }
  &-item.active{
    text-decoration: none;
    background:
      -webkit-linear-gradient(45deg, transparent 10px, white 10px),
      -webkit-linear-gradient(135deg, transparent 10px, white 10px),
      -webkit-linear-gradient(225deg, transparent 10px, white 10px),
      -webkit-linear-gradient(315deg, transparent 10px, white 10px);
    background-position: bottom left, bottom right, top right, top left;
    background-size: 51% 51%;
    background-repeat: no-repeat;
    color: white;

  }
}

</style>
