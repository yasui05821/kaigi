<template>
  <section>
    <sec-hero></sec-hero>
    <sec-tickets></sec-tickets>
    <sec-wanted></sec-wanted>
    <sec-news></sec-news>
    <sec-about></sec-about>
    <sec-sponsor ></sec-sponsor>
    <p-footer></p-footer>
  </section>
</template>

<script>
import secAbout from './-About.vue'
import secHero from './-Hero.vue'
import secTickets from './-Tickets.vue'
import secNews from './-News.vue'
import secSponsor from './-Sponsor.vue'
import secWanted from './-Wanted.vue'
import pFooter from '~/components/Footer.vue'

export default {
  // async asyncData({store}) {
  //   const [sponsors] = await Promise.all([
  //     store.dispatch("fetchSponsors")
  //   ])
  //   return {
  //     sponsors
  //   }
  // },
  components: {
    secAbout,
    secTickets,
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
