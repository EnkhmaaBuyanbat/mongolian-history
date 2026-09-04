export const chapters = [
  {
    id: 'chapter-bronze-age-steppe',
    eraId: 'ancient-steppe',
    number: '01',
    title: 'Bronze Age Steppe',
    subtitle: 'Monuments, Horses and Archaeological Landscapes',
    period: 'Principal focus: c. 1200–600 BCE',
    summary:
      'What can archaeology tell us about the communities of the Mongolian steppe before written imperial histories?',
    introTitle: 'Landscapes Before Written Empires',
    intro:
      'Long before Xiongnu imperial power, communities across the Mongolian steppe created monumental ceremonial and funerary landscapes. This archaeological chapter is a practical beginning for Era I, not the beginning of human history in Mongolia.',
    sectionIds: [
      'landscape-before-empires',
      'deer-stones',
      'khirgisuurs',
      'horses-ritual-landscape',
      'archaeology-can-and-cannot',
      'toward-later-steppe-polities',
    ],
    relatedEventIds: [],
    relatedPeopleIds: [],
    relatedPolityIds: [],
    relatedPlaceIds: [],
    relatedSiteIds: ['site-deer-stone-khirgisuur-landscapes'],
    relatedObjectIds: [],
    sourceIds: ['source-unesco-deer-stones'],
    status: 'in-progress',
    sections: [
      {
        id: 'landscape-before-empires',
        number: '01',
        title: 'A Landscape Before Empires',
        period: 'Late Bronze Age',
        lead: 'Pastoral communities lived across the Mongolian steppe long before surviving written political chronicles described its empires.',
        paragraphs: [
          'Archaeology is the primary evidence for these communities. Monuments, burials, animal remains and spatial relationships allow researchers to investigate lives not documented in contemporary written histories.',
          'These communities should not be labelled Xiongnu or Mongols on the basis of geography alone.',
        ],
        sourceIds: ['source-unesco-deer-stones'],
      },
      {
        id: 'deer-stones',
        number: '02',
        title: 'Deer Stones',
        period: 'c. 1200–600 BCE',
        lead: 'Deer stones are monumental standing stones, many bearing distinctive stylized deer imagery.',
        paragraphs: [
          'The UNESCO-listed tradition dates approximately from 1200 to 600 BCE. Examples can reach about four metres in height and occur both individually and in groups within wider ceremonial and funerary landscapes.',
          'The monuments preserve visual evidence, but the exact meaning of each carved image should not be invented.',
        ],
        sourceIds: ['source-unesco-deer-stones'],
      },
      {
        id: 'khirgisuurs',
        number: '03',
        title: 'Khirgisüürs',
        period: 'Late Bronze Age',
        lead: 'Khirgisüürs are monumental burial and ritual structures found within these archaeological landscapes.',
        paragraphs: [
          'They occur in spatial relationships with other features, including deer stones and smaller ritual structures. Archaeologists study the complexes as landscapes rather than treating each monument in isolation.',
          'Their physical relationships provide evidence, but they do not reveal every belief or ceremony directly.',
        ],
        sourceIds: ['source-unesco-deer-stones'],
      },
      {
        id: 'horses-ritual-landscape',
        number: '04',
        title: 'Horses, Ritual and Landscape',
        period: '',
        lead: 'Associated complexes can include horse remains and features interpreted as sacrificial or ritual deposits.',
        paragraphs: [
          'The placement of animal remains and structures helps researchers examine how people organized ceremonial and funerary space.',
          'Such evidence does not justify reconstructing a specific ceremony when the surviving material cannot establish its full sequence or meaning.',
        ],
        educationalVisual: {
          title: 'Conceptual Archaeological Landscape',
          variant: 'landscape',
          items: [
            { title: 'Deer Stone', text: 'monumental standing stone' },
            { title: 'Khirgisüür', text: 'burial / ritual structure' },
            { title: 'Horse-Related Feature', text: 'archaeological animal remains' },
            { title: 'Ceremonial Feature', text: 'spatially associated structure' },
          ],
          note: 'Not a reconstruction of one specific site.',
        },
        sourceIds: ['source-unesco-deer-stones'],
      },
      {
        id: 'archaeology-can-and-cannot',
        number: '05',
        title: 'What Archaeology Can — and Cannot — Tell Us',
        period: '',
        lead: 'Material evidence supports interpretation, but it does not answer every historical question.',
        paragraphs: [
          'Evidence includes monuments, burials, horse remains, spatial organization and material remains. Researchers use it to interpret ritual practices, social organization and pastoral lifeways.',
          'Material remains do not directly reveal exact ethnic self-identification, spoken language, complete political organization or the exact meaning of every image.',
        ],
        callouts: [{
          label: 'Archaeology Provides Evidence — Interpretation Builds from It',
          text: 'An interpretation should remain proportionate to what the archaeological context can support.',
          confidence: 'ESTABLISHED / INTERPRETED',
        }],
        sourceIds: ['source-unesco-deer-stones'],
      },
      {
        id: 'toward-later-steppe-polities',
        number: '06',
        title: 'From Bronze Age Worlds Toward Later Steppe Polities',
        period: '',
        lead: 'Later political formations arose within a landscape shaped by a much deeper human and pastoral history.',
        paragraphs: [
          'The monumental landscapes demonstrate long histories of movement, ritual and community before the written records of later empires.',
          'This deep history does not establish simple ethnic continuity from deer-stone communities to the Xiongnu or to modern Mongols.',
        ],
        relatedEntityIds: ['site-deer-stone-khirgisuur-landscapes'],
        sourceIds: ['source-unesco-deer-stones'],
      },
    ],
  },
  {
    id: 'chapter-xiongnu-world',
    eraId: 'ancient-steppe',
    number: '02',
    title: 'The Xiongnu World',
    subtitle: 'Rise of a Steppe Empire',
    period: 'c. 3rd century BCE – 2nd century CE',
    summary: '',
    intro:
      'The Xiongnu created a major steppe empire centred on the territory of present-day Mongolia. Their political world interacted extensively with Han China and participated in long-distance networks across the Eurasian steppe.',
    sectionIds: [
      'origins-and-context',
      'rise-of-modu',
      'empire-of-the-steppe',
      'xiongnu-and-han-china',
      'life-and-society',
      'archaeology',
      'transformation',
      'questions-and-debates',
    ],
    relatedEventIds: [
      'event-modu-becomes-chanyu',
      'event-confrontation-baideng',
      'event-early-han-xiongnu-heqin',
      'event-death-modu-chanyu',
    ],
    relatedPeopleIds: ['person-modu-chanyu'],
    relatedPolityIds: ['polity-xiongnu'],
    relatedPlaceIds: [],
    relatedSiteIds: [
      'site-noyon-uul-noin-ula',
      'site-gol-mod',
      'site-gol-mod-ii',
      'site-duurlig-nars',
      'site-takhiltyn-khotgor',
    ],
    relatedObjectIds: [],
    sourceIds: ['source-unesco-xiongnu-cemetery', 'source-oxford-xiongnu'],
    status: 'in-progress',
    sections: [
      {
        id: 'origins-and-context',
        number: '01',
        title: 'Origins and Context',
        period: 'Before c. 209 BCE',
        lead:
          'Long before the Xiongnu became one of the great political powers of Inner Asia, the eastern steppe was home to mobile pastoral communities whose economies, technologies and political relationships had been developing for centuries.',
        paragraphs: [
          'By the later first millennium BCE, communities across the eastern steppe participated in increasingly extensive networks of movement, exchange, warfare and political alliance.',
          'The Xiongnu appear in Chinese written sources before the formation of their great imperial political order. Archaeology, however, shows that the emergence of the Xiongnu belonged to a much longer transformation of societies across the eastern steppe rather than the sudden appearance of an entirely new people.',
          'During the third century BCE, political competition intensified across the region. By the end of that century, Xiongnu political consolidation under Modu Chanyu transformed the scale of political organization across Inner Asia.',
        ],
        callouts: [
          {
            label: 'What Remains Uncertain',
            text: 'The precise linguistic and ethnic origins of the Xiongnu remain debated. The Xiongnu should not simply be labelled "ancient Mongols."',
            confidence: 'DEBATED',
          },
        ],
        relatedEntityIds: [],
        sourceIds: ['source-oxford-xiongnu'],
        mediaSlot: null,
        mapSlot: null,
      },
      {
        id: 'rise-of-modu',
        number: '02',
        title: 'Rise of Modu',
        period: 'c. 209 BCE',
        lead: 'Around 209 BCE, Modu became Chanyu and presided over a dramatic expansion and consolidation of Xiongnu power.',
        paragraphs: [
          "Ancient Chinese historical tradition describes a violent struggle surrounding Modu's rise to power. The Shiji tells stories involving hostage-taking, Modu's escape, the training of an exceptionally loyal cavalry force and his eventual killing of his father, Touman.",
          "These stories are important historical sources, but their dramatic details should be presented as the Shiji's account rather than as independently verified events.",
          "At the broader political level, Modu's reign marked a major expansion of Xiongnu authority. Warfare, political incorporation and relationships with regional elites helped create an imperial system extending across large parts of Inner Asia.",
        ],
        callouts: [
          {
            label: 'Ancient Source',
            text: 'The Shiji preserves the famous account of Modu, the whistling arrow and the overthrow of Touman. The narrative is historically important, but its dramatic details require source-critical treatment.',
            confidence: 'TRADITION / SOURCE ACCOUNT',
          },
        ],
        relatedEntityIds: ['person-modu-chanyu', 'event-modu-becomes-chanyu'],
        sourceIds: ['source-oxford-xiongnu', 'source-loc-modun'],
        mediaSlot: null,
        mapSlot: null,
      },
      {
        id: 'empire-of-the-steppe',
        number: '03',
        title: 'Empire of the Steppe',
        period: '',
        lead: 'The Xiongnu Empire was more than an army of mounted pastoralists. It was a large political system capable of connecting communities across enormous distances.',
        paragraphs: [
          'At the centre of imperial authority stood the Chanyu. Governing the wider empire depended on powerful regional leaders and hierarchies of authority distributed across different parts of the steppe.',
          'The empire incorporated populations with varied cultural, economic and probably linguistic backgrounds. It should therefore be understood as an imperial political world rather than a single homogeneous tribe.',
          'Pastoralism formed an important economic foundation, but the Xiongnu world also included agriculture, settlements, craft production, exchange and access to resources obtained through long-distance political networks.',
        ],
        callouts: [
          {
            label: 'Key Idea',
            text: 'Mobility did not mean political simplicity. Xiongnu institutions were adapted to the geography and economies of the Inner Asian steppe.',
            confidence: 'INTERPRETED',
          },
        ],
        relatedEntityIds: ['polity-xiongnu'],
        sourceIds: ['source-oxford-xiongnu'],
        mediaSlot: null,
        mapSlot: null,
      },
      {
        id: 'xiongnu-and-han-china',
        number: '04',
        title: 'Xiongnu and Han China',
        period: '',
        lead: 'The relationship between the Xiongnu and Han empires included warfare, diplomacy, exchange and political competition.',
        paragraphs: [
          'In 200 BCE, Emperor Gaozu of Han confronted forces commanded by Modu during the campaign associated with Baideng. The episode demonstrated the military strength of the Xiongnu and the limits of early Han power on the northern frontier.',
          'Soon afterward, the Han court pursued the diplomatic policy commonly known as heqin. Marriage arrangements and transfers of goods formed part of attempts to manage relations between the two imperial powers.',
          'Heqin did not create permanent peace. Relations continued to involve negotiation, exchange, frontier conflict and changing political strategies.',
          "During the reign of Emperor Wu, Han strategy became substantially more militarized, contributing to prolonged conflict and expanding Han involvement in Central Asian politics.",
        ],
        callouts: [
          {
            label: 'Enemies — But Also Connected',
            text: 'Han–Xiongnu relations cannot be reduced to warfare. Diplomacy, exchange, migration and political rivalry connected the histories of both empires.',
            confidence: 'ESTABLISHED',
          },
        ],
        relatedEntityIds: ['event-confrontation-baideng', 'event-early-han-xiongnu-heqin'],
        sourceIds: ['source-oxford-xiongnu'],
        mediaSlot: null,
        mapSlot: null,
      },
      {
        id: 'life-and-society',
        number: '05',
        title: 'Life and Society',
        period: '',
        lead: 'There was no single Xiongnu way of life across the entire empire.',
        paragraphs: [
          'Pastoralism and livestock were fundamental to many Xiongnu communities. Horses were important for transportation, herding, communication, politics and warfare.',
          'Archaeology also challenges the stereotype that the Xiongnu world consisted entirely of constantly mobile pastoralists. Evidence from settlements demonstrates cultivation and permanent structures alongside pastoral economies.',
          'Material remains include ceramics, metalwork, weapons, horse equipment, ornaments and imported objects. Their archaeological contexts help researchers investigate production, exchange, social status and long-distance connections.',
          'Burial evidence also demonstrates substantial differences in wealth and status. Monumental elite graves, however, should not be treated as representative of everyday life for every Xiongnu person.',
        ],
        callouts: [
          {
            label: 'Myth / Evidence',
            text: 'MYTH: Mobile pastoral societies had no settlements or agriculture.\n\nEVIDENCE: Xiongnu-period archaeology documents settlements, cultivation and permanent structures alongside pastoral mobility.',
            confidence: 'ESTABLISHED',
          },
        ],
        relatedEntityIds: [],
        sourceIds: ['source-oxford-xiongnu'],
        mediaSlot: null,
        mapSlot: null,
      },
      {
        id: 'archaeology',
        number: '06',
        title: 'Explore the Evidence',
        period: '',
        lead: 'Archaeology allows us to investigate the Xiongnu world through settlements, cemeteries, burial architecture and material objects rather than relying only on texts written outside the empire.',
        paragraphs: [
          'Elite cemeteries across Mongolia reveal substantial investment in funerary architecture and ritual. Monumental tombs, satellite graves, sacrificial structures and archaeological objects provide evidence for social hierarchy, political organization and long-distance connections.',
        ],
        callouts: [
          {
            label: 'Reading Objects Carefully',
            text: 'An imported object demonstrates a connection, but it does not by itself tell us exactly how that object travelled. Trade, diplomacy, gifting, redistribution and other processes must be evaluated from archaeological context.',
            confidence: 'ESTABLISHED / INTERPRETIVE CAUTION',
          },
        ],
        relatedEntityIds: [
          'site-noyon-uul-noin-ula',
          'site-gol-mod',
          'site-gol-mod-ii',
          'site-duurlig-nars',
          'site-takhiltyn-khotgor',
        ],
        sourceIds: ['source-prehistoric-mongolian-archaeology'],
        mediaSlot: {
          label: 'Interactive Archaeology',
          text: 'Future experience: Explore a Xiongnu elite tomb',
        },
        mapSlot: {
          type: 'archaeology-map',
          siteIds: [
            'site-noyon-uul-noin-ula',
            'site-gol-mod',
            'site-gol-mod-ii',
            'site-duurlig-nars',
            'site-takhiltyn-khotgor',
          ],
        },
        evidenceCases: [
          {
            id: 'evidence-gol-mod-ii-roman-glass',
            siteId: 'site-gol-mod-ii',
            evidenceTitle: 'Roman glass vessel',
            evidenceObjectId: 'object-gol-mod-ii-roman-glass-vessel',
            evidenceSummary:
              'A Roman glass vessel was recovered from a satellite burial associated with Tomb 1 at Gol Mod II.',
            interpretation:
              'The presence of Roman glass in a Xiongnu elite funerary context demonstrates that objects could move across very long distances through the interconnected worlds of Eurasia.',
            caution:
              'The object does not demonstrate that Romans lived at Gol Mod II or that the Xiongnu had direct contact with the individual Roman craftsperson who produced it. The precise chain through which the vessel travelled should not be invented.',
            sourceIds: ['source-unesco-xiongnu-cemetery'],
            confidence: 'ESTABLISHED / INTERPRETIVE CAUTION',
          },
          {
            id: 'evidence-duurlig-nars-ear-cup',
            siteId: 'site-duurlig-nars',
            evidenceTitle: 'Inscribed lacquer ear-cup',
            evidenceObjectId: 'object-duurlig-nars-inscribed-ear-cup',
            evidenceSummary:
              'Fragments of a lacquered ear-cup bearing a Chinese inscription were identified among material from Barrow 1 at Duurlig Nars.',
            interpretation:
              'Study of the surviving inscription indicates that the cup was produced in a central factory for imperial use. Its presence in a Xiongnu elite burial provides evidence for movement of prestigious manufactured objects between political and cultural worlds.',
            caution:
              'The object alone does not establish exactly how it reached Duurlig Nars. Possible mechanisms such as diplomacy, gifting, exchange or redistribution should not be presented as established unless supported by a source.',
            sourceIds: ['source-springer-duurlig-earcup-2025'],
            confidence: 'ESTABLISHED / INTERPRETIVE CAUTION',
          },
          {
            id: 'evidence-noyon-uul-elite-material',
            siteId: 'site-noyon-uul-noin-ula',
            evidenceTitle: 'Elite burial materials at Noyon Uul',
            evidenceSummary:
              'Noyon Uul has produced rich elite funerary material that demonstrates social status, skilled production and long-distance connections.',
            interpretation: '',
            caution:
              'Elite cemetery assemblages should not be treated as representative of the material life of every person living within the Xiongnu Empire.',
            sourceIds: ['source-prehistoric-mongolian-archaeology'],
            confidence: 'ESTABLISHED / INTERPRETIVE CAUTION',
          },
        ],
      },
      {
        id: 'transformation',
        number: '07',
        title: 'Transformation',
        period: '',
        lead: 'The Xiongnu Empire did not disappear in a single event.',
        paragraphs: [
          'From the first century BCE, military pressure, competition among elites, succession disputes and changing alliances increasingly challenged Xiongnu imperial cohesion.',
          'Political fragmentation eventually produced competing Xiongnu rulers and changing relationships with the Han Empire.',
          'Around the middle of the first century CE, historical sources describe a division conventionally known as the Northern and Southern Xiongnu.',
          'By the late first and second centuries CE, the political landscape of the Mongolian steppe was changing substantially. Xianbei groups became increasingly important across territories formerly dominated by the Xiongnu.',
          'The end of Xiongnu imperial unity was therefore not the disappearance of its populations. Communities, elites and political relationships continued within new political environments.',
        ],
        callouts: [
          {
            label: 'The End of an Empire Is Not the End of Its People',
            text: 'Political identities can disappear or transform without the populations associated with them simply vanishing.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: ['event-xianbei-defeat-northern-xiongnu-155'],
        sourceIds: ['source-oxford-xiongnu'],
        mediaSlot: null,
        mapSlot: null,
        continuation: {
          title: 'Continue the Journey',
          text: 'Chapter 03 — After the Xiongnu',
          status: 'Coming Soon',
        },
      },
      {
        id: 'questions-and-debates',
        number: '08',
        title: 'Questions and Debates',
        period: '',
        questions: [
          {
            question: 'Were the Xiongnu Mongols?',
            answer: 'The Xiongnu Empire was centred substantially on the Mongolian steppe and is fundamental to the ancient history of present-day Mongolia. However, the evidence does not justify simply identifying the Xiongnu as Mongols in the modern ethnic or linguistic sense.',
            confidence: 'DEBATED',
          },
          {
            question: 'What language did the Xiongnu speak?',
            answer: 'The language or languages associated with the Xiongnu remain debated. Different linguistic affiliations have been proposed, but the surviving evidence is too limited for the website to present one identification as settled fact.',
            confidence: 'DEBATED',
          },
          {
            question: 'Were the Xiongnu the Huns?',
            answer: 'The relationship between the Xiongnu and the later European Huns has long been debated. Recent ancient-DNA research demonstrates genealogical connections between some Hun-period individuals and Xiongnu-period populations, including elite Xiongnu contexts. This does not demonstrate that the European Huns as a whole were simply the Xiongnu Empire transplanted westward.',
            confidence: 'DEBATED / NEW EVIDENCE',
          },
          {
            question: "Can DNA determine someone's ethnicity?",
            answer: "No. Ancient DNA can investigate biological ancestry, kinship and population relationships. It cannot by itself determine a person's language, political identity or cultural self-identification.",
            confidence: 'ESTABLISHED',
          },
          {
            question: 'How should we use Chinese historical sources?',
            answer: 'Chinese historical works are indispensable sources for Xiongnu history, but they were written within their own political and literary contexts. The chapter should distinguish what an ancient source reports from what archaeology demonstrates and what modern historians reconstruct.',
            confidence: 'ESTABLISHED / SOURCE CRITICISM',
          },
        ],
        relatedEntityIds: [],
        sourceIds: ['source-oxford-xiongnu'],
        mediaSlot: null,
        mapSlot: null,
      },
    ],
  },
  {
    id: 'chapter-after-xiongnu',
    slug: 'after-the-xiongnu',
    eraId: 'ancient-steppe',
    number: '03',
    title: 'After the Xiongnu',
    subtitle: 'Fragmentation, Migration and the Rise of the Xianbei',
    period: 'c. 60 BCE – late 2nd century CE',
    summary:
      'What happened to the eastern steppe after Xiongnu imperial unity weakened?',
    introTitle: 'A Steppe in Transformation',
    intro:
      'Xiongnu imperial unity weakened through a long process of political competition, changing relations with Han and military pressure. The communities and political traditions associated with the Xiongnu did not simply disappear, while Xianbei groups became increasingly prominent in a changing eastern steppe.',
    sectionIds: [
      'empire-under-pressure',
      'division-and-recovery',
      'northern-xiongnu-lose-steppe',
      'changing-steppe',
      'who-were-xianbei',
      'tanshihuai',
      'xiongnu-did-not-vanish',
      'new-political-landscape',
    ],
    relatedEventIds: [
      'event-rival-chanyu-claimants-57-bce',
      'event-huhanye-alliance-han-53-bce',
      'event-defeat-zhizhi-talas-36-bce',
      'event-wang-mang-xiongnu-recovery',
      'event-northern-southern-xiongnu-division-48',
      'event-campaigns-northern-xiongnu-89-91',
      'event-xianbei-defeat-northern-xiongnu-155',
      'event-tanshihuai-confederation-second-century',
      'event-death-tanshihuai-181',
    ],
    relatedPeopleIds: ['person-tanshihuai'],
    relatedPolityIds: ['polity-xiongnu', 'polity-xianbei-political-world'],
    relatedPlaceIds: [],
    relatedSiteIds: [],
    relatedObjectIds: [],
    sourceIds: [
      'source-oxford-xiongnu',
      'source-pearce-northern-wei',
      'source-early-nomads-eastern-steppe',
    ],
    status: 'in-progress',
    sections: [
      {
        id: 'empire-under-pressure',
        number: '01',
        title: 'An Empire Under Pressure',
        period: '57–36 BCE',
        lead:
          'Xiongnu imperial power remained important after Modu, but central authority came under growing pressure.',
        paragraphs: [
          'Han military and diplomatic pressure combined with internal succession competition to weaken central authority over time.',
          'In 57 BCE, several rival claimants held the title of Chanyu. In 53 BCE, Huhanye entered a subordinate alliance with Han, while another claimant, Zhizhi, pursued power farther west.',
          'In 36 BCE, Han forces defeated Zhizhi at Talas. These events marked stages in a prolonged political transformation rather than one moment when the Xiongnu suddenly ceased to exist.',
        ],
        callouts: [
          {
            label: 'Decline Was a Process — Not a Single Collapse',
            text: 'Military pressure, succession competition and changing alliances weakened Xiongnu imperial cohesion across generations.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: [
          'event-rival-chanyu-claimants-57-bce',
          'event-huhanye-alliance-han-53-bce',
          'event-defeat-zhizhi-talas-36-bce',
        ],
        sourceIds: ['source-oxford-xiongnu'],
      },
      {
        id: 'division-and-recovery',
        number: '02',
        title: 'Division and Recovery',
        period: '9–48 CE',
        lead:
          'Xiongnu political power did not disappear immediately after the conflicts of the first century BCE.',
        paragraphs: [
          'During the political disruption associated with Wang Mang, from 9 to 23 CE, Xiongnu influence recovered for a period.',
          'Around 48 CE, the Xiongnu political world divided into formations conventionally called the Northern and Southern Xiongnu.',
          'The Southern Xiongnu entered a dependent relationship with Han. The Northern Xiongnu continued for a time as an independent political force on the steppe.',
        ],
        callouts: [
          {
            label: 'Northern Xiongnu / Southern Xiongnu',
            text: 'NORTHERN: continued as an independent steppe political force for a period.\n\nSOUTHERN: entered a dependent relationship with Han.',
            confidence: 'ESTABLISHED',
          },
          {
            label: 'Teaching Statement',
            text: 'Political fragmentation did not mean the disappearance of Xiongnu people.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: [
          'event-wang-mang-xiongnu-recovery',
          'event-northern-southern-xiongnu-division-48',
        ],
        sourceIds: ['source-oxford-xiongnu'],
      },
      {
        id: 'northern-xiongnu-lose-steppe',
        number: '03',
        title: 'The Northern Xiongnu Lose the Steppe',
        period: '89–91 CE',
        lead:
          'Major campaigns by Han and allied forces in 89–91 CE severely damaged Northern Xiongnu political dominance.',
        paragraphs: [
          'These campaigns changed the balance of power across the eastern steppe and contributed to the displacement and fragmentation of Northern Xiongnu authority.',
          'The campaigns should not be described as the extermination or disappearance of the Xiongnu. The year 91 CE was not an absolute ethnic end date.',
          'The chronology of fragmentation includes rival Chanyu in 57 BCE, Huhanye’s alliance with Han in 53 BCE, Zhizhi’s defeat in 36 BCE, the Northern and Southern division around 48 CE and the campaigns of 89–91 CE.',
        ],
        callouts: [
          {
            label: 'Historical Confidence',
            text: 'The political consequences of the campaigns are established; treating them as the disappearance of a people is not supported.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: ['event-campaigns-northern-xiongnu-89-91'],
        sourceIds: ['source-oxford-xiongnu'],
      },
      {
        id: 'changing-steppe',
        number: '04',
        title: 'A Changing Steppe',
        period: 'Late 1st–2nd centuries CE',
        lead:
          'As Northern Xiongnu authority weakened, the political landscape of the eastern steppe changed.',
        paragraphs: [
          'Xianbei groups became increasingly prominent in territories that had formerly been dominated by Xiongnu political power.',
          'This change was not a clean dynastic succession from Xiongnu to Xianbei. Different communities and political formations coexisted, competed and changed across time.',
        ],
        callouts: [
          {
            label: 'The Steppe Did Not Change Hands in a Single Moment',
            text: 'Changing political dominance involved overlapping groups, migrations, alliances and conflicts rather than a single transfer of power.',
            confidence: 'INTERPRETED',
          },
        ],
        relatedEntityIds: [
          'polity-xiongnu',
          'polity-xianbei-political-world',
          'event-xianbei-defeat-northern-xiongnu-155',
        ],
        sourceIds: [
          'source-oxford-xiongnu',
          'source-pearce-northern-wei',
          'source-early-nomads-eastern-steppe',
        ],
      },
      {
        id: 'who-were-xianbei',
        number: '05',
        title: 'Who Were the Xianbei?',
        period: '',
        lead:
          'Xianbei was a broad historical designation associated with numerous groups rather than one continuously unified empire.',
        paragraphs: [
          'Different Xianbei political groups and coalitions existed at different times. Their histories should not be compressed into the story of a single state.',
          'Later historically important Xianbei-associated groups included the Tuoba and Murong, which followed distinct political trajectories.',
        ],
        callouts: [
          {
            label: 'What We Should Not Assume',
            text: 'The Xianbei were not one continuously unified state waiting to inherit the Xiongnu Empire.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: ['polity-xianbei-political-world'],
        sourceIds: ['source-pearce-northern-wei', 'source-early-nomads-eastern-steppe'],
      },
      {
        id: 'tanshihuai',
        number: '06',
        title: 'Tanshihuai',
        period: 'Second half of the 2nd century CE',
        lead:
          'Tanshihuai became a major Xianbei leader during the second century CE.',
        paragraphs: [
          'He temporarily brought many Xianbei groups under his leadership, creating a powerful but impermanent coalition.',
          'Ancient Chinese historical sources describe his political influence as extending widely across former Xiongnu territories. These textual descriptions are evidence for the reach attributed to his power, not precise modern borders.',
          'Tanshihuai is included in the People index; a full individual story page has not yet been created.',
        ],
        callouts: [
          {
            label: 'Ancient Source Account',
            text: 'Detailed territorial descriptions depend strongly on ancient Chinese historical narratives and should not be read as a precise modern map.',
            confidence: 'TRADITION / SOURCE ACCOUNT',
          },
        ],
        relatedEntityIds: [
          'person-tanshihuai',
          'event-tanshihuai-confederation-second-century',
        ],
        link: { href: '/people', label: 'Find Tanshihuai in People' },
        sourceIds: ['source-pearce-northern-wei', 'source-early-nomads-eastern-steppe'],
      },
      {
        id: 'xiongnu-did-not-vanish',
        number: '07',
        title: 'Xiongnu Did Not Vanish',
        period: '',
        lead:
          'The weakening of Northern Xiongnu dominance did not end Xiongnu political and social histories.',
        paragraphs: [
          'Southern Xiongnu communities continued inside and around northern China under changing political conditions.',
          'Other communities, identities and descendants associated with Xiongnu histories continued within new relationships and political environments.',
        ],
        callouts: [
          {
            label: 'Political Empire ≠ People',
            text: 'A political system can collapse while communities, identities and descendants continue under changed circumstances.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: ['polity-xiongnu'],
        sourceIds: ['source-oxford-xiongnu'],
      },
      {
        id: 'new-political-landscape',
        number: '08',
        title: 'A New Political Landscape',
        period: 'c. 181 CE and after',
        lead:
          'Tanshihuai died around 181 CE, and his broader coalition did not remain a permanently unified Xianbei empire.',
        paragraphs: [
          'Political fragmentation persisted after his death. Later Xianbei-associated political houses followed different trajectories rather than continuing one unbroken state.',
          'The later eastern steppe eventually produced the political world that preceded the Rouran Khaganate, but Xiongnu, Xianbei and Rouran history must not be presented as a simple sequence of dynastic succession.',
        ],
        callouts: [
          {
            label: 'Not a Simple Succession',
            text: 'Xiongnu → Xianbei → Rouran is not a simple dynasty sequence. Each name encompasses different political formations and historical circumstances.',
            confidence: 'INTERPRETED',
          },
        ],
        relatedEntityIds: [
          'event-death-tanshihuai-181',
          'polity-xianbei-political-world',
          'polity-rouran-khaganate',
        ],
        sourceIds: ['source-pearce-northern-wei', 'source-early-nomads-eastern-steppe'],
      },
    ],
  },
  {
    id: 'chapter-rouran-khaganate',
    eraId: 'ancient-steppe',
    number: '04',
    title: 'The Rouran Khaganate',
    subtitle: 'Power, Confederation and a Changing Steppe',
    period: '402–555 CE',
    summary:
      'How did the Rouran build a major steppe political order, and why is their history so difficult to reconstruct?',
    introTitle: 'Power in a Changing Steppe',
    intro:
      'The Rouran emerged within a complex political landscape shaped by the long transformations that followed Xiongnu and Xianbei power. Their rise was not the next step in a simple Xiongnu-to-Xianbei-to-Rouran dynastic succession.',
    sectionIds: [
      'before-the-khaganate',
      'shelun-rise-rouran-power',
      'governing-steppe-confederation',
      'rouran-northern-china',
      'rouran-archaeology',
      'difficult-to-map',
      'rise-of-turk-power',
      'end-rouran-dominance',
    ],
    relatedEventIds: [
      'event-rouran-khaganate-established-402',
      'event-rise-of-turk-power-552',
    ],
    relatedPeopleIds: ['person-yujiulu-shelun', 'person-bumin-qaghan'],
    relatedPolityIds: ['polity-rouran-khaganate', 'polity-turk-political-world'],
    relatedPlaceIds: [],
    relatedSiteIds: [],
    relatedObjectIds: [],
    sourceIds: [
      'source-kradin-rouran-society',
      'source-kradin-rouran-empire',
      'source-cambridge-rouran-chronology',
      'source-pearce-northern-wei',
      'source-early-nomads-eastern-steppe',
      'source-inner-asia-history',
    ],
    status: 'in-progress',
    sections: [
      {
        id: 'before-the-khaganate',
        number: '01',
        title: 'Before the Khaganate',
        period: 'Before 402 CE',
        lead:
          'Before the Rouran Khaganate formed, the eastern steppe remained a politically complex landscape.',
        paragraphs: [
          'Numerous populations and changing coalitions existed across the region after the periods of Xiongnu and Xianbei political prominence.',
          'The Rouran emerged from this shifting environment. They should not be described simply as the next dynasty in a single line of steppe succession.',
        ],
        callouts: [
          {
            label: 'Not a Simple Succession',
            text: 'Xiongnu → Xianbei → Rouran was not a simple sequence of dynasties inheriting one fixed state.',
            confidence: 'INTERPRETED',
          },
        ],
        relatedEntityIds: ['polity-rouran-khaganate'],
        sourceIds: ['source-kradin-rouran-society', 'source-kradin-rouran-empire'],
      },
      {
        id: 'shelun-rise-rouran-power',
        number: '02',
        title: 'Shelun and the Rise of Rouran Power',
        period: '402 CE',
        lead:
          'Shelun consolidated Rouran power, and 402 CE is conventionally used as the beginning of the Rouran Khaganate.',
        paragraphs: [
          'Under Shelun, the Rouran developed a major political and military confederation on the eastern steppe.',
          'Shelun used the title Khagan. He should not be described as the inventor of that title.',
        ],
        callouts: [
          {
            label: 'The Title Khagan',
            text: 'The title appears in Chinese historical records before the Rouran and was associated with earlier Xianbei political groups. The Rouran became important users of the title, which later became widespread across Inner Eurasia.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: [
          'person-yujiulu-shelun',
          'event-rouran-khaganate-established-402',
        ],
        sourceIds: ['source-kradin-rouran-society', 'source-kradin-rouran-empire'],
      },
      {
        id: 'governing-steppe-confederation',
        number: '03',
        title: 'Governing a Steppe Confederation',
        period: '',
        lead:
          'Rouran authority operated through the political practices and mobile social worlds of the Inner Asian steppe.',
        paragraphs: [
          'Political hierarchy and military authority connected the Khagan with other leaders, subordinate groups and allies. Diplomacy and pastoral mobility were also central to maintaining power across great distances.',
          'These relationships could change over time. The Khaganate was not a modern nation-state enclosed by permanent, precisely surveyed borders.',
        ],
        callouts: [
          {
            label: 'Mobile Politics',
            text: 'Mobility, alliances and layered authority were political resources, not evidence for the absence of government.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: ['polity-rouran-khaganate'],
        sourceIds: ['source-kradin-rouran-society', 'source-kradin-rouran-empire'],
      },
      {
        id: 'rouran-northern-china',
        number: '04',
        title: 'Rouran and Northern China',
        period: '5th–6th centuries CE',
        lead:
          'Northern Wei was a major political counterpart of the Rouran Khaganate.',
        paragraphs: [
          'Relations included warfare, diplomacy and competition along changing frontier zones. Neither hostility nor cooperation remained permanent.',
          'Rouran power also intersected with other steppe groups, western Inner Asia and the Türk or Ashina political context that later produced an independent power.',
        ],
        relationsVisual: {
          center: 'Rouran Khaganate',
          note: 'Relationships changed over time',
          nodes: [
            { title: 'Northern Wei', label: 'warfare • diplomacy • frontier competition' },
            { title: 'Steppe Groups', label: 'alliances • subordinate groups • competition' },
            { title: 'Western Inner Asia', label: 'diplomacy • influence • changing connections' },
            { title: 'Türk / Ashina', label: 'connected or subordinate context → rising independent power' },
          ],
        },
        relatedEntityIds: ['polity-rouran-khaganate'],
        sourceIds: [
          'source-kradin-rouran-empire',
          'source-pearce-northern-wei',
          'source-inner-asia-history',
        ],
      },
      {
        id: 'rouran-archaeology',
        number: '05',
        title: 'What Archaeology Can Tell Us',
        period: '',
        lead:
          'Written histories and archaeology preserve different kinds of evidence for the Rouran period.',
        paragraphs: [
          'Securely attributable Rouran archaeological evidence in Mongolia remains sparse, making careful distinctions between chronology and identity especially important.',
        ],
        evidenceComparison: [
          {
            title: 'Textual History',
            text: 'Chinese dynastic chronicles preserve information about rulers, diplomacy and warfare.',
          },
          {
            title: 'Archaeological Evidence',
            text: 'Burials, material culture and scientific dating provide different evidence for communities living during the Rouran period.',
          },
        ],
        callouts: [
          {
            label: 'Rouran-Period ≠ Securely Rouran',
            text: 'Archaeological material dating to the period of Rouran political dominance cannot automatically be assigned an ethnic or political Rouran identity.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: [],
        sourceIds: ['source-cambridge-rouran-chronology'],
      },
      {
        id: 'difficult-to-map',
        number: '06',
        title: 'A Vast but Difficult-to-Map Political World',
        period: '',
        lead:
          'The reach of Rouran political influence should not automatically be drawn as a fixed modern territorial border.',
        paragraphs: [
          'Core political power, spheres of influence, dependent or allied groups and contested frontiers describe different kinds of relationships.',
          'Each could expand, contract or be renegotiated. A single territorial outline would conceal those differences and imply more certainty than the evidence permits.',
        ],
        callouts: [
          {
            label: 'How to Read Political Space',
            text: 'CORE POLITICAL POWER\n\nSPHERES OF INFLUENCE\n\nDEPENDENT / ALLIED GROUPS\n\nCONTESTED FRONTIERS',
            confidence: 'INTERPRETED',
          },
        ],
        relatedEntityIds: ['polity-rouran-khaganate'],
        sourceIds: ['source-kradin-rouran-society', 'source-inner-asia-history'],
      },
      {
        id: 'rise-of-turk-power',
        number: '07',
        title: 'The Rise of Türk Power',
        period: 'Mid-6th century CE',
        lead:
          'Türk or Ashina political power developed within the political environment dominated by the Rouran.',
        paragraphs: [
          'Bumin Qaghan became increasingly powerful by the middle of the sixth century, and relations with the Rouran eventually turned into open conflict.',
          'A textual tradition describing the Türks as “blacksmith slaves” of the Rouran should not be treated as a simple established fact. It is a historical source tradition whose language and political meaning require interpretation.',
        ],
        callouts: [
          {
            label: 'Source Criticism',
            text: 'The popular “Rouran blacksmith slaves” phrase derives from a textual tradition and requires interpretation rather than literal repetition as settled history.',
            confidence: 'TRADITION / SOURCE ACCOUNT',
          },
        ],
        relatedEntityIds: ['person-bumin-qaghan', 'event-rise-of-turk-power-552'],
        sourceIds: [
          'source-early-nomads-eastern-steppe',
          'source-inner-asia-history',
        ],
      },
      {
        id: 'end-rouran-dominance',
        number: '08',
        title: '552–555: The End of Rouran Dominance',
        period: '552–555 CE',
        lead:
          'The year 552 was a decisive turning point, when Bumin’s forces defeated the Rouran ruler Anagui.',
        paragraphs: [
          'Rouran political resistance and remnants continued after 552. The destruction of Rouran political dominance unfolded through approximately 552–555 rather than in one instant.',
          'The end of one political order did not mean that every community connected with it disappeared.',
        ],
        callouts: [
          {
            label: '552 Was a Turning Point — Not an Instant Disappearance',
            text: 'The defeat of 552 began a transition whose political consequences continued over the following years.',
            confidence: 'ESTABLISHED / INTERPRETED',
          },
        ],
        relatedEntityIds: ['event-rise-of-turk-power-552'],
        sourceIds: [
          'source-early-nomads-eastern-steppe',
          'source-inner-asia-history',
          'source-inner-asia-global-early-middle-ages',
        ],
        continuation: {
          title: 'Next',
          text: 'Chapter 05 — Rise of the Türks',
          status: 'Coming Soon',
        },
      },
    ],
  },
  {
    id: 'chapter-rise-of-the-turks',
    eraId: 'ancient-steppe',
    number: '05',
    title: 'Rise of the Türks',
    subtitle: 'Political Break and Imperial Transformation',
    period: 'Mid-6th century CE',
    summary:
      'How did Türk power emerge from the Rouran political world and reshape Inner Asia?',
    introTitle: 'A New Political Order',
    intro:
      'Türk power emerged within the wider Rouran-dominated political environment. Conflict beginning in 552 reshaped Inner Asia, but it was a political process rather than an instant replacement of one people by another.',
    sectionIds: [
      'world-before-552',
      'bumin-qaghan',
      'political-break-552',
      'new-turk-order',
      'east-and-west',
      'first-turk-order-fragments',
      'turk-restoration',
      'why-turk-rise-matters',
    ],
    relatedEventIds: ['event-rise-of-turk-power-552'],
    relatedPeopleIds: ['person-bumin-qaghan'],
    relatedPolityIds: ['polity-rouran-khaganate', 'polity-turk-political-world'],
    relatedPlaceIds: [],
    relatedSiteIds: [],
    relatedObjectIds: [],
    sourceIds: [
      'source-cambridge-turk-empire',
      'source-early-nomads-eastern-steppe',
    ],
    status: 'in-progress',
    sections: [
      {
        id: 'world-before-552', number: '01', title: 'The World Before 552', period: 'Before 552 CE',
        lead: 'Türk or Ashina political power developed within the wider political environment dominated by the Rouran.',
        paragraphs: [
          'The relationship included hierarchy and dependence, but it should not be reduced to a story of a “slave people” suddenly revolting.',
          'The mid-sixth-century break grew from changing power relationships within a complex steppe political world.',
        ],
        sourceIds: ['source-early-nomads-eastern-steppe', 'source-inner-asia-history'],
      },
      {
        id: 'bumin-qaghan', number: '02', title: 'Bumin Qaghan', period: 'Mid-6th century CE',
        lead: 'Bumin became the central leader in the political break with Rouran power.',
        paragraphs: [
          'Existing evidence identifies his leadership in the rise of Türk power and the conflict of 552. The limited record does not support a detailed invented biography.',
        ],
        relatedEntityIds: ['person-bumin-qaghan'],
        sourceIds: ['source-early-nomads-eastern-steppe', 'source-inner-asia-history'],
      },
      {
        id: 'political-break-552', number: '03', title: '552 — A Political Break', period: '552–555 CE',
        lead: 'The defeat of Rouran power in 552 was a decisive political turning point.',
        paragraphs: [
          'Rouran resistance did not disappear immediately. The transition continued through approximately 552–555 as alliances, leadership and political authority were realigned.',
        ],
        educationalVisual: {
          title: 'Political Transition — 552–555', variant: 'transition',
          items: [
            { title: 'Rouran Political Order' },
            { title: 'Conflict / Rebellion / Realignment' },
            { title: 'Rising Türk Power' },
            { title: 'New Political Formations' },
          ],
          note: 'This was a process, not an instant ethnic replacement.',
        },
        relatedEntityIds: ['event-rise-of-turk-power-552'],
        sourceIds: ['source-early-nomads-eastern-steppe', 'source-inner-asia-history'],
      },
      {
        id: 'new-turk-order', number: '04', title: 'A New Türk Political Order', period: 'From 552 CE',
        lead: 'Türk imperial power became a major force across Inner Asia.',
        paragraphs: [
          'Its political organization connected leaders and groups across great distances through military power, diplomacy and layered authority.',
          'The period from 552 to 744 did not consist of one uninterrupted state. Türk political history included division, fragmentation and restoration.',
        ],
        sourceIds: ['source-cambridge-turk-empire', 'source-inner-asia-history'],
      },
      {
        id: 'east-and-west', number: '05', title: 'East and West', period: '',
        lead: 'Türk authority developed across enormous distances through eastern and western centres and political structures.',
        paragraphs: [
          'Those structures were connected but not permanently identical or equally controlled. Their relationships changed with leadership, alliances and regional conditions.',
          'Without historical GIS evidence, political reach should not be drawn as one precise fixed-border territory.',
        ],
        sourceIds: ['source-cambridge-turk-empire', 'source-inner-asia-history'],
      },
      {
        id: 'first-turk-order-fragments', number: '06', title: 'The First Türk Order Fragments', period: '',
        lead: 'The first Türk imperial order experienced division and changing relationships with neighbouring states.',
        paragraphs: [
          'Fragmentation altered where authority was exercised and how regional leaders negotiated power.',
          'The history between Bumin and the early eighth-century world of Bilge Khagan cannot be skipped as though one unchanged state endured throughout.',
        ],
        sourceIds: ['source-cambridge-turk-empire'],
      },
      {
        id: 'turk-restoration', number: '07', title: 'Restoration', period: 'Late 7th–early 8th centuries CE',
        lead: 'Türk political power was later restored in the order commonly called the Second Türk Khaganate.',
        paragraphs: [
          'This restored political world provides the context for Bilge Khagan, Kül Tegin and the Orkhon memorial inscriptions explored in Chapter 06.',
        ],
        sourceIds: ['source-cambridge-turk-empire'],
      },
      {
        id: 'why-turk-rise-matters', number: '08', title: 'Why the Türk Rise Matters', period: '',
        lead: 'The Türk rise reshaped political vocabulary, imperial organization and networks across Inner Asia.',
        paragraphs: [
          'Later inscriptional evidence offers political voices from the restored Türk world and helps historians study how leaders represented authority and memory.',
        ],
        sourceIds: ['source-cambridge-turk-empire', 'source-cambridge-bulletin-soas-orkhon-inscriptions'],
        continuation: { title: 'Next', text: 'Chapter 06 — The Orkhon World', status: 'Explore Next' },
      },
    ],
  },
  {
    id: 'chapter-orkhon-world',
    eraId: 'ancient-steppe',
    number: '06',
    title: 'The Orkhon World',
    subtitle: 'Monuments, Political Memory and Türk Voices',
    period: 'Early 8th century CE',
    summary:
      'How do the Orkhon inscriptions allow us to hear political voices from the early medieval steppe?',
    introTitle: 'Reading the Inscriptional World',
    intro:
      'The Orkhon inscriptions are major written sources from the political world of the Second Türk Khaganate. They preserve political and commemorative voices, but they remain authored monuments rather than neutral, exhaustive histories.',
    sectionIds: [
      'second-turk-khaganate', 'kul-tegin', 'bilge-khagan', 'orkhon-inscriptions',
      'reading-monument-source', 'political-memory', 'orkhon-valley', 'from-turk-to-uyghur',
    ],
    relatedEventIds: [
      'event-death-kul-tegin-731',
      'event-kul-tegin-memorial-732',
      'event-death-bilge-khagan-734',
      'event-bilge-khagan-memorial-735',
    ],
    relatedPeopleIds: ['person-kul-tegin', 'person-bilge-khagan'],
    relatedPolityIds: ['polity-turk-political-world'],
    relatedPlaceIds: ['place-orkhon-valley'],
    relatedSiteIds: ['site-orkhon-turk-memorial-landscape'],
    relatedObjectIds: ['object-kul-tegin-inscription', 'object-bilge-khagan-inscription'],
    sourceIds: [
      'source-unesco-orkhon-valley',
      'source-cambridge-bulletin-soas-orkhon-inscriptions',
    ],
    status: 'in-progress',
    sections: [
      {
        id: 'second-turk-khaganate', number: '01', title: 'The Second Türk Khaganate', period: 'Late 7th–early 8th centuries CE',
        lead: 'The restored Türk political order provides the context for Bilge Khagan and Kül Tegin.',
        paragraphs: ['Its leaders governed through an imperial political system shaped by military authority, alliances and memory of earlier Türk power.'],
        sourceIds: ['source-cambridge-turk-empire'],
      },
      {
        id: 'kul-tegin', number: '02', title: 'Kül Tegin', period: 'died 731 CE; memorial 732 CE',
        lead: 'Kül Tegin was a prominent Türk prince and military commander within the restored political order.',
        paragraphs: ['He died in 731 CE. His memorial complex was established in 732, preserving one of the most important inscriptional monuments of the early Türk world.'],
        relatedEntityIds: ['person-kul-tegin', 'event-death-kul-tegin-731', 'event-kul-tegin-memorial-732'],
        sourceIds: ['source-cambridge-turk-empire', 'source-cambridge-bulletin-soas-orkhon-inscriptions'],
      },
      {
        id: 'bilge-khagan', number: '03', title: 'Bilge Khagan', period: '716–734 CE; memorial 735 CE',
        lead: 'Bilge Khagan became ruler in 716 CE within the restored Türk political order.',
        paragraphs: ['He died in 734, and his memorial was established in 735. The surviving record supports this chronology without requiring invented personal detail.'],
        relatedEntityIds: ['person-bilge-khagan', 'event-bilge-khagan-accession-716', 'event-death-bilge-khagan-734', 'event-bilge-khagan-memorial-735'],
        sourceIds: ['source-cambridge-turk-empire', 'source-cambridge-bulletin-soas-orkhon-inscriptions'],
      },
      {
        id: 'orkhon-inscriptions', number: '04', title: 'The Inscriptions', period: 'Early 8th century CE',
        lead: 'The Orkhon inscriptions are major early written sources for Türk political history.',
        paragraphs: [
          'Their texts were created within political and commemorative settings and communicate particular accounts of leadership, action and legitimacy.',
          'They are invaluable historical texts, but not neutral or exhaustive histories of every community in the steppe world.',
        ],
        callouts: [{ label: 'Historical Text', text: 'The inscriptions preserve political voices shaped by the purposes of their monuments.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }],
        relatedEntityIds: ['object-kul-tegin-inscription', 'object-bilge-khagan-inscription'],
        sourceIds: ['source-cambridge-bulletin-soas-orkhon-inscriptions', 'source-jras-old-turkic-authorship'],
      },
      {
        id: 'reading-monument-source', number: '05', title: 'Reading a Monument as a Source', period: '',
        lead: 'A monument, its written text, a translation and a historical interpretation are related but distinct forms of evidence and analysis.',
        paragraphs: ['No inscription quotation is supplied here because the current project data does not contain a verified passage for reproduction.'],
        educationalVisual: {
          title: 'Reading an Inscription', variant: 'source',
          items: [
            { title: 'Original Monument / Inscription', text: 'physical and archaeological context' },
            { title: 'Text', text: 'recorded signs and language' },
            { title: 'Translation', text: 'scholarly rendering into another language' },
            { title: 'Historical Interpretation', text: 'analysis of context, purpose and meaning' },
          ],
          note: 'Translation and historical interpretation are different analytical stages.',
        },
        sourceIds: ['source-cambridge-bulletin-soas-orkhon-inscriptions', 'source-jras-old-turkic-authorship'],
      },
      {
        id: 'political-memory', number: '06', title: 'Political Memory', period: '',
        lead: 'Commemorative monuments construct political memory as well as recording it.',
        paragraphs: ['Choices about people, events and language could communicate legitimacy and political messages to intended audiences. Historians therefore read both what a monument says and why it may have said it.'],
        callouts: [{ label: 'Memory and Authority', text: 'A commemorative account is evidence for political memory, not a complete view from every participant.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }],
        sourceIds: ['source-jras-old-turkic-authorship'],
      },
      {
        id: 'orkhon-valley', number: '07', title: 'The Orkhon Valley', period: '',
        lead: 'The Orkhon Valley became a recurring political, commemorative and urban landscape across different centuries.',
        paragraphs: ['Its importance did not make it the permanent possession of one people. Different political orders used and reshaped the same wider landscape.'],
        relatedEntityIds: ['place-orkhon-valley', 'site-orkhon-turk-memorial-landscape'],
        sourceIds: ['source-unesco-orkhon-valley'],
      },
      {
        id: 'from-turk-to-uyghur', number: '08', title: 'From Türk to Uyghur Power', period: 'Toward 744 CE',
        lead: 'The political landscape changed again with the establishment of Uyghur imperial power in 744.',
        paragraphs: ['That transition ended a particular political order; it did not mean the disappearance of Türk peoples. The Orkhon Valley would remain important in a different political era.'],
        sourceIds: ['source-cambridge-turk-empire', 'source-cambridge-uighurs', 'source-unesco-orkhon-valley'],
        continuation: { title: 'Next', text: 'Chapter 07 — The Uyghur Khaganate', status: 'Explore Next' },
      },
    ],
  },
  {
    id: 'chapter-uyghur-khaganate',
    eraId: 'ancient-steppe',
    number: '07',
    title: 'The Uyghur Khaganate',
    subtitle: 'Steppe Power, Cities and Eurasian Connections',
    period: '744–840 CE',
    summary:
      'How did the Uyghur Khaganate combine steppe political power with urban, commercial and international connections?',
    introTitle: 'Empire in the Orkhon Valley',
    intro:
      'The Uyghur Khaganate became a major steppe empire centred in Mongolia from 744 to 840 CE. Its political world included pastoral mobility alongside urban, commercial and international connections.',
    sectionIds: [
      'new-khaganate-744', 'orkhon-valley-again', 'khar-balgas', 'steppe-empire-urban-centres',
      'connections-across-eurasia', 'religion-cultural-connections', 'uyghur-political-strain', 'approaching-840',
    ],
    relatedEventIds: [
      'event-uyghur-khaganate-established-744',
      'event-end-uyghur-khaganate-840',
    ],
    relatedPeopleIds: [],
    relatedPolityIds: ['polity-uyghur-khaganate'],
    relatedPlaceIds: ['place-orkhon-valley'],
    relatedSiteIds: ['site-khar-balgas'],
    relatedObjectIds: [],
    sourceIds: ['source-cambridge-uighurs', 'source-unesco-orkhon-valley'],
    status: 'in-progress',
    sections: [
      {
        id: 'new-khaganate-744', number: '01', title: '744 — A New Khaganate', period: '744 CE',
        lead: 'The establishment of the Uyghur Khaganate in 744 created a new imperial political order on the eastern steppe.',
        paragraphs: ['The date marks the formation of this khaganate, not the first appearance of Uyghur people. Political beginnings and the histories of communities are not the same thing.'],
        relatedEntityIds: ['event-uyghur-khaganate-established-744'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'orkhon-valley-again', number: '02', title: 'The Orkhon Valley Again', period: '',
        lead: 'The same geographic landscape associated with the earlier Türk world became central to a different political era.',
        paragraphs: ['Geographic continuity does not demonstrate unchanged political or ethnic continuity. Landscapes can be reused and reinterpreted by different communities and states.'],
        relatedEntityIds: ['place-orkhon-valley'],
        sourceIds: ['source-unesco-orkhon-valley', 'source-cambridge-uighurs'],
      },
      {
        id: 'khar-balgas', number: '03', title: 'Khar Balgas', period: '8th–9th centuries CE',
        lead: 'Khar Balgas was a major political and urban centre associated with the Uyghur imperial world.',
        paragraphs: ['Its archaeology provides evidence for urban organization within the Orkhon Valley. The current evidence record does not justify inventing a precise foundation year.'],
        relatedEntityIds: ['site-khar-balgas'],
        sourceIds: ['source-cambridge-uighurs', 'source-unesco-orkhon-valley'],
      },
      {
        id: 'steppe-empire-urban-centres', number: '04', title: 'A Steppe Empire with Urban Centers', period: '',
        lead: 'Pastoral political systems and urban centres were not opposing ways of life.',
        paragraphs: ['Steppe empires could create and use administrative, commercial and urban centres while remaining connected to pastoral mobility and dispersed political networks.'],
        sourceIds: ['source-cambridge-uighurs', 'source-unesco-orkhon-valley'],
      },
      {
        id: 'connections-across-eurasia', number: '05', title: 'Connections Across Eurasia', period: '',
        lead: 'The Uyghur imperial world participated in wider diplomatic and commercial relationships.',
        paragraphs: ['These connections linked the khaganate to political and economic networks beyond Mongolia. Without more specific evidence in the project, no exact trade route or movement of a particular object is asserted here.'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'religion-cultural-connections', number: '06', title: 'Religion and Cultural Connections', period: '',
        lead: 'Bögü Qaghan’s conversion to Manichaeism in 762 was an important development in the Uyghur imperial world.',
        paragraphs: ['Manichaeism gained significant court patronage, but this does not mean that all Uyghurs were Manichaean. Uyghur religious history was diverse and changed over time.'],
        callouts: [{ label: 'Historical Caution', text: 'Court affiliation, community practice and individual identity should not be collapsed into one uniform religious label.', confidence: 'INTERPRETED' }],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'uyghur-political-strain', number: '07', title: 'Political Strain', period: 'Before 840 CE',
        lead: 'Internal and external pressures weakened the Uyghur imperial political structure before the crisis of 840.',
        paragraphs: ['The collapse should not be reduced to a single cause. Political instability developed through interacting pressures whose full treatment requires more detailed source support.'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'approaching-840', number: '08', title: 'Approaching 840', period: '840 CE',
        lead: 'The crisis of 840 ended Uyghur imperial dominance in Mongolia, but it did not erase Uyghur communities or their later histories.',
        educationalVisual: {
          title: 'Orkhon Valley Through Time', variant: 'timeline',
          items: [
            { title: 'Early Türk World', text: 'political and commemorative landscape' },
            { title: 'Uyghur Khaganate / Khar Balgas', text: 'a different political era in the same valley' },
            { title: 'Future: Mongol Karakorum', text: 'later-era placeholder — not implemented here' },
          ],
          note: 'Geographic continuity does not imply political or ethnic continuity.',
        },
        callouts: [{ label: 'The Fall of a Khaganate Is Not the Disappearance of a People', text: 'Political structures can end while communities continue and reorganize.', confidence: 'ESTABLISHED / INTERPRETED' }],
        relatedEntityIds: ['event-end-uyghur-khaganate-840'],
        sourceIds: ['source-cambridge-uighurs', 'source-unesco-orkhon-valley'],
        continuation: { title: 'Next', text: 'Chapter 08 — The 840 Transition', status: 'Explore Next' },
      },
    ],
  },
  {
    id: 'chapter-840-transition',
    slug: 'the-840-transition',
    eraId: 'ancient-steppe',
    number: '08',
    title: 'The 840 Transition',
    subtitle: 'Political Collapse, Migration and Continuity',
    period: '840 CE and its aftermath',
    summary: 'What actually ended in 840 — and what continued?',
    introTitle: 'An Ending and Its Limits',
    intro:
      'The crisis of 840 ended Uyghur imperial power in Mongolia. It did not make Uyghur people disappear, and it did not end the deeper history of communities living across the Mongolian steppe.',
    sectionIds: [
      'crisis-840', 'political-turning-point-840', 'people-outlast-states', 'migration-reorganization',
      'steppe-after-840', 'problem-of-continuity', 'why-840-ends-era', 'looking-toward-era-two',
    ],
    relatedEventIds: ['event-end-uyghur-khaganate-840'],
    relatedPeopleIds: [],
    relatedPolityIds: ['polity-uyghur-khaganate'],
    relatedPlaceIds: ['place-orkhon-valley'],
    relatedSiteIds: [],
    relatedObjectIds: [],
    sourceIds: ['source-cambridge-uighurs', 'source-unesco-orkhon-valley'],
    status: 'in-progress',
    sections: [
      {
        id: 'crisis-840', number: '01', title: 'The Crisis', period: '840 CE',
        lead: 'In 840, Kyrgyz forces defeated and overthrew Uyghur imperial power in Mongolia during a wider political crisis.',
        paragraphs: ['The existing source record does not support reducing this outcome to one cause. Internal strain and external pressure belong to a more complex political process.'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'political-turning-point-840', number: '02', title: '840 as a Political Turning Point', period: '840 CE',
        lead: 'What ended was the Uyghur Khaganate’s imperial political structure in Mongolia.',
        paragraphs: ['A state and its institutions can lose power without every population, relationship or cultural practice connected with them ending at the same moment.'],
        relatedEntityIds: ['event-end-uyghur-khaganate-840'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'people-outlast-states', number: '03', title: 'People Do Not Disappear with States', period: '',
        lead: 'Political collapse and human disappearance are not the same historical process.',
        paragraphs: ['A polity can collapse. Communities can migrate, reorganize and continue. Identities can change over centuries.'],
        educationalVisual: {
          title: 'What Changed / What Continued', variant: 'comparison',
          items: [
            { title: 'What Changed', text: 'Uyghur imperial political structure in Mongolia' },
            { title: 'What Continued', text: 'people • communities • cultural traditions • regional connections' },
          ],
          note: 'Continuities took transformed and geographically varied forms.',
        },
        callouts: [{ label: 'Political Collapse ≠ Ethnic Disappearance', text: 'The end of a khaganate cannot be used as an ethnic end date.', confidence: 'ESTABLISHED / INTERPRETED' }],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'migration-reorganization', number: '04', title: 'Migration and Reorganization', period: 'After 840 CE',
        lead: 'Uyghur groups followed different historical trajectories after the fall of the steppe khaganate.',
        paragraphs: ['After 840, some Uyghur groups moved toward regions including Gansu and the eastern Tianshan and Turfan area. This does not mean that every Uyghur migrated or that all communities shared one destination and experience. Modern Uyghur identity should not be presented as a simply unchanged continuation of the 744–840 polity.'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'steppe-after-840', number: '05', title: 'The Mongolian Steppe After 840', period: '',
        lead: 'The political landscape of the Mongolian steppe changed again after the fall of Uyghur imperial power.',
        paragraphs: ['The centuries that followed contained their own complex communities and political histories. This chapter does not fill that interval with an invented single succession story.'],
        sourceIds: ['source-cambridge-uighurs', 'source-inner-asia-history'],
      },
      {
        id: 'problem-of-continuity', number: '06', title: 'The Problem of Continuity', period: '',
        lead: 'Historical continuity takes different forms and must be defined carefully.',
        paragraphs: ['Ancestry is not identity. Political continuity is not ethnic continuity. Continuity of a name does not demonstrate an unchanged culture across centuries.'],
        callouts: [{ label: 'Different Questions', text: 'ANCESTRY ≠ IDENTITY\n\nPOLITICAL CONTINUITY ≠ ETHNIC CONTINUITY\n\nNAME CONTINUITY ≠ UNCHANGED CULTURE', confidence: 'ESTABLISHED / INTERPRETED' }],
        sourceIds: ['source-cambridge-uighurs', 'source-inner-asia-history'],
      },
      {
        id: 'why-840-ends-era', number: '07', title: 'Why 840 Ends Era I', period: '',
        lead: 'For this website, 840 is an editorial boundary used to organize a long historical narrative.',
        paragraphs: ['It is not “the end of ancient Mongolia,” nor is it “the beginning of Mongol history.” Historical lives and transformations do not obey the boundaries of a website chapter.'],
        sourceIds: ['source-cambridge-uighurs'],
      },
      {
        id: 'looking-toward-era-two', number: '08', title: 'Looking Toward Era II', period: 'c. 900–1206',
        lead: 'Era II — Before Chinggis Khan will examine the changing political world from approximately 900 to 1206.',
        paragraphs: ['That later era requires its own evidence and careful narrative. It is identified here as the next editorial destination but is not implemented in this chapter.'],
        sourceIds: [],
        continuation: { title: 'Next Era', text: 'Era II — Before Chinggis Khan', status: 'Future Chapter' },
      },
    ],
  },
  {
    id: 'chapter-after-840-changing-steppe', eraId: 'before-chinggis', number: '01', title: 'After 840: A Changing Steppe', subtitle: 'Transformation, Movement and New Regional Powers', period: 'c. 840–907 CE', status: 'in-progress',
    summary: 'What happened on the Mongolian Plateau after the end of Uyghur imperial power in Mongolia?', introTitle: 'Transformation, Not Succession',
    intro: 'The end of Uyghur imperial rule in Mongolia was a political transformation, not the disappearance of peoples. The post-840 steppe was shaped by movement, regional relationships and new imperial systems.',
    relatedEventIds: ['event-end-uyghur-khaganate-840', 'event-liao-begins-907'], relatedPeopleIds: [], relatedPolityIds: ['polity-uyghur-khaganate', 'polity-khitan-liao'], relatedPlaceIds: ['place-orkhon-valley'], relatedSiteIds: [], relatedObjectIds: [], sourceIds: ['source-cambridge-uighurs', 'source-jackson-mongol-age-eastern-inner-asia'],
    sections: [
      { id: 'what-ended-840', number: '01', title: 'What Ended in 840?', paragraphs: ['Uyghur imperial political dominance in Mongolia ended; Uyghur communities did not disappear.'], sourceIds: [] },
      { id: 'post-840-world', number: '02', title: 'A Post-840 Political World', paragraphs: ['The steppe did not become empty or politically inactive after 840.'], sourceIds: [] },
      { id: 'population-movement', number: '03', title: 'Population Movement', paragraphs: ['Different communities moved and reorganized along multiple trajectories rather than one universal route.'], sourceIds: [] },
      { id: 'regional-powers', number: '04', title: 'Regional Powers', paragraphs: ['Changing regional powers formed new relationships across the steppe and neighbouring zones.'], sourceIds: [] },
      { id: 'no-dynasty-chain', number: '05', title: 'Not a Dynasty Chain', paragraphs: ['Political change involved overlapping populations and coalitions, not a clean sequence of ethnic replacements.'], sourceIds: [] },
      { id: 'evidence-after-840', number: '06', title: 'Limits of the Evidence', paragraphs: ['The current project lacks dedicated sources for a detailed reconstruction of this transition.'], sourceIds: [] },
      { id: 'khitan-expansion', number: '07', title: 'Toward Khitan Expansion', paragraphs: ['Khitan political power became a major imperial force in the emerging regional order.'], sourceIds: ['source-jackson-mongol-age-eastern-inner-asia'] },
      { id: 'why-transition-matters', number: '08', title: 'Why This Transition Matters', paragraphs: ['Temüjin’s later world grew from centuries of political organization and transformation.'], educationalVisual: { title: 'Transformation, Not Succession', variant: 'transition', items: [{title:'840'},{title:'Political Fragmentation / Transformation'},{title:'Population Movement'},{title:'New Regional Relationships'},{title:'Khitan Expansion'}], note: 'Political transformation did not mean ethnic disappearance.' }, sourceIds: [] },
    ],
  },
  {
    id: 'chapter-khitan-liao-world', eraId: 'before-chinggis', number: '02', title: 'The Khitan-Liao World', subtitle: 'Imperial Power Across the Eastern Steppe', period: '907–1125 CE', status: 'in-progress',
    summary: 'How did Khitan-Liao power shape the eastern steppe?', intro: 'Khitan-Liao power became a major imperial force, connecting Mongolia to a wider political system conventionally dated 907–1125.', relatedEventIds: ['event-liao-begins-907', 'event-liao-activity-mongolia-tenth-century', 'event-liao-ends-1125'], relatedPeopleIds: [], relatedPolityIds: ['polity-khitan-liao'], relatedPlaceIds: [], relatedSiteIds: ['site-chintolgoi-balgas'], relatedObjectIds: [], sourceIds: ['source-jackson-mongol-age-eastern-inner-asia', 'source-kradin-ivliev-deported-nation'],
    sections: [
      {id:'khitan-before-liao',number:'01',title:'Khitan Political Power',paragraphs:['Khitan political organization preceded and shaped the imperial order conventionally called the Liao.'],sourceIds:[]},
      {id:'liao-907',number:'02',title:'907 and the Liao',paragraphs:['The year 907 conventionally marks the beginning of Liao imperial rule.'],sourceIds:['source-jackson-mongol-age-eastern-inner-asia']},
      {id:'liao-mongolia',number:'03',title:'Mongolia in an Imperial System',paragraphs:['Parts of Mongolia were connected to Liao imperial activity and regional relationships.'],sourceIds:[]},
      {id:'imperial-network',number:'04',title:'Imperial Network, Not Modern Border',paragraphs:['Imperial control and interaction changed across time and should not be drawn as a fixed modern national border.'],sourceIds:[]},
      {id:'liao-governance',number:'05',title:'A Complex Imperial Order',paragraphs:['The Liao connected different regions and populations through imperial political structures.'],sourceIds:[]},
      {id:'liao-evidence',number:'06',title:'How We Know',paragraphs:['Modern scholarship provides broad political context, while archaeological research at sites such as Chintolgoi adds evidence about particular communities and movements within the imperial world.'],sourceIds:['source-jackson-mongol-age-eastern-inner-asia','source-kradin-ivliev-deported-nation']},
      {id:'chintolgoi-gap',number:'07',title:'Chintolgoi Balgas',paragraphs:['Documentary evidence for mass deportation into tenth-century Mongolia and survey and excavation at Chintolgoi support an interpretation of population movement and the maintenance of Bohai cultural traditions.'],relatedEntityIds:['site-chintolgoi-balgas'],evidenceNote:{claim:'Chintolgoi contributes evidence for population movement and the maintenance of Bohai cultural traditions in tenth-century Mongolia.',sourceBasis:'Kradin and Ivliev’s documentary analysis, survey and excavation research',evidenceType:'Documentary and archaeological research',treatment:'Archaeological evidence interpreted alongside documentary evidence',confidence:'ARCHAEOLOGICAL EVIDENCE',caution:'The evidence does not establish the ethnicity of every individual associated with the site.'},sourceIds:['source-kradin-ivliev-deported-nation']},
      {id:'toward-1125',number:'08',title:'Toward 1125',paragraphs:['Liao political rule ended in 1125, but Khitan histories continued along multiple trajectories.'],educationalVisual:{title:'Imperial Network, Not Modern Border',variant:'landscape',items:[{title:'Imperial Centre'},{title:'Regional Authority'},{title:'Political Connections'},{title:'Contested Influence'}],note:'This conceptual network does not claim exact territorial control.'},sourceIds:['source-jackson-mongol-age-eastern-inner-asia']},
    ],
  },
  {
    id: 'chapter-after-liao', eraId: 'before-chinggis', number: '03', title: 'After the Liao', subtitle: 'Collapse and Multiple Political Trajectories', period: 'After 1125 CE', status: 'in-progress', summary: 'How did the political environment change after 1125?', intro: 'Jurchen conquest ended Liao political rule in 1125. Khitan people did not disappear, while Jurchen Jin and Qara Khitai became important parts of the changing political landscape.', relatedEventIds:['event-liao-ends-1125'],relatedPeopleIds:[],relatedPolityIds:['polity-khitan-liao','polity-jurchen-jin','polity-qara-khitai'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-jackson-mongol-age-eastern-inner-asia'],
    sections:[
      {id:'end-liao-rule',number:'01',title:'The End of Liao Rule',paragraphs:['Jurchen conquest ended Liao political rule in 1125.'],sourceIds:[]},{id:'khitan-continuities',number:'02',title:'Khitan People Did Not Vanish',paragraphs:['Political collapse did not make Khitan people or communities disappear.'],sourceIds:[]},{id:'jurchen-jin',number:'03',title:'Jurchen Jin',paragraphs:['Jurchen Jin became a major neighbouring imperial power.'],sourceIds:[]},{id:'qara-khitai',number:'04',title:'Qara Khitai / Western Liao',paragraphs:['Qara Khitai belongs to the broader history of post-Liao political trajectories.'],sourceIds:[]},{id:'changing-influence',number:'05',title:'Changing Influence',paragraphs:['Political influence across the steppe was reorganized after 1125.'],sourceIds:[]},{id:'not-vanishing',number:'06',title:'Polity and People',paragraphs:['The end of an imperial state cannot serve as an ethnic end date.'],sourceIds:[]},{id:'source-gap-liao',number:'07',title:'Evidence Limits',paragraphs:['Dedicated sources are required for a fuller account of Jin and Qara Khitai relations.'],sourceIds:[]},{id:'multiple-trajectories',number:'08',title:'Multiple Trajectories',paragraphs:['The post-Liao world contained several political trajectories rather than one successor state.'],educationalVisual:{title:'1125 — Political Transformation',variant:'transition',items:[{title:'Liao'},{title:'Political Collapse'},{title:'Multiple Political Trajectories'}],note:'Liao people did not vanish.'},sourceIds:[]},
    ],
  },
  {
    id:'chapter-twelfth-century-steppe-powers',eraId:'before-chinggis',number:'04',title:'Powers of the Twelfth-Century Steppe',subtitle:'Competition, Cooperation and Political Agency',period:'12th century CE',status:'in-progress',summary:'Who competed, cooperated and formed alliances before Temüjin became dominant?',intro:'Kereit, Naiman, Merkit, Tatar and Mongol political groupings participated in a complex world also shaped by Jin and Qara Khitai. These were not modern nation-states.',relatedEventIds:['event-twelfth-century-steppe-powers'],relatedPeopleIds:[],relatedPolityIds:['polity-kereit','polity-naiman','polity-merkit','polity-tatar','polity-mongol-groupings','polity-jurchen-jin','polity-qara-khitai'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-cambridge-inner-asia-c1200','source-munkh-erdene-chinggisid-dynasty-2018','source-dunnell-rise-chinggis-2023'],sections:[
      {id:'many-powers',number:'01',title:'Many Political Powers',paragraphs:['The twelfth-century steppe contained multiple organized political groupings.'],sourceIds:[]},{id:'kereit-world',number:'02',title:'Kereit Political Power',paragraphs:['Kereit rulers and coalitions had political agency independent of Temüjin’s later history.'],sourceIds:[]},{id:'naiman-world',number:'03',title:'Naiman Political Power',paragraphs:['Naiman political power formed another major part of the regional landscape.'],sourceIds:[]},{id:'merkit-tatar',number:'04',title:'Merkit and Tatar Worlds',paragraphs:['Merkit and Tatar groupings participated in changing alliances, rivalries and conflicts.'],sourceIds:[]},{id:'mongol-groupings',number:'05',title:'Mongol Political Groupings',paragraphs:['Multiple Mongol groupings existed before the political reorganization of 1206.'],sourceIds:[]},{id:'imperial-neighbours',number:'06',title:'Imperial Neighbours',paragraphs:['Jin and Qara Khitai formed important parts of the wider political context.'],sourceIds:[]},{id:'relationships-change',number:'07',title:'Relationships Changed',paragraphs:['Alliance, rivalry and political support were temporal relationships, not permanent labels.'],sourceIds:[]},{id:'not-modern-nations',number:'08',title:'Political Groups, Not Modern Nations',paragraphs:['These political worlds should not be mapped as fixed modern ethnic nation-states.'],educationalVisual:{title:'A Plural Political World',variant:'landscape',items:[{title:'Kereit'},{title:'Naiman'},{title:'Merkit'},{title:'Tatar'},{title:'Mongol Groupings'},{title:'Jin / Qara Khitai'}],note:'No relationship edge is asserted without explicit evidence.'},sourceIds:[]},
    ]},
  {
    id:'chapter-temujins-world',eraId:'before-chinggis',number:'05',title:"Temüjin's World",subtitle:'Early Life, Narrative Sources and Political Context',period:'c. 1160s–late 12th century',status:'in-progress',summary:"What can we responsibly reconstruct about Temüjin's early life and political environment?",introTitle:'The World Temüjin Entered',intro:'Temüjin entered an already organized political world. Much of the detailed early-life narrative depends on the medieval Secret History tradition and requires critical reading alongside modern scholarship.',relatedEventIds:['event-birth-temujin-debated'],relatedPeopleIds:['person-temujin-chinggis-khan','person-borte','person-hoelun','person-yesugei'],relatedPolityIds:['polity-mongol-groupings','polity-merkit'],relatedPlaceIds:['place-burkhan-khaldun'],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023','source-dunnell-rise-chinggis-2023','source-unesco-burkhan-khaldun'],sections:[
      {id:'world-temujin-entered',number:'01',title:'The World He Entered',paragraphs:['Temüjin entered a world of households, lineages, coalitions and neighbouring powers.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'family-source-traditions',number:'02',title:'Family and Early Source Traditions',paragraphs:['The Secret History identifies Yesügei and Hö’elün as Temüjin’s parents and Börte as his wife and principal spouse. Detailed scenes remain source accounts, not independently verified transcripts.'],sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006']},{id:'borte-merkit',number:'03',title:'Börte and the Merkit Episode',paragraphs:['The Secret History reports Börte’s capture by a Merkit group and recovery by an allied force. The broad episode is used cautiously; precise chronology, motives, dialogue and routes are not supplied.'],evidenceNote:{claim:'Börte’s capture and recovery episode',sourceBasis:'The Secret History read through modern scholarly translations and commentary',evidenceType:'Medieval narrative and modern source criticism',treatment:'Broad source-based reconstruction',confidence:'SOURCE ACCOUNT',caution:'The detailed chronology and scenes remain dependent on the narrative tradition.'},sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023']},{id:'jamukha-context',number:'04',title:'Jamukha',paragraphs:['Jamukha had political agency and should not be reduced to a villain in Temüjin’s story.'],sourceIds:['source-munkh-erdene-chinggisid-dynasty-2018']},{id:'toghrul-context',number:'05',title:'Toghrul / Ong Khan',paragraphs:['Toghrul was a major Kereit ruler, not merely a supporting figure.'],sourceIds:['source-munkh-erdene-chinggisid-dynasty-2018']},{id:'building-coalition',number:'06',title:'Building a Coalition',paragraphs:['Temüjin’s coalition developed through changing political relationships; dominance was not inevitable.'],sourceIds:['source-dunnell-rise-chinggis-2023','source-munkh-erdene-chinggisid-dynasty-2018']},{id:'limits-early-life',number:'07',title:'Limits of Reconstruction',paragraphs:['No birth year more exact than the debated c. 1160s range is asserted.'],sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023']},{id:'account-reconstruction',number:'08',title:'Source Account vs Historical Reconstruction',paragraphs:['Narrative detail and modern reconstruction must remain analytically distinct.'],educationalVisual:{title:'Source Account vs Historical Reconstruction',variant:'comparison',items:[{title:'Source Account',text:'what a medieval narrative reports'},{title:'Historical Reconstruction',text:'claims assessed across evidence and context'}],note:'No dialogue or quotation is fabricated.'},sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-atwood-secret-history-2023']},
    ]},
  {
    id:'chapter-temujin-jamukha-toghrul',eraId:'before-chinggis',number:'06',title:'Temüjin, Jamukha & Toghrul',subtitle:'Relationships That Changed Over Time',period:'Late 12th century–1203',status:'in-progress',summary:'How did political relationships change over time?',intro:'Temüjin, Jamukha and Toghrul each exercised political agency. Their relationships changed and cannot be summarized permanently as hero, villain and helper.',relatedEventIds:['event-jamukha-gur-khan-1201','event-kereit-defeat-1203'],relatedPeopleIds:['person-temujin-chinggis-khan','person-jamukha','person-toghrul-ong-khan'],relatedPolityIds:['polity-kereit','polity-mongol-groupings','polity-emerging-mongol-order'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-munkh-erdene-chinggisid-dynasty-2018'],sections:[
      {id:'three-agents',number:'01',title:'Three Political Actors',paragraphs:['All three leaders pursued their own political interests.'],sourceIds:[]},{id:'temujin-jamukha-early',number:'02',title:'Temüjin and Jamukha: Earlier Relationship',paragraphs:['Medieval narrative tradition describes an earlier close personal and political relationship.'],sourceIds:[]},{id:'temujin-jamukha-rivalry',number:'03',title:'Political Rivalry',paragraphs:['Their relationship later became political rivalry.'],sourceIds:[]},{id:'jamukha-1201',number:'04',title:'Jamukha in 1201',paragraphs:['Source-based chronology places Jamukha’s elevation as Gür Khan in 1201.'],sourceIds:[]},{id:'toghrul-kereit-ruler',number:'05',title:'Toghrul as Kereit Ruler',paragraphs:['Toghrul belonged to an important Kereit political context independent of Temüjin.'],sourceIds:[]},{id:'cooperation',number:'06',title:'Political Cooperation',paragraphs:['Narrative traditions preserve changing cooperation between Toghrul and Temüjin.'],sourceIds:[]},{id:'rupture-1203',number:'07',title:'The 1203 Rupture',paragraphs:['Their relationship ended in rupture and conflict associated with the Kereit defeat.'],sourceIds:[]},{id:'changing-relations',number:'08',title:'No Permanent Label',paragraphs:['Alliance and rivalry describe phases, not fixed identities.'],educationalVisual:{title:'Changing Relationships',variant:'timeline',items:[{title:'Earlier Relationships'},{title:'Political Cooperation'},{title:'Growing Rivalry'},{title:'1203 Rupture'}],note:'The sequence is source-dependent and requires dedicated citation.'},sourceIds:[]},
    ]},
  {
    id:'chapter-struggle-eastern-steppe',eraId:'before-chinggis',number:'07',title:'Struggle for the Eastern Steppe',subtitle:'Changing Coalitions and Political Dominance',period:'c. 1201–1205',status:'in-progress',summary:"How did Temüjin's coalition become dominant?",intro:'Temüjin’s coalition became dominant through a series of changing alignments and political defeats. The outcome was not inevitable, and defeated communities did not disappear.',relatedEventIds:['event-jamukha-gur-khan-1201','event-kereit-defeat-1203','event-naiman-defeat-1204'],relatedPeopleIds:['person-temujin-chinggis-khan','person-jamukha','person-toghrul-ong-khan','person-tayang-khan'],relatedPolityIds:['polity-kereit','polity-naiman','polity-mongol-groupings','polity-emerging-mongol-order'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-secret-history-mongols','source-munkh-erdene-chinggisid-dynasty-2018','source-dunnell-rise-chinggis-2023'],sections:[
      {id:'coalitions-1201',number:'01',title:'Coalitions in 1201',paragraphs:['Jamukha’s source-based elevation reflects competing coalition politics.'],sourceIds:[]},{id:'not-inevitable',number:'02',title:'No Inevitable Victor',paragraphs:['Temüjin’s later dominance was not predetermined.'],sourceIds:[]},{id:'kereit-1203',number:'03',title:'1203: Kereit Transformation',paragraphs:['The Kereit defeat was a major political transformation, not the disappearance of Kereit people.'],sourceIds:[]},{id:'naiman-1204',number:'04',title:'1204: Naiman Defeat',paragraphs:['The major Naiman defeat changed political power without making Naiman people extinct.'],sourceIds:[]},{id:'continued-resistance',number:'05',title:'Continuing Resistance',paragraphs:['Resistance and political realignment continued around 1204–1205.'],sourceIds:[]},{id:'coalition-growth',number:'06',title:'An Emerging Coalition',paragraphs:['Temüjin’s coalition incorporated changing supporters and political relationships.'],sourceIds:[]},{id:'defeat-not-disappearance',number:'07',title:'Defeat Is Not Disappearance',paragraphs:['Political communities can fragment or reorganize after military defeat.'],sourceIds:[]},{id:'toward-1206',number:'08',title:'Toward 1206',paragraphs:['These transformations prepared the political setting for the assembly of 1206.'],educationalVisual:{title:'Changing Coalitions',variant:'landscape',items:[{title:'1201',text:'competing coalition'},{title:'1203',text:'Kereit transformation'},{title:'1204',text:'Naiman transformation'},{title:'1204–1205',text:'resistance and realignment'}],note:'This is not a story of one leader simply conquering everyone.'},sourceIds:[]},
    ]},
  {
    id:'chapter-new-order-1206',eraId:'before-chinggis',number:'08',title:'1206: A New Political Order',subtitle:'Assembly, Recognition and Reorganization',period:'1206 CE',status:'in-progress',summary:'What changed in 1206?',intro:'In 1206 an assembly recognized Temüjin as Chinggis Khan within a major political reorganization. This was not the beginning of Mongolian history or the moment Mongols suddenly appeared.',relatedEventIds:['event-new-mongol-order-1206'],relatedPeopleIds:['person-temujin-chinggis-khan'],relatedPolityIds:['polity-mongol-groupings','polity-emerging-mongol-order'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-dunnell-rise-chinggis-2023'],sections:[
      {id:'before-1206',number:'01',title:'Before 1206',paragraphs:['The new order emerged from an already complex political world.'],sourceIds:[]},{id:'assembly-1206',number:'02',title:'The Assembly',paragraphs:['The project treats the 1206 assembly or quriltai through controlled, source-aware wording.'],sourceIds:[]},{id:'recognition-chinggis',number:'03',title:'Recognition as Chinggis Khan',paragraphs:['Temüjin was recognized as Chinggis Khan in the political reorganization of 1206.'],sourceIds:[]},{id:'political-reorganization',number:'04',title:'Political Reorganization',paragraphs:['The assembly marked the formation of a new Mongol political order.'],sourceIds:[]},{id:'not-first-mongols',number:'05',title:'Not the First Appearance of Mongols',paragraphs:['Mongol groupings and political histories existed before 1206.'],sourceIds:[]},{id:'not-beginning-history',number:'06',title:'Not the Beginning of History',paragraphs:['The date cannot be treated as the beginning of Mongolia’s or the steppe’s history.'],sourceIds:[]},{id:'what-changed',number:'07',title:'What Changed?',paragraphs:['Political organization and leadership changed; populations did not suddenly appear.'],sourceIds:[]},{id:'toward-era-three',number:'08',title:'Toward Era III',paragraphs:['Era III will examine the Rise of the Mongol Empire, 1206–1260. It is not implemented here.'],educationalVisual:{title:'1206 Political Reorganization',variant:'transition',items:[{title:'Competing Political Groupings'},{title:'Assembly / Quriltai'},{title:'Recognition of Chinggis Khan'},{title:'New Mongol Political Order'}],note:'1206 was a political reorganization, not the beginning of Mongolian history.'},sourceIds:[],continuation:{title:'Next Era',text:'Era III — Rise of the Mongol Empire',status:'Future'}},
    ]},
  {
    id:'chapter-building-new-order-1206',eraId:'rise-empire',number:'01',title:'1206: Building the New Order',subtitle:'Political Organization, Incorporation and Imperial Authority',period:'1206–1209',status:'in-progress',summary:'How was the political order recognized in 1206 organized for imperial expansion?',introTitle:'From Coalition to Imperial Order',intro:'The new order grew from existing steppe politics through household authority, elite incorporation, delegated command and military organization. It was neither inevitable nor a uniform modern state.',relatedEventIds:['event-new-mongol-order-1206','event-western-xia-subordination-1209'],relatedPeopleIds:['person-temujin-chinggis-khan','person-borte','person-jochi','person-chagatai','person-ogedei-khan','person-tolui','person-muqali','person-jebe','person-subutai'],relatedPolityIds:['polity-emerging-mongol-order','polity-yeke-mongol-ulus'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023','source-secret-history-mongols','source-derachewiltz-secret-history-2006'],sections:[
      {id:'era-two-transition',number:'01',title:'From Era II',paragraphs:['The order of 1206 emerged from earlier coalitions, rivalries and institutions rather than a political vacuum.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'chinggis-after-1206',number:'02',title:'Chinggis Khan After 1206',paragraphs:['Chinggis Khan led an expanding imperial project whose outcomes were not predetermined.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'imperial-household',number:'03',title:'The Imperial Household',paragraphs:['Börte, their principal sons and wider household relationships formed part of imperial political structure.'],sourceIds:['source-secret-history-mongols','source-dunnell-rise-chinggis-2023']},{id:'elite-incorporation',number:'04',title:'Incorporating Elites',paragraphs:['The empire incorporated supporters and defeated elites into changing structures of service and authority.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'delegated-command',number:'05',title:'Delegated Command',paragraphs:['Commanders such as Muqali, Jebe and Subutai demonstrate that Chinggis Khan did not personally command every campaign.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'military-political-order',number:'06',title:'Military and Political Organization',paragraphs:['Military organization was interwoven with households and political obligations; it was not simply a force in which every soldier had one identical role.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'imperial-ideology',number:'07',title:'Emerging Imperial Ideology',paragraphs:['Claims to imperial authority developed alongside expansion. The evidence does not support treating the “Great Yassa” as one surviving fixed written code.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'limits-order',number:'08',title:'Limits of Reconstruction',paragraphs:['Later sources illuminate the new order from different perspectives and must not be read as neutral eyewitness records.'],educationalVisual:{title:'Political Order / Imperial Structure',variant:'landscape',items:[{title:'Imperial Household'},{title:'Assemblies'},{title:'Incorporated Elites'},{title:'Delegated Commands'},{title:'Military-Political Units'}],note:'A schematic of relationships, not a complete constitutional chart.'},sourceIds:['source-secret-history-mongols','source-juvaini-world-conqueror','source-rashid-al-din-compendium']},
    ]},
  {
    id:'chapter-western-xia-jin',eraId:'rise-empire',number:'02',title:'Against Western Xia & Jin',subtitle:'Tributary Relations, War and Delegated Campaigns',period:'1209–1234',status:'in-progress',summary:'How did Mongol power confront Western Xia and Jin across a long, delegated series of campaigns?',introTitle:'Conquest Was a Process',intro:'Relations with Western Xia and Jin unfolded through changing subordination, warfare and delegated campaigns. Capturing Zhongdu did not end Jin rule, which survived until 1234.',relatedEventIds:['event-western-xia-subordination-1209','event-mongol-jin-war-1211','event-zhongdu-captured-1215','event-final-western-xia-1226-1227','event-jin-defeated-1234'],relatedPeopleIds:['person-temujin-chinggis-khan','person-muqali','person-ogedei-khan'],relatedPolityIds:['polity-yeke-mongol-ulus','polity-jurchen-jin'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023'],sections:[
      {id:'western-xia-context',number:'01',title:'Western Xia Relationship',paragraphs:['The 1209 settlement created a tributary or subordinate relationship, not permanent uncontested control.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'jin-war-1211',number:'02',title:'War with Jin',paragraphs:['Major Mongol–Jin war began in 1211 within a longer struggle.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'zhongdu-1215',number:'03',title:'Zhongdu, 1215',paragraphs:['The capture of Zhongdu was a major conquest accompanied by coercion and destruction, but Jin political power continued.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'delegated-campaigns',number:'04',title:'Delegated Campaigns',paragraphs:['Imperial commanders operated with delegated authority across extended campaigns.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'muqali',number:'05',title:'Muqali',paragraphs:['Muqali held major responsibility in the Jin theater and should not be reduced to a minor assistant.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'western-xia-final',number:'06',title:'The Final Western Xia Campaign',paragraphs:['Chinggis Khan’s final campaign in 1226–1227 returned to Western Xia.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'jin-survives',number:'07',title:'Jin Survives Chinggis Khan',paragraphs:['The Jin dynasty survived Chinggis Khan and was defeated only in 1234 under Ögedei.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'campaign-sequence-east',number:'08',title:'A Long Eastern War',paragraphs:['The eastern campaigns were a sequence of political and military phases rather than a single conquest.'],educationalVisual:{title:'Western Xia and Jin Campaign Chronology',variant:'timeline',items:[{title:'1209',text:'Western Xia relationship'},{title:'1211',text:'major Jin war begins'},{title:'1215',text:'Zhongdu captured'},{title:'1226–1227',text:'final Western Xia campaign'},{title:'1234',text:'Jin defeated'}],note:'Major phases only; not a route map.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
  {
    id:'chapter-empire-turns-west',eraId:'rise-empire',number:'03',title:'The Empire Turns West',subtitle:'Qara Khitai, Khwarazm and the Western Expeditions',period:'c. 1218–1223',status:'in-progress',summary:'How did conflict expand from Qara Khitai into the Khwarazmian and western political worlds?',introTitle:'A Sequence of Western Campaigns',intro:'Western expansion involved several campaigns, commanders and political contexts. Medieval narratives preserve crucial evidence but their causal stories and casualty totals require critical treatment.',relatedEventIds:['event-kuchlug-fall-c1218','event-otrar-crisis-1218','event-khwarazm-invasion-1219','event-bukhara-samarkand-1220','event-urgench-1221','event-jebe-subutai-western-expedition','event-kalka-river-1223'],relatedPeopleIds:['person-temujin-chinggis-khan','person-kuchlug','person-jebe','person-subutai','person-jochi','person-chagatai','person-ogedei-khan'],relatedPolityIds:['polity-yeke-mongol-ulus','polity-qara-khitai','polity-khwarazmian-empire','polity-rus-landscape'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958'],sections:[
      {id:'qara-khitai-kuchlug',number:'01',title:'Qara Khitai and Kuchlug',paragraphs:['Jebe’s campaign against Kuchlug brought the former Qara Khitai domain under Mongol control around 1218.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'otrar-crisis',number:'02',title:'The Otrar Crisis',paragraphs:['The Otrar crisis was an important stage in diplomatic breakdown, but its details and role in explaining the war are source-dependent.'],evidenceNote:{claim:'Otrar contributed to the breakdown preceding the Khwarazmian invasion.',sourceBasis:'Persian historiography assessed alongside modern scholarship',evidenceType:'Medieval narrative and modern historical interpretation',treatment:'Causal complexity retained',confidence:'SOURCE ACCOUNT',caution:'One narrative episode should not be treated as a complete monocausal explanation of the war.'},sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958']},{id:'invasion-1219',number:'03',title:'Invasion Begins',paragraphs:['The invasion of the Khwarazmian Empire began in 1219.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'bukhara-samarkand',number:'04',title:'Bukhara and Samarkand',paragraphs:['The 1220 campaign phase brought conquest, coercion, destruction and displacement to major urban centers.'],sourceIds:['source-juvaini-world-conqueror','source-dunnell-rise-chinggis-2023']},{id:'urgench-command',number:'05',title:'Urgench and Imperial Princes',paragraphs:['Jochi, Chagatai and Ögedei were involved in the destructive campaign for Urgench amid command tensions.'],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror']},{id:'casualty-problems',number:'06',title:'Casualty Figures',paragraphs:['Medieval accounts report very large numbers, but reported totals cannot automatically be treated as exact modern demographic counts.'],evidenceNote:{claim:'Conquests involved mass killing and destruction while exact numerical totals remain difficult to establish.',sourceBasis:'Medieval Persian historiography and modern historical assessment',evidenceType:'Narrative reporting and critical reconstruction',treatment:'Violence acknowledged; numerical precision withheld',confidence:'SOURCE ACCOUNT',caution:'A number reported by a medieval author is evidence about the account, not an independently verified census.'},sourceIds:['source-juvaini-world-conqueror','source-dunnell-rise-chinggis-2023']},{id:'jebe-subutai',number:'07',title:'Jebe and Subutai',paragraphs:['Their 1221–1223 expedition crossed several political regions without establishing a permanently fixed border.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'kalka-1223',number:'08',title:'Kalka River, 1223',paragraphs:["The expedition culminated in victory over a coalition involving Rus’ princes and Cuman allies."],educationalVisual:{title:'Westward Campaign Sequence',variant:'timeline',items:[{title:'c. 1218',text:'Kuchlug / Qara Khitai'},{title:'1218',text:'Otrar crisis'},{title:'1219',text:'invasion begins'},{title:'1220–1221',text:'major urban campaign phases'},{title:'1221–1223',text:'Jebe–Subutai expedition'},{title:'1223',text:'Kalka River'}],note:'Schematic chronology, not geographic precision.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
  {
    id:'chapter-chinggis-death-succession',eraId:'rise-empire',number:'04',title:'Death of Chinggis Khan & Imperial Succession',subtitle:'Dynastic Branches, Regency and the Accession of Ögedei',period:'1227–1229',status:'in-progress',summary:'How did the imperial family manage succession after Chinggis Khan’s death?',introTitle:'Succession Was a Political Process',intro:'Chinggis Khan’s death in 1227 opened a succession interval managed through dynastic relationships, Tolui’s regency and an imperial assembly. Later independent khanates were not already fully formed.',relatedEventIds:['event-final-western-xia-1226-1227','event-chinggis-death-1227','event-tolui-regency-1227-1229','event-ogedei-accession-1229'],relatedPeopleIds:['person-temujin-chinggis-khan','person-borte','person-jochi','person-chagatai','person-ogedei-khan','person-tolui'],relatedPolityIds:['polity-yeke-mongol-ulus'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023','source-secret-history-mongols'],sections:[
      {id:'final-campaign',number:'01',title:'The Final Campaign',paragraphs:['Chinggis Khan died in 1227 during the final Western Xia campaign.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'death-traditions',number:'02',title:'Death and Source Traditions',paragraphs:['Sources preserve differing details about his death; unsupported precise scenes are not reconstructed here.'],sourceIds:['source-secret-history-mongols','source-dunnell-rise-chinggis-2023']},{id:'succession-problem',number:'03',title:'The Succession Problem',paragraphs:['Supreme authority required dynastic negotiation and recognition rather than automatic modern-style inheritance.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'four-sons',number:'04',title:'Börte’s Four Principal Sons',paragraphs:['Jochi, Chagatai, Ögedei and Tolui anchored four major dynastic branches within the imperial family.'],sourceIds:['source-secret-history-mongols','source-dunnell-rise-chinggis-2023']},{id:'jochi-question',number:'05',title:'Jochi and Dynastic Dispute',paragraphs:['The Secret History preserves a controversy concerning Jochi’s parentage within dynastic politics. The project does not assert that modern evidence proves a different biological father.'],evidenceNote:{claim:'A medieval dynastic dispute concerned Jochi’s parentage.',sourceBasis:'The Secret History and modern historical treatment',evidenceType:'Medieval narrative',treatment:'Source-dependent dynastic controversy',confidence:'SOURCE ACCOUNT',caution:'The dispute is not biological proof of an alternative father.'},sourceIds:['source-secret-history-mongols','source-derachewiltz-secret-history-2006','source-dunnell-rise-chinggis-2023']},{id:'tolui-regency',number:'06',title:'Tolui’s Regency',paragraphs:['Tolui governed as regent from 1227 to 1229; this interval was part of imperial government, not an empty gap.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'ogedei-accession',number:'07',title:'Ögedei’s Accession',paragraphs:['Ögedei was recognized as Great Khan in 1229.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'branches-not-khanates',number:'08',title:'Branches, Not Yet Independent Khanates',paragraphs:['Dynastic branches existed, but later successor-state boundaries and independence should not be projected backward into 1227.'],educationalVisual:{title:'Succession and Four Principal Branches',variant:'landscape',items:[{title:'Chinggis Khan + Börte'},{title:'Jochi'},{title:'Chagatai'},{title:'Ögedei'},{title:'Tolui'},{title:'1227–1229 Tolui Regency'},{title:'1229 Ögedei'}],note:'Dynastic schematic, not a map of later khanates.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
  {
    id:'chapter-ogedei-governing-empire',eraId:'rise-empire',number:'05',title:'Ögedei: Governing an Expanding Empire',subtitle:'Administration, Communications and Multiple Frontiers',period:'1229–1241',status:'in-progress',summary:'How was an expanding Eurasian empire governed under Ögedei?',introTitle:'Government Across Distance',intro:'Ögedei’s reign developed imperial administration, taxation, communications and coordinated expansion. These institutions evolved through many actors rather than appearing as one ruler’s complete invention.',relatedEventIds:['event-ogedei-accession-1229','event-jin-defeated-1234','event-yam-regularization-1234','event-imperial-assembly-1235','event-western-conquests-1236-1240','event-ogedei-death-1241'],relatedPeopleIds:['person-ogedei-khan','person-toregene-khatun','person-yelu-chucai','person-muqali','person-batu','person-subutai'],relatedPolityIds:['polity-yeke-mongol-ulus','polity-jurchen-jin'],relatedPlaceIds:['place-orkhon-valley'],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-bemmann-mapping-karakorum-2022','source-unesco-orkhon-valley'],sections:[
      {id:'ogedei-great-khan',number:'01',title:'Ögedei as Great Khan',paragraphs:['Ögedei exercised imperial authority from 1229 and should not be reduced to a placeholder successor.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'administration',number:'02',title:'Imperial Administration',paragraphs:['Government relied on an imperial household, officials and regional agents operating across different political traditions.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'taxation',number:'03',title:'Taxation and Revenue',paragraphs:['Fiscal practices were increasingly organized, though not uniformly imposed everywhere in one form.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'yam',number:'04',title:'The Imperial Relay System',paragraphs:['The yam was regularized under Ögedei as a communications system; he did not create long-distance exchange from nothing.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'karakorum',number:'05',title:'Karakorum as an Imperial Center',paragraphs:['Karakorum developed as an imperial center within the Orkhon Valley. Archaeological mapping informs its later material history, but the full site experience is deferred.'],sourceIds:['source-bemmann-mapping-karakorum-2022','source-unesco-orkhon-valley']},{id:'jin-1234',number:'06',title:'Defeat of Jin',paragraphs:['The Jin dynasty was defeated in 1234 after a long war spanning two reigns.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'multiple-fronts',number:'07',title:'Expansion on Multiple Fronts',paragraphs:['Imperial forces operated simultaneously in several theaters under delegated commanders.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'governance-network',number:'08',title:'A Governance Network',paragraphs:['Imperial rule connected centers, households, officials, commanders and relay stations without creating a uniform modern bureaucracy.'],educationalVisual:{title:'Imperial Governance Network',variant:'landscape',items:[{title:'Great Khan and Household'},{title:'Assemblies'},{title:'Administrators'},{title:'Regional Commands'},{title:'Revenue'},{title:'Yam / Communications'}],note:'A conceptual network; practices varied across the empire.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
  {
    id:'chapter-expansion-across-eurasia',eraId:'rise-empire',number:'06',title:'Expansion Across Eurasia',subtitle:'Western Campaigns and Multiple Imperial Theaters',period:'1236–1242',status:'in-progress',summary:"How did imperial campaigns operate across the Volga, Rus’, Poland and Hungary while other theaters remained active?",introTitle:'Expansion on Multiple Fronts',intro:'The western campaign was one of several simultaneous imperial theaters. Its armies used coercion and destructive force, while the reasons for their 1242 withdrawal from Hungary remain debated.',relatedEventIds:['event-imperial-assembly-1235','event-western-conquests-1236-1240','event-poland-hungary-1241','event-ogedei-death-1241','event-hungary-withdrawal-1242'],relatedPeopleIds:['person-ogedei-khan','person-batu','person-subutai'],relatedPolityIds:['polity-yeke-mongol-ulus','polity-rus-landscape'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023'],sections:[
      {id:'assembly-1235',number:'01',title:'Planning Expansion',paragraphs:['The 1235 assembly formed an important stage in coordinating campaigns without making every later operational detail certain.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'batu-subutai',number:'02',title:'Batu and Subutai',paragraphs:['Batu and Subutai held leading roles within a campaign involving several princes and commanders.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'volga',number:'03',title:'The Volga Political World',paragraphs:['Campaigns transformed political communities around the Volga through conquest, coercion and displacement.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'rus',number:'04',title:"The Rus’ Political Landscape",paragraphs:["Multiple Rus’ principalities were conquered between 1236 and 1240; the region was not one uniform state."],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'poland-hungary',number:'05',title:'Poland and Hungary',paragraphs:['Imperial forces campaigned in Poland and Hungary in 1241 as parts of a coordinated but multi-command operation.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'other-theaters',number:'06',title:'Other Imperial Theaters',paragraphs:['Western expansion occurred alongside eastern and southern imperial concerns; this foundation does not overextend into unsupported detail on Korea.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'withdrawal-event',number:'07',title:'Withdrawal in 1242',paragraphs:['The withdrawal from Hungary occurred in 1242.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'withdrawal-causes',number:'08',title:'Why Did the Armies Withdraw?',paragraphs:['Ögedei’s death formed part of the context, but no single causal explanation is presented as unquestioned fact.'],evidenceNote:{claim:'Mongol forces withdrew from Hungary in 1242.',sourceBasis:'Modern historical reconstruction',evidenceType:'Chronology and competing causal interpretations',treatment:'Event established; causation debated',confidence:'DEBATED',caution:'The withdrawal should not be explained solely and automatically by Ögedei’s death.'},educationalVisual:{title:'Multiple Campaign Theaters',variant:'landscape',items:[{title:'Volga'},{title:"Rus’ Regions"},{title:'Poland'},{title:'Hungary'},{title:'Eastern / Southern Contexts'}],note:'Theater schematic, not territorial polygons or campaign routes.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
  {
    id:'chapter-queens-regents-throne',eraId:'rise-empire',number:'07',title:'Queens, Regents & the Struggle for the Throne',subtitle:'Imperial Women and Dynastic Politics, 1241–1251',period:'1241–1251',status:'in-progress',summary:'How did regents and dynastic households govern during a decade of contested succession?',introTitle:'Regency Was Government',intro:'The decade from Ögedei’s death to Möngke’s accession was not an empty interval between male khans. Töregene Khatun, Oghul-Qaimish and Sorghaghtani Beki were political actors within competing imperial households.',relatedEventIds:['event-ogedei-death-1241','event-toregene-regency-1242-1246','event-guyuk-accession-1246','event-guyuk-death-1248','event-oghul-qaimish-regency-1248-1251','event-mongke-accession-1251'],relatedPeopleIds:['person-ogedei-khan','person-toregene-khatun','person-guyuk-khan','person-oghul-qaimish','person-sorghaghtani-beki','person-mongke-khan','person-batu'],relatedPolityIds:['polity-yeke-mongol-ulus'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023'],sections:[
      {id:'ogedei-death',number:'01',title:'December 1241',paragraphs:['Ögedei’s death opened a contested succession rather than stopping imperial politics.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'toregene-regency',number:'02',title:'Töregene Khatun’s Regency',paragraphs:['Töregene governed from 1242 to 1246 and actively shaped the succession process.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'guyuk-accession',number:'03',title:'Güyük’s Accession',paragraphs:['Güyük became Great Khan in 1246 after extended negotiation and competition.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'guyuk-batu',number:'04',title:'Güyük and Batu',paragraphs:['Their imperial military relationship later included political tension; motives and intentions should not be dramatized beyond the evidence.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'guyuk-death',number:'05',title:'Güyük’s Death',paragraphs:['Güyük’s death in 1248 reopened the question of supreme authority.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'oghul-regency',number:'06',title:'Oghul-Qaimish’s Regency',paragraphs:['Oghul-Qaimish governed as regent from 1248 to 1251 amid dynastic competition.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'sorghaghtani',number:'07',title:'Sorghaghtani Beki',paragraphs:['Sorghaghtani was a major actor in Toluid household politics and Möngke’s accession, not a romanticized figure who secretly controlled the whole empire.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'mongke-1251',number:'08',title:'Möngke’s Accession',paragraphs:['Möngke’s accession in 1251 marked Toluid ascendancy after a decade of active government and contest.'],educationalVisual:{title:'Regency and Succession Sequence',variant:'timeline',items:[{title:'1241',text:'Ögedei dies'},{title:'1242–1246',text:'Töregene regency'},{title:'1246–1248',text:'Güyük'},{title:'1248–1251',text:'Oghul-Qaimish regency'},{title:'1251',text:'Möngke'}],note:'Regencies were periods of imperial government, not vacancies.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
  {
    id:'chapter-mongke-united-empire-crisis',eraId:'rise-empire',number:'08',title:'Möngke and the Crisis of the United Empire',subtitle:'Toluid Ascendancy, Renewed Expansion and Rival Claims',period:'1251–1260',status:'in-progress',summary:'How did renewed imperial coordination culminate in a succession rupture by 1260?',introTitle:'Expansion and Rupture',intro:'Möngke renewed imperial coordination and commissioned major western and southern campaigns. His death in 1259 produced rival claims in 1260 and a major rupture in united politics, not the disappearance of Mongol imperial traditions or states.',relatedEventIds:['event-mongke-accession-1251','event-hulegu-expedition-1253-1256','event-alamut-1256','event-baghdad-captured-1258','event-mongke-death-1259','event-rival-claimants-1260','event-toluid-civil-war-begins-1260','event-united-order-rupture-1260'],relatedPeopleIds:['person-mongke-khan','person-sorghaghtani-beki','person-hulegu','person-qubilai','person-ariq-boke'],relatedPolityIds:['polity-yeke-mongol-ulus','polity-song-dynasty','polity-nizari-network','polity-abbasid-caliphate'],relatedPlaceIds:[],relatedSiteIds:[],relatedObjectIds:[],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror'],sections:[
      {id:'mongke-ascendancy',number:'01',title:'Möngke and Toluid Ascendancy',paragraphs:['Möngke’s accession shifted supreme authority to the Toluid branch after contested dynastic politics.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'governance-reform',number:'02',title:'Imperial Governance',paragraphs:['Möngke pursued fiscal and administrative coordination across a diverse empire without making governance uniform everywhere.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'western-commission',number:'03',title:'Hülegü’s Western Commission',paragraphs:['Hülegü developed a major western expedition under Möngke’s authority from 1253.'],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror']},{id:'qubilai-south',number:'04',title:'Qubilai in the Southern Theater',paragraphs:['Qubilai received campaign responsibilities in the south; later Yuan political structures are not projected backward into this phase.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'alamut-baghdad',number:'05',title:'Alamut and Baghdad',paragraphs:['The campaigns overcame major Nizari strongholds in 1256 and captured Baghdad destructively in 1258. Reported casualty numbers remain source accounts.'],sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror']},{id:'mongke-death',number:'06',title:'Möngke’s Death',paragraphs:['Möngke died during the Song campaign in 1259 without a settled succession.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'rival-claims',number:'07',title:'Rival Claims in 1260',paragraphs:['Qubilai and Ariq Böke advanced competing claims, beginning the Toluid civil war.'],sourceIds:['source-dunnell-rise-chinggis-2023']},{id:'rupture-not-disappearance',number:'08',title:'Rupture, Not Disappearance',paragraphs:['The crisis fractured united imperial politics while Chinggisid states, institutions, political traditions and Eurasian networks continued.'],evidenceNote:{claim:'The 1260 succession crisis was a major rupture in united imperial politics.',sourceBasis:'Modern historical synthesis of succession and institutional change',evidenceType:'Historical interpretation',treatment:'Political rupture distinguished from imperial disappearance',confidence:'INTERPRETED',caution:'1260 was not a simple end date for Mongol imperial history.'},educationalVisual:{title:'From Möngke to the 1260 Rupture',variant:'timeline',items:[{title:'1251',text:'Möngke'},{title:'Hülegü',text:'western commission'},{title:'Qubilai',text:'southern command'},{title:'1259',text:'Möngke dies'},{title:'1260',text:'Qubilai / Ariq Böke rival claims'}],note:'Succession rupture did not erase continuing Chinggisid political worlds.'},sourceIds:['source-dunnell-rise-chinggis-2023']},
    ]},
]
