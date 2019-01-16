<template>
  <section>
    <no-ssr>
      <p-header></p-header>
    </no-ssr>
    <p-share></p-share>
    <sec-hero></sec-hero>
    <sec-place></sec-place>
    <sec-tickets></sec-tickets>
    <sec-wanted id="wanted"></sec-wanted>
    <sec-news id="news" :news="news"></sec-news>
    <sec-about id="about"></sec-about>
    <sec-sponsor id="sponsor" :sponsors="sponsors"></sec-sponsor>
    <sec-staff></sec-staff>
    <p-footer></p-footer>
  </section>
</template>

<script>
import secHero from './-Hero.vue'
import secPlace from './-Place.vue'
import secAbout from './-About.vue'
import secTickets from './-Tickets.vue'
import secNews from './-News.vue'
import secSponsor from './-Sponsor.vue'
import secWanted from './-Wanted.vue'
import secStaff from './-Staff.vue'
import pHeader from '~/components/Header.vue'
import pShare from '~/components/Share.vue'
import pFooter from '~/components/Footer.vue'

export default {
  async asyncData({store}) {
    const [sponsors,staffs,news] = await Promise.all([
      store.dispatch("fetchSponsors"),
      store.dispatch("fetchStaffs"),
      store.dispatch("fetchNews"),
    ])
    return {
      sponsors,
      staffs,
      news
    }
  },
  components: {
    secHero,
    secPlace,
    secAbout,
    secTickets,
    secNews,
    secSponsor,
    secWanted,
    secStaff,
    pHeader,
    pShare,
    pFooter
  }
}
</script>

<style>

</style>
