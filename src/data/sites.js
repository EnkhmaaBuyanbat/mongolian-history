/**
 * Future site records.
 * Prepared for archaeological or culturally significant sites relevant to the timeline.
 */

export const sitesStatusOptions = ['draft', 'researched', 'verified']

export const sites = [
  {
    id: 'site-deer-stone-khirgisuur-landscapes',
    title: 'Deer Stone & Khirgisüür Landscapes',
    type: 'archaeological landscape/site group',
    period: 'approximately 1200–600 BCE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Monumental deer stones and associated khirgisüür complexes are among the most distinctive surviving remains of Late Bronze Age nomadic cultures in Mongolia. The stones, often engraved with stylized deer, occur alongside burial mounds, sacrificial structures, human burials and horse remains.',
    relatedEntityIds: ['place-orkhon-valley'],
    sourceRefs: ['source-unesco-deer-stones'],
    mapAvailable: true,
    experience3dAvailable: true,
  },
  {
    id: 'site-noyon-uul-noin-ula',
    title: 'Noyon Uul / Noin-Ula',
    type: 'Xiongnu archaeological / elite cemetery site',
    period: 'Xiongnu period',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'These are important Xiongnu cemetery complexes investigated archaeologically in Mongolia.',
    relatedEntityIds: ['polity-xiongnu'],
    sourceRefs: ['source-prehistoric-mongolian-archaeology'],
    coordinates: { lat: 48.562444, lng: 106.508972, sourceId: 'source-unesco-xiongnu-cemetery' },
    mapAvailable: false,
    experience3dAvailable: false,
  },
  {
    id: 'site-gol-mod',
    title: 'Gol Mod',
    type: 'Xiongnu archaeological / elite cemetery site',
    period: 'Xiongnu period',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'These are important Xiongnu cemetery complexes investigated archaeologically in Mongolia.',
    relatedEntityIds: ['polity-xiongnu'],
    sourceRefs: ['source-prehistoric-mongolian-archaeology'],
    coordinates: { lat: 48.327083, lng: 101.914833, sourceId: 'source-unesco-xiongnu-cemetery' },
    mapAvailable: false,
    experience3dAvailable: false,
  },
  {
    id: 'site-gol-mod-ii',
    title: 'Gol Mod II',
    type: 'Xiongnu archaeological / elite cemetery site',
    period: 'Xiongnu period',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'These are important Xiongnu cemetery complexes investigated archaeologically in Mongolia.',
    relatedEntityIds: ['polity-xiongnu'],
    sourceRefs: ['source-prehistoric-mongolian-archaeology'],
    coordinates: { lat: 48.006028, lng: 101.213972, sourceId: 'source-unesco-xiongnu-cemetery' },
    mapAvailable: false,
    experience3dAvailable: false,
  },
  {
    id: 'site-duurlig-nars',
    title: 'Duurlig Nars',
    type: 'Xiongnu archaeological / elite cemetery site',
    period: 'Xiongnu period',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'These are important Xiongnu cemetery complexes investigated archaeologically in Mongolia.',
    relatedEntityIds: ['polity-xiongnu'],
    sourceRefs: ['source-prehistoric-mongolian-archaeology'],
    coordinates: { lat: 48.546611, lng: 111.082417, sourceId: 'source-unesco-xiongnu-cemetery' },
    mapAvailable: false,
    experience3dAvailable: false,
  },
  {
    id: 'site-takhiltyn-khotgor',
    title: 'Takhiltyn Khotgor',
    type: 'Xiongnu archaeological / elite cemetery site',
    period: 'Xiongnu period',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'These are important Xiongnu cemetery complexes investigated archaeologically in Mongolia.',
    relatedEntityIds: ['polity-xiongnu'],
    sourceRefs: ['source-prehistoric-mongolian-archaeology'],
    coordinates: { lat: 47.401722, lng: 92.098167, sourceId: 'source-unesco-xiongnu-cemetery' },
    mapAvailable: false,
    experience3dAvailable: false,
  },
  {
    id: 'site-khar-balgas',
    title: 'Khar Balgas',
    type: 'archaeological site / historical capital',
    period: '8th–9th centuries CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Khar Balgas was the capital of the Uyghur Khaganate in the Orkhon Valley and is an important archaeological example of Uyghur urban culture.',
    relatedEntityIds: ['place-orkhon-valley', 'polity-uyghur-khaganate'],
    sourceRefs: ['source-cambridge-uighurs'],
    mapAvailable: true,
    experience3dAvailable: true,
  },
  {
    id: 'site-orkhon-turk-memorial-landscape',
    title: 'Orkhon Türk Memorial Landscape',
    type: 'archaeological / memorial landscape',
    period: 'early 8th century CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'The Orkhon Türk Memorial Landscape includes the commemorative settings associated with Kül Tegin and Bilge Khagan. Its inscriptions are major political and commemorative sources for the restored Türk political world.',
    relatedEntityIds: ['place-orkhon-valley', 'polity-turk-political-world'],
    sourceRefs: ['source-unesco-orkhon-valley'],
    mapAvailable: false,
    experience3dAvailable: false,
  },
  {
    id: 'site-chintolgoi-balgas', title: 'Chintolgoi Balgas', type: 'archaeological site / fortified settlement',
    period: '10th century CE', eraId: 'before-chinggis', status: 'verified',
    summary: 'Survey and excavation at this fortified site, read alongside documentary evidence, contribute to research on the mass deportation of Bohai people into tenth-century Mongolia and the maintenance of Bohai cultural traditions.',
    caution: 'This evidence supports population movement and cultural continuity at the site; it does not establish the ethnicity of every individual associated with its material remains.',
    relatedEntityIds: ['polity-khitan-liao'], sourceRefs: ['source-kradin-ivliev-deported-nation'], mapAvailable: false, experience3dAvailable: false,
  },
  { id:'site-karakorum',title:'Karakorum',type:'archaeological site / historical imperial center',period:'13th-century Mongol imperial world',eraId:'rise-empire',status:'verified',summary:'Karakorum was an imperial center within the Orkhon Valley, associated especially with the developing Mongol imperial system under Ögedei. It served political, administrative, craft and exchange functions within a wider imperial network.',caution:'No single date is used to collapse establishment, construction, settlement and capital development into one event. Archaeological survey does not provide a complete reconstruction or prove every building’s exact function.',relatedEntityIds:['place-orkhon-valley','polity-yeke-mongol-ulus','person-ogedei-khan','person-temujin-chinggis-khan','event-ogedei-accession-1229','event-yam-regularization-1234'],evidenceSections:[{id:'karakorum-archaeology',title:'Archaeology at Karakorum',paragraphs:['Magnetic survey, topographic survey, aerial imagery and photography, pedestrian archaeological survey, and comparison with documentary evidence help researchers examine the settlement’s urban organization, street or road network, occupation patterns and activity areas.'],canTell:'These methods reveal spatial patterning, urban layout and evidence for varied zones of occupation and activity.',cannotProve:'Survey patterns alone do not establish the precise function of every structure, a complete city reconstruction, one uncontested foundation moment, or the identity of every inhabitant.',sourceIds:['source-bemmann-mapping-karakorum-2022']},{id:'karakorum-written-evidence',title:'What Written Sources Reveal',paragraphs:['Written and institutional sources connect Karakorum with the Mongol imperial system and the Orkhon Valley landscape, while modern scholarship emphasizes its development under Ögedei.'],canTell:'Written evidence helps establish Karakorum’s imperial political importance and connects the settlement to wider systems of government and exchange.',cannotProve:'Written traditions do not supply a complete neutral description of the city or resolve every question about establishment, construction and urban development.',sourceIds:['source-dunnell-rise-chinggis-2023','source-unesco-orkhon-valley']}],sourceRefs:['source-bemmann-mapping-karakorum-2022','source-unesco-orkhon-valley','source-dunnell-rise-chinggis-2023'],mapAvailable:false,experience3dAvailable:false },
]
