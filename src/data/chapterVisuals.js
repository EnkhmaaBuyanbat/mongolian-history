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
  {
    id: 'diagram-khitan-liao-network', type: 'NETWORK', title: 'An Imperial Network, Not a Modern Border', chapterIds: ['chapter-khitan-liao-world'],
    summary: 'Liao relationships connected political centers, Mongolian landscapes, administration, archaeology, and later successor trajectories without drawing a national frontier.',
    items: [
      { title: 'Khitan political organization', text: 'preceded and shaped the Liao imperial order' },
      { title: '907 as conventional beginning', text: 'an editorial date for imperial rule, not an ethnic origin' },
      { title: 'Mongolia in the network', text: 'activity, administration, and changing influence' },
      { title: 'Chintolgoi Balgas', text: 'a documented site within a larger imperial world' },
      { title: 'After 1125', text: 'Jin, Qara Khitai, and Khitan communities continued on different paths' },
    ],
    variant: 'network', evidenceLabel: 'IMPERIAL NETWORK · ESTABLISHED / INTERPRETED', sourceRefs: ['source-jackson-mongol-age-eastern-inner-asia', 'source-kradin-ivliev-deported-nation'], status: 'READY',
    note: 'The diagram does not convert influence into a mapped border or treat 1125 as ethnic disappearance.',
  },
  {
    id: 'diagram-1206-reorganization', type: 'POLITICAL_ORDER', title: 'Political Reorganization in 1206', chapterIds: ['chapter-new-order-1206'],
    summary: 'An assembly recognized Temüjin as Chinggis Khan within a reorganization of existing steppe politics, not the beginning of Mongolian history.',
    items: [
      { title: 'Competing political groupings', text: 'the field already existed' },
      { title: 'Assembly / quriltai', text: 'recognition and deliberation in the sources' },
      { title: 'Recognition of Chinggis Khan', text: 'a political title within a new order' },
      { title: 'Mongol political reorganization', text: 'authority and obligations were recast' },
    ],
    variant: 'landscape', evidenceLabel: 'EDUCATIONAL DIAGRAM', sourceRefs: ['source-secret-history-mongols', 'source-dunnell-rise-chinggis-2023'], status: 'READY',
    note: '1206 reorganized politics; it did not create a people or start the history of the steppe.',
  },
  {
    id: 'diagram-xia-jin-chronology', type: 'CHRONOLOGY', title: 'Conquest Was a Process', chapterIds: ['chapter-western-xia-jin'],
    summary: 'Relations with Western Xia and Jin unfolded through subordination, war, delegated campaigns, and later conclusions—not a single capture.',
    items: [
      { title: '1209', text: 'Western Xia subordination begins a changing relationship' },
      { title: '1211', text: 'open war with Jin' },
      { title: '1215', text: 'Zhongdu captured; Jin rule continues' },
      { title: '1226–1227', text: 'final Western Xia campaigns' },
      { title: '1234', text: 'Jin defeated after a long process' },
    ],
    variant: 'timeline', evidenceLabel: 'CAMPAIGN CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
    note: 'Capturing a capital is not the same as ending a polity; this is not a campaign map.',
  },
  {
    id: 'diagram-crisis-1260-worlds', type: 'POLITICAL_ORDER', title: 'Rival Claims, Connected Worlds', chapterIds: ['chapter-crisis-of-1260'],
    summary: 'Qubilai and Ariq Böke drew on different centers and networks; civil war transformed the imperial order without instantly dissolving Mongol political traditions.',
    items: [
      { title: '1259', text: 'Möngke’s death leaves succession contested' },
      { title: 'Qubilai', text: 'claim, assemblies, and China–steppe political resources' },
      { title: 'Ariq Böke', text: 'claim, assemblies, and Mongolian political resources' },
      { title: '1260–1264', text: 'Toluid civil war' },
      { title: 'After 1264', text: 'connected Mongol worlds, not one vanished empire' },
    ],
    variant: 'network', evidenceLabel: 'POLITICAL-ORDER DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-yuan-ulus-2023', 'source-dunnell-rise-chinggis-2023'], status: 'READY',
    note: 'Rivalry over supreme authority is not the disappearance of Mongol imperial states.',
  },
  {
    id: 'diagram-1368-yuan-transition', type: 'CHRONOLOGY', title: '1368 Ended Yuan Rule in China, Not Mongol History', chapterIds: ['chapter-crisis-fragmentation-fall-yuan'],
    summary: 'Loss of Dadu ended Yuan government over most of China while Chinggisid politics continued from Mongolia and other regional courts.',
    items: [
      { title: 'Yuan imperial order', text: 'Mongol-led rule across China and connected regions' },
      { title: 'Political strain', text: 'succession, regional courts, and contested authority' },
      { title: '1368', text: 'Dadu lost; Yuan rule in China ends' },
      { title: 'Northern continuation', text: 'Chinggisid politics continue from Mongolia' },
      { title: 'Other uluses', text: 'regional Mongol worlds were already distinct' },
    ],
    variant: 'timeline', evidenceLabel: 'CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-yuan-ulus-2023'], status: 'READY',
    note: 'The date is a Chinese political turning point, not ethnic disappearance or the end of every Chinggisid state.',
  },
  {
    id: 'diagram-840-changed-continued', type: 'PROCESS', title: 'What Ended and What Continued', chapterIds: ['chapter-840-transition'],
    summary: '840 ended Uyghur imperial rule in Mongolia; communities, names, and later histories did not vanish with the khaganate.',
    items: [
      { title: 'Uyghur imperial order in Mongolia', text: 'what 840 ended' },
      { title: 'Crisis and Kyrgyz victory', text: 'a political turning point, not a single cause' },
      { title: 'People outlast states', text: 'communities can move and reorganize' },
      { title: 'Multiple trajectories', text: 'Gansu, Turfan, and other later settings' },
      { title: 'A new steppe field', text: 'Khitan power among later regional orders' },
    ],
    variant: 'transition', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-uighurs', 'source-jackson-mongol-age-eastern-inner-asia'], status: 'READY',
    note: 'State collapse is not population disappearance; modern ethnonyms are not frozen at 840.',
  },
  {
    id: 'diagram-qing-entry-paths', type: 'PROCESS', title: 'No Single Beginning of Qing Rule', chapterIds: ['chapter-entering-qing-imperial-order'],
    summary: 'Southern Mongol alliances, Chakhar incorporation, the 1636 Qing proclamation, and the 1691 Khalkha settlement belong to different timelines.',
    items: [
      { title: 'Southern Mongol alliances', text: 'earlier relationships with Aisin Gioro rulers' },
      { title: '1635–1636', text: 'Chakhar transition and Great Qing proclamation' },
      { title: 'Khalkha outside that settlement', text: 'a different political community' },
      { title: '1688 crisis', text: 'Khalkha–Dzungar conflict changes choices' },
      { title: '1691 Dolon Nor', text: 'Khalkha–Qing settlement, not universal Mongol submission' },
    ],
    variant: 'timeline', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-elverskog-our-great-qing-2006', 'source-perdue-china-marches-west-2005'], status: 'READY',
    note: 'Dzungar power continued as an imperial competitor after 1691.',
  },
  {
    id: 'diagram-1691-different-roads', type: 'PROCESS', title: 'Different Roads to 1691', chapterIds: ['chapter-toward-qing-rule-1691'],
    summary: 'Southern Mongol, Chakhar, Khalkha, and Dzungar communities entered relationships with the Qing on different terms and dates.',
    items: [
      { title: 'Southern Mongol alliances', text: 'marriage, titles, and earlier incorporation' },
      { title: 'Chakhar trajectory', text: 'Ligden’s claim and the 1635 transition' },
      { title: 'Khalkha houses', text: 'crisis, displacement, and Dolon Nor' },
      { title: 'Dzungar order', text: 'a continuing Inner Asian imperial competitor' },
    ],
    variant: 'landscape', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-elverskog-our-great-qing-2006', 'source-perdue-china-marches-west-2005'], status: 'READY',
    note: 'There was no single Mongol submission and no one Qing–Mongol relationship.',
  },
  {
    id: 'diagram-1911-independence-strands', type: 'PROCESS', title: 'From Qing Crisis to 1911 Independence', chapterIds: ['chapter-1911-independence'],
    summary: 'Independence emerged from converging pressures and Mongol political action; recognition and territory remained unresolved.',
    items: [
      { title: 'Qing New Policies', text: 'uneven reform created anxiety and resistance' },
      { title: 'Mongol elite politics', text: 'nobles debated authority and institutions' },
      { title: 'Buddhist authority', text: 'the Jebtsundamba office coordinated legitimacy' },
      { title: 'Russian diplomacy', text: 'support expanded options while imposing limits' },
      { title: 'Imperial collapse', text: 'a contingent opening, not an automatic result' },
      { title: 'Declaration and government', text: 'sovereignty claims remained contested' },
    ],
    variant: 'network', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-feng-esherick-wei-1911-mongolia-2014', 'source-bawden-modern-mongolia-1989'], status: 'READY',
    note: 'These strands converged; none alone explains independence.',
  },
  {
    id: 'diagram-1990-democratic-process', type: 'PROCESS', title: 'A Negotiated Political Opening', chapterIds: ['chapter-late-socialism-democratic-revolution-1990'],
    summary: 'Public organization, protest, incumbent choices, and a multiparty election produced a peaceful transition rather than a single-hero story.',
    items: [
      { title: 'Late socialist pressures', text: 'monopoly, dependence, and reform language' },
      { title: 'December 1989', text: 'public democratic organization and demands' },
      { title: 'Demonstrations and hunger strike', text: 'collective pressure in 1990' },
      { title: 'Politburo resignation', text: 'incumbents accepted a political opening' },
      { title: 'July 1990 election', text: 'multiparty competition begins' },
    ],
    variant: 'timeline', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-fish-democracy-without-prerequisites-1998', 'source-rossabi-modern-mongolia-2005'], status: 'READY',
    note: 'Soviet-bloc change altered the setting; Mongolian actors made the decisions.',
  },
  {
    id: 'diagram-1992-constitution-process', type: 'PROCESS', title: 'From Revolution to Constitution', chapterIds: ['chapter-building-democratic-state-1990-1992'],
    summary: 'Transitional institutions converted the 1990 opening into a constitutional order; enactment did not finish democratization.',
    items: [
      { title: '1990 political opening', text: 'one-party monopoly ends' },
      { title: 'Transitional parliament', text: 'Great Hural and State Baga Hural' },
      { title: 'Constitutional drafting', text: 'rules for disagreement under pressure' },
      { title: '13 January 1992', text: 'Constitution adopted' },
      { title: '12 February 1992', text: 'Constitution enters into force' },
    ],
    variant: 'timeline', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED', sourceRefs: ['source-mongolia-constitution-1992', 'source-parliament-constitution-history'], status: 'READY',
    note: 'Adoption and entry into force are separate legal moments.',
  },
  {
    id: 'diagram-mining-opportunity-dependence', type: 'INSTITUTION', title: 'Resource Economy — Opportunity and Dependence', chapterIds: ['chapter-mining-growth-natural-resources'],
    summary: 'Mining linked investment, revenue, exports, jobs, communities, and environments without scoring the sector as simply good or cursed.',
    items: [
      { title: 'Minerals and investment', text: 'copper, coal, gold, and capital' },
      { title: 'Government revenue', text: 'public finance tied to commodity cycles' },
      { title: 'Exports and China demand', text: 'external markets shape receipts' },
      { title: 'Jobs and infrastructure', text: 'uneven local and national effects' },
      { title: 'Local communities', text: 'agreements, displacement, and bargaining' },
      { title: 'Environment and prices', text: 'ecological pressure and boom–bust risk' },
    ],
    variant: 'network', evidenceLabel: 'SYSTEMS DIAGRAM · INTERPRETED', sourceRefs: ['source-world-bank-mongolia-economic-update-2024', 'source-sneath-mining-pastoralism-2022'], status: 'READY',
    note: 'Connections represent dependence and opportunity, not a benefit score or a finished verdict.',
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
  {
    id: 'chapter-visual-bronze-age-steppe', chapterId: 'chapter-bronze-age-steppe', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-deer-stones-uushgiin-uvur-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-deer-stones-uushgiin-uvur-01', reconstructionId: null, designedFallback: null }, educationalType: 'EVIDENCE',
    title: 'Monuments in a Ritual Landscape', summary: 'Deer stones document Late Bronze Age carving within mortuary landscapes that also include khirigsüürs and horse remains.', alt: 'Several upright carved deer stones standing in an open Mongolian landscape.', evidenceLabel: 'ARCHAEOLOGICAL EVIDENCE', sourceRefs: ['source-unesco-deer-stones'], status: 'READY',
    canSupport: 'Study of monumental carving, associated mortuary landscapes, and the limits of what surviving stones can explain.', cannotEstablish: 'The exact meaning of every carved motif, a single ritual, or the experience of every Late Bronze Age community.',
  },
  {
    id: 'chapter-visual-uyghur-khaganate', chapterId: 'chapter-uyghur-khaganate', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-orkhon-valley-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-orkhon-valley-01', reconstructionId: null, designedFallback: null }, educationalType: 'EVIDENCE',
    title: 'A Landscape Reused Across Political Worlds', summary: 'A modern photograph of the Orkhon Valley shows a multi-period cultural landscape, not a reconstructed Uyghur capital at one historical date.', alt: 'Broad green Orkhon Valley beneath low mountains, with small structures visible in the foreground.', evidenceLabel: 'MODERN SITE PHOTOGRAPH · CULTURAL LANDSCAPE', sourceRefs: ['source-unesco-orkhon-valley'], status: 'READY',
    canSupport: 'The valley’s continuing use as a political, pastoral, and monumental landscape across successive orders.', cannotEstablish: 'The appearance of Ordu-Baliq/Khar Balgas in the eighth century, a single historical event, or unchanged ethnic ownership of the valley.',
  },
  {
    id: 'chapter-visual-hulegu-ilkhanid', chapterId: 'chapter-hulegu-ilkhanid-world', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-jami-al-tawarikh-folio-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-jami-al-tawarikh-folio-01', reconstructionId: null, designedFallback: null }, educationalType: 'EVIDENCE',
    title: 'A Manuscript Culture, Not an Eyewitness Scene', summary: 'The folio belongs to Ilkhanid universal-historical bookmaking at Tabriz around 1314–1315; the painted subject is much earlier.', alt: 'Persian manuscript folio with a painted birth scene and surrounding handwritten text.', evidenceLabel: 'PRIMARY DOCUMENT · LATER ILLUSTRATION', sourceRefs: ['source-rashid-al-din-compendium', 'source-cambridge-ilkhanate-2023'], status: 'READY',
    canSupport: 'Study of multilingual manuscript production, court patronage, and historical writing in the Ilkhanid world.', cannotEstablish: 'Eyewitness testimony, Hülegü’s likeness, or a documentary image of the 1250s campaigns.',
  },
  {
    id: 'chapter-visual-buddhism-qing', chapterId: 'chapter-buddhism-monasteries-authority-qing', visualType: 'HISTORICAL_MEDIA', mediaId: 'media-zanabazar-maitreya-01', reconstructionId: null, diagramId: null,
    heroVisual: { heroStatus: 'APPROVED_MEDIA', mediaId: 'media-zanabazar-maitreya-01', reconstructionId: null, designedFallback: null }, educationalType: 'EVIDENCE',
    title: 'Art, Attribution, and Religious Institutions', summary: 'The gilt-bronze Maitreya supports study of Mongolian Buddhist art and patronage; museum attribution is not certain personal authorship or a portrait of Zanabazar.', alt: 'Gilt-bronze standing bodhisattva sculpture with an ornate crown, jewelry, and a circular halo.', evidenceLabel: 'ART-HISTORICAL OBJECT · ATTRIBUTED', sourceRefs: ['source-tsultem-zanabazar-art-2015'], status: 'READY',
    canSupport: 'Workshop practice, Buddhist iconography, and the art-historical tradition associated with Zanabazar.', cannotEstablish: 'Certain personal authorship of this sculpture or Zanabazar’s physical appearance.',
  },
  {
    id: 'chapter-visual-khitan-liao-world', chapterId: 'chapter-khitan-liao-world', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-khitan-liao-network',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'NETWORK',
    title: 'An Imperial Network, Not a Modern Border', summary: 'The model connects Khitan organization, Liao rule, Mongolian landscapes, a documented site, and later trajectories without drawing a frontier.', alt: 'Network diagram linking Khitan organization, the Liao order, Mongolia, Chintolgoi Balgas, and post-1125 trajectories.', evidenceLabel: 'IMPERIAL NETWORK · ESTABLISHED / INTERPRETED', sourceRefs: ['source-jackson-mongol-age-eastern-inner-asia', 'source-kradin-ivliev-deported-nation'], status: 'READY',
  },
  {
    id: 'chapter-visual-new-order-1206', chapterId: 'chapter-new-order-1206', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-1206-reorganization',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'POLITICAL_ORDER',
    title: 'A Political Reorganization', summary: 'The diagram separates assembly, recognition, and reorganization from origin myths about a people or a national beginning.', alt: 'Political-order diagram from competing groupings through the 1206 assembly to recognition of Chinggis Khan.', evidenceLabel: 'EDUCATIONAL DIAGRAM', sourceRefs: ['source-secret-history-mongols', 'source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-western-xia-jin', chapterId: 'chapter-western-xia-jin', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-xia-jin-chronology',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'CONFLICT' }, educationalType: 'CHRONOLOGY',
    title: 'Conquest Was a Process', summary: 'A non-cartographic sequence keeps 1209, 1215, and 1234 distinct instead of collapsing them into one capture.', alt: 'Chronology of Western Xia subordination, the Jin war, the capture of Zhongdu, the final Xia campaigns, and Jin’s defeat in 1234.', evidenceLabel: 'CAMPAIGN CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-crisis-of-1260', chapterId: 'chapter-crisis-of-1260', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-crisis-1260-worlds',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'SUCCESSION' }, educationalType: 'POLITICAL_ORDER',
    title: 'Rival Claims, Connected Worlds', summary: 'The diagram treats 1260 as a succession crisis that transformed, rather than instantly ended, Mongol imperial politics.', alt: 'Political-order diagram of Möngke’s death, rival claims by Qubilai and Ariq Böke, civil war, and continuing Mongol worlds.', evidenceLabel: 'POLITICAL-ORDER DIAGRAM · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-yuan-ulus-2023', 'source-dunnell-rise-chinggis-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-crisis-fall-yuan', chapterId: 'chapter-crisis-fragmentation-fall-yuan', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-1368-yuan-transition',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'TRANSITION' }, educationalType: 'CHRONOLOGY',
    title: 'A Turning Point in China, Not the End of Mongol History', summary: '1368 ended Yuan government over most of China while Chinggisid politics continued from Mongolia and other courts.', alt: 'Chronology from the Yuan imperial order through 1368 and northern continuation among other uluses.', evidenceLabel: 'CHRONOLOGY · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-yuan-ulus-2023'], status: 'READY',
  },
  {
    id: 'chapter-visual-840-transition', chapterId: 'chapter-840-transition', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-840-changed-continued',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'TRANSITION' }, educationalType: 'PROCESS',
    title: 'What Ended and What Continued', summary: 'The sequence distinguishes the end of Uyghur imperial rule in Mongolia from the continuation of communities and later histories.', alt: 'Process diagram separating the Uyghur imperial order, the 840 crisis, surviving communities, later trajectories, and a new steppe field.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-cambridge-uighurs', 'source-jackson-mongol-age-eastern-inner-asia'], status: 'READY',
  },
  {
    id: 'chapter-visual-entering-qing', chapterId: 'chapter-entering-qing-imperial-order', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-qing-entry-paths',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'TRANSITION' }, educationalType: 'PROCESS',
    title: 'No Single Beginning of Qing Rule', summary: 'Southern Mongol, Chakhar, Khalkha, and Dzungar timelines remain separate through 1636 and 1691.', alt: 'Process diagram of southern alliances, the Chakhar transition, Khalkha delay, the 1688 crisis, and Dolon Nor in 1691.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-elverskog-our-great-qing-2006', 'source-perdue-china-marches-west-2005'], status: 'READY',
  },
  {
    id: 'chapter-visual-toward-qing-1691', chapterId: 'chapter-toward-qing-rule-1691', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-1691-different-roads',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'TRANSITION' }, educationalType: 'PROCESS',
    title: 'Different Roads to 1691', summary: 'The diagram refuses a single Mongol submission by keeping southern Mongol, Chakhar, Khalkha, and Dzungar paths distinct.', alt: 'Process diagram of four Mongol political trajectories toward different Qing relationships.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-elverskog-our-great-qing-2006', 'source-perdue-china-marches-west-2005'], status: 'READY',
  },
  {
    id: 'chapter-visual-1911-independence', chapterId: 'chapter-1911-independence', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-1911-independence-strands',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'PROCESS',
    title: 'Independence Was Made, Not Automatic', summary: 'Reform anxiety, elite politics, Buddhist authority, Russian diplomacy, and Qing collapse converged in a contested declaration.', alt: 'Process diagram of New Policies, Mongol elite politics, the Jebtsundamba, Russian diplomacy, Qing collapse, and the 1911 government.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-feng-esherick-wei-1911-mongolia-2014', 'source-bawden-modern-mongolia-1989'], status: 'READY',
  },
  {
    id: 'chapter-visual-late-socialism-1990', chapterId: 'chapter-late-socialism-democratic-revolution-1990', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-1990-democratic-process',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'SOCIETY' }, educationalType: 'PROCESS',
    title: 'A Negotiated Political Opening', summary: 'Organization, protest, incumbent choices, and a 1990 election produced a peaceful transition without a single-cause story.', alt: 'Process diagram from late socialist pressure through 1989–1990 protest to Politburo resignation and a multiparty election.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED / INTERPRETED', sourceRefs: ['source-fish-democracy-without-prerequisites-1998', 'source-rossabi-modern-mongolia-2005'], status: 'READY',
  },
  {
    id: 'chapter-visual-building-democratic-state', chapterId: 'chapter-building-democratic-state-1990-1992', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-1992-constitution-process',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'POLITICAL_ORDER' }, educationalType: 'PROCESS',
    title: 'From Revolution to Constitution', summary: 'The sequence keeps the 1990 opening, transitional institutions, adoption, and entry into force distinct.', alt: 'Process diagram from the 1990 opening through transitional parliament and drafting to the 1992 Constitution’s adoption and entry into force.', evidenceLabel: 'POLITICAL PROCESS · ESTABLISHED', sourceRefs: ['source-mongolia-constitution-1992', 'source-parliament-constitution-history'], status: 'READY',
  },
  {
    id: 'chapter-visual-mining-resources', chapterId: 'chapter-mining-growth-natural-resources', visualType: 'EDUCATIONAL_DIAGRAM', mediaId: null, reconstructionId: null, diagramId: 'diagram-mining-opportunity-dependence',
    heroVisual: { heroStatus: 'DESIGNED_FALLBACK', mediaId: null, reconstructionId: null, designedFallback: 'EXCHANGE' }, educationalType: 'INSTITUTION',
    title: 'Opportunity and Dependence', summary: 'The model relates minerals, revenue, exports, jobs, communities, and environments without a resource-curse score.', alt: 'Systems diagram connecting minerals and investment, government revenue, exports, jobs, local communities, and environmental and price risk.', evidenceLabel: 'SYSTEMS DIAGRAM · INTERPRETED', sourceRefs: ['source-world-bank-mongolia-economic-update-2024', 'source-sneath-mining-pastoralism-2022'], status: 'READY',
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
