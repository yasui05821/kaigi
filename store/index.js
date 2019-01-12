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
  async fetchStaffs(){
    const {data} = await this.$axios.get("/staff")
    const staffs = []
    for (let title of Object.keys(data.staff)) {
      for(let staff of data.staff[title]) {
        staffs.push(staff)
      }
    }
    return staffs
  }
}
