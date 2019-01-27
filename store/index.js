export const actions = {
  async fetchSponsors(){
    const {data} = await this.$axios.get("/sponsors")

    const sponsorsMap = {
      "ダイアモンドプラン": "DIAMOND",
      "プラチナプラン": "PLATINUM",
      "ゴールドプラン": "GOLD",
      "シルバープラン": "SILVER",
      "ビールスポンサー": "BEER",
      "ランチスポンサー": "LUNCH",
      "デザインスポンサー": "DESIGN",
    }

    const sponsors = {}
    for(let plan of data.sponsor_plans){
      let sponsorKey = sponsorsMap[plan.name]
      sponsors[sponsorKey] = {
        label: plan.name,
        sponsors: plan.sponsors
      }
    }
    return sponsors
  },
  async fetchSponsorByName({dispatch}, name){
    const result = await dispatch("fetchSponsors")
    for(let labelKey in result) {
      let sponsorRankInfo = result[labelKey]
      let {label,sponsors} = sponsorRankInfo
      for(let sponsor of sponsors) {
        if (sponsor.name == name) {
          return {
            sponsor,
            label
          }
        }
      }
    }
  },
  async fetchStaffs(){
    const {data} = await this.$axios.get("/staff")
    const staffs = []
    for (let title of Object.keys(data.staff)) {
      for(let staff of data.staff[title]) {
        staffs.push(staff)
      }
    }
    return staffs
  },
  async fetchNews(){
    const {data} = await this.$axios.get("/news")
    const news = []
    for(let _news of data.news) {
      news.push({
        title: _news.title,
        published: _news.published, 
        url: _news.url, 
      });
    }
    return news
  }
}
