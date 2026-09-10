export const cultureTopics = [
  {
    id: 'culture-material-archaeology', slug: 'material-culture-archaeology',
    eraIds: ['ancient-steppe', 'rise-empire', 'mongol-world', 'northern-yuan', 'qing-rule'],
    chapterIds: ['chapter-bronze-age-steppe', 'chapter-xiongnu-world', 'chapter-orkhon-world', 'chapter-ogedei-governing-empire', 'chapter-hulegu-ilkhanid-world', 'chapter-buddhism-monasteries-authority-qing'],
    peopleIds: ['person-kul-tegin', 'person-rashid-al-din', 'person-zanabazar'],
    placeIds: ['place-orkhon-valley'],
    siteIds: ['site-deer-stone-khirgisuur-landscapes', 'site-gol-mod-ii', 'site-duurlig-nars', 'site-orkhon-turk-memorial-landscape', 'site-karakorum', 'site-erdene-zuu', 'site-amarbayasgalant'],
    objectIds: ['object-gol-mod-ii-roman-glass-vessel', 'object-duurlig-nars-inscribed-ear-cup', 'object-kul-tegin-inscription', 'object-bilge-khagan-inscription'],
    mediaIds: ['media-deer-stones-uushgiin-uvur-01', 'media-xiongnu-belt-buckle-01', 'media-karakorum-palace-fragments-01', 'media-zanabazar-maitreya-01'],
    sourceIds: ['source-unesco-deer-stones', 'source-oxford-xiongnu', 'source-bemmann-mapping-karakorum-2022', 'source-tsultem-zanabazar-art-2015'],
  },
  {
    id: 'culture-writing-literacy', slug: 'writing-inscriptions-literacy',
    eraIds: ['ancient-steppe', 'mongol-world', 'revolution-socialist', 'modern'],
    chapterIds: ['chapter-orkhon-world', 'chapter-empire-of-connections', 'chapter-religion-knowledge-cultural-exchange', 'chapter-socialist-society-economy', 'chapter-changing-society-modern-mongolia'],
    peopleIds: ['person-kul-tegin', 'person-phags-pa', 'person-rashid-al-din'],
    placeIds: ['place-orkhon-valley', 'place-dadu-khanbaliq', 'place-tabriz'],
    siteIds: ['site-orkhon-turk-memorial-landscape'],
    objectIds: ['object-kul-tegin-inscription', 'object-bilge-khagan-inscription'],
    mediaIds: ['media-kul-tegin-inscription-01', 'media-jami-al-tawarikh-folio-01'],
    sourceIds: ['source-cambridge-bulletin-soas-orkhon-inscriptions', 'source-jras-old-turkic-authorship', 'source-rashid-al-din-compendium', 'source-cambridge-ilkhanate-2023'],
  },
  {
    id: 'culture-religion-ritual', slug: 'religion-ritual-institutions',
    eraIds: ['ancient-steppe', 'mongol-world', 'northern-yuan', 'qing-rule', 'revolution-socialist', 'modern'],
    chapterIds: ['chapter-uyghur-khaganate', 'chapter-religion-knowledge-cultural-exchange', 'chapter-altan-khan-buddhist-revival', 'chapter-buddhism-monasteries-authority-qing', 'chapter-collectivization-repression-monastic-order', 'chapter-changing-society-modern-mongolia'],
    peopleIds: ['person-chabi', 'person-doquz-khatun', 'person-ghazan', 'person-phags-pa', 'person-altan-khan', 'person-sonam-gyatso', 'person-zanabazar'],
    placeIds: ['place-orkhon-valley', 'place-kokeqota', 'place-ikh-khuree-urga'],
    siteIds: ['site-erdene-zuu', 'site-amarbayasgalant', 'site-gandan-monastery'],
    objectIds: [], mediaIds: ['media-zanabazar-maitreya-01'],
    sourceIds: ['source-tsultem-zanabazar-art-2015', 'source-soucek-buddhist-mongols-2000', 'source-kaplonski-lama-question-2014'],
  },
  {
    id: 'culture-trade-connectivity', slug: 'trade-exchange-connectivity',
    eraIds: ['ancient-steppe', 'rise-empire', 'mongol-world', 'qing-rule'],
    chapterIds: ['chapter-xiongnu-world', 'chapter-ogedei-governing-empire', 'chapter-expansion-across-eurasia', 'chapter-empire-of-connections', 'chapter-trade-tea-silver-debt-frontier', 'chapter-between-qing-russian-empires'],
    peopleIds: ['person-rashid-al-din', 'person-rabban-bar-sauma'],
    placeIds: ['place-orkhon-valley', 'place-dadu-khanbaliq', 'place-sarai', 'place-tabriz', 'place-maragha', 'place-kyakhta'],
    siteIds: ['site-gol-mod-ii', 'site-duurlig-nars', 'site-karakorum'],
    objectIds: ['object-gol-mod-ii-roman-glass-vessel', 'object-duurlig-nars-inscribed-ear-cup'],
    mediaIds: ['media-karakorum-palace-fragments-01', 'media-jami-al-tawarikh-folio-01'],
    sourceIds: ['source-unesco-xiongnu-cemetery', 'source-springer-duurlig-earcup-2025', 'source-bemmann-mapping-karakorum-2022', 'source-cambridge-sino-russian-relations-1978'],
  },
  {
    id: 'culture-pastoral-lifeways', slug: 'pastoral-lifeways-transformation',
    eraIds: ['ancient-steppe', 'before-chinggis', 'rise-empire', 'qing-rule', 'revolution-socialist', 'modern'],
    chapterIds: ['chapter-bronze-age-steppe', 'chapter-temujins-world', 'chapter-building-new-order-1206', 'chapter-pastoral-society-everyday-life-qing', 'chapter-socialist-society-economy', 'chapter-changing-society-modern-mongolia'],
    peopleIds: ['person-temujin-chinggis-khan'], placeIds: ['place-orkhon-valley', 'place-ulaanbaatar'],
    siteIds: ['site-deer-stone-khirgisuur-landscapes'], objectIds: [],
    mediaIds: ['media-orkhon-valley-01', 'media-deer-stones-uushgiin-uvur-01'],
    sourceIds: ['source-unesco-orkhon-valley', 'source-unesco-deer-stones', 'source-bawden-modern-mongolia-1989', 'source-adb-mongolia-urban-development'],
  },
]

export function getCultureTopicBySlug(slug) {
  return cultureTopics.find((topic) => topic.slug === slug) ?? null
}
