import { chapters } from './chapters.js'
import { eraWorlds } from './eraWorlds.js'
import { media } from './media.js'

export const chapterVisualTypeOptions = ['HISTORICAL_MEDIA', 'HISTORICAL_RECONSTRUCTION', 'EDUCATIONAL_DIAGRAM', 'INTENTIONAL_FALLBACK']
export const chapterVisualStatusOptions = ['READY', 'NEEDS_MEDIA', 'NEEDS_RECONSTRUCTION', 'NEEDS_DIAGRAM', 'FALLBACK_FOR_NOW']
export const chapterHeroStatusOptions = ['APPROVED_MEDIA', 'APPROVED_RECONSTRUCTION', 'DESIGNED_FALLBACK', 'NEEDS_MEDIA', 'NEEDS_RECONSTRUCTION']
export const chapterFallbackMotifOptions = ['POLITICAL_ORDER', 'SUCCESSION', 'EVIDENCE', 'CONFLICT', 'RELIGION', 'EXCHANGE', 'SOCIETY', 'TRANSITION']
export const educationalDiagramTypeOptions = ['POLITICAL_ORDER', 'SUCCESSION', 'PROCESS', 'CHRONOLOGY', 'EVIDENCE', 'INSTITUTION', 'NETWORK']

export const educationalDiagrams = [
  {
    id: 'diagram-political-order-1206', type: 'POLITICAL_ORDER', title: 'Political Order After 1206', chapterIds: ['chapter-building-new-order-1206'],
    summary: 'A schematic showing connected fields of authority in the emerging imperial order rather than a complete constitutional chart.',
    items: [
      { title: 'Imperial Household', text: 'dynastic and household authority' },
      { title: 'Assemblies', text: 'recognition and political deliberation' },
      { title: 'Incorporated Elites', text: 'changing service and obligations' },
      { title: 'Delegated Commands', text: 'authority exercised across distant theaters' },
      { title: 'Military-Political Units', text: 'organization intertwined with households' },
    ],
    variant: 'landscape', evidenceLabel: 'EDUCATIONAL DIAGRAM', sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-secret-history-mongols'], status: 'READY',
    note: 'A teaching schematic of relationships described in the sources, not a complete constitution or a claim that every institution was uniform.',
  },
  {
    id: 'diagram-regency-succession-1241-1251', type: 'SUCCESSION', title: 'Regency and Contested Succession, 1241–1251', chapterIds: ['chapter-queens-regents-throne'],
    summary: 'A chronological relationship diagram showing that regency was a form of government within competing imperial households.',
    items: [
      { title: '1241 · Ögedei dies', text: 'a succession crisis begins' },
      { title: 'Töregene Khatun', text: 'regency and support for Güyük’s succession' },
      { title: '1246 · Güyük', text: 'accession after an extended interregnum' },
      { title: 'Oghul-Qaimish', text: 'regency after Güyük’s death in 1248' },
      { title: 'Sorghaghtani and Batu', text: 'political roles in the realignment preceding Möngke’s accession' },
      { title: '1251 · Möngke', text: 'accession and a changed balance among households' },
    ],
    variant: 'timeline', evidenceLabel: 'SUCCESSION DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
    note: 'The sequence does not reduce imperial government to a simple hereditary line or treat later narrative detail as a verbatim record.',
  },
  {
    id: 'diagram-turk-political-transition', type: 'CHRONOLOGY', title: 'Political Transition, 552–555', chapterIds: ['chapter-rise-of-the-turks'], summary: 'A staged political transition from Rouran authority toward rising Türk power and later political formations.',
    items: [{ title: 'Before 552', text: 'hierarchy and changing power within the Rouran political world' }, { title: '552', text: 'Bumin leads a decisive political break' }, { title: '552–555', text: 'conflict, resistance, and realignment continue' }, { title: 'Afterward', text: 'new Türk political formations develop across Inner Asia' }],
    variant: 'timeline', evidenceLabel: 'CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-turk-empire', 'source-early-nomads-eastern-steppe'], status: 'READY', note: 'Political transformation was a process, not instantaneous population or ethnic replacement.',
  },
  {
    id: 'diagram-twelfth-century-plural-powers', type: 'POLITICAL_ORDER', title: 'A Plural Political World', chapterIds: ['chapter-twelfth-century-steppe-powers'], summary: 'Several political communities and neighboring empires occupied the same changing field without forming one hierarchy.',
    items: [{ title: 'Kereit', text: 'independent rulers and coalitions' }, { title: 'Naiman', text: 'a major regional political power' }, { title: 'Merkit and Tatar', text: 'changing alliances, rivalries, and conflicts' }, { title: 'Mongol Groupings', text: 'multiple groupings before 1206' }, { title: 'Jin and Qara Khitai', text: 'important neighboring imperial powers' }],
    variant: 'network', evidenceLabel: 'POLITICAL-ORDER DIAGRAM · INTERPRETED', sourceRefs: ['source-cambridge-inner-asia-c1200', 'source-munkh-erdene-chinggisid-dynasty-2018', 'source-dunnell-rise-chinggis-2023'], status: 'READY', note: 'No group is shown as inevitably dominant, and these are not fixed modern ethnic nation-states.',
  },
  {
    id: 'diagram-temujin-jamukha-toghrul-network', type: 'NETWORK', title: 'Relationships Changed Over Time', chapterIds: ['chapter-temujin-jamukha-toghrul'], summary: 'A phased network showing political actors whose cooperation and rivalry changed rather than remaining fixed.',
    items: [{ title: 'Temüjin', personId: 'person-temujin-chinggis-khan', text: 'coalition-building within changing relationships' }, { title: 'Jamukha', personId: 'person-jamukha', text: 'earlier close relationship → later political rivalry' }, { title: 'Toghrul / Ong Khan', personId: 'person-toghrul-ong-khan', text: 'Kereit ruler; cooperation → rupture associated with 1203' }, { title: '1201', text: 'Jamukha’s source-based elevation as Gür Khan' }, { title: '1203', text: 'rupture and Kereit political defeat' }],
    phases: [
      { title: 'Earlier relationships', subtitle: 'source-reported and interpreted connections', items: [{ id: 'temujin', title: 'Temüjin', personId: 'person-temujin-chinggis-khan' }, { id: 'jamukha', title: 'Jamukha', personId: 'person-jamukha' }, { id: 'toghrul', title: 'Toghrul', personId: 'person-toghrul-ong-khan' }], edges: [{ from: 'temujin', to: 'jamukha', label: 'close personal / political relationship', kind: 'changing' }, { from: 'temujin', to: 'toghrul', label: 'political connection and cooperation', kind: 'cooperation' }] },
      { title: 'Later political struggle', subtitle: 'relationships transform', items: [{ id: 'temujin', title: 'Temüjin', personId: 'person-temujin-chinggis-khan' }, { id: 'jamukha', title: 'Jamukha', personId: 'person-jamukha' }, { id: 'toghrul', title: 'Toghrul', personId: 'person-toghrul-ong-khan' }], edges: [{ from: 'temujin', to: 'jamukha', label: 'later rivalry', kind: 'conflict' }, { from: 'temujin', to: 'toghrul', label: 'rupture associated with 1203', kind: 'conflict' }] },
    ],
    legend: [{ kind: 'cooperation', label: 'cooperation / alliance' }, { kind: 'conflict', label: 'rivalry / conflict' }, { kind: 'changing', label: 'changing / source-dependent' }],
    variant: 'network', evidenceLabel: 'RELATIONSHIP NETWORK · SOURCE ACCOUNT / INTERPRETED', sourceRefs: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006', 'source-munkh-erdene-chinggisid-dynasty-2018'], status: 'READY', note: 'Alliance, closeness, and rivalry describe phases; they are not permanent labels or complete biographies.',
  },
  {
    id: 'diagram-ogedei-governance-network', type: 'INSTITUTION', title: 'Imperial Governance Network', chapterIds: ['chapter-ogedei-governing-empire'], summary: 'A conceptual network of governance mechanisms operating unevenly across an expanding empire.',
    items: [{ id: 'great-khan', title: 'Ögedei · Great Khan', personId: 'person-ogedei-khan', text: 'imperial authority and household' }, { id: 'assemblies', title: 'Assemblies', text: 'political coordination and recognition' }, { id: 'officials', title: 'Officials and Administrators', text: 'work across different political traditions' }, { id: 'revenue', title: 'Revenue', text: 'increasing organization without uniform practice' }, { id: 'commands', title: 'Regional Commands', text: 'delegated authority across several theaters' }, { id: 'yam', title: 'Yam', text: 'regularized imperial communications' }],
    edges: [{ from: 'great-khan', to: 'assemblies' }, { from: 'great-khan', to: 'officials' }, { from: 'officials', to: 'revenue' }, { from: 'great-khan', to: 'commands' }, { from: 'officials', to: 'yam' }],
    variant: 'network', evidenceLabel: 'INSTITUTIONAL DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-juvaini-world-conqueror'], status: 'READY', note: 'This is not a modern centralized bureaucracy; practices and authority varied across regions.',
  },
  {
    id: 'diagram-eurasian-expansion-chronology', type: 'CHRONOLOGY', title: 'Western Expansion in Stages', chapterIds: ['chapter-expansion-across-eurasia'], summary: 'A non-cartographic sequence of major campaign phases and political contexts from planning to withdrawal.',
    items: [{ title: '1235', text: 'imperial assembly and campaign coordination' }, { title: '1236–1240', text: 'campaigns around the Volga and across multiple Rus’ principalities' }, { title: '1241', text: 'multi-command campaigns in Poland and Hungary' }, { title: 'December 1241', text: 'Ögedei dies' }, { title: '1242', text: 'withdrawal from Hungary amid debated causes' }],
    variant: 'timeline', evidenceLabel: 'CAMPAIGN CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY', note: 'This is not a route map, territorial polygon, casualty estimate, or single-cause explanation of withdrawal.',
  },
  {
    id: 'diagram-yuan-imperial-order', type: 'INSTITUTION', title: 'The Yuan Imperial Order', chapterIds: ['chapter-qubilai-yuan-imperial-order'], summary: 'A relationship model connecting Chinggisid authority, mobile court centers, institutions, and the wider post-1260 Mongol world.',
    items: [{ id: 'qubilai', title: 'Qubilai Khan', personId: 'person-qubilai', text: 'Great Khan claim and Yuan emperor' }, { id: 'steppe', title: 'Mongolia and the Steppe', text: 'homeland, armies, and court movement' }, { id: 'dadu', title: 'Dadu / Khanbaliq', text: 'principal administrative capital' }, { id: 'shangdu', title: 'Shangdu', text: 'court and political center' }, { id: 'institutions', title: 'Institutions of Rule', text: 'Mongol, Chinese, and other regional practices' }, { id: 'wider-world', title: 'Wider Mongol World', text: 'contested claims, diplomacy, and increasingly autonomous realms' }],
    edges: [{ from: 'qubilai', to: 'steppe' }, { from: 'qubilai', to: 'dadu' }, { from: 'qubilai', to: 'shangdu' }, { from: 'qubilai', to: 'institutions' }, { from: 'qubilai', to: 'wider-world', kind: 'changing' }],
    variant: 'network', evidenceLabel: 'INSTITUTIONAL DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-yuan-ulus-2023', 'source-cambridge-mongol-empire-introduction-2023'], status: 'READY', note: 'Yuan rule was Mongol-led and governed much of China, but it was neither “only China” nor a uniform administration across all Mongol realms.',
  },
  {
    id: 'diagram-mandukhai-dayan-dynastic-context', type: 'SUCCESSION', title: 'Restoring Chinggisid Authority', chapterIds: ['chapter-mandukhai-dayan-restoration'], summary: 'A dynastic-context diagram centered on a documented marriage and a deliberately visible genealogical gap.',
    layoutMode: 'GENEALOGY', items: [{ id: 'earlier-line', title: 'Earlier Chinggisid Line', text: 'documented descent; intermediate people are not fully represented' }, { title: 'Genealogical Gap', kind: 'gap', text: 'generations omitted from the current canonical dataset' }, { id: 'dayan', title: 'Dayan Khan', personId: 'person-dayan-khan', text: 'Chinggisid dynastic legitimacy' }, { id: 'mandukhai', title: 'Mandukhai Khatun', personId: 'person-mandukhai-khatun', kind: 'spouse', text: 'documented marriage; household and coalition politics' }, { id: 'household', title: 'Restoration Household', kind: 'consequence', text: 'shared political center' }, { id: 'consolidation', title: 'Regional Consolidation', kind: 'consequence', text: 'authority rebuilt unevenly through support and conflict' }],
    legend: [{ kind: 'documented', label: 'solid = documented represented relationship' }, { kind: 'gap', label: 'broken = generations omitted in this representation' }],
    variant: 'succession', evidenceLabel: 'DYNASTIC CONTEXT · ESTABLISHED / LATER CHRONICLE / INTERPRETED', sourceRefs: ['source-veit-eastern-steppe-2009', 'source-rossabi-ming-inner-asia-1998', 'source-erdeni-yin-tobchi-1662'], status: 'READY', note: 'The missing intermediate generations remain a visible gap; later chronicle narratives are not treated as eyewitness testimony.',
  },
  {
    id: 'diagram-khalkha-qing-government', type: 'INSTITUTION', title: 'How Qing–Mongol Government Worked', chapterIds: ['chapter-khalkha-qing-government'], summary: 'Overlapping layers connected imperial authority, offices, assemblies, hereditary jurisdictions, and local practice.',
    items: [{ id: 'court', x: 50, y: 9, title: 'Qing Court', text: 'Manchu-ruled multiethnic imperial authority' }, { id: 'offices', x: 50, y: 31, title: 'Lifan Yuan and Imperial Offices', text: 'regulation, communication, and review' }, { id: 'leagues', x: 25, y: 53, title: 'Leagues / Chuulgans', text: 'assemblies and coordination among banners' }, { id: 'banners', x: 75, y: 53, title: 'Banners / Khoshuu and Jasaghs', text: 'hereditary jurisdiction and obligations' }, { id: 'local', x: 25, y: 79, title: 'Nobles, Monasteries, Communities', text: 'local authority, petitions, resources, and practice' }, { id: 'pastoral', x: 75, y: 79, title: 'Pastoral Society', text: 'mobility shaped by ecology, status, regulation, and negotiation' }],
    edges: [{ from: 'court', to: 'offices', kind: 'two-way' }, { from: 'offices', to: 'leagues', kind: 'two-way' }, { from: 'offices', to: 'banners', kind: 'two-way' }, { from: 'leagues', to: 'banners', kind: 'two-way' }, { from: 'leagues', to: 'local', kind: 'two-way' }, { from: 'banners', to: 'pastoral', kind: 'two-way' }, { from: 'local', to: 'pastoral', kind: 'two-way' }],
    legend: [{ kind: 'two-way', label: 'communication, obligations, petitions, and negotiation' }],
    variant: 'network', evidenceLabel: 'INSTITUTIONAL DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-elverskog-our-great-qing-2006', 'source-munkh-erdene-hereditary-divisions-2016', 'source-bareja-starzynska-jebtsundamba-2018'], status: 'READY', note: 'Banners were not modern provinces, and authority did not operate as one simple vertical bureaucracy.',
  },
  {
    id: 'diagram-mpr-socialist-transformation', type: 'PROCESS', title: 'The Socialist Project Developed Over Time', chapterIds: ['chapter-mpr-socialist-project'], summary: 'A staged process showing institutional and economic transformation, conflict, external influence, and policy reversal.',
    items: [{ title: '1921', text: 'revolutionary government with the Bogd Khan retained as limited monarch' }, { title: '1924', text: 'republican constitutional order and expanding party leadership' }, { title: 'Party and State Institutions', text: 'government, administration, armed forces, and political centralization' }, { title: 'Soviet and Comintern Influence', text: 'essential support within a deeply unequal relationship' }, { title: 'Late 1920s', text: 'accelerated class policy and early collectivization' }, { title: '1932', text: 'resistance, repression, crisis, and the New Turn' }],
    variant: 'timeline', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-bawden-modern-mongolia-1989', 'source-rossabi-modern-mongolia-2005', 'source-morozova-socialist-revolutions-mongolia-2009', 'source-kaplonski-lama-question-2014'], status: 'READY', note: 'Socialist transformation was neither instantaneous nor explained solely by Soviet direction, modernization, or repression.',
  },
]

export const chapterVisualAssignments = [
  {
    id: 'chapter-visual-orkhon-world', chapterId: 'chapter-orkhon-world', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-kul-tegin-inscription-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-kul-tegin-inscription-01', reconstructionId: null, designedFallback: null },
    educationalType: 'EVIDENCE', title: 'Reading a Monumental Source', summary: 'The inscription is material and textual evidence for Türk political memory, authorship, and commemoration.', alt: 'Weathered stone surface bearing vertical lines of the Kül Tegin inscription.', evidenceLabel: 'ARCHAEOLOGICAL EVIDENCE · PRIMARY TEXTUAL SOURCE', sourceRefs: ['source-cambridge-bulletin-soas-orkhon-inscriptions'], status: 'READY',
  },
  {
    id: 'chapter-visual-building-new-order-1206', chapterId: 'chapter-building-new-order-1206', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-political-order-1206',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' },
    educationalType: 'POLITICAL_ORDER', title: 'How the New Order Worked', summary: 'This diagram organizes the chapter’s evidence about household authority, assemblies, incorporated elites, and delegated command.', alt: 'Conceptual political-order diagram linking the imperial household, assemblies, incorporated elites, delegated commands, and military-political units.', evidenceLabel: 'EDUCATIONAL DIAGRAM', sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-secret-history-mongols'], status: 'READY',
  },
  {
    id: 'chapter-visual-queens-regents-throne', chapterId: 'chapter-queens-regents-throne', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-regency-succession-1241-1251',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'SUCCESSION' },
    educationalType: 'SUCCESSION', title: 'Regency Was Government', summary: 'The succession sequence foregrounds Töregene, Oghul-Qaimish, and Sorghaghtani as political actors rather than gaps between male reigns.', alt: 'Chronological succession diagram from Ögedei’s death through the regencies of Töregene and Oghul-Qaimish to Möngke’s accession.', evidenceLabel: 'SUCCESSION DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-empire-connections', chapterId: 'chapter-empire-of-connections', visualType: 'HISTORICAL_RECONSTRUCTION', mediaId: null, reconstructionId: 'reconstruction-era-04-mongol-world', diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_RECONSTRUCTION', mediaId: null, reconstructionId: 'reconstruction-era-04-mongol-world', designedFallback: null },
    educationalType: 'NETWORK', title: 'Movement Across a Connected World', summary: 'A contextual reconstruction introduces relay, caravan, and regional movement without presenting one exact journey or a uniformly safe road.', alt: 'Atmospheric reconstruction of travelers and pack animals moving through a composite Inner Asian route and settlement landscape.', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION', sourceRefs: ['source-biran-intercivilizational-exchange-2015', 'source-allsen-commodity-exchange-1997'], status: 'READY',
  },
  {
    id: 'chapter-visual-xiongnu-world', chapterId: 'chapter-xiongnu-world', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-xiongnu-belt-buckle-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-xiongnu-belt-buckle-01', reconstructionId: null, designedFallback: null }, educationalType: 'EVIDENCE',
    title: 'What Can an Archaeological Object Tell Us?', summary: 'Material form and imagery can illuminate elite display, craft, and connections while leaving language, ethnicity, and identity unresolved.', alt: 'Gold-colored Xiongnu belt buckle with mirrored feline figures attacking ibexes.', evidenceLabel: 'ARCHAEOLOGICAL EVIDENCE', sourceRefs: ['source-oxford-xiongnu'], status: 'READY',
    canSupport: 'Study of elite display, animal imagery, craft traditions, and connections within the wider Xiongnu world.', cannotEstablish: 'Modern ethnicity, language, national identity, or the experience of every Xiongnu community.',
  },
  {
    id: 'chapter-visual-rise-of-turks', chapterId: 'chapter-rise-of-the-turks', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-turk-political-transition',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'TRANSITION' }, educationalType: 'CHRONOLOGY',
    title: 'Political Change, Not Instant Replacement', summary: 'The sequence distinguishes the decisive break of 552 from continued resistance, realignment, and later Türk political development.', alt: 'Chronology showing the Rouran political world, the break of 552, continued transition through 555, and later Türk political formations.', evidenceLabel: 'CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-turk-empire', 'source-early-nomads-eastern-steppe'], status: 'READY',
  },
  {
    id: 'chapter-visual-twelfth-century-powers', chapterId: 'chapter-twelfth-century-steppe-powers', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-twelfth-century-plural-powers',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'POLITICAL_ORDER',
    title: 'Many Powers Before 1206', summary: 'The political landscape contained several communities and neighboring empires; it was not a hierarchy centered on Temüjin.', alt: 'Plural political-order diagram showing Kereit, Naiman, Merkit, Tatar, Mongol groupings, Jin, and Qara Khitai without a dominant center.', evidenceLabel: 'POLITICAL-ORDER DIAGRAM · INTERPRETED', sourceRefs: ['source-cambridge-inner-asia-c1200', 'source-munkh-erdene-chinggisid-dynasty-2018', 'source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-temujin-jamukha-toghrul', chapterId: 'chapter-temujin-jamukha-toghrul', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-temujin-jamukha-toghrul-network',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'NETWORK',
    title: 'Changing Relationships', summary: 'The network presents Temüjin, Jamukha, and Toghrul as independent actors whose relationships changed through time.', alt: 'Relationship network showing earlier connection, cooperation, rivalry, Jamukha’s 1201 elevation, and the 1203 rupture without permanent labels.', evidenceLabel: 'RELATIONSHIP NETWORK · SOURCE ACCOUNT / INTERPRETED', sourceRefs: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006', 'source-munkh-erdene-chinggisid-dynasty-2018'], status: 'READY',
  },
  {
    id: 'chapter-visual-ogedei-governance', chapterId: 'chapter-ogedei-governing-empire', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-ogedei-governance-network',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'INSTITUTION',
    title: 'Governing Through a Network', summary: 'Imperial authority connected households, assemblies, officials, revenue practices, commands, and communications without uniform administration.', alt: 'Institutional network centered on Ögedei and connecting assemblies, administrators, revenue, regional commands, and the imperial relay system.', evidenceLabel: 'INSTITUTIONAL DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023', 'source-juvaini-world-conqueror'], status: 'READY',
  },
  {
    id: 'chapter-visual-expansion-eurasia', chapterId: 'chapter-expansion-across-eurasia', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-eurasian-expansion-chronology',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'CONFLICT' }, educationalType: 'CHRONOLOGY',
    title: 'Expansion in Stages', summary: 'A non-cartographic chronology separates planning, regional campaign phases, and the debated context of withdrawal.', alt: 'Chronology of the 1235 assembly, western campaigns from 1236 to 1240, Poland and Hungary in 1241, Ögedei’s death, and withdrawal in 1242.', evidenceLabel: 'CAMPAIGN CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-qubilai-yuan-order', chapterId: 'chapter-qubilai-yuan-imperial-order', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-yuan-imperial-order',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'INSTITUTION',
    title: 'An Imperial Order Across Political Traditions', summary: 'The model relates Qubilai’s authority, court centers, institutions, Mongolia, China, and the wider Mongol world.', alt: 'Institutional diagram connecting Qubilai, Mongolia and the steppe, Dadu, Shangdu, varied institutions of rule, and contested relationships with wider Mongol realms.', evidenceLabel: 'INSTITUTIONAL DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-yuan-ulus-2023', 'source-cambridge-mongol-empire-introduction-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-mandukhai-dayan', chapterId: 'chapter-mandukhai-dayan-restoration', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-mandukhai-dayan-dynastic-context',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'SUCCESSION' }, educationalType: 'SUCCESSION',
    title: 'A Restoration Household and a Genealogical Gap', summary: 'The diagram retains the documented marriage and Chinggisid descent while refusing to invent absent intermediate generations.', alt: 'Dynastic-context diagram showing an explicit genealogical gap before Dayan Khan and the documented marriage connecting Dayan Khan and Mandukhai Khatun.', evidenceLabel: 'DYNASTIC CONTEXT · ESTABLISHED / LATER CHRONICLE / INTERPRETED', sourceRefs: ['source-veit-eastern-steppe-2009', 'source-rossabi-ming-inner-asia-1998', 'source-erdeni-yin-tobchi-1662'], status: 'READY',
  },
  {
    id: 'chapter-visual-khalkha-qing-government', chapterId: 'chapter-khalkha-qing-government', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-khalkha-qing-government',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'INSTITUTION',
    title: 'Overlapping Imperial and Local Authority', summary: 'The institutional model shows two-way relationships among the Qing court, imperial offices, leagues, banners, local authorities, and pastoral practice.', alt: 'Institutional diagram connecting the Qing court, Lifan Yuan, leagues, banners and jasaghs, nobles, monasteries, communities, and pastoral society.', evidenceLabel: 'INSTITUTIONAL DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-elverskog-our-great-qing-2006', 'source-munkh-erdene-hereditary-divisions-2016', 'source-bareja-starzynska-jebtsundamba-2018'], status: 'READY',
  },
  {
    id: 'chapter-visual-mpr-socialist-project', chapterId: 'chapter-mpr-socialist-project', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-mpr-socialist-transformation',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'SOCIETY' }, educationalType: 'PROCESS',
    title: 'Transformation Was a Process', summary: 'The sequence distinguishes constitutional change, institution-building, external influence, radical policy, crisis, and reversal.', alt: 'Process diagram from the 1921 revolutionary government through the 1924 republic, institution-building, Soviet and Comintern influence, radicalization, and the 1932 New Turn.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-bawden-modern-mongolia-1989', 'source-rossabi-modern-mongolia-2005', 'source-morozova-socialist-revolutions-mongolia-2009', 'source-kaplonski-lama-question-2014'], status: 'READY',
  },
]

export const priorityChapterVisualIds = [
  'chapter-bronze-age-steppe', 'chapter-orkhon-world',
  'chapter-khitan-liao-world', 'chapter-new-order-1206',
  'chapter-building-new-order-1206', 'chapter-queens-regents-throne',
  'chapter-crisis-of-1260', 'chapter-empire-of-connections',
  'chapter-mandukhai-dayan-restoration', 'chapter-toward-qing-rule-1691',
  'chapter-entering-qing-imperial-order', 'chapter-late-qing-crisis-road-1911',
  'chapter-1911-independence', 'chapter-late-socialism-democratic-revolution-1990',
  'chapter-building-democratic-state-1990-1992', 'chapter-mining-growth-natural-resources',
]

export function getChapterPrimaryVisual(chapterId) {
  return chapterVisualAssignments.find((record) => record.chapterId === chapterId) ?? null
}

export function getChapterHeroAssignment(chapterId) {
  return getChapterPrimaryVisual(chapterId)?.heroVisual ?? null
}

export function getEducationalDiagram(diagramId) {
  return educationalDiagrams.find((record) => record.id === diagramId) ?? null
}

export const chapterVisualInventory = chapters.map((chapter) => {
  const assignment = getChapterPrimaryVisual(chapter.id)
  const approvedMedia = media.filter((record) => record.approved && (record.relatedChapterIds?.includes(chapter.id) || chapter.mediaIds?.includes(record.id)))
  const inlineDiagrams = chapter.sections?.filter((section) => section.educationalVisual).length ?? 0
  const eraReconstructionId = eraWorlds.find((world) => world.eraId === chapter.eraId)?.reconstructionId ?? null
  const recommendedVisualType = assignment?.visualType
    ?? (approvedMedia.length ? 'HISTORICAL_MEDIA' : inlineDiagrams ? 'EDUCATIONAL_DIAGRAM' : eraReconstructionId ? 'EDUCATIONAL_DIAGRAM' : 'INTENTIONAL_FALLBACK')
  const status = assignment?.status
    ?? (approvedMedia.length ? 'READY' : inlineDiagrams ? 'NEEDS_DIAGRAM' : eraReconstructionId ? 'NEEDS_DIAGRAM' : 'FALLBACK_FOR_NOW')

  return {
    eraId: chapter.eraId, chapterNumber: chapter.number, chapterId: chapter.id, slug: chapter.slug ?? chapter.id.replace('chapter-', ''), title: chapter.title,
    currentVisual: assignment?.id ?? (approvedMedia.length ? approvedMedia.map((record) => record.id).join(', ') : inlineDiagrams ? `${inlineDiagrams} inline educational visual${inlineDiagrams === 1 ? '' : 's'}` : null),
    recommendedVisualType,
    recommendedSubject: assignment?.summary ?? chapter.summary,
    approvedMediaIds: approvedMedia.map((record) => record.id), reusableReconstructionId: eraReconstructionId,
    newReconstructionAppropriate: !approvedMedia.length && !inlineDiagrams && Boolean(eraReconstructionId), diagramBetterThanImage: Boolean(inlineDiagrams) || recommendedVisualType === 'EDUCATIONAL_DIAGRAM',
    evidenceProvenanceRisk: approvedMedia.length ? 'Use only the approved record’s stated evidentiary scope.' : 'Do not add imagery without source, rights, and evidence review.',
    heroStatus: assignment?.heroVisual?.heroStatus ?? (approvedMedia.length ? 'NEEDS_MEDIA' : eraReconstructionId ? 'NEEDS_RECONSTRUCTION' : 'DESIGNED_FALLBACK'),
    educationalVisualStatus: status,
  }
})
