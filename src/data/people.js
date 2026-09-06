/**
 * Future historical person/entity records.
 * Demonstrates the structure for people and figures without inventing historical facts.
 */

export const peopleStatusOptions = ['draft', 'researched', 'verified']

const noReliablePortrait = {
  status: 'NO_RELIABLE_PORTRAIT',
  mediaId: null,
  note: 'No reliable portrait is currently documented in this project.',
  sourceIds: [],
}

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
  { id:'person-temujin-chinggis-khan',slug:'temujin-chinggis-khan',title:'Temüjin / Chinggis Khan',profileType:'story',role:'Founder and ruler of the expanding Mongol imperial order',period:'born c. 1160s (date debated)–1227',eraId:'before-chinggis',eraIds:['before-chinggis','rise-empire'],status:'verified',dynasticBranch:null,shortBio:'Temüjin became Chinggis Khan and the central ruler of the imperial order recognized in 1206. With Börte, he stands at the head of the four principal branches represented in this first family-tree group. The expanding empire depended on many commanders, political actors and incorporated elites.',portrait:noReliablePortrait,summary:'Temüjin entered a complex political world, became the central leader of the reorganization recognized in 1206, and ruled an expanding Eurasian empire until his death in 1227. Expansion depended on many commanders, political actors and incorporated elites and was not inevitable.',relatedEntityIds:['polity-mongol-groupings','polity-emerging-mongol-order','polity-yeke-mongol-ulus','event-birth-temujin-debated','event-kereit-defeat-1203','event-naiman-defeat-1204','event-new-mongol-order-1206','event-chinggis-death-1227','place-burkhan-khaldun'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-dunnell-rise-chinggis-2023','source-munkh-erdene-chinggisid-dynasty-2018','source-unesco-burkhan-khaldun'],biographySections:[{id:'temujin-world',number:'02',title:'The World He Entered',paragraphs:['Temüjin did not create political organization from nothing, and his eventual dominance was not inevitable.']},{id:'temujin-source',number:'03',title:'Family and Early Source Traditions',paragraphs:['The Secret History reports detailed scenes from Temüjin’s early life. These remain medieval narrative accounts rather than independently verified transcripts.'],callout:{label:'Source Account',text:'Narrative traditions require critical treatment rather than presentation as eyewitness transcripts.',confidence:'SOURCE ACCOUNT'}},{id:'temujin-coalition',number:'04',title:'Building a Political Coalition',paragraphs:['His coalition developed through changing alliances, rivalries and political realignments.']},{id:'temujin-turning-points',number:'05',title:'1203–1204',paragraphs:['Kereit and Naiman defeats changed political power without making their communities disappear.']},{id:'temujin-1206',number:'06',title:'1206 and the Imperial Phase',paragraphs:['After recognition as Chinggis Khan, he led an expanding imperial order through political organization, delegated command and incorporation of diverse elites. He did not personally command every campaign.']},{id:'temujin-evidence',number:'07',title:'How Do We Know This?',paragraphs:['The Secret History supplies the major native narrative tradition; modern translations, Persian historiography and modern scholarship help assess its accounts and place them in a wider political context.']}] },
  { id:'person-borte',slug:'borte',title:'Börte',profileType:'biography',role:'Principal spouse of Chinggis Khan and mother within the imperial household',eraId:'before-chinggis',eraIds:['before-chinggis','rise-empire'],status:'verified',dynasticBranch:null,shortBio:'Börte was Temüjin’s wife and principal spouse and an important figure within the emerging imperial household. Dynastic tradition identifies Jochi, Chagatai, Ögedei and Tolui as their four principal sons. The account of her capture and recovery remains source-dependent.',portrait:noReliablePortrait,summary:'Börte was Temüjin’s wife and principal spouse and is connected in the dynastic tradition to their four principal sons: Jochi, Chagatai, Ögedei and Tolui. The capture and recovery episode remains source-dependent.',relatedEntityIds:['person-temujin-chinggis-khan','polity-merkit','polity-yeke-mongol-ulus'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-dunnell-rise-chinggis-2023'] },
  { id:'person-qulan-khatun',slug:'qulan-khatun',title:'Qulan Khatun',alternativeNames:['Khulan'],profileType:'biography',role:'Wife within Chinggis Khan’s imperial household',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Qulan appears in the medieval narrative tradition as a wife of Chinggis Khan within the expanded imperial household. The current source layer supports her household position more securely than a detailed independent biography or exact chronology.',householdContext:{role:'WIFE_KHATUN',associatedPeopleOrPolityIds:['person-temujin-chinggis-khan','polity-merkit'],summary:'Her record belongs to the wider household created through conquest and political incorporation; exact institutional responsibilities are not reconstructed.',sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006']},portrait:noReliablePortrait,summary:'Qulan Khatun is retained as a source-attested member of Chinggis Khan’s wider household.',relatedEntityIds:['person-temujin-chinggis-khan','polity-merkit'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-yisugen',slug:'yisugen',title:'Yisügen',alternativeNames:['Yesügen','Yesugen'],profileType:'biography',role:'Consort within Chinggis Khan’s imperial household',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Yisügen appears in the Secret History as a consort of Chinggis Khan in the context of the defeat and incorporation of Tatar elites. Her presence helps show that the imperial household extended beyond Börte’s principal line, while her precise household rank is left cautious.',householdContext:{role:'CONSORT',associatedPeopleOrPolityIds:['person-temujin-chinggis-khan','person-yisui','polity-tatar'],summary:'The narrative places her household relationship within a conquest and incorporation context rather than an equivalent principal-wife status.',sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006']},portrait:noReliablePortrait,summary:'Yisügen is represented as a source-attested consort whose exact household status should not be flattened into a modern category.',relatedEntityIds:['person-temujin-chinggis-khan','person-yisui','polity-tatar'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-yisui',slug:'yisui',title:'Yisüi',alternativeNames:['Yesüi','Yesui'],profileType:'biography',role:'Khatun within Chinggis Khan’s imperial household',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Yisüi appears in the Secret History as a wife of Chinggis Khan and as Yisügen’s sister within the Tatar conquest narrative. The source gives her a visible speaking role, but that literary portrayal is not converted into an objective personality judgment.',householdContext:{role:'WIFE_KHATUN',associatedPeopleOrPolityIds:['person-temujin-chinggis-khan','person-yisugen','polity-tatar'],summary:'Her household position is source-attested; exact rank and institutional responsibilities remain incompletely reconstructed.',sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006']},characterAndReputation:{overview:'The Secret History preserves actions and advice attributed to Yisüi; these are evidence for her narrative representation rather than direct access to personality.',traits:[{label:'Advice in the narrative tradition',treatment:'SOURCE_ACCOUNT',summary:'The Secret History gives Yisüi an advisory speaking role within its account of Chinggis Khan’s household.',sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006']}],caution:'A literary speaking role is source evidence, not an objective psychological profile.'},portrait:noReliablePortrait,summary:'Yisüi is a source-attested wife whose narrative visibility is presented with explicit source caution.',relatedEntityIds:['person-temujin-chinggis-khan','person-yisugen','polity-tatar'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-ibaqa-beki',slug:'ibaqa-beki',title:'Ibaqa Beki',alternativeNames:['Ibaqa'],profileType:'biography',role:'Kereit elite woman in a former-wife and remarriage context',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Ibaqa Beki appears in the Secret History within Chinggis Khan’s household and a later remarriage narrative. Her record preserves that changing relationship status and her Kereit political background without treating the episode as a simple modern marital category.',householdContext:{role:'FORMER_WIFE / REMARRIAGE_CONTEXT',associatedPeopleOrPolityIds:['person-temujin-chinggis-khan','polity-kereit'],summary:'The medieval narrative connects household membership, Kereit elite background and remarriage; exact institutional implications remain uncertain.',sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006']},portrait:noReliablePortrait,summary:'Ibaqa Beki’s source record belongs to both household history and the incorporation of Kereit elites.',relatedEntityIds:['person-temujin-chinggis-khan','polity-kereit'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-qojin-beki',slug:'qojin-beki',title:'Qojin Beki',alternativeNames:['Khojin Beki'],profileType:'biography',role:'Daughter of Chinggis Khan and Börte in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Qojin Beki is represented in the dynastic tradition as a daughter of Chinggis Khan and Börte. She belongs to the first generation through which daughters connected the imperial household to wider marriage networks, but this record does not assign a spouse without more specific source integration.',portrait:noReliablePortrait,summary:'A source-account foundation record for a daughter of Chinggis Khan and Börte.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-rashid-al-din-compendium','source-broadbridge-women-mongol-empire-2018'] },
  { id:'person-checheyigen',slug:'checheyigen',title:'Checheyigen',alternativeNames:['Checheyeken'],profileType:'biography',role:'Daughter of Chinggis Khan and Börte in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Checheyigen is represented in the dynastic tradition as a daughter of Chinggis Khan and Börte. Later accounts connect her to marriage-alliance politics, but the current record leaves the spouse and detailed alliance structure pending a dedicated source pass.',portrait:noReliablePortrait,summary:'A source-account foundation record for a daughter whose alliance history requires fuller documentation.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-rashid-al-din-compendium','source-broadbridge-women-mongol-empire-2018'] },
  { id:'person-alaqa-beki',slug:'alaqa-beki',title:'Alaqa Beki',alternativeNames:['Alaqai Beki'],profileType:'biography',role:'Daughter of Chinggis Khan and Börte in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Alaqa Beki is represented in the dynastic tradition as a daughter of Chinggis Khan and Börte. Historical traditions associate her with marriage diplomacy and political responsibility, but specific spouses and responsibilities are deferred until the repository has a dedicated source record.',portrait:noReliablePortrait,summary:'A source-account foundation record preserving her place in household and alliance history without unsupported detail.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-rashid-al-din-compendium','source-broadbridge-women-mongol-empire-2018'] },
  { id:'person-tumelun',slug:'tumelun',title:'Tümelün',alternativeNames:['Tumelun'],profileType:'biography',role:'Daughter of Chinggis Khan and Börte in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Tümelün is represented in the dynastic tradition as a daughter of Chinggis Khan and Börte. Her inclusion makes the founding household less artificially son-centered, while her marriage and later history remain unresolved in the current source layer.',portrait:noReliablePortrait,summary:'A conservative foundation record pending more specific evidence for her marriage and political context.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-rashid-al-din-compendium','source-broadbridge-women-mongol-empire-2018'] },
  { id:'person-al-altun',slug:'al-altun',title:'Al-Altun',alternativeNames:['Altalun'],profileType:'biography',role:'Daughter attributed to Chinggis Khan and Börte in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Al-Altun is attributed in the dynastic tradition to the children of Chinggis Khan and Börte. Her name, marriage history and identification vary across transmission, so this record preserves those uncertainties and does not assign a spouse or exact dates.',portrait:noReliablePortrait,summary:'A source-dependent daughter record with unresolved naming and marriage details.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-rashid-al-din-compendium','source-broadbridge-women-mongol-empire-2018'] },
  { id:'person-hoelun',slug:'hoelun',title:'Hö’elün',profileType:'biography',role:'Temüjin’s mother in the medieval narrative tradition',eraId:'before-chinggis',status:'verified',summary:'The Secret History identifies Hö’elün as Temüjin’s mother. Detailed scenes from her life remain source accounts rather than independently verified transcripts.',relatedEntityIds:['person-temujin-chinggis-khan'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-yesugei',slug:'yesugei',title:'Yesügei',profileType:'biography',role:'Temüjin’s father in the medieval narrative tradition',eraId:'before-chinggis',status:'verified',summary:'The Secret History identifies Yesügei as Temüjin’s father and places him in an inherited family and political context. Detailed episodes remain narrative-dependent.',relatedEntityIds:['person-temujin-chinggis-khan'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006'] },
  { id:'person-jamukha',slug:'jamukha',title:'Jamukha',profileType:'biography',role:'Independent political leader',period:'late 12th–early 13th centuries CE',eraId:'before-chinggis',status:'verified',summary:'Jamukha was an independent political actor in competing steppe coalitions. Medieval narrative tradition describes an earlier close relationship with Temüjin that later became political rivalry; he should not be reduced to a villain narrative.',relatedEntityIds:['event-jamukha-gur-khan-1201'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-munkh-erdene-chinggisid-dynasty-2018'] },
  { id:'person-toghrul-ong-khan',slug:'toghrul-ong-khan',title:'Toghrul / Ong Khan',profileType:'biography',role:'Kereit ruler',period:'late 12th century–1203 CE',eraId:'before-chinggis',status:'verified',summary:'Toghrul was a major Kereit ruler with political agency beyond his changing relationship with Temüjin. Their earlier connection and cooperation ended in rupture and conflict in 1203.',relatedEntityIds:['polity-kereit','event-kereit-defeat-1203'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-munkh-erdene-chinggisid-dynasty-2018'] },
  { id:'person-tayang-khan',slug:'tayang-khan',title:'Tayang Khan',profileType:'biography',role:'Naiman ruler',period:'early 13th century CE',eraId:'before-chinggis',status:'researched',summary:'Tayang Khan was a Naiman ruler associated with the political transformation of 1204. The current project lacks sources for a fuller biography.',relatedEntityIds:['polity-naiman','event-naiman-defeat-1204'],sourceRefs:[] },
  { id:'person-senggum',slug:'senggum',title:'Senggüm',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-kereit'],sourceRefs:[] },
  { id:'person-toqtoa-beki',slug:'toqtoa-beki',title:'Toqto’a Beki',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-merkit'],sourceRefs:[] },
  { id:'person-jaqa-gambu',slug:'jaqa-gambu',title:'Jaqa Gambu',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-kereit'],sourceRefs:[] },
  { id:'person-kuchlug',slug:'kuchlug',title:'Kuchlug',profileType:'reference',eraId:'before-chinggis',status:'researched',relatedEntityIds:['polity-naiman'],sourceRefs:[] },
  { id:'person-ogedei-khan',slug:'ogedei-khan',title:'Ögedei Khan',profileType:'story',role:'Great Khan',period:'reigned 1229–1241',eraId:'rise-empire',status:'verified',dynasticBranch:'OGEDEID',shortBio:'Ögedei was a son of Chinggis Khan and Börte and was recognized as Great Khan in 1229. His government developed administrative, fiscal and communications practices while imperial armies operated across several fronts.',portrait:noReliablePortrait,summary:'Ögedei governed an expanding empire through developing administrative, fiscal and communications practices while imperial armies operated on several fronts. His reign was more than a passive continuation of Chinggis Khan’s rule.',relatedEntityIds:['polity-yeke-mongol-ulus','event-ogedei-accession-1229','event-yam-regularization-1234','event-imperial-assembly-1235','event-ogedei-death-1241'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'] },
  { id:'person-mongke-khan',slug:'mongke-khan',title:'Möngke Khan',profileType:'story',role:'Great Khan',period:'reigned 1251–1259',eraId:'rise-empire',status:'verified',dynasticBranch:'TOLUID',shortBio:'Möngke was a son of Tolui and Sorghaghtani Beki and became Great Khan in 1251. His accession marked Toluid ascendancy, and his government renewed imperial coordination and expansion. His death during the Song campaign opened the succession crisis of 1260.',portrait:noReliablePortrait,summary:'Möngke’s accession marked Toluid ascendancy. His government renewed imperial coordination and expansion before his death during the Song campaign opened the succession crisis of 1260.',relatedEntityIds:['polity-yeke-mongol-ulus','event-mongke-accession-1251','event-hulegu-expedition-1253-1256','event-mongke-death-1259'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'] },
  { id:'person-jochi',slug:'jochi',title:'Jochi',profileType:'biography',role:'Eldest of Börte’s four principal sons in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:'JOCHID',shortBio:'Jochi was the eldest of Börte’s four principal sons in Chinggisid dynastic tradition and the father of Batu. He commanded in western campaigns and became the forebear of an important dynastic branch. Medieval narratives preserve a dispute over his parentage, but the project does not assert a different biological father.',portrait:noReliablePortrait,summary:'Jochi commanded in western campaigns and became the forebear of an important Chinggisid branch. Medieval narratives preserve a dispute over his parentage; the project does not assert a different biological father.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte','person-batu','polity-yeke-mongol-ulus'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-dunnell-rise-chinggis-2023'] },
  { id:'person-chagatai',slug:'chagatai',title:'Chagatai',profileType:'biography',role:'Son of Chinggis Khan and Börte; imperial prince',eraId:'rise-empire',status:'verified',dynasticBranch:'CHAGATAID',shortBio:'Chagatai was a son of Chinggis Khan and Börte and the namesake of a major Chinggisid branch. He participated in imperial succession politics and western campaigning, including the campaign for Urgench. Later independent political boundaries are not projected backward onto his Era III role.',portrait:noReliablePortrait,summary:'Chagatai participated in imperial succession and western campaigning, including the campaign for Urgench. Later independent political boundaries are not projected backward onto his Era III role.',relatedEntityIds:['person-temujin-chinggis-khan','person-borte','event-urgench-1221'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-secret-history-mongols'] },
  { id:'person-tolui',slug:'tolui',title:'Tolui',profileType:'biography',role:'Son of Chinggis Khan and Börte; imperial regent',period:'regent 1227–1229',eraId:'rise-empire',status:'verified',dynasticBranch:'TOLUID',shortBio:'Tolui was a son of Chinggis Khan and Börte and the husband of Sorghaghtani Beki. He served as regent from 1227 to 1229. Their household became central to later imperial politics through their sons Möngke, Qubilai, Hülegü and Ariq Böke.',portrait:noReliablePortrait,summary:'Tolui served as regent between Chinggis Khan’s death and Ögedei’s accession and formed a major dynastic household with Sorghaghtani Beki.',relatedEntityIds:['event-tolui-regency-1227-1229','person-sorghaghtani-beki'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-secret-history-mongols'] },
  { id:'person-toregene-khatun',slug:'toregene-khatun',title:'Töregene Khatun',profileType:'biography',role:'Imperial regent',period:'regent 1242–1246',eraId:'rise-empire',status:'verified',dynasticBranch:'OGEDEID',shortBio:'Töregene Khatun was Ögedei’s wife and Güyük’s mother within the Ögedeid household. She governed as imperial regent after Ögedei’s death and actively shaped the succession that led to Güyük’s accession.',portrait:noReliablePortrait,summary:'Töregene governed as regent after Ögedei’s death and was an active participant in the succession that led to Güyük’s accession.',relatedEntityIds:['event-toregene-regency-1242-1246','person-ogedei-khan','person-guyuk-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-guyuk-khan',slug:'guyuk-khan',title:'Güyük Khan',profileType:'biography',role:'Great Khan',period:'reigned 1246–1248',eraId:'rise-empire',status:'verified',dynasticBranch:'OGEDEID',shortBio:'Güyük was a son of Ögedei and Töregene Khatun and became Great Khan in 1246. His brief reign unfolded amid dynastic competition and political tension with Batu.',portrait:noReliablePortrait,summary:'Güyük became Great Khan after Töregene’s regency. His brief reign unfolded amid dynastic competition and political tension with Batu.',relatedEntityIds:['event-guyuk-accession-1246','event-guyuk-death-1248','person-batu'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-sorghaghtani-beki',slug:'sorghaghtani-beki',title:'Sorghaghtani Beki',profileType:'biography',role:'Leader within the Toluid dynastic household',eraId:'rise-empire',status:'verified',dynasticBranch:'TOLUID',shortBio:'Sorghaghtani Beki was Tolui’s wife and widow and became an important political actor within the Toluid household. After Tolui’s death, she managed the interests of her household and her sons. Medieval writers gave her unusually strong credit for political judgment and for the upbringing and advancement of Möngke, Qubilai, Hülegü and Ariq Böke.',portrait:noReliablePortrait,characterAndReputation:{overview:'Medieval Persian historiography presents Sorghaghtani with unusually strong praise, while modern historical interpretation places that reputation within Toluid household and succession politics.',traits:[{label:'Political judgment',treatment:'SOURCE_ACCOUNT',summary:'Juvaini’s favorable account presents Sorghaghtani as a figure of exceptional political judgment within the imperial family.',sourceIds:['source-juvaini-world-conqueror','source-boyle-world-conqueror-1958']},{label:'Household leadership',treatment:'INTERPRETED',summary:'Her management of the Toluid household after Tolui’s death is interpreted as an important form of political agency, not merely a private family role.',sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror']},{label:'Education and advancement of her sons',treatment:'SOURCE_ACCOUNT',summary:'Juvaini and the later Ilkhanid compilation of Rashid al-Din associate her reputation with the upbringing and advancement of her sons.',sourceIds:['source-juvaini-world-conqueror','source-rashid-al-din-compendium']},{label:'Dynastic strategy',treatment:'INTERPRETED',summary:'Modern historical synthesis places her household leadership within the political developments that culminated in Toluid ascendancy under Möngke.',sourceIds:['source-dunnell-rise-chinggis-2023']}],caution:'Medieval accounts are unusually favorable toward Sorghaghtani. Their praise is important evidence for her historical reputation, but court historiography should not be treated as an objective measurement of personality.'},summary:'Sorghaghtani Beki was a major imperial political actor and the mother of Möngke, Qubilai, Hülegü and Ariq Böke. Her influence is presented through dynastic politics, not as secret control of the empire.',relatedEntityIds:['person-tolui','person-mongke-khan','person-qubilai','person-hulegu','person-ariq-boke'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958','source-rashid-al-din-compendium'] },
  { id:'person-oghul-qaimish',slug:'oghul-qaimish',title:'Oghul-Qaimish',profileType:'biography',role:'Imperial regent',period:'regent 1248–1251',eraId:'rise-empire',status:'verified',summary:'Oghul-Qaimish served as regent after Güyük’s death during continuing dynastic competition before Möngke’s accession.',relatedEntityIds:['event-oghul-qaimish-regency-1248-1251','person-guyuk-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-batu',slug:'batu',title:'Batu',profileType:'biography',role:'Jochid prince and western campaign commander',eraId:'rise-empire',status:'verified',dynasticBranch:'JOCHID',shortBio:"Batu was a son of Jochi and a leading prince of the Jochid branch. He held a major role in imperial campaigns through the Volga, Rus’ regions, Poland and Hungary and later participated in imperial succession politics.",portrait:noReliablePortrait,summary:"Batu, a son of Jochi, held a leading role in imperial campaigns through the Volga, Rus’ regions, Poland and Hungary and later participated in imperial succession politics.",relatedEntityIds:['person-jochi','person-subutai','event-western-conquests-1236-1240','event-poland-hungary-1241'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-orda',slug:'orda',title:'Orda',alternativeNames:['Orda Ichen'],profileType:'biography',role:'Jochid prince associated with the eastern division of the Jochid ulus',eraId:'rise-empire',eraIds:['rise-empire','mongol-world'],status:'verified',dynasticBranch:'JOCHID',shortBio:'Orda was a son of Jochi and an early prince of the Jochid branch. Historical tradition associates his line with the eastern division of the Jochid ulus. He matters as a founder of one of the major lines through which Jochid political authority continued.',portrait:noReliablePortrait,summary:'Orda was a son of Jochi whose descendants formed an important eastern line of the Jochid political world.',relatedEntityIds:['person-jochi'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-rashid-al-din-compendium'] },
  { id:'person-berke',slug:'berke',title:'Berke',profileType:'biography',role:'Jochid ruler in the western ulus',eraId:'rise-empire',eraIds:['rise-empire','mongol-world'],status:'verified',dynasticBranch:'JOCHID',shortBio:'Berke was a son of Jochi and a major ruler of the Jochid branch after Batu. His rule belonged to the transition from the united-imperial period into a more divided Mongol political world. He is important for the growing political independence and wider diplomatic connections of the Jochid ulus.',portrait:noReliablePortrait,summary:'Berke was a son of Jochi and an important later ruler of the western Jochid ulus.',relatedEntityIds:['person-jochi','person-batu'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-rashid-al-din-compendium'] },
  { id:'person-tuqa-timur',slug:'tuqa-timur',title:'Tuqa-Timur',alternativeNames:['Toq Temür','Togha Temür'],profileType:'biography',role:'Jochid prince and forebear of later Jochid lines',eraId:'rise-empire',eraIds:['rise-empire','mongol-world'],status:'verified',dynasticBranch:'JOCHID',shortBio:'Tuqa-Timur was a son of Jochi and a prince of the Jochid branch. The surviving record gives him less prominence in Era III than Batu or Berke, but his descendants became important in later Jochid history. No exact life dates or maternal attribution are asserted here.',portrait:noReliablePortrait,summary:'Tuqa-Timur was a son of Jochi whose line became important in later Jochid history.',relatedEntityIds:['person-jochi'],sourceRefs:['source-rashid-al-din-compendium'] },
  { id:'person-mutukan',slug:'mutukan',title:'Mutukan',alternativeNames:['Mö’etüken'],profileType:'biography',role:'Chagataid prince and campaign participant',eraId:'rise-empire',status:'verified',dynasticBranch:'CHAGATAID',shortBio:'Mutukan was a son of Chagatai and a prince of the Chagataid branch. He died during the western campaigns while Chinggis Khan was still alive. His line remained politically important through his son Qara Hülegü.',portrait:noReliablePortrait,summary:'Mutukan was a son of Chagatai whose descendants remained central to early Chagataid succession.',relatedEntityIds:['person-chagatai','person-qara-hulegu'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-rashid-al-din-compendium'] },
  { id:'person-qara-hulegu',slug:'qara-hulegu',title:'Qara Hülegü',profileType:'biography',role:'Chagataid prince and early ruler of the Chagatai ulus',eraId:'rise-empire',status:'verified',dynasticBranch:'CHAGATAID',shortBio:'Qara Hülegü was a son of Mutukan and a grandson of Chagatai. His position in the early succession of the Chagatai ulus shows that authority did not simply pass from father to eldest son. He matters for the political continuity and contested succession of the early Chagataid branch.',portrait:noReliablePortrait,summary:'Qara Hülegü was Chagatai’s grandson and an important figure in the early succession of the Chagatai ulus.',relatedEntityIds:['person-mutukan','person-chagatai'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-rashid-al-din-compendium'] },
  { id:'person-qadan',slug:'qadan',title:'Qadan',alternativeNames:['Kadan'],profileType:'biography',role:'Ögedeid prince and imperial campaign commander',eraId:'rise-empire',status:'verified',dynasticBranch:'OGEDEID',shortBio:'Qadan was a son of Ögedei and a prince of the Ögedeid branch. He took part in the imperial campaigns in Europe, operating within a wider command structure rather than as a lone conqueror. His mother is not assigned in this data because the current source layer does not support that attribution securely enough.',portrait:noReliablePortrait,summary:'Qadan was an Ögedeid prince who participated in the western imperial campaigns.',relatedEntityIds:['person-ogedei-khan','event-poland-hungary-1241'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-kochu',slug:'kochu',title:'Köchü',alternativeNames:['Küchü'],profileType:'biography',role:'Ögedeid prince and father of Shiremün',eraId:'rise-empire',status:'verified',dynasticBranch:'OGEDEID',shortBio:'Köchü was a son of Ögedei and a prince of the Ögedeid branch. He died before his father, but his son Shiremün later figured in Ögedei’s succession plans. His mother is intentionally left unassigned in the relationship data.',portrait:noReliablePortrait,summary:'Köchü was a son of Ögedei whose line remained significant through Shiremün.',relatedEntityIds:['person-ogedei-khan','person-shiremun'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-rashid-al-din-compendium'] },
  { id:'person-shiremun',slug:'shiremun',title:'Shiremün',alternativeNames:['Shiremun'],profileType:'biography',role:'Ögedeid prince and succession candidate',eraId:'rise-empire',status:'verified',dynasticBranch:'OGEDEID',shortBio:'Shiremün was a son of Köchü and a grandson of Ögedei. Ögedei’s preference for him made Shiremün important in the disputed succession that followed the great khan’s death. His candidacy helps explain why Güyük’s accession was a political contest rather than an automatic inheritance.',portrait:noReliablePortrait,summary:'Shiremün was Ögedei’s grandson and a significant candidate in the contested Ögedeid succession.',relatedEntityIds:['person-kochu','person-ogedei-khan','person-guyuk-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-rashid-al-din-compendium'] },
  { id:'person-kolgen',slug:'kolgen',title:'Kölgen',alternativeNames:['Külgen'],profileType:'biography',role:'Son attributed to Chinggis Khan and Qulan Khatun in the dynastic tradition',eraId:'rise-empire',status:'verified',dynasticBranch:null,shortBio:'Kölgen is identified in the dynastic historical tradition as a son of Chinggis Khan and Qulan Khatun. He belonged to the wider imperial household but did not found one of the four principal branches represented by Börte’s sons. The parentage is presented as a source account rather than reconstructed beyond the written tradition.',portrait:noReliablePortrait,summary:'Kölgen is a source-attested son attributed to Chinggis Khan and Qulan Khatun.',relatedEntityIds:['person-temujin-chinggis-khan','person-qulan-khatun'],sourceRefs:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-rashid-al-din-compendium'] },
  { id:'person-subutai',slug:'subutai',title:'Subutai',profileType:'biography',role:'Imperial military commander',eraId:'rise-empire',status:'verified',summary:'Subutai served in campaigns across several theaters, including the Jebe–Subutai expedition and the later western campaign. These were delegated imperial operations, not the work of one commander alone.',relatedEntityIds:['person-batu','person-jebe','event-jebe-subutai-western-expedition','event-western-conquests-1236-1240'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-jebe',slug:'jebe',title:'Jebe',profileType:'biography',role:'Imperial military commander',eraId:'rise-empire',status:'verified',summary:'Jebe commanded campaigns under Chinggis Khan, including the operation against Kuchlug, and later joined Subutai in the western expedition.',relatedEntityIds:['event-kuchlug-fall-c1218','event-jebe-subutai-western-expedition','person-subutai'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-muqali',slug:'muqali',title:'Muqali',profileType:'biography',role:'Delegated commander in the Jin theater',eraId:'rise-empire',status:'verified',summary:'Muqali exercised delegated command in the continuing Jin war, demonstrating that Chinggis Khan did not personally direct every imperial campaign.',relatedEntityIds:['event-mongol-jin-war-1211','polity-jurchen-jin'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-qubilai',slug:'qubilai',title:'Qubilai',profileType:'biography',role:'Toluid prince and southern campaign commander',eraId:'rise-empire',status:'verified',dynasticBranch:'TOLUID',shortBio:'Qubilai was a son of Tolui and Sorghaghtani Beki and a prince of the Toluid branch. He received southern campaign responsibilities under Möngke and became one of two rival claimants to supreme authority in 1260. Later Yuan history is deferred.',portrait:noReliablePortrait,summary:'Qubilai received southern campaign responsibilities under Möngke and became one of two rival claimants to supreme authority in 1260. Later Yuan history is deferred.',relatedEntityIds:['person-mongke-khan','person-ariq-boke','event-rival-claimants-1260'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-hulegu',slug:'hulegu',title:'Hülegü',profileType:'biography',role:'Toluid prince and western expedition commander',eraId:'rise-empire',status:'verified',dynasticBranch:'TOLUID',shortBio:'Hülegü was a son of Tolui and Sorghaghtani Beki and a prince of the Toluid branch. Under Möngke’s authority, he led a western expedition that overcame major Nizari strongholds and captured Baghdad. The later Ilkhanate is not projected backward as fully formed in 1253.',portrait:noReliablePortrait,summary:'Hülegü led a western expedition commissioned under Möngke, overcoming major Nizari strongholds and capturing Baghdad. The later Ilkhanate is not projected backward as fully formed in 1253.',relatedEntityIds:['event-hulegu-expedition-1253-1256','event-alamut-1256','event-baghdad-captured-1258'],sourceRefs:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'] },
  { id:'person-ariq-boke',slug:'ariq-boke',title:'Ariq Böke',profileType:'biography',role:'Toluid prince and rival claimant',eraId:'rise-empire',status:'verified',dynasticBranch:'TOLUID',shortBio:'Ariq Böke was a son of Tolui and Sorghaghtani Beki and a prince of the Toluid branch. In 1260 he and his brother Qubilai advanced rival claims to supreme authority, beginning the Toluid civil war.',portrait:noReliablePortrait,summary:'Ariq Böke emerged alongside his brother Qubilai as a rival claimant in 1260, beginning a civil war over supreme imperial authority.',relatedEntityIds:['person-qubilai','event-rival-claimants-1260','event-toluid-civil-war-begins-1260'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
  { id:'person-yelu-chucai',slug:'yelu-chucai',title:'Yelü Chucai',profileType:'biography',role:'Imperial administrator and adviser',eraId:'rise-empire',status:'verified',summary:'Yelü Chucai participated in the developing administration of the expanding empire. This foundation record remains intentionally concise pending a dedicated source pass.',relatedEntityIds:['polity-yeke-mongol-ulus','person-ogedei-khan'],sourceRefs:['source-dunnell-rise-chinggis-2023'] },
]
