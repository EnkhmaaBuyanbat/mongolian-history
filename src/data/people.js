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
]
