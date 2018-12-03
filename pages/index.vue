<template>
  <section>
    <sec-hero></sec-hero>
    <sec-wanted></sec-wanted>
    <sec-news></sec-news>
    <sec-about></sec-about>
    <sec-sponsor></sec-sponsor>
    <p-footer></p-footer>
  </section>
</template>

<script>
import secAbout from '~/components/pages/Top/About.vue'
import secHero from '~/components/pages/Top/Hero.vue'
import secNews from '~/components/pages/Top/News.vue'
import secSponsor from '~/components/pages/Top/Sponsor.vue'
import secWanted from '~/components/pages/Top/Wanted.vue'
import pFooter from '~/components/Footer.vue'

export default {
  components: {
    secAbout,
    secHero,
    secNews,
    secSponsor,
    secWanted,
    pFooter
  }
}
</script>

<style>

</style>
