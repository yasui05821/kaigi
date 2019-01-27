<template>
  <section class="p-header">
    <div class="container p-header-container">
      <section class="p-headerLogo">
        <router-link  to="/">
          <img class="p-headerLogo-logo" src="~/assets/images/textLogo-black.svg" alt="PHPerKaigi 2019">
        </router-link>
      </section>
      <section class="p-headerNav">
        <ul class="p-headerNav-items">
          <li class="p-headerNav-item"><router-link to="/#wanted" @click.prevent="scroll">Wanted</router-link></li>
          <li class="p-headerNav-item"><router-link to="/#news" @click.prevent="scroll">News</router-link></li>
          <li class="p-headerNav-item"><router-link to="/#about" @click.prevent="scroll">About</router-link></li>
          <li class="p-headerNav-item"><router-link to="/#sponsor" @click.prevent="scroll">Sponsor</router-link></li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import VueScrollTo from "vue-scrollto"
export default {
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
