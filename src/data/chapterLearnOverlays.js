import { eras } from './eras.js'
import { getChapterHref } from './entityRoutes.js'

const EXPLORE = { en: { next: 'Explore next', era: 'Continue in the next era' } }

function unique(ids = []) {
  return [...new Set(ids.filter(Boolean))]
}

function patchSection(section, patch) {
  if (!section || !patch) return
  if (patch.lead) section.lead = patch.lead
  if (patch.paragraphs) section.paragraphs = patch.paragraphs
  if (patch.callouts) section.callouts = patch.callouts
  if (patch.questions) section.questions = patch.questions
  if (patch.evidenceNote) section.evidenceNote = patch.evidenceNote
  if (patch.period != null) section.period = patch.period
}

function applyRelated(chapter, patch) {
  ;['relatedEventIds', 'relatedPeopleIds', 'relatedPolityIds', 'relatedPlaceIds', 'relatedSiteIds', 'sourceIds', 'claimIds'].forEach((key) => {
    if (patch[key]) chapter[key] = unique([...(chapter[key] ?? []), ...patch[key]])
  })
  if (patch.introTitle) chapter.introTitle = patch.introTitle
}

function linkContinuations(chapters) {
  const byId = new Map(chapters.map((chapter) => [chapter.id, chapter]))
  chapters.forEach((chapter) => {
    const era = eras.find((item) => item.id === chapter.eraId)
    if (!era) return
    const index = era.chapterIds.indexOf(chapter.id)
    const nextChapter = byId.get(era.chapterIds[index + 1])
    const nextEra = eras[eras.findIndex((item) => item.id === era.id) + 1]
    ;(chapter.sections ?? []).forEach((section) => {
      if (!section.continuation) return
      if (nextChapter) {
        section.continuation = {
          ...section.continuation,
          href: getChapterHref(nextChapter),
          text: nextChapter.title,
          status: section.continuation.status && !/coming soon|future/i.test(section.continuation.status)
            ? section.continuation.status
            : EXPLORE.en.next,
        }
      } else if (nextEra) {
        section.continuation = {
          ...section.continuation,
          href: `/eras/${nextEra.slug ?? nextEra.id}`,
          text: nextEra.title,
          status: EXPLORE.en.era,
        }
      }
    })
  })
}

const relatedPatches = {
  'chapter-uyghur-khaganate': {
    relatedEventIds: ['event-uyghur-khaganate-established-744', 'event-end-uyghur-khaganate-840'],
    relatedPlaceIds: ['place-orkhon-valley'],
    relatedSiteIds: ['site-khar-balgas'],
  },
  'chapter-840-transition': {
    relatedEventIds: ['event-end-uyghur-khaganate-840', 'event-liao-begins-907'],
    relatedSiteIds: ['site-khar-balgas'],
  },
  'chapter-khitan-liao-world': {
    introTitle: 'An Imperial Network, Not a Modern Border',
    relatedPolityIds: ['polity-jurchen-jin', 'polity-qara-khitai'],
  },
  'chapter-after-liao': {
    introTitle: 'Several Trajectories After 1125',
    relatedPeopleIds: ['person-kuchlug'],
  },
  'chapter-twelfth-century-steppe-powers': {
    introTitle: 'A Plural Political Field',
    relatedPeopleIds: ['person-toghrul-ong-khan', 'person-jamukha', 'person-tayang-khan', 'person-toqtoa-beki'],
  },
  'chapter-temujin-jamukha-toghrul': {
    introTitle: 'Three Political Actors',
  },
  'chapter-struggle-eastern-steppe': {
    introTitle: 'Dominance Was Not Inevitable',
  },
  'chapter-new-order-1206': {
    introTitle: 'A Political Reorganization',
  },
  'chapter-empire-of-connections': {
    relatedEventIds: ['event-yam-regularization-1234'],
  },
  'chapter-hulegu-ilkhanid-world': {
    relatedPolityIds: ['polity-nizari-network', 'polity-abbasid-caliphate'],
  },
  'chapter-crisis-fragmentation-fall-yuan': {
    relatedPeopleIds: ['person-qubilai', 'person-temur-oljeytu'],
    relatedPlaceIds: ['place-shangdu'],
  },
  'chapter-entering-qing-imperial-order': {
    relatedPeopleIds: ['person-ligden-khan'],
  },
  'chapter-toward-qing-rule-1691': {
    relatedPeopleIds: ['person-kangxi-emperor', 'person-zanabazar'],
  },
  'chapter-khalkha-qing-government': {
    relatedPlaceIds: ['place-dolon-nor'],
    relatedSiteIds: ['site-amarbayasgalant'],
  },
  'chapter-buddhism-monasteries-authority-qing': {
    relatedPeopleIds: ['person-abtai-sain-khan'],
    relatedPlaceIds: ['place-dolon-nor'],
  },
  'chapter-mpr-socialist-project': {
    relatedPeopleIds: ['person-sukhbaatar', 'person-eighth-jebtsundamba'],
  },
  'chapter-building-democratic-state-1990-1992': {
    relatedPeopleIds: ['person-zorig', 'person-batuul', 'person-batmonkh'],
  },
  'chapter-mining-growth-natural-resources': {
    relatedPeopleIds: ['person-oyun-erdene'],
  },
}

const sectionPatches = {
  'chapter-rise-of-the-turks': {
    'bumin-qaghan': {
      paragraphs: [
        'Existing evidence identifies Bumin’s leadership in the rise of Türk power and the conflict of 552. The limited record does not support a detailed invented biography.',
        'His importance is political: he stands at the documented break with Rouran dominance, not as a fully recoverable private life.',
      ],
      callouts: [{ label: 'What the record can support', text: 'Leadership in the 552 break is established; dialogue, motives, and a complete life-story are not.', confidence: 'ESTABLISHED / INTERPRETED' }],
    },
    'turk-restoration': {
      paragraphs: [
        'Türk political power was later restored in the order commonly called the Second Türk Khaganate.',
        'That restored world is the setting for Bilge Khagan, Kül Tegin, and the Orkhon memorial inscriptions. Restoration was not a simple return to the mid-sixth-century order.',
      ],
    },
    'why-turk-rise-matters': {
      paragraphs: [
        'The Türk rise reshaped political vocabulary, imperial organization, and networks across Inner Asia.',
        'Later inscriptional evidence offers political voices from the restored Türk world. Those voices help historians study how leaders represented authority and memory; they do not replace the earlier, more fragmentary sixth-century record.',
      ],
    },
  },
  'chapter-orkhon-world': {
    'second-turk-khaganate': {
      paragraphs: [
        'The restored Türk political order of the late seventh and early eighth centuries is the setting for Bilge Khagan and Kül Tegin.',
        'Rulers governed through military power, alliances, and memory of earlier Türk authority. The inscriptions belong to that political world rather than to a timeless “Türk essence.”',
      ],
    },
    'kul-tegin': {
      paragraphs: [
        'Kül Tegin was a prominent Türk prince and commander of the restored order. He died in 731, and a memorial complex was established in 732.',
        'The monument is among the most important inscriptional remains of the Türk world. It commemorates a person and an imperial project; it is not a complete biography.',
      ],
    },
    'bilge-khagan': {
      paragraphs: [
        'Bilge Khagan became ruler of the restored Türk order in 716. He died in 734, and a memorial was established in 735.',
        'The evidence supports this chronology more securely than invented personal detail. His voice in the inscriptions is political and commemorative.',
      ],
    },
    'orkhon-inscriptions': {
      paragraphs: [
        'The Orkhon inscriptions are major early written sources for Türk political history. They were created in a commemorative setting and transmit particular messages about leadership, action, and legitimacy.',
        'They are invaluable and incomplete. They are not a neutral history of every community on the steppe.',
      ],
    },
    'reading-monument-source': {
      paragraphs: [
        'Monument, text, translation, and historical interpretation are related but different kinds of evidence and analysis.',
        'This project does not presently include verified quotation from the inscriptions, so it does not invent extracts. The teaching point is how to read a monument as a source, not to simulate a full edition.',
      ],
    },
  },
  'chapter-uyghur-khaganate': {
    'new-khaganate-744': {
      paragraphs: [
        'The Uyghur Khaganate established in 744 created a new imperial political order on the eastern steppe.',
        'The date marks the foundation of that khaganate, not the first appearance of Uyghur people. Political beginnings and community histories are not the same thing.',
      ],
    },
    'orkhon-valley-again': {
      paragraphs: [
        'A landscape already used in the earlier Türk world became a centre under a different political order.',
        'Geographic reuse does not prove unchanged political or ethnic continuity. Different communities can occupy and reinterpret the same valley.',
      ],
    },
    'khar-balgas': {
      paragraphs: [
        'Khar Balgas was a major political and urban centre associated with the Uyghur imperial world.',
        'Archaeology documents urban construction in the Orkhon Valley. The present source layer does not support inventing an exact foundation year.',
      ],
    },
    'steppe-empire-urban-centres': {
      paragraphs: [
        'Pastoral political systems and urban centres were not opposite ways of life.',
        'A steppe empire could build and use cities, administration, and trade nodes while remaining connected to mobile pastoral networks.',
      ],
    },
    'connections-across-eurasia': {
      paragraphs: [
        'The Uyghur imperial world took part in wide diplomatic and commercial relationships that tied Mongolia to political and economic networks beyond it.',
        'Without more specific evidence, this chapter does not assert exact trade routes or the movement of particular objects.',
      ],
    },
    'religion-cultural-connections': {
      paragraphs: [
        'Bügü Khagan’s adoption of Manichaeism in 762 was an important change in the Uyghur imperial world.',
        'Court patronage is not the same as the religion of every Uyghur person. Religious life remained diverse and changed over time.',
      ],
    },
    'uyghur-political-strain': {
      paragraphs: [
        'Internal and external pressures weakened Uyghur imperial structures before the crisis of 840.',
        'Collapse should not be reduced to a single cause. A fuller causal narrative would require sources beyond the present foundation layer.',
      ],
    },
    'approaching-840': {
      paragraphs: [
        'The crisis of 840 ended Uyghur imperial dominance in Mongolia. It did not erase Uyghur communities or later Uyghur history.',
        'The next chapter asks what ended, what continued, and why 840 is an editorial boundary for Era I rather than an ethnic end date.',
      ],
    },
  },
  'chapter-840-transition': {
    'crisis-840': {
      paragraphs: [
        'In 840, during a broader political crisis, Yenisei Kyrgyz forces defeated and overthrew Uyghur imperial power in Mongolia.',
        'The present sources do not support a single-cause explanation. Internal strain and external force were parts of a complex process.',
      ],
    },
    'looking-toward-era-two': {
      paragraphs: [
        'Era II examines the changing political world from approximately 900 to 1206, including Khitan-Liao power and the coalitions from which Temüjin later emerged.',
        'The interval after 840 is not filled here with an invented succession of peoples. The next era begins with transformation, movement, and new regional powers—not a vacuum.',
      ],
    },
  },
  'chapter-after-840-changing-steppe': {
    'what-ended-840': {
      lead: 'A khaganate ended; communities did not vanish.',
      paragraphs: [
        'Uyghur imperial political dominance in Mongolia ended in 840. Uyghur communities did not disappear as a people.',
        'The distinction matters for everything that follows. Later Khitan, Mongol, and modern identities cannot be read backward as simple replacements lined up on this date.',
      ],
    },
    'post-840-world': {
      lead: 'The plateau remained a political landscape.',
      paragraphs: [
        'The steppe did not become empty or politically inactive after 840. People, herds, and regional relationships continued.',
        'What changed was the imperial structure that had organized much of the Orkhon world. New regional powers, including rising Khitan authority, took shape in that opening.',
      ],
    },
    'population-movement': {
      lead: 'Movement had several directions, not one exodus.',
      paragraphs: [
        'Different communities moved and reorganized along multiple trajectories rather than one universal route.',
        'Some Uyghur groups later appear in Gansu and in the eastern Tianshan–Turfan region. That is not evidence that every Uyghur migrated, or that modern Uyghur identity is an unchanged continuation of the 744–840 polity.',
      ],
    },
    'regional-powers': {
      lead: 'New relationships formed before Temüjin was born.',
      paragraphs: [
        'Changing regional powers formed new relationships across the steppe and neighbouring zones.',
        'Khitan political organization was already becoming a major force in this environment. Era II therefore does not begin with Mongol groupings as the only actors.',
      ],
    },
    'no-dynasty-chain': {
      lead: 'Overlap is the historical pattern.',
      paragraphs: [
        'Political change involved overlapping populations and coalitions, not a clean sequence of ethnic replacements.',
        'Kyrgyz military success in 840, Uyghur reorganization, and Khitan expansion belong in one field of relationships. They should not be flattened into a dynasty list.',
      ],
    },
    'evidence-after-840': {
      lead: 'The project records a real limit.',
      paragraphs: [
        'The current project lacks dedicated sources for a detailed year-by-year reconstruction of the late ninth century on the Mongolian Plateau.',
        'That gap is stated rather than filled with a speculative narrative. The next chapters pick up where Khitan-Liao evidence is stronger.',
      ],
    },
    'khitan-expansion': {
      lead: 'Khitan power is the next imperial context.',
      paragraphs: [
        'Khitan political power became a major imperial force in the emerging regional order conventionally associated with the Liao from 907.',
        'The c. 900 boundary used for Era II is editorial. It is not the beginning of steppe history, and it does not claim that nothing important happened between 840 and 907.',
      ],
    },
    'why-transition-matters': {
      paragraphs: [
        'Temüjin’s later world grew from centuries of political organization and transformation, including this poorly documented interval.',
        'Readers who skip from 840 to 1206 miss the imperial and coalition landscape that made 1206 a reorganization rather than a creation from nothing.',
      ],
    },
  },
  'chapter-khitan-liao-world': {
    'khitan-before-liao': {
      lead: 'Khitan organization preceded the dynastic title.',
      paragraphs: [
        'Khitan political organization preceded and shaped the imperial order conventionally called the Liao.',
        'The people and political practices of that world should not be treated as appearing only in 907, nor as a footnote to later Mongol history.',
      ],
    },
    'liao-907': {
      lead: '907 is a conventional imperial beginning.',
      paragraphs: [
        'The year 907 conventionally marks the beginning of Liao imperial rule.',
        'Conventional dates organize a narrative; they do not by themselves prove a sudden, complete transformation of every community on the eastern steppe.',
      ],
    },
    'liao-mongolia': {
      lead: 'Mongolia was connected, not a blank borderland.',
      paragraphs: [
        'Parts of Mongolia were connected to Liao imperial activity and regional relationships.',
        'Connection could mean administration, garrisoning, diplomacy, population movement, or contested influence. It should not be drawn as a modern national border.',
      ],
    },
    'imperial-network': {
      paragraphs: [
        'Imperial control and interaction changed across time and should not be drawn as a fixed modern national border.',
        'Centres, regional authority, political connections, and contested zones are different relationships. One outline on a map would hide those differences.',
      ],
    },
    'liao-governance': {
      paragraphs: [
        'The Liao connected different regions and populations through imperial political structures.',
        'Those structures were complex and are only partly reconstructed in this foundation layer. Complexity is the point: a steppe-connected empire was not politically simple.',
      ],
    },
    'liao-evidence': {
      paragraphs: [
        'Modern scholarship provides broad political context, while archaeological research at sites such as Chintolgoi adds evidence about particular communities and movements within the imperial world.',
        'Written and archaeological evidence answer different questions. Neither should be forced to supply a complete ethnic map.',
      ],
    },
    'chintolgoi-gap': {
      paragraphs: [
        'Documentary evidence for mass deportation into tenth-century Mongolia and survey and excavation at Chintolgoi support an interpretation of population movement and the maintenance of Bohai cultural traditions.',
        'The site is a concrete place in a large imperial system. It does not establish the ethnicity of every person associated with the remains.',
      ],
    },
    'toward-1125': {
      paragraphs: [
        'Liao political rule ended in 1125, but Khitan histories continued along multiple trajectories.',
        'The next chapter follows Jurchen Jin and Qara Khitai as parts of that aftermath, not as proof that Khitan people vanished.',
      ],
    },
  },
  'chapter-after-liao': {
    'end-liao-rule': {
      lead: '1125 ended a state, not a people.',
      paragraphs: [
        'Jurchen conquest ended Liao political rule in 1125.',
        'The military and political result is established. Treating the year as an ethnic end date is not.',
      ],
    },
    'khitan-continuities': {
      paragraphs: [
        'Political collapse did not make Khitan people or communities disappear.',
        'Continuity took several forms: remaining populations, new relationships with Jin, and the western political project later called Qara Khitai or Western Liao.',
      ],
    },
    'jurchen-jin': {
      paragraphs: [
        'Jurchen Jin became a major neighbouring imperial power after 1125.',
        'Jin pressure and diplomacy formed part of the twelfth-century steppe environment in which Kereit, Naiman, Merkit, Tatar, and Mongol groupings later acted. Jin is context, not a simple offstage villain.',
      ],
    },
    'qara-khitai': {
      paragraphs: [
        'Qara Khitai belongs to the broader history of post-Liao political trajectories in Central Asia.',
        'This chapter notes that trajectory without reconstructing its full institutional history. Kuchlug’s later seizure of Qara Khitai power belongs to the early thirteenth century and to Era III.',
      ],
    },
    'changing-influence': {
      paragraphs: [
        'Political influence across the steppe was reorganized after 1125.',
        'Reorganization created room for competing steppe coalitions. It did not create a vacuum waiting for Temüjin.',
      ],
    },
    'not-vanishing': {
      paragraphs: [
        'The end of an imperial state cannot serve as an ethnic end date.',
        'The same caution already used for Xiongnu, Rouran, Türk, and Uyghur endings applies here. Names of states and names of peoples are not interchangeable.',
      ],
    },
    'source-gap-liao': {
      paragraphs: [
        'Dedicated sources are required for a fuller account of Jin and Qara Khitai relations with steppe groupings.',
        'The foundation layer records the limit instead of inventing campaigns, borders, or conversations.',
      ],
    },
    'multiple-trajectories': {
      paragraphs: [
        'The post-Liao world contained several political trajectories rather than one successor state.',
        'Jin, Qara Khitai, and the steppe coalitions of the twelfth century have to be held in view together before the Temüjin chapters begin.',
      ],
    },
  },
  'chapter-twelfth-century-steppe-powers': {
    'many-powers': {
      lead: 'The field was already crowded.',
      paragraphs: [
        'The twelfth-century steppe contained multiple organized political groupings.',
        'Kereit, Naiman, Merkit, Tatar, and Mongol groupings had rulers, coalitions, and enemies of their own. None existed only to explain Chinggis Khan.',
      ],
    },
    'kereit-world': {
      paragraphs: [
        'Kereit rulers and coalitions had political agency independent of Temüjin’s later history.',
        'Toghrul, later known as Ong Khan, belongs in this landscape as a major ruler, not as a helper waiting offstage.',
      ],
    },
    'naiman-world': {
      paragraphs: [
        'Naiman political power formed another major part of the regional landscape.',
        'Tayang Khan is associated with the transformation of 1204. The current source layer supports that political identification more securely than a full independent biography.',
      ],
    },
    'merkit-tatar': {
      paragraphs: [
        'Merkit and Tatar groupings participated in changing alliances, rivalries, and conflicts.',
        'They appear in the Secret History in episodes connected with Temüjin’s household and early wars. Those episodes are source accounts, not complete community histories.',
      ],
    },
    'mongol-groupings': {
      paragraphs: [
        'Multiple Mongol groupings existed before the political reorganization of 1206.',
        '“Mongol” in this period names political communities in a competitive field. It does not name a modern nation already waiting to be switched on.',
      ],
    },
    'imperial-neighbours': {
      paragraphs: [
        'Jin and Qara Khitai formed important parts of the wider political context.',
        'Steppe politics were not sealed off from imperial neighbours. Titles, refuge, trade, and military pressure crossed those relationships.',
      ],
    },
    'relationships-change': {
      paragraphs: [
        'Alliance, rivalry, and political support were temporal relationships, not permanent labels.',
        'A later enemy may appear earlier as a partner. Teaching the twelfth century means refusing to freeze the cast.',
      ],
    },
    'not-modern-nations': {
      paragraphs: [
        'These political worlds should not be mapped as fixed modern ethnic nation-states.',
        'The diagram in this chapter is a teaching schematic of coexistence and competition. It does not claim a hierarchy with Temüjin already at the centre.',
      ],
    },
  },
  'chapter-temujins-world': {
    'world-temujin-entered': {
      paragraphs: [
        'Temüjin entered a world of households, lineages, coalitions, and neighbouring powers.',
        'The Secret History and modern scholarship agree that this was an organized political environment. His later success was not the filling of an empty map.',
      ],
    },
    'family-source-traditions': {
      paragraphs: [
        'The Secret History identifies Yesügei and Hö’elün as Temüjin’s parents and Börte as his wife and principal spouse.',
        'Detailed scenes remain source accounts, not independently verified transcripts. Family names can be used; invented dialogue cannot.',
      ],
    },
    'jamukha-context': {
      paragraphs: [
        'Jamukha had political agency and should not be reduced to a villain in Temüjin’s story.',
        'Later rivalry does not erase an earlier close relationship reported in the narrative tradition. Both phases belong in the next chapter.',
      ],
    },
    'toghrul-context': {
      paragraphs: [
        'Toghrul was a major Kereit ruler, not merely a supporting figure.',
        'Cooperation with Temüjin was a political relationship with its own history. It ended in rupture associated with 1203.',
      ],
    },
    'building-coalition': {
      paragraphs: [
        'Temüjin’s coalition developed through changing political relationships; dominance was not inevitable.',
        'Supporters, marriages, and conflicts accumulated over time. The outcome known from 1206 should not be read backward as destiny.',
      ],
    },
    'limits-early-life': {
      paragraphs: [
        'No birth year more exact than the debated c. 1160s range is asserted.',
        'Precision that the sources do not support is not added here. Uncertainty is part of the historical record, not a defect to be hidden.',
      ],
    },
  },
  'chapter-temujin-jamukha-toghrul': {
    'three-agents': {
      lead: 'Three leaders, three interests.',
      paragraphs: [
        'Temüjin, Jamukha, and Toghrul each pursued their own political interests.',
        'The chapter is about changing relationships among agents, not a morality play with a hero, a villain, and a helper.',
      ],
    },
    'temujin-jamukha-early': {
      paragraphs: [
        'Medieval narrative tradition describes an earlier close personal and political relationship between Temüjin and Jamukha.',
        'That tradition is evidence for how the relationship was remembered. It is not a transcript of private feeling.',
      ],
    },
    'temujin-jamukha-rivalry': {
      paragraphs: [
        'Their relationship later became political rivalry.',
        'Rivalry grew from competing coalitions and claims to leadership, not from a fixed character type.',
      ],
    },
    'jamukha-1201': {
      paragraphs: [
        'Source-based chronology places Jamukha’s elevation as Gür Khan in 1201.',
        'The elevation is evidence of competing coalition politics. It is not proof that Temüjin’s later victory was already decided.',
      ],
    },
    'toghrul-kereit-ruler': {
      paragraphs: [
        'Toghrul belonged to an important Kereit political context independent of Temüjin.',
        'Kereit power helps explain why cooperation with Toghrul mattered—and why its collapse in 1203 transformed the eastern steppe.',
      ],
    },
    'cooperation': {
      paragraphs: [
        'Narrative traditions preserve changing cooperation between Toghrul and Temüjin.',
        'Cooperation included military and political support. It remained contingent, as the rupture of 1203 shows.',
      ],
    },
    'rupture-1203': {
      paragraphs: [
        'Their relationship ended in rupture and conflict associated with the Kereit defeat.',
        'The defeat reorganized Kereit political power. It did not make Kereit people disappear.',
      ],
    },
    'changing-relations': {
      paragraphs: [
        'Alliance and rivalry describe phases, not fixed identities.',
        'The network diagram for this chapter is a teaching device for that point. It is not a complete diplomatic archive.',
      ],
    },
  },
  'chapter-struggle-eastern-steppe': {
    'coalitions-1201': {
      paragraphs: [
        'Jamukha’s source-based elevation reflects competing coalition politics in 1201.',
        'Several alignments still had a chance of organizing the eastern steppe. Later dominance should not erase that openness.',
      ],
    },
    'not-inevitable': {
      paragraphs: [
        'Temüjin’s later dominance was not predetermined.',
        'Military success, defection, and the collapse of rival centres accumulated. History here is sequence, not fate.',
      ],
    },
    'kereit-1203': {
      paragraphs: [
        'The Kereit defeat was a major political transformation, not the disappearance of Kereit people.',
        'Toghrul’s fall removed a principal rival centre. Households and followers could be incorporated, scattered, or later reappear under new conditions.',
      ],
    },
    'naiman-1204': {
      paragraphs: [
        'The major Naiman defeat changed political power without making Naiman people extinct.',
        'Tayang Khan is associated with that transformation. Kuchlug’s later career shows that Naiman political stories continued beyond 1204.',
      ],
    },
    'continued-resistance': {
      paragraphs: [
        'Resistance and political realignment continued around 1204–1205.',
        'The path to the 1206 assembly was still a process of incorporation and unfinished conflict, not a coronation tour.',
      ],
    },
    'coalition-growth': {
      paragraphs: [
        'Temüjin’s coalition incorporated changing supporters and political relationships.',
        'Incorporation of defeated elites is part of how a new order was built. It is not evidence that every defeated community consented.',
      ],
    },
    'defeat-not-disappearance': {
      paragraphs: [
        'Political communities can fragment or reorganize after military defeat.',
        'The chapter repeats this caution because the sources and later memory both tempt readers to treat victory as erasure.',
      ],
    },
    'toward-1206': {
      paragraphs: [
        'These transformations prepared the political setting for the assembly of 1206.',
        'Preparation is not identity. 1206 still has to be understood as a reorganization with its own limits.',
      ],
    },
  },
  'chapter-new-order-1206': {
    'before-1206': {
      paragraphs: [
        'The new order emerged from an already complex political world.',
        'Households, coalitions, and imperial neighbours had shaped the field. 1206 did not create Mongols, Mongolia, or the steppe.',
      ],
    },
    'assembly-1206': {
      paragraphs: [
        'The project treats the 1206 assembly or quriltai through controlled, source-aware wording.',
        'Medieval narratives describe recognition and reorganization. They do not authorize a modern parliamentary reconstruction or invented speeches.',
      ],
    },
    'recognition-chinggis': {
      paragraphs: [
        'Temüjin was recognized as Chinggis Khan in the political reorganization of 1206.',
        'The title marks a new claim to supreme leadership within that order. It is not a biological or ethnic beginning.',
      ],
    },
    'political-reorganization': {
      paragraphs: [
        'The assembly marked the formation of a new Mongol political order.',
        'Organization, command, and incorporation of elites changed. Populations did not suddenly appear.',
      ],
    },
    'not-first-mongols': {
      paragraphs: [
        'Mongol groupings and political histories existed before 1206.',
        'The name and the communities have earlier histories. 1206 reorganized power among them and among recently defeated neighbours.',
      ],
    },
    'not-beginning-history': {
      paragraphs: [
        'The date cannot be treated as the beginning of Mongolia’s or the steppe’s history.',
        'Era I and the earlier chapters of Era II exist so that this mistake is harder to make.',
      ],
    },
    'what-changed': {
      paragraphs: [
        'Political organization and leadership changed; populations did not suddenly appear.',
        'What follows in Era III is expansion of an order that had just been recognized—not the birth of a people.',
      ],
    },
    'toward-era-three': {
      paragraphs: [
        'Era III examines how the order of 1206 became a Eurasian empire and why united politics entered crisis by 1260.',
        'That story begins from this reorganization. It does not require treating 1206 as the start of Mongolian history.',
      ],
      questions: [
        { question: 'Did Mongols begin in 1206?', answer: 'No. Mongol groupings and political histories existed before the assembly. 1206 reorganized leadership and political order; it did not create a people from nothing.', confidence: 'ESTABLISHED' },
        { question: 'Was Temüjin’s victory inevitable?', answer: 'No. The twelfth-century field contained several powers, and the conflicts of 1201–1205 could have ended differently. Later empire should not be read backward as destiny.', confidence: 'INTERPRETED' },
      ],
    },
  },
}

const eraThreePatches = {
  'chapter-building-new-order-1206': {
    'era-two-transition': {
      paragraphs: [
        'The order of 1206 emerged from earlier coalitions, rivalries, and institutions rather than a political vacuum.',
        'Era III therefore begins in continuity with Era II. Expansion is a new problem of government, not a new people.',
      ],
    },
    'chinggis-after-1206': {
      paragraphs: [
        'Chinggis Khan led an expanding imperial project whose outcomes were not predetermined.',
        'He did not personally command every campaign. Household members, incorporated elites, and delegated commanders were part of the order.',
      ],
    },
    'imperial-household': {
      paragraphs: [
        'Börte, their principal sons, and wider household relationships formed part of imperial political structure.',
        'Jochi, Chagatai, Ögedei, and Tolui later anchored major dynastic branches. Those branches should not yet be imagined as independent khanates.',
      ],
    },
    'elite-incorporation': {
      paragraphs: [
        'The empire incorporated supporters and defeated elites into changing structures of service and authority.',
        'Incorporation could be coercive. It is still historically different from annihilation of every defeated community.',
      ],
    },
    'delegated-command': {
      paragraphs: [
        'Commanders such as Muqali, Jebe, and Subutai demonstrate that Chinggis Khan did not personally command every campaign.',
        'Delegated command is how a Eurasian war could be fought at all. Individual genius is a poor model of the evidence.',
      ],
    },
    'military-political-order': {
      paragraphs: [
        'Military organization was interwoven with households and political obligations; it was not simply a force in which every soldier had one identical role.',
        'Decimal and household arrangements belong to this institutional history. This chapter does not reconstruct a complete, uniform army list.',
      ],
    },
    'imperial-ideology': {
      paragraphs: [
        'Claims to imperial authority developed alongside expansion. The evidence does not support treating the “Great Yassa” as one surviving fixed written code.',
        'Law, custom, and later memory should be kept distinct. Missing codes are not filled in here.',
      ],
    },
    'limits-order': {
      paragraphs: [
        'Later sources illuminate the new order from different perspectives and must not be read as neutral eyewitness records.',
        'The Secret History, Persian historiography, and modern synthesis are all used with that caution in the chapters that follow.',
      ],
    },
  },
  'chapter-western-xia-jin': {
    'western-xia-context': {
      paragraphs: [
        'The 1209 settlement created a tributary or subordinate relationship, not permanent uncontested control.',
        'Western Xia remained a political actor. The final campaigns of 1226–1227 show that the relationship was contingent.',
      ],
    },
    'jin-war-1211': {
      paragraphs: [
        'Major Mongol–Jin war began in 1211 within a longer struggle.',
        'The war outlasted Chinggis Khan. Capturing cities did not immediately end the Jin dynasty.',
      ],
    },
    'zhongdu-1215': {
      paragraphs: [
        'The capture of Zhongdu was a major conquest accompanied by coercion and destruction, but Jin political power continued.',
        'Urban capture and dynastic survival are different outcomes. Jin was defeated only in 1234, under Ögedei.',
      ],
    },
    'delegated-campaigns': {
      paragraphs: [
        'Imperial commanders operated with delegated authority across extended campaigns.',
        'The connected campaign records for Western Xia and the Jin war are teaching tools for sequence, not GPS route maps.',
      ],
    },
    'muqali': {
      paragraphs: [
        'Muqali held major responsibility in the Jin theater and should not be reduced to a minor assistant.',
        'Delegated command in North China is part of how the long eastern war was fought after the first campaigns.',
      ],
    },
    'western-xia-final': {
      paragraphs: [
        'Chinggis Khan’s final campaign in 1226–1227 returned to Western Xia.',
        'His death occurred during that campaign. Circumstantial stories of the death remain source traditions, treated in the next chapter.',
      ],
    },
    'jin-survives': {
      paragraphs: [
        'The Jin dynasty survived Chinggis Khan and was defeated only in 1234 under Ögedei.',
        'Eastern conquest was a process spanning two reigns. Era III keeps that process visible instead of collapsing it into 1215.',
      ],
    },
    'campaign-sequence-east': {
      paragraphs: [
        'The eastern campaigns were a sequence of political and military phases rather than a single conquest.',
        '1209, 1211, 1215, 1226–1227, and 1234 are markers in that sequence. They are not a complete operational diary.',
      ],
    },
  },
  'chapter-empire-turns-west': {
    'qara-khitai-kuchlug': {
      paragraphs: [
        'Jebe’s campaign against Kuchlug brought the former Qara Khitai domain under Mongol control around 1218.',
        'Kuchlug’s Naiman background and later Qara Khitai rule show post-1204 continuities. The campaign is a political transition, not a map of permanent borders.',
      ],
    },
    'invasion-1219': {
      paragraphs: [
        'The invasion of the Khwarazmian Empire began in 1219.',
        'It followed a diplomatic breakdown in which the Otrar crisis was an important, source-dependent stage—not a complete monocausal explanation.',
      ],
    },
    'bukhara-samarkand': {
      paragraphs: [
        'The 1220 campaign phase brought conquest, coercion, destruction, and displacement to major urban centers.',
        'Persian historiography preserves crucial evidence. Its casualty totals remain reports, not modern demographic counts.',
      ],
    },
    'urgench-command': {
      paragraphs: [
        'Jochi, Chagatai, and Ögedei were involved in the destructive campaign for Urgench amid command tensions.',
        'Princely participation shows household politics inside conquest. Invented scenes of quarrel are not added beyond what the sources support as a general problem of command.',
      ],
    },
    'jebe-subutai': {
      paragraphs: [
        'Their 1221–1223 expedition crossed several political regions without establishing a permanently fixed border.',
        'The chronology is the teaching frame. This foundation does not convert the expedition into a GPS itinerary.',
      ],
    },
    'kalka-1223': {
      paragraphs: [
        'The expedition culminated in victory over a coalition involving Rus’ princes and Cuman allies.',
        'The victory did not annex a uniform Rus’ state. The region was a landscape of principalities, revisited on a larger scale in the 1230s.',
      ],
    },
  },
  'chapter-chinggis-death-succession': {
    'final-campaign': {
      paragraphs: [
        'Chinggis Khan died in 1227 during the final Western Xia campaign.',
        'Death opened a succession interval. It did not freeze the empire into later khanate borders.',
      ],
    },
    'death-traditions': {
      paragraphs: [
        'Sources preserve differing details about his death; unsupported precise scenes are not reconstructed here.',
        'Competing traditions are evidence about memory and narrative. They are not reduced to one cinematic last moment.',
      ],
    },
    'succession-problem': {
      paragraphs: [
        'Supreme authority required dynastic negotiation and recognition rather than automatic modern-style inheritance.',
        'Assemblies, household coalitions, and regency were part of government. The throne was not an empty chair.',
      ],
    },
    'four-sons': {
      paragraphs: [
        'Jochi, Chagatai, Ögedei, and Tolui anchored four major dynastic branches within the imperial family.',
        'Branches are genealogical and political facts. Independent successor states are a later, uneven development.',
      ],
    },
    'tolui-regency': {
      paragraphs: [
        'Tolui governed as regent from 1227 to 1229; this interval was part of imperial government, not an empty gap.',
        'Regency as government is a theme that returns, still more clearly, after Ögedei’s death.',
      ],
    },
    'ogedei-accession': {
      paragraphs: [
        'Ögedei was recognized as Great Khan in 1229.',
        'Recognition followed negotiation. It made him more than a placeholder for his father.',
      ],
    },
    'branches-not-khanates': {
      paragraphs: [
        'Dynastic branches existed, but later successor-state boundaries and independence should not be projected backward into 1227.',
        'Era IV will show how regional orders became more autonomous after 1260. That story should not be started a generation too early.',
      ],
    },
  },
  'chapter-ogedei-governing-empire': {
    'ogedei-great-khan': {
      paragraphs: [
        'Ögedei exercised imperial authority from 1229 and should not be reduced to a placeholder successor.',
        'Administration, communications, and coordinated expansion developed during his reign through many actors.',
      ],
    },
    'administration': {
      paragraphs: [
        'Government relied on an imperial household, officials, and regional agents operating across different political traditions.',
        'Yelü Chucai appears in this administrative world. Practices varied by region; this was not a uniform modern bureaucracy.',
      ],
    },
    'taxation': {
      paragraphs: [
        'Fiscal practices were increasingly organized, though not uniformly imposed everywhere in one form.',
        'Revenue was a problem of distance and diversity. A single tax code is not asserted here.',
      ],
    },
    'yam': {
      paragraphs: [
        'The yam was regularized under Ögedei as a communications system; he did not create long-distance exchange from nothing.',
        'Relay stations organized imperial communication. They did not make every road safe.',
      ],
    },
    'karakorum': {
      paragraphs: [
        'Karakorum developed as an imperial center within the Orkhon Valley.',
        'Archaeological mapping informs its later material history. A full site experience is deferred and is not invented as a walking tour in this chapter.',
      ],
    },
    'jin-1234': {
      paragraphs: [
        'The Jin dynasty was defeated in 1234 after a long war spanning two reigns.',
        'Ögedei’s reign completed an eastern war begun under Chinggis Khan. Sequence is the lesson.',
      ],
    },
    'multiple-fronts': {
      paragraphs: [
        'Imperial forces operated simultaneously in several theaters under delegated commanders.',
        'The western campaigns of the late 1230s were one theater among others, not the whole empire on the march.',
      ],
    },
    'governance-network': {
      paragraphs: [
        'Imperial rule connected centers, households, officials, commanders, and relay stations without creating a uniform modern bureaucracy.',
        'The teaching diagram for this chapter is a network of mechanisms, not a constitution.',
      ],
    },
  },
  'chapter-expansion-across-eurasia': {
    'assembly-1235': {
      paragraphs: [
        'The 1235 assembly formed an important stage in coordinating campaigns without making every later operational detail certain.',
        'Planning and later operations should be kept distinct. Not every march is documented here.',
      ],
    },
    'batu-subutai': {
      paragraphs: [
        'Batu and Subutai held leading roles within a campaign involving several princes and commanders.',
        'Leadership was collective enough that reducing the war to one name distorts the evidence.',
      ],
    },
    'volga': {
      paragraphs: [
        'Campaigns transformed political communities around the Volga through conquest, coercion, and displacement.',
        'Those transformations belong to Jochid as well as imperial history. Later “Golden Horde” labels should not be projected backward as a finished state in 1236.',
      ],
    },
    'rus': {
      paragraphs: [
        'Multiple Rus’ principalities were conquered between 1236 and 1240; the region was not one uniform state.',
        'Plurality of victims and polities matters. A single “conquest of Russia” flattens the landscape.',
      ],
    },
    'poland-hungary': {
      paragraphs: [
        'Imperial forces campaigned in Poland and Hungary in 1241 as parts of a coordinated but multi-command operation.',
        'The teaching chronology is not a route map and does not invent unit-level itineraries.',
      ],
    },
    'other-theaters': {
      paragraphs: [
        'Western expansion occurred alongside eastern and southern imperial concerns; this foundation does not overextend into unsupported detail on Korea.',
        'Silence where sources are not integrated is an editorial choice, not a claim that nothing happened.',
      ],
    },
    'withdrawal-event': {
      paragraphs: [
        'The withdrawal from Hungary occurred in 1242.',
        'The event is established. Its causes are debated in the next section.',
      ],
    },
  },
  'chapter-queens-regents-throne': {
    'ogedei-death': {
      paragraphs: [
        'Ögedei’s death opened a contested succession rather than stopping imperial politics.',
        'The decade that followed was government by regents and households, not a vacancy between male khans.',
      ],
    },
    'toregene-regency': {
      paragraphs: [
        'Töregene governed from 1242 to 1246 and actively shaped the succession process.',
        'Regency was authority. She should not be treated as a pause in “real” rule.',
      ],
    },
    'guyuk-accession': {
      paragraphs: [
        'Güyük became Great Khan in 1246 after extended negotiation and competition.',
        'The delay itself is evidence that succession was political, not automatic.',
      ],
    },
    'guyuk-batu': {
      paragraphs: [
        'Their imperial military relationship later included political tension; motives and intentions should not be dramatized beyond the evidence.',
        'Tension between the Ögedeid centre and Batu’s western power is historically important. Invented personal hatred is not added.',
      ],
    },
    'guyuk-death': {
      paragraphs: [
        'Güyük’s death in 1248 reopened the question of supreme authority.',
        'Another regency followed. The pattern is institutional, not accidental.',
      ],
    },
    'oghul-regency': {
      paragraphs: [
        'Oghul-Qaimish governed as regent from 1248 to 1251 amid dynastic competition.',
        'Her government, like Töregene’s, belongs in the history of imperial rule.',
      ],
    },
    'sorghaghtani': {
      paragraphs: [
        'Sorghaghtani was a major actor in Toluid household politics and Möngke’s accession, not a romanticized figure who secretly controlled the whole empire.',
        'Household politics can be decisive without becoming a conspiracy story.',
      ],
    },
    'mongke-1251': {
      paragraphs: [
        'Möngke’s accession in 1251 marked Toluid ascendancy after a decade of active government and contest.',
        'The next chapter follows renewed expansion and the succession rupture after his death in 1259.',
      ],
    },
  },
  'chapter-mongke-united-empire-crisis': {
    'mongke-ascendancy': {
      paragraphs: [
        'Möngke’s accession shifted supreme authority to the Toluid branch after contested dynastic politics.',
        'Toluid ascendancy reorganized imperial politics. It did not make later Yuan structures already exist.',
      ],
    },
    'governance-reform': {
      paragraphs: [
        'Möngke pursued fiscal and administrative coordination across a diverse empire without making governance uniform everywhere.',
        'Reform is not the same as homogenization. Distance and regional traditions remained.',
      ],
    },
    'western-commission': {
      paragraphs: [
        'Hülegü developed a major western expedition under Möngke’s authority from 1253.',
        'The commission is not yet an Ilkhanate. That distinction is essential for Era IV.',
      ],
    },
    'qubilai-south': {
      paragraphs: [
        'Qubilai received campaign responsibilities in the south; later Yuan political structures are not projected backward into this phase.',
        'A southern command is not already Dadu, the Great Yuan title, or a China-only identity.',
      ],
    },
    'alamut-baghdad': {
      paragraphs: [
        'The campaigns overcame major Nizari strongholds in 1256 and captured Baghdad destructively in 1258. Reported casualty numbers remain source accounts.',
        'Violence is acknowledged. Numerical precision that medieval reports cannot bear is withheld.',
      ],
    },
    'mongke-death': {
      paragraphs: [
        'Möngke died during the Song campaign in 1259 without a settled succession.',
        'Open succession, not a scheduled transfer of office, created the crisis of 1260.',
      ],
    },
    'rival-claims': {
      paragraphs: [
        'Qubilai and Ariq Böke advanced competing claims, beginning the Toluid civil war.',
        'Neither claim was a simple rebellion against an already universally recognized ruler. Era IV begins from that fact.',
      ],
    },
    'rupture-not-disappearance': {
      paragraphs: [
        'The crisis fractured united imperial politics while Chinggisid states, institutions, political traditions, and Eurasian networks continued.',
        '1260 is a rupture in united government, not the end of Mongol imperial history.',
      ],
      questions: [
        { question: 'Did the empire split into four khanates in 1260?', answer: 'The succession crisis and civil war are established. Four fixed, fully independent states did not appear in a single moment. Regional autonomy increased unevenly while dynastic claims, diplomacy, and exchange continued.', confidence: 'INTERPRETED' },
        { question: 'Was the Ilkhanate already complete when Hülegü rode west?', answer: 'No. Hülegü began as a commander commissioned by Möngke. A distinct Ilkhanid order emerged through conquest, the 1260 crisis, and the demands of governing Iran and neighbouring regions.', confidence: 'ESTABLISHED / INTERPRETED' },
      ],
    },
  },
}

const teachingDevices = {
  'chapter-crisis-of-1260': {
    'why-crisis-matters': {
      callouts: [{ label: 'Teaching caution', text: '“Split in 1260” is useful shorthand only when it does not erase continuing connections or uneven regional development.', confidence: 'INTERPRETED' }],
      questions: [
        { question: 'Why does 1260 matter for later Mongol history?', answer: 'It changed the problem of government. Qubilai could defeat Ariq Böke without restoring the political relationships of Möngke’s reign. Later Yuan, Jochid, Chagataid, and Ilkhanid histories have to be read in that mixed field of regional courts and continuing Chinggisid connections.', confidence: 'ESTABLISHED / INTERPRETED' },
      ],
    },
  },
  'chapter-after-1368-yuan-court-steppe': {
    'after-1368-why-matters': {
      questions: [
        { question: 'Did Mongol history end in 1368?', answer: 'No. Withdrawal from Dadu ended Yuan rule over most of China, not Yuan dynastic claims or Mongol political history. The court continued north of the Great Wall through changing centres and succession.', confidence: 'ESTABLISHED' },
      ],
      callouts: [{ label: 'Editorial label', text: '“Northern Yuan” is a modern historiographical convenience, not proof of one centralized state from 1368 to 1635.', confidence: 'INTERPRETED' }],
    },
  },
  'chapter-toward-qing-rule-1691': {
    'not-same-time': {
      questions: [
        { question: 'Did all Mongols enter Qing rule in 1691?', answer: 'No. Southern Mongol and Chakhar relationships developed earlier and on different terms. The 1691 Dolon Nor assembly formalized a new relationship for Khalkha nobles with the Kangxi court. Dzungar history continued beyond 1691.', confidence: 'ESTABLISHED' },
      ],
    },
  },
  'chapter-occupation-revolution-1921': {
    'transformation-not-single-event': {
      questions: [
        { question: 'Was 1921 a simple national liberation?', answer: 'No. Chinese occupation, Ungern’s intervention, Mongolian revolutionary organization, and decisive Soviet military support overlapped. The outcome was neither pure liberation nor a story with no Mongolian political agency.', confidence: 'ESTABLISHED / INTERPRETED' },
      ],
    },
  },
  'chapter-building-democratic-state-1990-1992': {
    'what-1992-changed': {
      questions: [
        { question: 'Did democracy arrive complete in 1990?', answer: '1990 opened an institutional transition. Constitution-making, elections, and market shock continued through 1992 and after. The year is a beginning of a process, not a finished destination.', confidence: 'ESTABLISHED / INTERPRETED' },
      ],
    },
  },
  'chapter-altan-khan-buddhist-revival': {
    'not-single-revival': {
      questions: [
        { question: 'Did Altan Khan convert all Mongols in 1578?', answer: 'No. The 1578 meeting with Sonam Gyatso and related titles were important in patronage and institutional Buddhist expansion. They were not an instantaneous conversion of every Mongol community.', confidence: 'ESTABLISHED / INTERPRETED' },
      ],
    },
  },
}

export function applyChapterLearnOverlays(chapters) {
  const byId = new Map(chapters.map((chapter) => [chapter.id, chapter]))
  Object.entries(relatedPatches).forEach(([id, patch]) => applyRelated(byId.get(id), patch))
  ;[sectionPatches, eraThreePatches, teachingDevices].forEach((group) => {
    Object.entries(group).forEach(([chapterId, sections]) => {
      const chapter = byId.get(chapterId)
      if (!chapter) return
      Object.entries(sections).forEach(([sectionId, patch]) => {
        patchSection((chapter.sections ?? []).find((section) => section.id === sectionId), patch)
      })
    })
  })
  linkContinuations(chapters)
}

function splitProse(text, count) {
  if (count <= 1) return [String(text)]
  const sentences = String(text).split(/(?<=[.!?…])\s+/).filter(Boolean)
  const parts = sentences.length >= count ? sentences : String(text).split(/\s+/).filter(Boolean)
  if (parts.length < count) return [String(text)]
  const size = Math.ceil(parts.length / count)
  const out = []
  for (let index = 0; index < count; index += 1) {
    const chunk = parts.slice(index * size, index === count - 1 ? parts.length : (index + 1) * size).join(' ')
    if (chunk) out.push(chunk)
  }
  return out.length === count ? out : [String(text)]
}

export function applyMnChapterLearnOverlays(records, chapters, overlays) {
  Object.entries(overlays ?? {}).forEach(([chapterId, sections]) => {
    const record = records[chapterId]
    if (!record?.sectionPresentation) return
    Object.entries(sections).forEach(([sectionId, patch]) => {
      const localized = record.sectionPresentation[sectionId]
      if (!localized) return
      if (patch.lead) localized.lead = patch.lead
      if (patch.paragraphs) localized.paragraphs = patch.paragraphs
      else if (patch.second && Array.isArray(localized.paragraphs) && localized.paragraphs.length === 1) {
        localized.paragraphs = [localized.paragraphs[0], patch.second]
      }
      if (patch.callouts) localized.callouts = patch.callouts
      if (patch.questions) localized.questions = patch.questions
    })
  })
  alignMnChapterParagraphs(records, chapters)
}

export function alignMnChapterParagraphs(records, chapters) {
  chapters.forEach((chapter) => {
    const record = records[chapter.id]
    if (!record?.sectionPresentation) return
    ;(chapter.sections ?? []).forEach((section) => {
      const localized = record.sectionPresentation[section.id]
      if (!localized || !section.paragraphs?.length) return
      if (!Array.isArray(localized.paragraphs) || !localized.paragraphs.length) {
        if (localized.lead && section.paragraphs.length) {
          const split = splitProse(localized.lead, section.paragraphs.length)
          if (split.length === section.paragraphs.length) localized.paragraphs = split
        }
        return
      }
      if (localized.paragraphs.length === section.paragraphs.length) return
      if (localized.paragraphs.length === 1 && section.paragraphs.length > 1) {
        const split = splitProse(localized.paragraphs[0], section.paragraphs.length)
        if (split.length === section.paragraphs.length) localized.paragraphs = split
      }
    })
  })
}
