const defaultMeta = {
  description: "PHPerKaigi（ペチパーカイギ）は、現在PHPを使用している、過去にPHPを使用していた、これからPHPを使いたいと思っているエンジニアが、技術的なノウハウを共有するためのカンファレンス（イベント）です。",
  title: "PHPerKaigi 2019" ,
  host: "https://phperkaigi.jp/2019/",
  image: "PHPerKaigi.png"
}

export default (args) => {
  const {title,description,host,image} = {...defaultMeta,...args}
  return [

    { hid: 'DESC', name: 'description', content: description },
    { hid: 'OG:TITLE', property: 'og:title', content: title },
    { hid: 'OG:IMAGE', property: 'og:image', content: `${host}${image}` },
    { hid: 'OG:DESC', property: 'og:description', content: description},
    { hid: 'TW:CARD', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'TW:SITE', name: 'twitter:site', content: '@phperkaigi' },
    { hid: 'TW:CREATOR', name: 'twitter:creator', content: '@phperkaigi' },
    { hid: 'TW:TITLE', name: 'twitter:title', content: title },
    { hid: 'TW:DESC', name: 'twitter:description', content: description },
    { hid: 'TW:IMAGE', name: 'twitter:image', content: `${host}${image}` },
  ]

}
