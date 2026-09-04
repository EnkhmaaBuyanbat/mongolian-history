/**
 * Future place records.
 * Prepared for locations, regions, or named landscapes associated with historical events.
 */

export const placesStatusOptions = ['draft', 'researched', 'verified']

export const places = [
  {
    id: 'place-orkhon-valley',
    title: 'Orkhon Valley',
    type: 'place / cultural landscape',
    eraId: 'multiple',
    eraIds: [
      'ancient-steppe',
      'before-chinggis',
      'rise-empire',
      'mongol-world',
      'northern-yuan',
      'qing-rule',
      'revolution-socialist',
      'modern',
    ],
    status: 'verified',
    summary:
      'The Orkhon Valley is one of the central historical landscapes of the Mongolian steppe. Across different centuries it became associated with successive political, religious and urban centres.',
    relatedEntityIds: [
      'site-khar-balgas',
      'polity-uyghur-khaganate',
      'event-uyghur-khaganate-established-744',
      'event-end-uyghur-khaganate-840',
      'event-bilge-khagan-accession-716',
      'event-death-kul-tegin-731',
      'event-kul-tegin-memorial-732',
      'event-death-bilge-khagan-734',
      'event-bilge-khagan-memorial-735',
      'site-karakorum',
    ],
    sourceRefs: ['source-unesco-orkhon-valley', 'source-bemmann-mapping-karakorum-2022'],
    mapAvailable: true,
    experience3dAvailable: true,
  },
  {
    id: 'place-burkhan-khaldun', title: 'Great Burkhan Khaldun', type: 'place / sacred landscape',
    period: 'Historically associated with Chinggis Khan; sacred traditions continue over time', eraId: 'before-chinggis', status: 'verified',
    summary: 'Great Burkhan Khaldun and its surrounding sacred landscape lie in the central Khentii region and have strong cultural and historical associations with Chinggis Khan and traditions of mountain worship.',
    caution: 'These are literary, cultural and heritage associations. They do not archaeologically prove a precise episode location or establish Chinggis Khan’s burial place.',
    relatedEntityIds: ['person-temujin-chinggis-khan'], sourceRefs: ['source-unesco-burkhan-khaldun'], mapAvailable: false, experience3dAvailable: false,
  },
  { id:'place-otrar',title:'Otrar',type:'place / historical city and frontier center',period:'Era III role: 1218–1219',eraId:'rise-empire',status:'verified',summary:'Otrar was a major city and frontier center within the Khwarazmian political world. A commercial and diplomatic crisis there became an important part of escalation before the Mongol invasion beginning in 1219.',caution:'The crisis did not by itself “cause” the invasion. Medieval historians preserve narrative details, while its precise place within the broader causes remains interpretive.',relatedEntityIds:['polity-khwarazmian-empire','polity-yeke-mongol-ulus','person-temujin-chinggis-khan','event-otrar-crisis-1218'],campaignIds:['campaign-khwarazm'],claimIds:['claim-otrar-crisis-causation'],evidenceSections:[{id:'otrar-crisis-evidence',title:'The Otrar Crisis',paragraphs:['What we can say: a diplomatic and commercial crisis occurred and was important in escalation before the invasion.'],sourceReports:'Medieval Persian historiography preserves narrative details about the merchant caravan and subsequent diplomatic escalation.',remainsInterpretive:'The precise weight of the incident among the broader political causes of war remains a matter of historical interpretation.',sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958']}],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958'],mapAvailable:false,experience3dAvailable:false },
  { id:'place-bukhara',title:'Bukhara',type:'place / historical urban center',period:'Era III role: 1220 campaign',eraId:'rise-empire',status:'verified',summary:'Bukhara was an important Khwarazmian urban center encountered during the 1220 campaign phase. Its conquest formed part of a violent, multi-army imperial campaign.',caution:'Speeches attributed to Chinggis Khan in medieval narratives are source reports, not verbatim modern transcripts. No exact casualty total is asserted.',relatedEntityIds:['place-samarkand','polity-khwarazmian-empire','polity-yeke-mongol-ulus','person-temujin-chinggis-khan','event-bukhara-samarkand-1220'],campaignIds:['campaign-khwarazm'],claimIds:['claim-medieval-casualty-numbers'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958'],mapAvailable:false,experience3dAvailable:false },
  { id:'place-samarkand',title:'Samarkand',type:'place / historical political and urban center',period:'Era III role: 1220 campaign',eraId:'rise-empire',status:'verified',summary:'Samarkand was a major Khwarazmian political and urban center captured during the 1220 campaign phase.',caution:'Unsupported defender numbers, army sizes and casualty totals are omitted. The city is presented here only in its Era III campaign context.',relatedEntityIds:['place-otrar','place-bukhara','polity-khwarazmian-empire','polity-yeke-mongol-ulus','person-temujin-chinggis-khan','event-bukhara-samarkand-1220'],campaignIds:['campaign-khwarazm'],claimIds:['claim-medieval-casualty-numbers'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958'],mapAvailable:false,experience3dAvailable:false },
  { id:'place-urgench',title:'Urgench',type:'place / historical urban center',period:'Era III role: 1221 campaign',eraId:'rise-empire',status:'verified',summary:'Urgench was a major Khwarazmian center associated with a difficult and destructive campaign in 1221. Sources preserve command tensions involving Jochi and Chagatai, with Ögedei becoming important in the command situation.',caution:'Private conversations and inevitable later dynastic consequences are not reconstructed. Extremely large medieval casualty reports are not exact demographic statistics.',relatedEntityIds:['polity-khwarazmian-empire','polity-yeke-mongol-ulus','person-jochi','person-chagatai','person-ogedei-khan','event-urgench-1221'],campaignIds:['campaign-khwarazm'],claimIds:['claim-medieval-casualty-numbers'],evidenceSections:[{id:'urgench-command',title:'Command & Dynastic Politics',paragraphs:['Medieval and modern historical treatments preserve tensions involving Jochi and Chagatai during the campaign. Ögedei became important within the command response. The episode is not treated as the inevitable origin of later dynastic divisions.'],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror']}],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958'],mapAvailable:false,experience3dAvailable:false },
]
