/**
 * Future historical person/entity records.
 * Demonstrates the structure for people and figures without inventing historical facts.
 */

export const peopleStatusOptions = ['draft', 'researched', 'verified']

export const people = [
  {
    id: 'person-modu-chanyu',
    slug: 'modu-chanyu',
    title: 'Modu Chanyu',
    subtitle: 'Founder of Xiongnu Imperial Power',
    alternativeNames: ['Maodun', 'Modun'],
    role: 'Chanyu of the Xiongnu',
    period: 'approximately 209–174 BCE',
    periodDisplay: 'c. 209–174 BCE',
    deathYear: -174,
    reignStart: -209,
    reignEnd: -174,
    polityIds: ['polity-xiongnu'],
    eventIds: [
      'event-modu-becomes-chanyu',
      'event-confrontation-baideng',
      'event-early-han-xiongnu-heqin',
      'event-death-modu-chanyu',
    ],
    storyId: 'modu-chanyu',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Modu Chanyu was the Xiongnu ruler under whom Xiongnu political power expanded dramatically around the end of the third century BCE. His reign marked a major phase in the formation of a powerful steppe empire centred on the Mongolian Plateau.',
    relatedEntityIds: [
      'polity-xiongnu',
      'event-modu-becomes-chanyu',
      'event-confrontation-baideng',
      'event-death-modu-chanyu',
    ],
    sourceRefs: ['source-oxford-xiongnu', 'source-loc-modun'],
  },
  {
    id: 'demo-person-001',
    title: 'DEMO — Historical Figure',
    eraId: 'before-chinggis',
    status: 'draft',
    relatedEntityIds: ['demo-event-001'],
    sourceRefs: [],
  },
  {
    id: 'person-kul-tegin',
    title: 'Kül Tegin',
    profileType: 'biography',
    role: 'Türk prince and major military/political figure',
    period: 'died 731 CE; memorial established 732 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Kül Tegin was a prominent figure in the ruling elite of the restored Türk political order commonly called the Second Türk Khaganate. His memorial complex and inscription are central evidence for his historical significance.',
    relatedEntityIds: [
      'polity-turk-political-world',
      'object-kul-tegin-inscription',
      'event-death-kul-tegin-731',
      'event-kul-tegin-memorial-732',
    ],
    sourceRefs: [
      'source-cambridge-turk-empire',
      'source-cambridge-bulletin-soas-orkhon-inscriptions',
      'source-jras-old-turkic-authorship',
      'source-unesco-orkhon-valley',
    ],
    biographySections: [
      {
        id: 'kul-world', number: '02', title: 'The World He Entered',
        paragraphs: ['Kül Tegin belonged to the ruling elite of the restored Türk political order. That political world followed earlier fragmentation and restoration rather than continuing unchanged from the first Türk imperial order.'],
      },
      {
        id: 'kul-role', number: '03', title: 'Political Role',
        paragraphs: ['Existing project records identify Kül Tegin as a prominent prince and military figure. They do not provide enough evidence for a detailed chronological account of every action in his career.'],
      },
      {
        id: 'kul-significance', number: '04', title: 'Major Actions and Historical Significance',
        paragraphs: ['Kül Tegin died in 731 CE, and his memorial complex was established in 732. The inscriptions of the memorial complex are among the most important surviving written monuments of the early Türk world.'],
      },
      {
        id: 'kul-inscription', number: '05', title: 'What the Inscription Tells Us',
        paragraphs: ['The monument preserves how a Türk ruling tradition represented its past, commemorated Kül Tegin and communicated political concepts and historical memory. It is a political and commemorative source rather than a neutral modern biography.'],
        callout: { label: 'Inscription as Source', text: 'The monument records a commemorative presentation created within a political context.', confidence: 'SOURCE ACCOUNT / INTERPRETED' },
      },
      {
        id: 'kul-limits', number: '06', title: 'What the Inscription Cannot Tell Us Alone',
        paragraphs: ['The inscription cannot by itself provide a complete objective history, represent the experience of every population under Türk political power or document every aspect of ordinary religious and social life.'],
      },
      {
        id: 'kul-legacy', number: '07', title: 'Why Kül Tegin Matters',
        paragraphs: ['Kül Tegin’s historical importance rests both in his place within restored Türk political power and in the exceptional inscriptional evidence created to commemorate him.'],
      },
    ],
  },
  {
    id: 'person-bilge-khagan',
    title: 'Bilge Khagan',
    profileType: 'biography',
    role: 'Ruler of the restored Türk political order',
    period: 'ruler from 716 CE; died 734 CE; memorial established 735 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Bilge Khagan became ruler of the restored Türk political order in 716 CE and is one of the central figures represented in the Orkhon inscriptional world.',
    relatedEntityIds: [
      'polity-turk-political-world',
      'object-bilge-khagan-inscription',
      'event-bilge-khagan-accession-716',
      'event-death-bilge-khagan-734',
      'event-bilge-khagan-memorial-735',
    ],
    sourceRefs: [
      'source-cambridge-turk-empire',
      'source-cambridge-bulletin-soas-orkhon-inscriptions',
      'source-jras-old-turkic-authorship',
      'source-unesco-orkhon-valley',
    ],
    biographySections: [
      {
        id: 'bilge-world', number: '02', title: 'The World He Entered',
        paragraphs: ['Bilge Khagan ruled within the restored political order commonly called the Second Türk Khaganate. Its history followed the fragmentation and later restoration of Türk imperial power.'],
      },
      {
        id: 'bilge-role', number: '03', title: 'Political Role',
        paragraphs: ['The project chronology records Bilge Khagan becoming ruler in 716 CE. His political context connects the Türk restoration, the Orkhon Valley and the inscriptional representation of the ruling tradition.'],
      },
      {
        id: 'bilge-chronology', number: '04', title: 'Major Actions and Historical Significance',
        paragraphs: ['Bilge Khagan died in 734 CE, and his memorial was established in 735. The available project data does not support adding details about his cause of death.'],
      },
      {
        id: 'bilge-source', number: '05', title: 'What the Sources Tell Us',
        paragraphs: ['The inscription associated with Bilge Khagan preserves political and commemorative texts connected with the Türk ruling tradition. Modern scholarship identifies textual layers and authorship questions in the Kül Tegin and Bilge Khagan inscriptions.'],
        callout: { label: 'Authorship Caution', text: 'The evidence does not support saying that Bilge Khagan personally wrote the entire inscription.', confidence: 'SOURCE ACCOUNT / INTERPRETED' },
      },
      {
        id: 'bilge-limits', number: '06', title: 'Limits of the Evidence',
        paragraphs: ['The memorial inscription is not equivalent to a modern biography. Its commemorative and political purposes shape the account it preserves.'],
      },
      {
        id: 'bilge-legacy', number: '07', title: 'Why Bilge Khagan Matters',
        paragraphs: ['Bilge Khagan is central to understanding restored Türk rulership and the ways political authority and memory were represented in the Orkhon inscriptional world.'],
      },
    ],
  },
  {
    id: 'person-yujiulu-shelun',
    slug: 'shelun',
    title: 'Shelun',
    profileType: 'biography',
    alternativeNames: ['Yujiulü Shelun'],
    role: 'Founder / Khagan of the Rouran',
    period: '402–410 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Shelun was a central figure in the consolidation of Rouran political power in the early fifth century. The project uses 402 CE as the conventional beginning of the Rouran Khaganate.',
    relatedEntityIds: [
      'polity-rouran-khaganate',
      'event-rouran-khaganate-established-402',
    ],
    sourceRefs: ['source-kradin-rouran-society', 'source-kradin-rouran-empire'],
    biographySections: [
      {
        id: 'shelun-world', number: '02', title: 'The World He Entered',
        paragraphs: ['Shelun emerged within a politically complex eastern steppe shaped by changing coalitions after earlier Xianbei political formations. The Rouran were not simply the next dynasty in a fixed succession.'],
      },
      {
        id: 'shelun-rise', number: '03', title: 'Rise and Political Role',
        paragraphs: ['In the project chronology, 402 CE anchors Shelun’s consolidation of a major Rouran political order. He used the title Khagan, but he did not invent it; the title is attested in earlier Inner Asian and Xianbei contexts.'],
      },
      {
        id: 'shelun-significance', number: '04', title: 'Historical Significance',
        paragraphs: ['Shelun’s importance lies in the development of a major steppe political order that became a dominant power in Mongolia and neighbouring Inner Asian regions. This influence should not be represented as a fixed modern border.'],
      },
      {
        id: 'shelun-sources', number: '05', title: 'What the Sources Tell Us',
        paragraphs: ['Reconstruction of Shelun’s political career depends heavily on textual traditions preserved outside the Rouran themselves. Those records support political history more securely than a detailed personal biography.'],
        callout: { label: 'Textual Evidence', text: 'Accounts preserved outside the Rouran require source-critical reading.', confidence: 'SOURCE ACCOUNT / INTERPRETED' },
      },
      {
        id: 'shelun-limits', number: '06', title: 'Limits of the Evidence',
        paragraphs: ['Securely attributable Rouran archaeological evidence remains limited. Material dating to the Rouran period cannot automatically be assigned a Rouran political or ethnic identity, and archaeology does not provide a detailed biography of Shelun.'],
      },
      {
        id: 'shelun-legacy', number: '07', title: 'Why Shelun Matters',
        paragraphs: ['Shelun provides an important point of entry into the formation of Rouran imperial power and the development of steppe political organization in the early fifth century.'],
      },
    ],
  },
  {
    id: 'person-bumin-qaghan',
    title: 'Bumin Qaghan',
    profileType: 'biography',
    role: 'Founder / early ruler of the Türk Khaganate',
    period: 'mid-6th century CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    relatedEntityIds: [
      'polity-turk-political-world',
      'event-rise-of-turk-power-552',
    ],
    sourceRefs: [
      'source-early-nomads-eastern-steppe',
      'source-inner-asia-history',
      'source-inner-asia-global-early-middle-ages',
    ],
    summary:
      'Bumin Qaghan was a central leader in the political break that produced the first major Türk imperial order in the sixth century.',
    biographySections: [
      {
        id: 'bumin-world', number: '02', title: 'The World He Entered',
        paragraphs: ['Türk or Ashina political power developed within the wider Rouran-dominated political environment. Bumin’s rise should therefore be understood within that political world rather than as an event that came from nowhere.'],
      },
      {
        id: 'bumin-rise', number: '03', title: 'Rise and Political Role',
        paragraphs: ['Bumin became the central leader in the break with Rouran dominance. Existing project sources do not support an exact birth year or a detailed account of his early life.'],
      },
      {
        id: 'bumin-552', number: '04', title: '552 — A Political Turning Point',
        paragraphs: ['In 552, Bumin led the political and military break associated with the decisive rise of Türk power and a major defeat of Rouran power. Rouran political resistance continued during the following years rather than disappearing instantly.'],
      },
      {
        id: 'bumin-sources', number: '05', title: 'What the Sources Tell Us',
        paragraphs: ['A textual tradition describing the Türks as “blacksmith slaves” of the Rouran requires critical interpretation and should not be repeated as straightforward fact.'],
        callout: { label: 'Source Tradition', text: 'A memorable phrase in a textual tradition is not automatically a literal account of social status.', confidence: 'SOURCE ACCOUNT / INTERPRETED' },
      },
      {
        id: 'bumin-limits', number: '06', title: 'Limits of the Evidence',
        paragraphs: ['The available records support Bumin’s political role in 552 more securely than a full personal biography. They do not justify invented childhood, family or exact territorial details.'],
      },
      {
        id: 'bumin-legacy', number: '07', title: 'Why Bumin Matters',
        paragraphs: ['Bumin’s historical importance comes from his role in the emergence of a political order bearing the Türk name that became enormously important across Inner Asian history.'],
      },
    ],
  },
  {
    id: 'person-tanshihuai',
    title: 'Tanshihuai',
    profileType: 'biography',
    role: 'Xianbei political and military leader',
    period: '2nd century CE; died approximately 181 CE',
    eraId: 'ancient-steppe',
    status: 'verified',
    summary:
      'Tanshihuai was a major Xianbei leader of the second century CE who temporarily brought numerous Xianbei groups into a powerful confederation. The political unity associated with his leadership did not remain permanent after his death.',
    relatedEntityIds: [
      'polity-xianbei-political-world',
      'event-tanshihuai-confederation-second-century',
    ],
    sourceRefs: ['source-pearce-northern-wei', 'source-early-nomads-eastern-steppe'],
    biographySections: [
      {
        id: 'tanshihuai-world', number: '02', title: 'The World He Entered',
        paragraphs: ['Tanshihuai emerged in a second-century eastern steppe where Xiongnu political dominance had weakened and numerous Xianbei groups and coalitions had become increasingly prominent.'],
      },
      {
        id: 'tanshihuai-rise', number: '03', title: 'Rise and Political Role',
        paragraphs: ['He succeeded in bringing numerous Xianbei groups into a powerful confederational political formation. This did not create a permanently centralized state with fixed territorial borders.'],
      },
      {
        id: 'tanshihuai-significance', number: '04', title: 'Major Actions and Historical Significance',
        paragraphs: ['The political coalition associated with Tanshihuai became a major force across territories formerly dominated by Xiongnu power. Its unity did not remain permanently intact after his death around 181 CE.'],
      },
      {
        id: 'tanshihuai-sources', number: '05', title: 'What the Sources Tell Us',
        paragraphs: ['Early Chinese historical sources preserve a much richer narrative about Tanshihuai’s origins, youth and rise. Extraordinary early-life narratives belong to the ancient account and should not be presented as established biography.'],
        callout: { label: 'Ancient Account vs Historical Reconstruction', text: 'Ancient histories preserve narratives about Tanshihuai’s early life. Modern reconstruction is more secure when discussing his political leadership and the confederation associated with him.', confidence: 'SOURCE ACCOUNT / INTERPRETED' },
      },
      {
        id: 'tanshihuai-limits', number: '06', title: 'Limits of the Evidence',
        paragraphs: ['The current evidence does not support an exact birth year, a complete account of Tanshihuai’s life or a precise modern map of his political influence.'],
      },
      {
        id: 'tanshihuai-legacy', number: '07', title: 'Why Tanshihuai Matters',
        paragraphs: ['Tanshihuai’s career demonstrates both the scale that Xianbei confederational power could reach and the limits of treating the Xianbei as one continuously unified empire.'],
      },
    ],
  },
  {
    id: 'person-touman',
    title: 'Touman',
    status: 'researched',
    relatedEntityIds: ['person-modu-chanyu'],
    sourceRefs: ['source-oxford-xiongnu'],
  },
  {
    id: 'person-laoshang-chanyu',
    title: 'Laoshang Chanyu',
    status: 'researched',
    relatedEntityIds: ['person-modu-chanyu'],
    sourceRefs: ['source-oxford-xiongnu'],
  },
  { id:'person-temujin-chinggis-khan',slug:'temujin-chinggis-khan',title:'Temüjin / Chinggis Khan',profileType:'story',role:'Founder and ruler of the expanding Mongol imperial order',period:'born c. 1160s (date debated)–1227',eraId:'before-chinggis',eraIds:['before-chinggis','rise-empire'],status:'verified',summary:'Temüjin entered a complex political world, became the central leader of the reorganization recognized in 1206, and ruled an expanding Eurasian empire until his death in 1227. Expansion depended on many commanders, political actors and incorporated elites and was not inevitable.',relatedEntityIds:['polity-mongol-groupings','polity-emerging-mongol-order','polity-yeke-mongol-ulus','event-birth-temujin-debated','event-kereit-defeat-1203','event-naiman-defeat-1204','event-new-mongol-order-1206','event-chinggis-death-1227','place-burkhan-khaldun'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-dunnell-rise-chinggis-2023','source-munkh-erdene-chinggisid-dynasty-2018','source-unesco-burkhan-khaldun'],biographySections:[{id:'temujin-world',number:'02',title:'The World He Entered',paragraphs:['Temüjin did not create political organization from nothing, and his eventual dominance was not inevitable.']},{id:'temujin-source',number:'03',title:'Family and Early Source Traditions',paragraphs:['The Secret History reports detailed scenes from Temüjin’s early life. These remain medieval narrative accounts rather than independently verified transcripts.'],callout:{label:'Source Account',text:'Narrative traditions require critical treatment rather than presentation as eyewitness transcripts.',confidence:'SOURCE ACCOUNT'}},{id:'temujin-coalition',number:'04',title:'Building a Political Coalition',paragraphs:['His coalition developed through changing alliances, rivalries and political realignments.']},{id:'temujin-turning-points',number:'05',title:'1203–1204',paragraphs:['Kereit and Naiman defeats changed political power without making their communities disappear.']},{id:'temujin-1206',number:'06',title:'1206 and the Imperial Phase',paragraphs:['After recognition as Chinggis Khan, he led an expanding imperial order through political organization, delegated command and incorporation of diverse elites. He did not personally command every campaign.']},{id:'temujin-evidence',number:'07',title:'How Do We Know This?',paragraphs:['The Secret History supplies the major native narrative tradition; modern translations, Persian historiography and modern scholarship help assess its accounts and place them in a wider political context.']}] },
  { id:'person-borte',slug:'borte',title:'Börte',profileType:'biography',role:'Principal spouse of Chinggis Khan and mother within the imperial household',eraId:'before-chinggis',eraIds:['before-chinggis','rise-empire'],status:'verified',summary:'Börte was Temüjin’s wife and principal spouse and is connected in the dynastic tradition to their four principal sons: Jochi, Chagatai, Ögedei and Tolui. The capture and recovery episode remains source-dependent.',relatedEntityIds:['person-temujin-chinggis-khan','polity-merkit','polity-yeke-mongol-ulus'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-dunnell-rise-chinggis-2023'] },
  { id:'person-hoelun',slug:'hoelun',title:'Hö’elün',profileType:'biography',role:'Temüjin’s mother in the medieval narrative tradition',eraId:'before-chinggis',status:'verified',summary:'The Secret History identifies Hö’elün as Temüjin’s mother. Detailed scenes from her life remain source accounts rather than independently verified transcripts.',relatedEntityIds:['person-temujin-chinggis-khan'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-yesugei',slug:'yesugei',title:'Yesügei',profileType:'biography',role:'Temüjin’s father in the medieval narrative tradition',eraId:'before-chinggis',status:'verified',summary:'The Secret History identifies Yesügei as Temüjin’s father and places him in an inherited family and political context. Detailed episodes remain narrative-dependent.',relatedEntityIds:['person-temujin-chinggis-khan'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-jamukha',slug:'jamukha',title:'Jamukha',profileType:'biography',role:'Independent political leader',period:'late 12th–early 13th centuries CE',eraId:'before-chinggis',status:'verified',summary:'Jamukha was an independent political actor in competing steppe coalitions. Medieval narrative tradition describes an earlier close relationship with Temüjin that later became political rivalry; he should not be reduced to a villain narrative.',relatedEntityIds:['event-jamukha-gur-khan-1201'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-munkh-erdene-chinggisid-dynasty-2018'] },
  { id:'person-toghrul-ong-khan',slug:'toghrul-ong-khan',title:'Toghrul / Ong Khan',profileType:'biography',role:'Kereit ruler',period:'late 12th century–1203 CE',eraId:'before-chinggis',status:'verified',summary:'Toghrul was a major Kereit ruler with political agency beyond his changing relationship with Temüjin. Their earlier connection and cooperation ended in rupture and conflict in 1203.',relatedEntityIds:['polity-kereit','event-kereit-defeat-1203'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-munkh-erdene-chinggisid-dynasty-2018'] },
  { id:'person-tayang-khan',slug:'tayang-khan',title:'Tayang Khan',profileType:'biography',role:'Naiman ruler',period:'early 13th century CE',eraId:'before-chinggis',status:'researched',summary:'Tayang Khan was a Naiman ruler associated with the political transformation of 1204. The current project lacks sources for a fuller biography.',relatedEntityIds:['polity-naiman','event-naiman-defeat-1204'],sourceRefs:[] },
  { id:'person-senggum',slug:'senggum',title:'Senggüm',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-kereit'],sourceRefs:[] },
  { id:'person-toqtoa-beki',slug:'toqtoa-beki',title:'Toqto’a Beki',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-merkit'],sourceRefs:[] },
  { id:'person-jaqa-gambu',slug:'jaqa-gambu',title:'Jaqa Gambu',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-kereit'],sourceRefs:[] },
  { id:'person-kuchlug',slug:'kuchlug',title:'Kuchlug',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-naiman'],sourceRefs:[] },
  { id:'person-ogedei-khan',slug:'ogedei-khan',title:'Ögedei Khan',profileType:'story',role:'Great Khan',period:'reigned 1229–1241',eraId:'rise-empire',status:'verified',summary:'Ögedei governed an expanding empire through developing administrative, fiscal and communications practices while imperial armies operated on several fronts. His reign was more than a passive continuation of Chinggis Khan’s rule.',relatedEntityIds:['polity-yeke-mongol-ulus','event-ogedei-accession-1229','event-yam-regularization-1234','event-imperial-assembly-1235','event-ogedei-death-1241'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'] },
  { id:'person-mongke-khan',slug:'mongke-khan',title:'Möngke Khan',profileType:'story',role:'Great Khan',period:'reigned 1251–1259',eraId:'rise-empire',status:'verified',summary:'Möngke’s accession marked Toluid ascendancy. His government renewed imperial coordination and expansion before his death during the Song campaign opened the succession crisis of 1260.',relatedEntityIds:['polity-yeke-mongol-ulus','event-mongke-accession-1251','event-hulegu-expedition-1253-1256','event-mongke-death-1259'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'] },
  { id:'person-jochi',slug:'jochi',title:'Jochi',profileType:'biography',role:'Eldest of Börte’s four principal sons in the dynastic tradition',eraId:'rise-empire',status:'verified',summary:'Jochi commanded in western campaigns and became the forebear of an important Chinggisid branch. Medieval narratives preserve a dispute over his parentage; the project does not assert a different biological father.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte','person-batu','polity-yeke-mongol-ulus'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-dunnell-rise-chinggis-2023'] },
  { id:'person-chagatai',slug:'chagatai',title:'Chagatai',profileType:'biography',role:'Son of Chinggis Khan and Börte; imperial prince',eraId:'rise-empire',status:'verified',summary:'Chagatai participated in imperial succession and western campaigning, including the campaign for Urgench. Later independent political boundaries are not projected backward onto his Era III role.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte','event-urgench-1221'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-secret-history-mongols'] },
  { id:'person-tolui',slug:'tolui',title:'Tolui',profileType:'biography',role:'Son of Chinggis Khan and Börte; imperial regent',period:'regent 1227–1229',eraId:'rise-empire',status:'verified',summary:'Tolui served as regent between Chinggis Khan’s death and Ögedei’s accession and formed a major dynastic household with Sorghaghtani Beki.',relatedEntityIds:['event-tolui-regency-1227-1229','person-sorghaghtani-beki'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-secret-history-mongols'] },
  { id:'person-toregene-khatun',slug:'toregene-khatun',title:'Töregene Khatun',profileType:'biography',role:'Imperial regent',period:'regent 1242–1246',eraId:'rise-empire',status:'verified',summary:'Töregene governed as regent after Ögedei’s death and was an active participant in the succession that led to Güyük’s accession.',relatedEntityIds:['event-toregene-regency-1242-1246','person-ogedei-khan','person-guyuk-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-guyuk-khan',slug:'guyuk-khan',title:'Güyük Khan',profileType:'biography',role:'Great Khan',period:'reigned 1246–1248',eraId:'rise-empire',status:'verified',summary:'Güyük became Great Khan after Töregene’s regency. His brief reign unfolded amid dynastic competition and political tension with Batu.',relatedEntityIds:['event-guyuk-accession-1246','event-guyuk-death-1248','person-batu'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-sorghaghtani-beki',slug:'sorghaghtani-beki',title:'Sorghaghtani Beki',profileType:'biography',role:'Leader within the Toluid dynastic household',eraId:'rise-empire',status:'verified',summary:'Sorghaghtani Beki was a major imperial political actor and the mother of Möngke, Qubilai, Hülegü and Ariq Böke. Her influence is presented through dynastic politics, not as secret control of the empire.',relatedEntityIds:['person-tolui','person-mongke-khan','person-qubilai','person-hulegu','person-ariq-boke'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-oghul-qaimish',slug:'oghul-qaimish',title:'Oghul-Qaimish',profileType:'biography',role:'Imperial regent',period:'regent 1248–1251',eraId:'rise-empire',status:'verified',summary:'Oghul-Qaimish served as regent after Güyük’s death during continuing dynastic competition before Möngke’s accession.',relatedEntityIds:['event-oghul-qaimish-regency-1248-1251','person-guyuk-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-batu',slug:'batu',title:'Batu',profileType:'biography',role:'Jochid prince and western campaign commander',eraId:'rise-empire',status:'verified',summary:"Batu, a son of Jochi, held a leading role in imperial campaigns through the Volga, Rus’ regions, Poland and Hungary and later participated in imperial succession politics.",relatedEntityIds:['person-jochi','person-subutai','event-western-conquests-1236-1240','event-poland-hungary-1241'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-subutai',slug:'subutai',title:'Subutai',profileType:'biography',role:'Imperial military commander',eraId:'rise-empire',status:'verified',summary:'Subutai served in campaigns across several theaters, including the Jebe–Subutai expedition and the later western campaign. These were delegated imperial operations, not the work of one commander alone.',relatedEntityIds:['person-batu','person-jebe','event-jebe-subutai-western-expedition','event-western-conquests-1236-1240'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-jebe',slug:'jebe',title:'Jebe',profileType:'biography',role:'Imperial military commander',eraId:'rise-empire',status:'verified',summary:'Jebe commanded campaigns under Chinggis Khan, including the operation against Kuchlug, and later joined Subutai in the western expedition.',relatedEntityIds:['event-kuchlug-fall-c1218','event-jebe-subutai-western-expedition','person-subutai'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-muqali',slug:'muqali',title:'Muqali',profileType:'biography',role:'Delegated commander in the Jin theater',eraId:'rise-empire',status:'verified',summary:'Muqali exercised delegated command in the continuing Jin war, demonstrating that Chinggis Khan did not personally direct every imperial campaign.',relatedEntityIds:['event-mongol-jin-war-1211','polity-jurchen-jin'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-qubilai',slug:'qubilai',title:'Qubilai',profileType:'biography',role:'Toluid prince and southern campaign commander',eraId:'rise-empire',status:'verified',summary:'Qubilai received southern campaign responsibilities under Möngke and became one of two rival claimants to supreme authority in 1260. Later Yuan history is deferred.',relatedEntityIds:['person-mongke-khan','person-ariq-boke','event-rival-claimants-1260'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-hulegu',slug:'hulegu',title:'Hülegü',profileType:'biography',role:'Toluid prince and western expedition commander',eraId:'rise-empire',status:'verified',summary:'Hülegü led a western expedition commissioned under Möngke, overcoming major Nizari strongholds and capturing Baghdad. The later Ilkhanate is not projected backward as fully formed in 1253.',relatedEntityIds:['event-hulegu-expedition-1253-1256','event-alamut-1256','event-baghdad-captured-1258'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'] },
  { id:'person-ariq-boke',slug:'ariq-boke',title:'Ariq Böke',profileType:'biography',role:'Toluid prince and rival claimant',eraId:'rise-empire',status:'verified',summary:'Ariq Böke emerged alongside his brother Qubilai as a rival claimant in 1260, beginning a civil war over supreme imperial authority.',relatedEntityIds:['person-qubilai','event-rival-claimants-1260','event-toluid-civil-war-begins-1260'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-yelu-chucai',slug:'yelu-chucai',title:'Yelü Chucai',profileType:'biography',role:'Imperial administrator and adviser',eraId:'rise-empire',status:'verified',summary:'Yelü Chucai participated in the developing administration of the expanding empire. This foundation record remains intentionally concise pending a dedicated source pass.',relatedEntityIds:['polity-yeke-mongol-ulus','person-ogedei-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
]
