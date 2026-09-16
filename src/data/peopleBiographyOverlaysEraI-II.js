const section = (id, number, title, paragraphs, callout) => ({
  id,
  number,
  title,
  paragraphs,
  ...(callout ? { callout } : {}),
})

export const peopleBiographyOverlaysEraI_II = {
  'person-kul-tegin': {
    biographySections: [
      section('kul-world', '02', 'The World He Entered', [
        'Kül Tegin belonged to the ruling elite of the restored Türk political order commonly called the Second Türk Khaganate. That political world followed earlier fragmentation and restoration rather than continuing unchanged from the first Türk imperial order.',
        'The restored order governed through military authority, alliances and memory of earlier Türk power. The Orkhon Valley was a recurring political and commemorative landscape, not the permanent possession of one people.',
      ]),
      section('kul-role', '03', 'Political Role', [
        'Existing project records identify Kül Tegin as a prominent prince and military commander within that restored order. They do not provide enough evidence for a campaign-by-campaign personal chronology.',
        'His importance is therefore tied both to his place in Türk ruling politics and to the memorial complex later created in his name.',
      ]),
      section('kul-significance', '04', 'Death, Memorial and Historical Significance', [
        'Kül Tegin died in 731 CE. His memorial complex was established in 732 in the Orkhon Valley.',
        'The inscriptions of that complex are among the most important surviving written monuments of the early Türk world. They preserve a political and commemorative voice rather than a complete social history of every community under Türk power.',
      ]),
      section('kul-inscription', '05', 'What the Inscription Tells Us', [
        'The monument preserves how a Türk ruling tradition represented its past, commemorated Kül Tegin and communicated political concepts and historical memory.',
        'Modern scholarship identifies textual layers and authorship questions in the Kül Tegin and Bilge Khagan inscriptions. The project does not reproduce an inscription quotation because no verified passage is stored in the current data.',
      ], { label: 'Inscription as Source', text: 'The monument records a commemorative presentation created within a political context. It is not a neutral modern biography.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('kul-limits', '06', 'What the Inscription Cannot Tell Us Alone', [
        'The inscription cannot by itself provide a complete objective history, represent the experience of every population under Türk political power or document ordinary religious and social life in full.',
        'A monument, its written text, a later translation and a modern historical interpretation are related but distinct stages of evidence.',
      ]),
      section('kul-legacy', '07', 'Why Kül Tegin Matters', [
        'Kül Tegin’s historical importance rests both in his place within restored Türk political power and in the exceptional inscriptional evidence created to commemorate him.',
        'The later transition to Uyghur imperial power in 744 ended a particular political order. It did not mean the disappearance of Türk peoples, and the Orkhon Valley remained important in a different political era.',
      ]),
    ],
  },
  'person-bilge-khagan': {
    biographySections: [
      section('bilge-world', '02', 'The World He Entered', [
        'Bilge Khagan ruled within the restored political order commonly called the Second Türk Khaganate. Its history followed the fragmentation and later restoration of Türk imperial power rather than one uninterrupted first-Türk state.',
        'That restored world provides the context for both Bilge Khagan and Kül Tegin, and for the Orkhon memorial inscriptions associated with their generation.',
      ]),
      section('bilge-role', '03', 'Political Role', [
        'The project chronology records Bilge Khagan becoming ruler in 716 CE. His political context connects the Türk restoration, the Orkhon Valley and the inscriptional representation of the ruling tradition.',
        'He governed through an imperial political system shaped by military authority, alliances and commemorative claims to legitimacy.',
      ]),
      section('bilge-chronology', '04', 'Accession, Death and Memorial', [
        'Bilge Khagan died in 734 CE, and his memorial was established in 735. The surviving record supports this chronology without requiring invented personal detail.',
        'The available project data does not support adding details about his cause of death.',
      ]),
      section('bilge-source', '05', 'What the Sources Tell Us', [
        'The inscription associated with Bilge Khagan preserves political and commemorative texts connected with the Türk ruling tradition.',
        'Modern scholarship identifies textual layers and authorship questions in the Kül Tegin and Bilge Khagan inscriptions. The evidence does not support saying that Bilge Khagan personally wrote the entire inscription.',
      ], { label: 'Authorship Caution', text: 'The evidence does not support saying that Bilge Khagan personally wrote the entire inscription.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('bilge-limits', '06', 'Limits of the Evidence', [
        'The memorial inscription is not equivalent to a modern biography. Its commemorative and political purposes shape the account it preserves.',
        'No inscription quotation is supplied here because the current project data does not contain a verified passage for reproduction.',
      ]),
      section('bilge-legacy', '07', 'Why Bilge Khagan Matters', [
        'Bilge Khagan is central to understanding restored Türk rulership and the ways political authority and memory were represented in the Orkhon inscriptional world.',
        'The later establishment of Uyghur imperial power in 744 ended this particular political order without erasing Türk peoples from the steppe.',
      ]),
    ],
  },
  'person-yujiulu-shelun': {
    biographySections: [
      section('shelun-world', '02', 'The World He Entered', [
        'Shelun emerged within a politically complex eastern steppe shaped by changing coalitions after earlier Xiongnu and Xianbei political prominence.',
        'The Rouran were not simply the next dynasty in a fixed Xiongnu-to-Xianbei-to-Rouran succession. Numerous populations and coalitions existed across the region before the khaganate conventionally dated from 402.',
      ]),
      section('shelun-rise', '03', 'Rise and Political Role', [
        'In the project chronology, 402 CE anchors Shelun’s consolidation of a major Rouran political order. Under his leadership the Rouran developed a major political and military confederation on the eastern steppe.',
        'He used the title Khagan, but he did not invent it; the title is attested in earlier Inner Asian and Xianbei contexts.',
      ]),
      section('shelun-significance', '04', 'Historical Significance', [
        'Shelun’s importance lies in the development of a major steppe political order that became a dominant power in Mongolia and neighbouring Inner Asian regions.',
        'Political hierarchy, military authority, diplomacy and pastoral mobility connected the Khagan with other leaders, subordinate groups and allies. Those relationships could change, and they should not be represented as a modern state with fixed surveyed borders.',
      ]),
      section('shelun-sources', '05', 'What the Sources Tell Us', [
        'Reconstruction of Shelun’s political career depends heavily on textual traditions preserved outside the Rouran themselves. Those records support political history more securely than a detailed personal biography.',
      ], { label: 'Textual Evidence', text: 'Accounts preserved outside the Rouran require source-critical reading.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('shelun-limits', '06', 'Limits of the Evidence', [
        'Securely attributable Rouran archaeological evidence remains limited. Material dating to the Rouran period cannot automatically be assigned a Rouran political or ethnic identity, and archaeology does not provide a detailed biography of Shelun.',
        'Core power, spheres of influence, dependent or allied groups and contested frontiers describe different kinds of relationships. A single territorial outline would imply more certainty than the evidence permits.',
      ]),
      section('shelun-legacy', '07', 'Why Shelun Matters', [
        'Shelun provides an important point of entry into the formation of Rouran imperial power and the development of steppe political organization in the early fifth century.',
        'Rouran dominance later ended through conflict with rising Türk power around 552–555. That political end did not mean that every community connected with the Rouran disappeared.',
      ]),
    ],
  },
  'person-bumin-qaghan': {
    biographySections: [
      section('bumin-world', '02', 'The World He Entered', [
        'Türk or Ashina political power developed within the wider Rouran-dominated political environment. Bumin’s rise should therefore be understood within that political world rather than as an event that came from nowhere.',
        'The relationship included hierarchy and dependence, but it should not be reduced to a story of a “slave people” suddenly revolting.',
      ]),
      section('bumin-rise', '03', 'Rise and Political Role', [
        'Bumin became the central leader in the break with Rouran dominance. Existing project sources do not support an exact birth year or a detailed account of his early life.',
        'The limited record identifies his leadership in the rise of Türk power and the conflict of 552 without justifying invented family scenes or exact territorial sketches.',
      ]),
      section('bumin-552', '04', '552 — A Political Turning Point', [
        'In 552, Bumin led the political and military break associated with the decisive rise of Türk power and a major defeat of Rouran power.',
        'Rouran political resistance continued during the following years rather than disappearing instantly. The transition continued through approximately 552–555 as alliances, leadership and political authority were realigned.',
      ]),
      section('bumin-sources', '05', 'What the Sources Tell Us', [
        'A textual tradition describing the Türks as “blacksmith slaves” of the Rouran requires critical interpretation and should not be repeated as straightforward fact.',
      ], { label: 'Source Tradition', text: 'A memorable phrase in a textual tradition is not automatically a literal account of social status.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('bumin-limits', '06', 'Limits of the Evidence', [
        'The available records support Bumin’s political role in 552 more securely than a full personal biography. They do not justify invented childhood, family or exact territorial details.',
        'The period from 552 to 744 did not consist of one uninterrupted state. Türk political history included division, fragmentation and later restoration.',
      ]),
      section('bumin-legacy', '07', 'Why Bumin Matters', [
        'Bumin’s historical importance comes from his role in the emergence of a political order bearing the Türk name that became enormously important across Inner Asian history.',
        'East and west structures in that new order were connected but not permanently identical. Without historical GIS evidence, political reach should not be drawn as one precise fixed-border territory.',
      ]),
    ],
  },
  'person-tanshihuai': {
    biographySections: [
      section('tanshihuai-world', '02', 'The World He Entered', [
        'Tanshihuai emerged in a second-century eastern steppe where Xiongnu political dominance had weakened and numerous Xianbei groups and coalitions had become increasingly prominent.',
        'That change was not a clean dynastic succession from Xiongnu to Xianbei. Different communities and political formations coexisted, competed and changed across time.',
      ]),
      section('tanshihuai-rise', '03', 'Rise and Political Role', [
        'He succeeded in bringing numerous Xianbei groups into a powerful confederational political formation. This did not create a permanently centralized state with fixed territorial borders.',
        'Different Xianbei political groups and coalitions existed at different times. Their histories should not be compressed into the story of a single state.',
      ]),
      section('tanshihuai-significance', '04', 'Major Actions and Historical Significance', [
        'The political coalition associated with Tanshihuai became a major force across territories formerly dominated by Xiongnu power. Ancient Chinese historical sources describe his political influence as extending widely across those former Xiongnu territories.',
        'Those textual descriptions are evidence for the reach attributed to his power, not precise modern borders. The political unity associated with his leadership did not remain permanently intact after his death around 181 CE.',
      ]),
      section('tanshihuai-sources', '05', 'What the Sources Tell Us', [
        'Early Chinese historical sources preserve a much richer narrative about Tanshihuai’s origins, youth and rise. Extraordinary early-life narratives belong to the ancient account and should not be presented as established biography.',
      ], { label: 'Ancient Account vs Historical Reconstruction', text: 'Ancient histories preserve narratives about Tanshihuai’s early life. Modern reconstruction is more secure when discussing his political leadership and the confederation associated with him.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('tanshihuai-limits', '06', 'Limits of the Evidence', [
        'The current evidence does not support an exact birth year, a complete account of Tanshihuai’s life or a precise modern map of his political influence.',
        'Xiongnu communities did not vanish with Xianbei prominence. Southern Xiongnu communities continued inside and around northern China under changing political conditions.',
      ]),
      section('tanshihuai-legacy', '07', 'Why Tanshihuai Matters', [
        'Tanshihuai’s career demonstrates both the scale that Xianbei confederational power could reach and the limits of treating the Xianbei as one continuously unified empire.',
        'Later Xianbei-associated groups, including the Tuoba and Murong, followed distinct political trajectories rather than continuing one unbroken state.',
      ]),
    ],
  },
  'person-borte': {
    biographySections: [
      section('borte-world', '02', 'Household and Political World', [
        'Börte was Temüjin’s wife and principal spouse in a twelfth-century world of households, lineages and competing steppe coalitions. Mongol groupings already existed before the reorganization of 1206.',
        'Her historical importance belongs to imperial household structure, not to a private story reconstructed beyond the sources.',
      ]),
      section('borte-source', '03', 'The Secret History Record', [
        'The Secret History identifies Börte as Temüjin’s wife and principal spouse. That identification is kept here as a source-based dynastic relationship.',
        'The same narrative reports her capture by a Merkit group and recovery by an allied force. The broad episode can be used cautiously. Precise chronology, motives, dialogue and routes are not reconstructed here.',
      ], { label: 'How to Read the Episode', text: 'The capture and recovery account is a medieval narrative tradition, not an independently verified transcript of scenes and speech.', confidence: 'SOURCE ACCOUNT' }),
      section('borte-household', '04', 'Principal Spouse and Imperial Household', [
        'After 1206 the imperial household formed part of political organization alongside assemblies, elite incorporation and delegated command.',
        'Börte’s position as principal spouse is distinct from the wider household attested in the Secret History, including Qulan Khatun, Yisüi, Yisügen and a changing household relationship involving Ibaqa Beki. Those other relationships are not treated as equivalent principal-wife status.',
      ]),
      section('borte-children', '05', 'Sons, Daughters and Dynastic Tradition', [
        'Dynastic tradition identifies Jochi, Chagatai, Ögedei and Tolui as their four principal sons. Those sons later named major Chinggisid branches, but later independent khanate boundaries should not be read back onto the household during Chinggis Khan’s lifetime.',
        'The same tradition represents daughters, including Qojin Beki, Checheyigen, Alaqa Beki, Tümelün and Al-Altun. Specific marriages and offices are not assigned here where the current source layer leaves them unresolved.',
      ]),
      section('borte-jochi', '06', 'The Dispute over Jochi', [
        'Medieval narrative preserves a controversy concerning Jochi’s parentage within dynastic politics.',
        'The mother–son relationship with Börte and the father–son relationship in the Chinggisid order are retained. The controversy is not treated as biological proof of a different father.',
      ], { label: 'A Dynastic Dispute', text: 'The Secret History’s controversy over Jochi is a source-dependent political dispute, not a modern paternity finding.', confidence: 'SOURCE ACCOUNT' }),
      section('borte-succession', '07', 'After 1227', [
        'Chinggis Khan died in 1227. Supreme authority then required dynastic negotiation and recognition rather than automatic modern-style inheritance.',
        'Tolui governed as regent from 1227 to 1229, and Ögedei was recognized as Great Khan in 1229. Börte’s importance in that process is the household and dynastic structure around those sons, not an undocumented private intervention.',
      ]),
      section('borte-legacy', '08', 'Why Börte Matters', [
        'Börte stands at the head of the principal Chinggisid household with Temüjin. Understanding the empire requires that household, not only commanders and campaigns.',
        'No reliable contemporary portrait is documented. Visual reconstructions of a kind of steppe world are not her face.',
      ]),
    ],
  },
  'person-jamukha': {
    biographySections: [
      section('jamukha-world', '02', 'An Independent Political Actor', [
        'Jamukha was an independent political actor in competing steppe coalitions of the late twelfth and early thirteenth centuries. He had political agency of his own and should not be reduced to a villain in Temüjin’s story.',
        'The twelfth-century eastern steppe contained several organized political communities. Kereit, Naiman, Merkit, Tatar and Mongol groupings competed, cooperated and formed alliances.',
      ]),
      section('jamukha-relationship', '03', 'A Relationship That Changed', [
        'Medieval narrative tradition describes an earlier close personal and political relationship between Temüjin and Jamukha.',
        'That closeness belongs to the source account. The later rivalry is a historical reading of changing coalition politics, not a fixed moral identity.',
      ], { label: 'No Permanent Label', text: 'Alliance and rivalry describe phases. They are not permanent characters assigned to either man.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('jamukha-1201', '04', '1201 in the Source Chronology', [
        'In the Secret History’s source-based chronology, Jamukha was elevated as Gür Khan in 1201 amid competing coalitions.',
        'That date is a chronological marker in the narrative, not an independently verified transcript of the ceremony.',
      ]),
      section('jamukha-struggle', '05', 'Coalitions, Defeat and Persistence', [
        'Temüjin’s later dominance was not predetermined. Jamukha’s elevation belongs to a period of competing coalitions rather than to a story in which one leader simply conquered everyone.',
        'Political communities could fragment or reorganize after military defeat. Defeat is not disappearance.',
      ]),
      section('jamukha-limits', '06', 'Limits of Reconstruction', [
        'The current source layer supports Jamukha’s political role, the changing relationship with Temüjin and the 1201 source chronology more securely than a full independent life story.',
        'Dialogue, private motives and undocumented early-life scenes are not reconstructed here.',
      ]),
      section('jamukha-legacy', '07', 'Why Jamukha Matters', [
        'Jamukha shows that Temüjin’s rise took place inside an already organized political world of rival leaders and changing alliances.',
        'Removing him from that world, or freezing him as a helper-turned-villain, distorts the evidence.',
      ]),
    ],
  },
  'person-toghrul-ong-khan': {
    biographySections: [
      section('toghrul-world', '02', 'A Kereit Ruler', [
        'Toghrul was a major Kereit ruler in the late twelfth century. Kereit political power formed an important part of the steppe and had political agency beyond its relationship with Temüjin.',
        'Kereit, Naiman, Merkit, Tatar and Mongol groupings were not modern nation-states. Jin and Qara Khitai also shaped the wider landscape.',
      ]),
      section('toghrul-relationship', '03', 'Connection and Cooperation', [
        'Sources describe an earlier political connection between Toghrul and Temüjin, then later cooperation.',
        'Toghrul had interests independent of Temüjin. He should not be treated merely as a supporting figure in another man’s biography.',
      ]),
      section('toghrul-1203', '04', 'The 1203 Rupture', [
        'In 1203 the relationship ended in rupture and conflict associated with the defeat of Kereit political power. This was a major transformation.',
        'It does not mean that Kereit people disappeared. Political communities can fragment or reorganize after military defeat.',
      ], { label: 'Defeat Is Not Disappearance', text: 'The Kereit defeat changed political power. It is not an ethnic end date.', confidence: 'INTERPRETED' }),
      section('toghrul-aftermath', '05', 'Toward 1206', [
        'The 1203 transformation, together with the major Naiman defeat of 1204, prepared the setting for the assembly of 1206. Those events did not make that assembly inevitable.',
        'Resistance and political realignment continued around 1204–1205.',
      ]),
      section('toghrul-limits', '06', 'Limits of Reconstruction', [
        'The project record supports Toghrul’s Kereit rulership, the changing relationship with Temüjin and the 1203 rupture more securely than a detailed personal chronology.',
        'Private motives and undocumented early life are not supplied.',
      ]),
      section('toghrul-legacy', '07', 'Why Toghrul Matters', [
        'Toghrul is essential to understanding the twelfth-century steppe as a plural political world rather than a prelude in which Temüjin’s victory was already written.',
        'His career also shows why relationships in this period must be periodized: connection, cooperation and rupture are phases, not fixed identities.',
      ]),
    ],
  },
  'person-hoelun': {
    biographySections: [
      section('hoelun-source', '02', 'Identification in the Secret History', [
        'The Secret History identifies Hö’elün as Temüjin’s mother. That identification is kept here as a source-based family relationship.',
        'Detailed scenes from her life remain source accounts rather than independently verified transcripts.',
      ], { label: 'Source Account', text: 'Narrative scenes are evidence for how a medieval tradition remembered Hö’elün. They are not treated as eyewitness records.', confidence: 'SOURCE ACCOUNT' }),
      section('hoelun-world', '03', 'Family Context', [
        'The same tradition identifies Yesügei as Temüjin’s father and Börte as Temüjin’s wife and principal spouse. Those identifications belong to the family and household structure of the rise, not to a fully reconstructed private household economy.',
        'Temüjin was born around the 1160s. The precise year remains debated, and no more exact birth year is asserted here.',
      ]),
      section('hoelun-limits', '04', 'What Is Not Reconstructed', [
        'Dialogue, undocumented routes and motives beyond the source tradition are not supplied.',
        'The current source layer does not support converting Hö’elün’s narrative prominence into a complete independent biography.',
      ]),
      section('hoelun-legacy', '05', 'Why Hö’elün Matters', [
        'Hö’elün belongs in the educational record because the native narrative of Temüjin’s family cannot be told as a father-and-sons story alone.',
        'Her importance is the source-attested maternal relationship and the caution required in reading the scenes around it.',
      ]),
    ],
  },
  'person-yesugei': {
    biographySections: [
      section('yesugei-source', '02', 'Identification in the Secret History', [
        'The Secret History identifies Yesügei as Temüjin’s father and places him in an inherited family and political context.',
        'Detailed episodes remain narrative-dependent rather than independently verified transcripts.',
      ], { label: 'Source Account', text: 'The Secret History is indispensable for this identification, but it is a medieval epic chronicle rather than an eyewitness transcript.', confidence: 'SOURCE ACCOUNT' }),
      section('yesugei-world', '03', 'Inherited Political Context', [
        'Temüjin entered a world of households, lineages and coalitions. Yesügei’s place in that world is the inherited family and political setting described by the native narrative, not a reconstructed tribal state.',
        'Mongol groupings already existed before 1206. Yesügei should not be treated as the founder of Mongol history.',
      ]),
      section('yesugei-limits', '04', 'What Is Not Reconstructed', [
        'The current source layer does not support an exact death date, a campaign list or invented early-life scenes for Yesügei.',
        'His relationship to Temüjin is retained as a source account. Private motives are not supplied.',
      ]),
      section('yesugei-legacy', '05', 'Why Yesügei Matters', [
        'Yesügei matters because Temüjin’s rise is unintelligible without an inherited family and political setting.',
        'He also illustrates the project’s source method: native narrative identifications can be used, while undocumented biography cannot be filled in for completeness.',
      ]),
    ],
  },
  'person-kuchlug': {
    profileType: 'biography',
    role: 'Naiman prince who seized power in the Qara Khitai political domain',
    period: 'early 13th century CE; rule ended c. 1218',
    shortBio: 'Kuchlug was a Naiman prince whose rule in the former Qara Khitai domain ended around 1218, when Jebe’s campaign brought that political space under Mongol control. The current source layer supports that political turning point more securely than a full independent life story.',
    summary: 'Kuchlug’s fall around 1218 ended his rule in the former Qara Khitai domain and formed a stage in the empire’s westward expansion through delegated command.',
    relatedEntityIds: ['polity-naiman', 'polity-qara-khitai', 'event-kuchlug-fall-c1218', 'person-jebe'],
    sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-secret-history-mongols', 'source-derachewiltz-secret-history-2006'],
    biographySections: [
      section('kuchlug-world', '02', 'From Naiman Politics to Qara Khitai', [
        'Kuchlug belonged to the Naiman political world that was transformed by the major Naiman defeat of 1204. Naiman people did not become extinct after that defeat.',
        'He later seized power in the former Qara Khitai political domain. The project does not reconstruct an undocumented personal itinerary between those settings.',
      ]),
      section('kuchlug-1218', '03', 'The Fall around 1218', [
        'Around 1218 Jebe’s campaign ended Kuchlug’s rule and brought the former Qara Khitai domain under Mongol control.',
        'That was delegated imperial command, not a reconstructed personal march by Chinggis Khan along a precise route.',
      ]),
      section('kuchlug-west', '04', 'A Stage in Western Expansion', [
        'The fall of Kuchlug formed one stage in a sequence of western campaigns that later included the Otrar crisis and the invasion of the Khwarazmian Empire.',
        'Those later events had their own political contexts. Kuchlug’s fall is not treated here as a complete explanation for the western war.',
      ]),
      section('kuchlug-limits', '05', 'Limits of the Evidence', [
        'The current source layer supports Kuchlug’s Naiman background, his rule in the Qara Khitai domain and the c. 1218 end of that rule more securely than a detailed biography.',
        'Religious policy, private motives and undocumented early life are not supplied.',
      ]),
    ],
  },
}

export function applyPeopleBiographyOverlays(people, overlays) {
  Object.entries(overlays).forEach(([id, extra]) => {
    const person = people.find((record) => record.id === id)
    if (!person) throw new Error(`Biography overlay has no canonical person: ${id}`)
    if (extra.profileType) person.profileType = extra.profileType
    if (extra.role) person.role = extra.role
    if (extra.period) person.period = extra.period
    if (extra.shortBio) person.shortBio = extra.shortBio
    if (extra.summary) person.summary = extra.summary
    if (extra.sourceRefs) person.sourceRefs = extra.sourceRefs
    if (extra.relatedEntityIds) {
      person.relatedEntityIds = [...new Set([...(person.relatedEntityIds ?? []), ...extra.relatedEntityIds])]
    }
    if (extra.characterAndReputation && !person.characterAndReputation) {
      person.characterAndReputation = extra.characterAndReputation
    }
    if (extra.biographySections) person.biographySections = extra.biographySections
  })
}
