const section = (id, number, title, paragraphs, callout) => ({
  id,
  number,
  title,
  paragraphs,
  ...(callout ? { callout } : {}),
})

export const peopleBiographyOverlaysEraIII_IV = {
  'person-ogedei-khan': {
    profileType: 'biography',
    biographySections: [
      section('ogedei-world', '02', 'Son, Prince and Successor', [
        'Ögedei was a son of Chinggis Khan and Börte and one of the four principal sons in the dynastic tradition. He participated in western campaigning, including the invasion of the Khwarazmian Empire that began in 1219 and the struggle for Urgench in 1221.',
        'The 1221 campaign involved destructive warfare and command tensions among Jochi, Chagatai and Ögedei. Later independent khanate boundaries should not be read back onto that princely role.',
      ]),
      section('ogedei-accession', '03', 'Regency and Accession, 1227–1229', [
        'Chinggis Khan died in 1227 during the final Western Xia campaign. Supreme authority then required dynastic negotiation and recognition rather than automatic modern-style inheritance.',
        'Tolui served as regent from 1227 to 1229. An imperial assembly recognized Ögedei as Great Khan in 1229.',
      ]),
      section('ogedei-government', '04', 'Governing an Expanding Empire', [
        'Ögedei’s reign developed imperial administration, taxation, communications and coordinated expansion. These institutions evolved through many actors rather than appearing as one ruler’s complete invention.',
        'Around 1234 the imperial relay or yam system was regularized as part of developing communications. That was institutional development, not a single invention from nothing.',
      ]),
      section('ogedei-east', '05', 'The Jin Theater', [
        'War with the Jurchen Jin had begun in 1211 and continued after Chinggis Khan’s death. Mongol forces had captured Zhongdu in 1215, but Jin political power continued.',
        'The Jin dynasty was defeated in 1234, completing a conquest that had continued long after Zhongdu and after Chinggis Khan’s death. Muqali’s earlier delegated command in that theater shows that the war was a long process, not a single campaign.',
      ]),
      section('ogedei-west', '06', 'Multiple Fronts, 1235–1242', [
        'A major imperial assembly in 1235 authorized or coordinated expansion on multiple fronts; details are kept broad where source reconstruction differs.',
        'The western campaign through the Volga, Rus’ regions, Poland and Hungary was one of several simultaneous imperial theaters. Batu and Subutai held leading command roles. The armies used coercion and destructive force. The reasons for the 1242 withdrawal from Hungary remain debated.',
      ]),
      section('ogedei-household', '07', 'Household and Succession Plans', [
        'Töregene Khatun was Ögedei’s wife and Güyük’s mother within the Ögedeid household. Qadan and Köchü were sons of Ögedei; their mothers are not assigned in the current relationship data.',
        'Köchü died before Ögedei. Ögedei’s preference for Köchü’s son Shiremün later mattered in the contested succession. That preference helps explain why Güyük’s accession was a political contest rather than automatic inheritance.',
      ]),
      section('ogedei-death', '08', 'Death in 1241', [
        'Ögedei died in 1241. The decade that followed was not an empty interval between male khans.',
        'Töregene governed as imperial regent from 1242 to 1246. Yelü Chucai appears in the administrative record of the expanding empire, but the current source layer keeps that participation concise pending a dedicated source pass.',
      ]),
      section('ogedei-legacy', '09', 'Why Ögedei Matters', [
        'Ögedei’s reign was more than a passive continuation of Chinggis Khan’s rule. It shows how an expanding Eurasian empire was governed across distance through administration, communications and delegated command.',
        'It also shows that succession remained a political process. The Ögedeid household, not only the Great Khan’s office, shaped what followed.',
      ]),
    ],
  },
  'person-mongke-khan': {
    profileType: 'biography',
    biographySections: [
      section('mongke-world', '02', 'Toluid Household', [
        'Möngke was a son of Tolui and Sorghaghtani Beki. After Tolui’s death, Sorghaghtani managed the interests of the Toluid household and her sons.',
        'Medieval writers gave her unusually strong credit for political judgment and for the upbringing and advancement of Möngke, Qubilai, Hülegü and Ariq Böke. That praise is evidence for reputation, not a claim that she secretly controlled the empire.',
      ]),
      section('mongke-accession', '03', 'Accession and Toluid Ascendancy, 1251', [
        'Möngke became Great Khan in 1251 after a decade of contested succession involving Töregene’s regency, Güyük’s brief reign and Oghul-Qaimish’s regency.',
        'His accession shifted supreme authority to the Toluid branch. Batu participated in imperial succession politics in this period; the relationship between Güyük and Batu had already involved political tension.',
      ]),
      section('mongke-government', '04', 'Imperial Coordination', [
        'Möngke renewed imperial coordination and pursued fiscal and administrative coordination across a diverse empire without making governance uniform everywhere.',
        'His government commissioned major western and southern campaigns rather than placing the Great Khan in personal command of every theater.',
      ]),
      section('mongke-west', '05', 'Hülegü’s Western Commission', [
        'From 1253 Hülegü developed a major western expedition under Möngke’s authority. The campaign overcame major Nizari strongholds, including Alamut in 1256, and captured Baghdad destructively in 1258.',
        'Reported casualty numbers remain source accounts. These conquests created foundations for later Hülegüid rule, but a complete Ilkhanate should not be projected backward to 1253.',
      ]),
      section('mongke-south', '06', 'Qubilai in the Southern Theater', [
        'Qubilai received campaign responsibilities in the south. Later Yuan political structures are not projected backward into this phase.',
        'Möngke died during the Song campaign in 1259 without a settled succession.',
      ]),
      section('mongke-death', '07', 'Death and the Opening of Crisis', [
        'Möngke’s death left no uncontested successor. Leading princes were dispersed across distant military and political theaters.',
        'In 1260 Qubilai and Ariq Böke advanced competing claims. That succession rupture was a major break in united imperial politics, not the disappearance of Mongol imperial traditions or states.',
      ], { label: 'Rupture, Not Disappearance', text: 'The 1260 succession crisis fractured united imperial politics. Chinggisid states, institutions and networks continued.', confidence: 'INTERPRETED' }),
      section('mongke-legacy', '08', 'Why Möngke Matters', [
        'Möngke’s reign shows both the last major phase of coordinated united-empire government and the conditions that made the 1260 crisis possible.',
        'His commissions to Hülegü and Qubilai shaped the regional imperial orders that followed, without making those later orders already complete during his lifetime.',
      ]),
    ],
  },
  'person-jochi': {
    biographySections: [
      section('jochi-world', '02', 'Eldest Son in the Dynastic Tradition', [
        'Jochi was the eldest of Börte’s four principal sons in Chinggisid dynastic tradition. He commanded in western campaigns and became the forebear of an important dynastic branch.',
        'Later Jochid political geography should not be projected backward as already fixed at Jochi’s death.',
      ]),
      section('jochi-parentage', '03', 'A Source-Dependent Dispute', [
        'Medieval narratives preserve a dispute over his parentage. The father–son relationship is kept in the Chinggisid order; the mother–son relationship with Börte is retained.',
        'The project does not assert a different biological father.',
      ], { label: 'A Dynastic Dispute', text: 'The controversy is a source-dependent political dispute, not a modern paternity finding.', confidence: 'SOURCE ACCOUNT' }),
      section('jochi-west', '04', 'Western Command', [
        'Jochi commanded in the invasion of the Khwarazmian Empire that began in 1219. In 1221 the struggle for Urgench involved destructive warfare and command tensions among Jochi, Chagatai and Ögedei.',
        'Medieval casualty totals are reports, not exact modern demographic counts.',
      ]),
      section('jochi-inheritance', '05', 'Dynastic Inheritance', [
        'Jochi died before Chinggis Khan, but his descendants retained collective claims to lands, peoples and revenues associated with western conquest.',
        'Those claims were distributed among several lines rather than concentrated in one simple father-to-son monarchy. Batu, Orda and Tuqa-Timur occupied different positions within this structure.',
      ]),
      section('jochi-limits', '06', 'Limits of Reconstruction', [
        'The current source layer does not supply an exact death year beyond the established fact that Jochi died before Chinggis Khan.',
        'Private motives and undocumented early-life scenes are not reconstructed.',
      ]),
      section('jochi-legacy', '07', 'Why Jochi Matters', [
        'Jochi’s importance is both military command in the western war and the dynastic inheritance from which the later Jochid political world developed.',
        'The later conventional label “Golden Horde” is not read back as a finished state during his lifetime.',
      ]),
    ],
  },
  'person-chagatai': {
    biographySections: [
      section('chagatai-world', '02', 'Son and Namesake of a Branch', [
        'Chagatai was a son of Chinggis Khan and Börte and the namesake of a major Chinggisid branch. He participated in imperial succession politics and western campaigning.',
        'Later independent political boundaries are not projected backward onto his Era III role.',
      ]),
      section('chagatai-urgench', '03', 'Urgench and Western Campaigning', [
        'Chagatai took part in the invasion of the Khwarazmian Empire that began in 1219. The 1221 struggle for Urgench involved destructive warfare and command tensions among Jochi, Chagatai and Ögedei.',
        'Those tensions are recorded as a command problem within a campaign, not as the birth of a later khanate border.',
      ]),
      section('chagatai-succession', '04', 'Household and Early Succession', [
        'Mutukan was a son of Chagatai and died during the western campaigns while Chinggis Khan was still alive. Mutukan’s son Qara Hülegü later occupied a central place in contested Chagataid succession.',
        'Appointments and removals in that branch could depend on the intervention of Great Khans and competing imperial households.',
      ]),
      section('chagatai-inheritance', '05', 'Central Asian Inheritance', [
        'Chagatai’s descendants inherited claims, appanages and political authority across parts of Central Asia. Pastoral territories, agricultural districts, cities and long-distance routes required different political relationships.',
        'No single modern border can capture how authority was distributed. The later Chagataid world was not one continuously centralized khanate already complete in Chagatai’s lifetime.',
      ]),
      section('chagatai-legacy', '06', 'Why Chagatai Matters', [
        'Chagatai matters for imperial campaigning, succession politics and the dynastic inheritance that later Central Asian Chinggisid politics repeatedly reconfigured.',
        'His career should not be collapsed into a map of a finished “Chagatai Khanate.”',
      ]),
    ],
  },
  'person-tolui': {
    biographySections: [
      section('tolui-world', '02', 'Youngest of the Principal Sons', [
        'Tolui was a son of Chinggis Khan and Börte and the husband of Sorghaghtani Beki. Their household became central to later imperial politics through their sons Möngke, Qubilai, Hülegü and Ariq Böke.',
        'Later Toluid regional orders should not be read back as already formed during his lifetime.',
      ]),
      section('tolui-regency', '03', 'Regent, 1227–1229', [
        'After Chinggis Khan’s death in 1227, Tolui served as regent during the succession interval before Ögedei’s accession.',
        'Regency was government. Supreme authority required dynastic negotiation and recognition rather than automatic modern-style inheritance.',
      ]),
      section('tolui-household', '04', 'The Toluid Household', [
        'The marriage with Sorghaghtani Beki formed a major dynastic household. After Tolui’s death, Sorghaghtani managed the interests of that household and her sons.',
        'Möngke’s later accession marked Toluid ascendancy, but that outcome was a political process, not a fact already settled in 1229.',
      ]),
      section('tolui-limits', '05', 'Limits of Reconstruction', [
        'The project chronology supports the 1227–1229 regency more securely than a detailed campaign biography of Tolui.',
        'Cause of death and undocumented personal scenes are not supplied.',
      ]),
      section('tolui-legacy', '06', 'Why Tolui Matters', [
        'Tolui’s historical importance is the regency that made Ögedei’s accession a political process, and the household from which later Great Khans and regional rulers descended.',
        'He is not treated here as a lesser copy of Chinggis Khan or as the already-finished author of Yuan, Ilkhanid and related orders.',
      ]),
    ],
  },
  'person-toregene-khatun': {
    biographySections: [
      section('toregene-world', '02', 'Ögedeid Household', [
        'Töregene Khatun was Ögedei’s wife and Güyük’s mother within the Ögedeid household. Her political role belongs to imperial government, not to a private family anecdote.',
      ]),
      section('toregene-regency', '03', 'Regent, 1242–1246', [
        'After Ögedei’s death in 1241, Töregene governed as imperial regent from 1242 to 1246.',
        'The decade from Ögedei’s death to Möngke’s accession was not an empty interval between male khans. Töregene, Oghul-Qaimish and Sorghaghtani Beki were political actors within competing imperial households.',
      ]),
      section('toregene-succession', '04', 'Shaping Güyük’s Accession', [
        'Töregene actively shaped the succession that led to Güyük’s accession in 1246.',
        'Ögedei’s earlier preference for Shiremün helps explain why that accession was a political contest rather than automatic inheritance.',
      ]),
      section('toregene-limits', '05', 'Limits of Reconstruction', [
        'The current source layer supports her marriage, motherhood of Güyük and the 1242–1246 regency more securely than a full personal biography or undocumented administrative catalogue.',
        'Private motives are not supplied.',
      ]),
      section('toregene-legacy', '06', 'Why Töregene Matters', [
        'Töregene shows that imperial women could govern. Her regency is part of the history of the united empire, not a pause in it.',
      ]),
    ],
  },
  'person-guyuk-khan': {
    biographySections: [
      section('guyuk-world', '02', 'Ögedei and Töregene’s Son', [
        'Güyük was a son of Ögedei and Töregene Khatun. He became Great Khan in 1246 after Töregene’s regency.',
      ]),
      section('guyuk-reign', '03', 'A Brief Reign, 1246–1248', [
        'His brief reign unfolded amid dynastic competition and political tension with Batu.',
        'That tension is interpreted as a changing political relationship within imperial military and succession politics, not as a simple personal feud reconstructed beyond the sources.',
      ]),
      section('guyuk-succession', '04', 'Not Automatic Inheritance', [
        'Güyük’s accession was a political contest. Ögedei’s preference for Shiremün, Töregene’s regency and competing households all belong to that contest.',
      ]),
      section('guyuk-death', '05', 'Death and Another Regency', [
        'Güyük died in 1248. Oghul-Qaimish then served as regent during continuing dynastic competition before Möngke’s accession in 1251.',
      ]),
      section('guyuk-legacy', '06', 'Why Güyük Matters', [
        'Güyük’s short reign shows that the office of Great Khan remained dependent on household politics, recognition and competing constituencies.',
        'It also belongs to the sequence that ended in Toluid ascendancy under Möngke, without making that outcome inevitable from 1246.',
      ]),
    ],
  },
  'person-sorghaghtani-beki': {
    biographySections: [
      section('sorghaghtani-world', '02', 'Toluid Household Leadership', [
        'Sorghaghtani Beki was Tolui’s wife and widow and became an important political actor within the Toluid household.',
        'After Tolui’s death, she managed the interests of her household and her sons. Her influence is presented through dynastic politics, not as secret control of the empire.',
      ]),
      section('sorghaghtani-sons', '03', 'Möngke, Qubilai, Hülegü and Ariq Böke', [
        'She was the mother of Möngke, Qubilai, Hülegü and Ariq Böke. Those sons later occupied central places in united-empire and regional imperial politics.',
        'Medieval writers associated her reputation with their upbringing and advancement. That association is source evidence for how she was remembered.',
      ]),
      section('sorghaghtani-1251', '04', 'Toward Toluid Ascendancy', [
        'The decade after Ögedei’s death involved Töregene’s regency, Güyük’s reign and Oghul-Qaimish’s regency. Sorghaghtani was a political actor within that contested field.',
        'Möngke’s accession in 1251 marked Toluid ascendancy. Modern historical synthesis places her household leadership within the political developments that culminated in that shift.',
      ]),
      section('sorghaghtani-reputation', '05', 'How Medieval Writers Remembered Her', [
        'Juvaini’s favorable account presents Sorghaghtani as a figure of exceptional political judgment within the imperial family.',
        'Rashid al-Din’s later Ilkhanid compilation also associates her reputation with the upbringing and advancement of her sons. Court historiography should not be treated as an objective measurement of personality.',
      ], { label: 'Reputation and Court Narrative', text: 'Unusually strong medieval praise is important evidence for historical reputation. It is not a modern psychological portrait.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('sorghaghtani-limits', '06', 'Limits of Reconstruction', [
        'Exact dates of birth and death are not securely established in the current record.',
        'Dialogue and undocumented private strategy are not supplied.',
      ]),
      section('sorghaghtani-legacy', '07', 'Why Sorghaghtani Matters', [
        'Sorghaghtani shows that household leadership was a form of imperial politics. The later careers of her sons are unintelligible without that household.',
        'She also provides a lesson in source criticism: unusually favorable medieval accounts must be used, and they must not be flattened into a legend of secret rule.',
      ]),
    ],
  },
  'person-oghul-qaimish': {
    biographySections: [
      section('oghul-regency', '02', 'Regent after Güyük', [
        'Oghul-Qaimish served as regent after Güyük’s death in 1248 during continuing dynastic competition before Möngke’s accession in 1251.',
        'Regency was government. The years 1248–1251 were not an empty pause in imperial history.',
      ]),
      section('oghul-context', '03', 'Competing Households', [
        'Töregene, Oghul-Qaimish and Sorghaghtani Beki were political actors within competing imperial households in the decade after Ögedei’s death.',
        'Möngke’s accession ended this sequence of Ögedeid-centered regency and brief reign, shifting supreme authority to the Toluid branch.',
      ]),
      section('oghul-limits', '04', 'Limits of the Evidence', [
        'The current source layer supports her 1248–1251 regency more securely than a detailed personal biography, family reconstruction or undocumented administrative list.',
      ]),
      section('oghul-legacy', '05', 'Why Oghul-Qaimish Matters', [
        'Her regency completes the sequence of imperial government between Ögedei’s death and Möngke’s accession. Leaving the office blank would misrepresent how the united empire was ruled.',
      ]),
    ],
  },
  'person-batu': {
    biographySections: [
      section('batu-world', '02', 'Jochi’s Son', [
        'Batu was a son of Jochi and a leading prince of the Jochid branch. Conquest established coercive and tributary relationships across the Volga and Rus’ regions while connecting the western ulus to imperial succession politics.',
      ]),
      section('batu-campaigns', '03', 'Western Campaigns, 1236–1242', [
        'Batu held a major role in imperial campaigns through the Volga, Rus’ regions, Poland and Hungary. Subutai was a leading commander in those operations.',
        'The western campaign was one of several simultaneous imperial theaters. Its armies used coercion and destructive force. The reasons for the 1242 withdrawal from Hungary remain debated.',
      ]),
      section('batu-command', '04', 'Delegated Imperial Operations', [
        'These campaigns were delegated imperial operations, not the work of one commander alone. Qadan also participated in the European campaign within a wider command structure.',
      ]),
      section('batu-politics', '05', 'Succession Politics', [
        'Batu later participated in imperial succession politics. His relationship with Güyük involved political tension.',
        'He belonged to the field of actors around Möngke’s accession in 1251. That participation should not be turned into an undocumented kingmaker narrative beyond the sources.',
      ]),
      section('batu-ulus', '06', 'Western Political Legacy', [
        'Batu’s leadership made him the most powerful Jochid prince of his generation. The Jochid world cannot be understood only as an episode in Russian history.',
        'Steppe territories, Central Asian connections and access to Black Sea commerce were equally important. “Golden Horde” is used later as a conventional label, not as a finished official name from Batu’s lifetime.',
      ]),
      section('batu-legacy', '07', 'Why Batu Matters', [
        'Batu connects the western conquests of the united empire to the later Jochid political world. His career is military, dynastic and political at once.',
        'Later Jochid rulers developed regional institutions from this inheritance; they did not inherit a map already drawn in 1242.',
      ]),
    ],
  },
  'person-berke': {
    biographySections: [
      section('berke-world', '02', 'After Batu', [
        'Berke was a son of Jochi and a major ruler of the Jochid branch after Batu. His rule belonged to the transition from the united-imperial period into a more divided Mongol political world.',
      ]),
      section('berke-hulegu', '03', 'Conflict with Hülegü', [
        'Under Berke, Jochid forces entered open conflict with Hülegü’s political order in the early 1260s.',
        'Competition involved frontier interests, dynastic rivalry and changing regional alliances. It should not be reduced to one personal or religious motive.',
      ]),
      section('berke-diplomacy', '04', 'Wider Connections', [
        'Jochid diplomacy with the Mamluk Sultanate and conflict with the Ilkhanid world show that post-1260 politics crossed the familiar boundaries of later “khanate” labels.',
        'Berke is also among the rulers later discussed in different regional histories of Islamization. There was no single empire-wide moment when “the Mongols converted.”',
      ]),
      section('berke-limits', '05', 'Limits of Reconstruction', [
        'The current source layer supports Berke’s Jochid rulership and the conflict with Hülegü more securely than a complete personal chronology or undocumented conversion scene.',
      ]),
      section('berke-legacy', '06', 'Why Berke Matters', [
        'Berke shows that Jochid regional independence and inter-Chinggisid war belonged to the same connected political field after 1260.',
      ]),
    ],
  },
  'person-subutai': {
    biographySections: [
      section('subutai-role', '02', 'Delegated Imperial Command', [
        'Subutai served in campaigns across several theaters. Commanders such as Muqali, Jebe and Subutai show that Chinggis Khan did not personally command every campaign.',
        'These were delegated imperial operations, not the work of one commander alone.',
      ]),
      section('subutai-expedition', '03', 'The Western Expedition, 1221–1223', [
        'From 1221 to 1223 Jebe and Subutai led an extended western expedition through several political regions. Its representation here is chronological rather than a GPS-precise route.',
        'In 1223 their forces defeated a coalition involving Rus’ princes and Cuman allies at the Kalka River. Chinggis Khan is not placed on that campaign in person.',
      ]),
      section('subutai-1230s', '04', 'The Later Western Campaign', [
        'Subutai later served in the western imperial campaign associated with the 1235 assembly and the operations of 1236–1240 through the Volga and Rus’ regions, and in 1241 in Poland and Hungary.',
        'Batu held a leading princely role in those campaigns. The withdrawal from Hungary in 1242 remains debated.',
      ]),
      section('subutai-limits', '05', 'Limits of Reconstruction', [
        'The project record supports Subutai’s command in named theaters more securely than a complete personal biography, birth year or undocumented origin story.',
      ]),
      section('subutai-legacy', '06', 'Why Subutai Matters', [
        'Subutai is educationally important because imperial expansion depended on delegated command. Reducing the western wars to Chinggis Khan’s personal presence would contradict the project’s own campaign record.',
      ]),
    ],
  },
  'person-jebe': {
    biographySections: [
      section('jebe-role', '02', 'Imperial Military Command', [
        'Jebe commanded campaigns under Chinggis Khan. Delegated command was part of imperial government after 1206.',
      ]),
      section('jebe-kuchlug', '03', 'Against Kuchlug, c. 1218', [
        'Around 1218 Jebe’s campaign ended Kuchlug’s rule and brought the former Qara Khitai domain under Mongol control.',
        'That was delegated imperial command, not a reconstructed personal march by Chinggis Khan.',
      ]),
      section('jebe-west', '04', 'Expedition with Subutai', [
        'Jebe later joined Subutai in the western expedition of 1221–1223. In 1223 their forces defeated a coalition of Rus’ princes and Cuman allies at the Kalka River.',
        'The expedition is not reconstructed here as a precise line of march.',
      ]),
      section('jebe-limits', '05', 'Limits of Reconstruction', [
        'The current source layer supports these named commands more securely than a full independent biography or undocumented early career.',
      ]),
      section('jebe-legacy', '06', 'Why Jebe Matters', [
        'Jebe’s commands connect the fall of Kuchlug to the first major western expedition. They show how the empire turned west through several commanders and political contexts.',
      ]),
    ],
  },
  'person-muqali': {
    biographySections: [
      section('muqali-role', '02', 'Delegated Command in the Jin Theater', [
        'Muqali exercised delegated command in the continuing Jin war. His role demonstrates that Chinggis Khan did not personally direct every imperial campaign.',
      ]),
      section('muqali-war', '03', 'A Long Eastern War', [
        'Major war with the Jurchen Jin began in 1211. Mongol forces captured Zhongdu in 1215, but Jin political power continued.',
        'The Jin dynasty was defeated in 1234 under Ögedei, completing a conquest that had continued long after Zhongdu and after Chinggis Khan’s death. Muqali belongs to that long process.',
      ]),
      section('muqali-government', '04', 'Command and Government', [
        'Muqali’s responsibility in northern China shows that military expansion was connected to delegated government, not only to a sequence of battles.',
        'The project does not reconstruct an undocumented administrative constitution from that fact.',
      ]),
      section('muqali-limits', '05', 'Limits of Reconstruction', [
        'The current source layer supports Muqali’s Jin-theater command more securely than a complete personal chronology or exact death narrative.',
      ]),
      section('muqali-legacy', '06', 'Why Muqali Matters', [
        'Muqali is essential to an educational account of the empire because the eastern war was a delegated process. Chinggis Khan did not live to see Jin’s final defeat.',
      ]),
    ],
  },
  'person-qubilai': {
    biographySections: [
      section('qubilai-world', '02', 'Toluid Prince and Southern Command', [
        'Qubilai was a son of Tolui and Sorghaghtani Beki. Under Möngke he received campaign responsibilities in the south. Later Yuan political structures are not projected backward into that phase.',
      ]),
      section('qubilai-1260', '03', 'Rival Claims, 1260–1264', [
        'Möngke died in 1259 without a settled succession. In 1260 Qubilai and Ariq Böke advanced competing claims.',
        'Qubilai had developed a substantial political and military base south of Mongolia, connected with commanders, administrators and resources in northern China. His claim did not emerge from the traditional imperial center at Karakorum. Victory should not be read backward as inevitable.',
      ]),
      section('qubilai-war', '04', 'Civil War and Submission', [
        'The Toluid civil war of 1260–1264 connected military operations with competition over supplies, routes and regional allegiance. Qubilai’s stronger access to northern Chinese resources became important.',
        'Ariq Böke submitted in 1264. Qubilai emerged victorious, but rulers in the Jochid, Chagataid and Hülegüid worlds did not simply become ordinary provincial officials under a restored unitary state.',
      ]),
      section('qubilai-yuan', '05', 'The Great Yuan Order', [
        'In 1271 Qubilai adopted the dynastic title Great Yuan. The title articulated an imperial order with claims grounded in both Chinggisid sovereignty and traditions of dynastic government in China.',
        'This was a major institutional and ideological development, not evidence that Qubilai simply “became Chinese.” The Yuan court remained Mongol-led and connected to Inner Asia.',
      ]),
      section('qubilai-capitals', '06', 'Shangdu, Dadu and Household', [
        'Shangdu was closely associated with Qubilai’s rise and remained part of an itinerant court world connected to Mongolia. Dadu, or Khanbaliq, became the principal capital.',
        'Chabi was Qubilai’s principal wife and the mother of Zhenjin. Her household and patronage roles were parts of imperial politics, not a trope of hidden rule behind the throne.',
      ]),
      section('qubilai-song', '07', 'Southern Song, 1276–1279', [
        'Yuan forces took the Southern Song capital in 1276, but resistance continued. The final defeat of Southern Song resistance came in 1279.',
        'The conquest expanded resources and territorial reach through prolonged warfare, negotiation and incorporation. It did not make the empire culturally uniform.',
      ]),
      section('qubilai-connections', '08', 'Claims beyond the Yuan Sphere', [
        'Qubilai continued to claim the standing of Great Khan. Other Chinggisid rulers negotiated, resisted or selectively recognized those claims while governing increasingly autonomous political orders.',
        'Qaidu’s Central Asian coalition contested Qubilai’s authority for a prolonged period. ʿPhags-pa’s relationship with the court shows one strand of religious patronage within a plural imperial order.',
      ]),
      section('qubilai-death', '09', 'Death and Succession, 1294', [
        'When Qubilai died in 1294, succession passed to his grandson Temür Öljeytü through the line of Zhenjin, who had died earlier.',
        'The transition demonstrated that the Yuan had become a durable dynastic and institutional order beyond its founder.',
      ]),
      section('qubilai-legacy', '10', 'Why Qubilai Matters', [
        'Qubilai transformed a contested claim to supreme Chinggisid authority into a regional imperial order spanning Mongolia, China and connected territories.',
        'Neither a China-only dynasty nor an unchanged continuation of the pre-1260 united empire is an adequate description.',
      ]),
    ],
  },
  'person-hulegu': {
    biographySections: [
      section('hulegu-world', '02', 'Toluid Prince and Imperial Commission', [
        'Hülegü was a son of Tolui and Sorghaghtani Beki. Möngke commissioned him to lead a major western expedition from 1253.',
        'He entered western Asia as a commander within Möngke’s wider imperial order, not as the ruler of a finished Ilkhanate.',
      ]),
      section('hulegu-conquest', '03', 'Alamut and Baghdad', [
        'The campaign overcame major Nizari strongholds, including Alamut in 1256, and captured Baghdad destructively in 1258.',
        'Reported casualty numbers remain source accounts. These conquests created military and administrative foundations for later rule.',
      ]),
      section('hulegu-1260', '04', 'After Möngke’s Death', [
        'Möngke’s death and the rival claims of 1260 disrupted the framework in which Hülegü’s command had begun. Distance, military resources and control of conquered regions gave his household increasing regional independence.',
        'Hülegü supported Qubilai, but that alignment did not make his territories ordinary Yuan provinces.',
      ]),
      section('hulegu-berke', '05', 'Conflict with Berke', [
        'Conflict with Berke’s Jochid forces in the early 1260s exposed the depth of political rivalry within the Chinggisid world. Frontier interests, dynastic competition and wider alliances all contributed.',
        'The Mamluk Sultanate remained a major military and diplomatic opponent.',
      ]),
      section('hulegu-household', '06', 'Household and Succession', [
        'Doquz Khatun was a senior Christian woman in Hülegü’s household. Sources associate her with protection and patronage directed toward Christian communities. That prominence does not demonstrate one universal policy of modern religious tolerance.',
        'Abaqa succeeded Hülegü and continued building a regional court and administration.',
      ]),
      section('hulegu-legacy', '07', 'Why Hülegü Matters', [
        'Hülegü’s historical importance is the movement from imperial commission to an emerging regional Chinggisid order in Iran and neighboring regions.',
        'A complete Ilkhanate should not be projected backward to 1253, and 1260 should not be treated as an instant four-state map.',
      ]),
    ],
  },
  'person-ariq-boke': {
    biographySections: [
      section('ariq-world', '02', 'Toluid Prince', [
        'Ariq Böke was a son of Tolui and Sorghaghtani Beki. In 1260 he and Qubilai advanced rival claims to supreme authority.',
      ]),
      section('ariq-claim', '03', 'Karakorum and the Imperial Homeland', [
        'Ariq Böke remained near Karakorum and the central household resources of the Mongolian heartland. His supporters could present this position as continuity with the established center of imperial rule.',
        'He was not simply “the bad brother who lost.” His claim drew on recognizable Chinggisid practices and constituencies, even though those constituencies did not include every eligible prince.',
      ]),
      section('ariq-war', '04', 'Civil War, 1260–1264', [
        'Assemblies supporting Qubilai and Ariq Böke each claimed to authorize a Great Khan. Neither gathering secured uncontested participation across the imperial family.',
        'Both sides depended on networks extending beyond two brothers. Karakorum’s position required access to food, animals and communications across long distances. Changing alignments in Central Asia placed additional pressure on Ariq Böke.',
      ]),
      section('ariq-submission', '05', 'Submission in 1264', [
        'Ariq Böke submitted to Qubilai after military and logistical reverses weakened his position. Medieval accounts frame the encounter through court narrative, so reported dialogue is not treated as a transcript.',
        'Submission ended the immediate civil war, not the wider transformation of imperial politics.',
      ]),
      section('ariq-legacy', '06', 'Why Ariq Böke Matters', [
        'Ariq Böke’s claim and submission belong to the contested transformation of imperial politics from 1260 to 1264.',
        'Removing him, or reducing him to a failed usurper, conceals how open the succession was after Möngke’s death.',
      ]),
    ],
  },
  'person-chabi': {
    biographySections: [
      section('chabi-household', '02', 'Principal Wife in the Yuan Household', [
        'Chabi was Qubilai’s principal wife and a politically important member of the emerging Yuan household. She was the mother of Zhenjin.',
        'Dynastic government operated through households as well as formal offices. Representing her as a political actor does not require the trope of a hidden ruler behind the throne.',
      ]),
      section('chabi-patronage', '03', 'Court Patronage', [
        'Chabi participated in court patronage and household politics. In the Yuan world she supported Buddhist institutions.',
        'Privilege was political. Protection for some communities did not guarantee equal treatment for all, and Yuan society was not made religiously uniform by Buddhist patronage.',
      ]),
      section('chabi-succession', '04', 'Mother of the Designated Heir', [
        'Zhenjin was the designated heir within the Yuan imperial household. He died before Qubilai, leaving succession to pass through the next generation to Temür Öljeytü.',
        'Chabi’s importance to that household structure is established. Exact institutional catalogues of her offices are not reconstructed beyond the current source layer.',
      ]),
      section('chabi-limits', '05', 'Limits of Reconstruction', [
        'Exact life dates are not securely established in the current record. Dialogue and undocumented private influence are not supplied.',
      ]),
      section('chabi-legacy', '06', 'Why Chabi Matters', [
        'Chabi shows that Yuan imperial politics included household authority, patronage and succession, not only Qubilai’s campaigns and titles.',
      ]),
    ],
  },
  'person-zhenjin': {
    biographySections: [
      section('zhenjin-world', '02', 'Designated Heir', [
        'Zhenjin was a son of Qubilai and Chabi and the designated heir within the Yuan imperial household.',
      ]),
      section('zhenjin-death', '03', 'Death before Succession', [
        'He died before Qubilai, leaving the succession to pass through the next generation. His son Temür later became Yuan ruler in 1294.',
      ]),
      section('zhenjin-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports his parentage, heir status and early death more securely than a detailed independent biography or exact dates.',
      ]),
      section('zhenjin-legacy', '05', 'Why Zhenjin Matters', [
        'Zhenjin’s position and early death shaped succession after Qubilai. The Yuan became a durable dynastic order in part through that next-generation transfer, not through a simple father-to-son automatic inheritance.',
      ]),
    ],
  },
  'person-temur-oljeytu': {
    biographySections: [
      section('temur-accession', '02', 'Successor of Qubilai', [
        'Temür Öljeytü was a son of Zhenjin and succeeded his grandfather Qubilai in 1294. His reign continued the Yuan imperial order after its founding ruler.',
      ]),
      section('temur-world', '03', 'A Connected but Autonomous Mongol World', [
        'His reign belonged to a Mongol world in which regional Chinggisid courts were increasingly autonomous but still connected.',
        'Qubilai’s death opened a new phase of Yuan succession. This was not an uninterrupted decline beginning on one date.',
      ]),
      section('temur-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports the 1294–1307 reign and the Zhenjin lineage more securely than a detailed administrative or campaign biography.',
      ]),
      section('temur-legacy', '05', 'Why Temür Matters', [
        'Temür’s accession shows that the Yuan had become an institutional order beyond Qubilai. Later fourteenth-century crises should not be read backward as already decisive in 1294.',
      ]),
    ],
  },
  'person-toghon-temur': {
    biographySections: [
      section('toghon-reign', '02', 'Late Yuan Ruler', [
        'Toghon Temür ruled during severe political, fiscal and military crises in the later Yuan imperial order. Court faction, fiscal strain, administrative difficulty and costly responses to crisis weakened Yuan authority.',
        'Environmental disasters and epidemic disease formed part of the setting, but they did not mechanically cause one inevitable collapse.',
      ]),
      section('toghon-1368', '03', 'Leaving Dadu, 1368', [
        'In 1368 his court left Dadu as Ming forces advanced. This ended Yuan rule based in China but not the Mongol court or Mongol political history.',
        'The Yuan court continued north of the Great Wall. Ayushiridara later continued Yuan dynastic claims from political centers north of China.',
      ], { label: 'Not a Universal End Date', text: '1368 ended Yuan rule from Dadu. It did not end Mongol political history or every Chinggisid realm at once.', confidence: 'ESTABLISHED / INTERPRETED' }),
      section('toghon-comparison', '04', 'Several Crises, Not One Collapse', [
        'The fourteenth-century Mongol world did not experience one synchronized fall. The Ilkhanid succession broke in 1335; Central Asian politics fragmented and recombined; the Jochid realm followed another chronology.',
        'Toghon Temür’s reign belongs to the Yuan trajectory, not to a single empire-wide collapse narrative.',
      ]),
      section('toghon-legacy', '05', 'Why Toghon Temür Matters', [
        'His reign connects late Yuan crisis to the court’s northward continuation after 1368. That continuation is the starting point of later northern Chinggisid history, not a footnote to Ming conquest.',
      ]),
    ],
  },
  'person-oz-beg': {
    biographySections: [
      section('ozbeg-world', '02', 'Jochid Ruler', [
        'Öz Beg was a major fourteenth-century ruler of the Jochid ulus. His long reign strengthened regional institutions and Islamic court patronage while the Jochid realm remained connected to wider diplomatic and commercial networks.',
      ]),
      section('ozbeg-islam', '03', 'Court Patronage and Conversion', [
        'Under Öz Beg, Islamic court patronage became especially important. His conversion and patronage should not be treated as the instantaneous conversion of every subject.',
        'There was no single empire-wide moment when “the Mongols converted.” Court choices interacted with Muslim institutions differently in the Jochid, Ilkhanid and Central Asian worlds.',
      ], { label: 'Islamization over Time', text: 'A ruler’s conversion and patronage are established as court history. They are not a census of subjects’ religion.', confidence: 'ESTABLISHED / INTERPRETED' }),
      section('ozbeg-connections', '04', 'Sarai and Wider Networks', [
        'Sarai became a name associated with major Jochid court and urban centers. The lower Volga connected pastoral zones, river routes, Central Asia, the Black Sea and routes toward Islamic lands.',
        'Toqta preceded Öz Beg’s long rule. The Jochid ulus was not merely an external chapter of Rus’ history.',
      ]),
      section('ozbeg-legacy', '05', 'Why Öz Beg Matters', [
        'Öz Beg presided over a major phase of Jochid political consolidation and Islamic patronage. Later succession struggles should not be projected backward over his reign.',
      ]),
    ],
  },
  'person-jani-beg': {
    biographySections: [
      section('jani-beg-reign', '02', 'Successor of Öz Beg', [
        'Jani Beg succeeded Öz Beg in the western Jochid political world. His reign continued a period of strong regional rule and long-distance political connections.',
      ]),
      section('jani-beg-crisis', '03', 'Before a Succession Crisis', [
        'The instability following his death should not be projected backward over the whole Jochid period.',
        'The Jochid realm followed a chronology distinct from the Ilkhanid rupture of 1335 and the Yuan withdrawal of 1368.',
      ]),
      section('jani-beg-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports his succession from Öz Beg and his place immediately before a mid-fourteenth-century crisis more securely than a detailed campaign biography.',
      ]),
      section('jani-beg-legacy', '05', 'Why Jani Beg Matters', [
        'Jani Beg shows the strength of fourteenth-century Jochid rule and the danger of collapsing that history into a single Mongol-world decline story.',
      ]),
    ],
  },
  'person-qaidu': {
    biographySections: [
      section('qaidu-world', '02', 'Ögedeid Prince in Central Asia', [
        'Qaidu was a grandson of Ögedei and a major political leader in Central Asia. He built a coalition that contested Qubilai’s authority and worked closely with Chagataid rulers including Duwa.',
        'His power should not be represented as a neatly bounded modern state.',
      ]),
      section('qaidu-coalition', '03', 'Chagataid Partnership and Conflict', [
        'This was not simply a conflict between two fixed states. Chagataid and Ögedeid households, military followings, local elites and regional resources combined in changing coalitions.',
        'Baraq’s rule had already unfolded amid rivalry with Qaidu and conflict involving neighboring Chinggisid powers.',
      ]),
      section('qaidu-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports Qaidu’s Ögedeid identity, Central Asian coalition-building and prolonged resistance to Qubilai more securely than a year-by-year personal chronology.',
      ]),
      section('qaidu-legacy', '05', 'Why Qaidu Matters', [
        'Qaidu is the leading Ögedeid figure in prolonged resistance to Qubilai’s claims. He shows that post-1260 Central Asia was an active political theater, not a passive space between rival courts.',
      ]),
    ],
  },
  'person-duwa': {
    biographySections: [
      section('duwa-world', '02', 'Chagataid Partner of Qaidu', [
        'Duwa was a major Chagataid ruler whose political career was closely connected with Qaidu. He participated in conflict with the Yuan before later negotiations reduced inter-Chinggisid warfare.',
      ]),
      section('duwa-diplomacy', '03', 'Conflict and Negotiation', [
        'After Qaidu’s death, political negotiation helped reduce some inter-Chinggisid warfare. Changing diplomacy did not reunify the empire.',
        'It created new relationships among courts that already possessed substantial regional authority.',
      ]),
      section('duwa-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports Duwa’s partnership with Qaidu and his role in both conflict and later negotiation more securely than a complete personal biography.',
      ]),
      section('duwa-legacy', '05', 'Why Duwa Matters', [
        'Duwa illustrates changing alliances rather than a stable four-khanate balance. Chagataid continuity survived through repeated changes in rulers, alliances and political centers.',
      ]),
    ],
  },
  'person-doquz-khatun': {
    biographySections: [
      section('doquz-household', '02', 'Senior Woman in Hülegü’s Household', [
        'Doquz Khatun was a senior Christian woman in Hülegü’s household and an important figure in the emerging Ilkhanid court.',
      ]),
      section('doquz-patronage', '03', 'Patronage, Not Generic Tolerance', [
        'Sources associate her with protection and patronage directed toward Christian communities within the conquest-era court.',
        'Her prominence does not demonstrate one universal policy of modern religious tolerance. Ilkhanid religious life included competing communities, unequal power and policies that changed with rulers.',
      ], { label: 'Patronage and Power', text: 'Court protection for some communities is not evidence that a realm became Christian or that all groups were treated equally.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('doquz-limits', '04', 'Limits of Reconstruction', [
        'Exact life dates are not securely established. Dialogue and undocumented private influence are not supplied.',
      ]),
      section('doquz-legacy', '05', 'Why Doquz Khatun Matters', [
        'Doquz Khatun shows how religious communities participated in Ilkhanid court politics through specific patrons and institutions.',
      ]),
    ],
  },
  'person-abaqa': {
    biographySections: [
      section('abaqa-succession', '02', 'Hülegü’s Successor', [
        'Abaqa was a son and successor of Hülegü in the emerging Ilkhanid political order. His reign developed regional institutions and diplomatic relations after the founding conquests.',
      ]),
      section('abaqa-order', '03', 'Regional Consolidation', [
        'Tabriz became a major political and commercial center, while Maragha was associated with early court life and scholarly patronage.',
        'Ilkhanid government employed Iranian administrators and fiscal practices while preserving Chinggisid dynastic authority and Mongol military structures. This was adaptation and institutional combination, not the simple replacement of one culture by another.',
      ]),
      section('abaqa-connections', '04', 'Still a Chinggisid Field', [
        'Ilkhanid politics remained connected to wider Chinggisid rivalries, including conflict with the Mamluk Sultanate and relations with other regional courts.',
      ]),
      section('abaqa-legacy', '05', 'Why Abaqa Matters', [
        'Abaqa consolidated the Ilkhanid political order after Hülegü. The movement from western commission to regional government continued through his reign rather than ending in 1260.',
      ]),
    ],
  },
  'person-ghazan': {
    biographySections: [
      section('ghazan-reign', '02', 'Ilkhanid Ruler, 1295–1304', [
        'Ghazan was an Ilkhanid ruler whose conversion to Islam and administrative measures marked an important phase in regional political development.',
      ]),
      section('ghazan-islam', '03', 'Conversion and Ruling Ideology', [
        'Ghazan’s conversion to Islam in 1295 connected the Chinggisid dynasty more closely with Islamic institutions and the religious life of much of the governed population.',
        'It is inaccurate to summarize this as “the Mongols converted to Islam.” Individual rulers, military elites, religious communities and regional populations followed different trajectories.',
      ], { label: 'Established Conversion, Interpreted Transformation', text: 'The ruler’s conversion is established. Broader social transformation is interpreted over time and was not instantaneous.', confidence: 'ESTABLISHED / INTERPRETED' }),
      section('ghazan-rashid', '04', 'Court Knowledge', [
        'Rashid al-Din served the Ilkhanid court as an administrator, physician and historian. The Jami al-Tawarikh reflects the court’s attempt to organize knowledge about Chinggisid and wider world histories.',
        'His compilation is indispensable and situated. It should not be treated as a neutral transcript of earlier events.',
      ]),
      section('ghazan-legacy', '05', 'Why Ghazan Matters', [
        'Ghazan’s reign joined Chinggisid legitimacy with Persianate institutions and Islamic patronage. It was a major political, administrative and religious transition in the Ilkhanid world, not a census of belief.',
      ]),
    ],
  },
  'person-abu-said': {
    biographySections: [
      section('abu-said-reign', '02', 'Last of Hülegü’s Direct Line', [
        'Abu Saʿid was the last Ilkhan of Hülegü’s direct ruling line. He reigned from 1316 to 1335.',
      ]),
      section('abu-said-1335', '03', 'Succession Rupture, 1335', [
        'His death without an accepted heir in 1335 opened a major succession rupture and competing regional regimes.',
        'This ended the direct Ilkhanid dynastic order, not society, administration or Mongol political influence in Iran. Successor regimes reused institutions, personnel and claims from the Ilkhanid world.',
      ]),
      section('abu-said-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports the 1316–1335 reign and the 1335 rupture more securely than a detailed personal biography.',
      ]),
      section('abu-said-legacy', '05', 'Why Abu Saʿid Matters', [
        'Abu Saʿid’s death is the immediate context for the Ilkhanid succession rupture of 1335. That rupture is one regional crisis among several in the fourteenth-century Mongol world, not a universal collapse date.',
      ]),
    ],
  },
  'person-phags-pa': {
    biographySections: [
      section('phagspa-court', '02', 'Cleric and Imperial Preceptor', [
        'ʿPhags-pa was a Tibetan Buddhist cleric closely connected with Qubilai’s court. He served within Yuan religious and political patronage and developed the script associated with his name.',
      ]),
      section('phagspa-patronage', '03', 'One Strand in a Plural Order', [
        'Qubilai’s court gave major patronage to Tibetan Buddhist institutions. The relationship with ʿPhags-pa connected religious authority, imperial ritual and projects of governance.',
        'Buddhist patronage did not make Yuan society religiously uniform. Different Buddhist traditions and other communities continued to operate.',
      ]),
      section('phagspa-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports his court relationship, script project and place in Yuan Buddhist patronage more securely than a complete personal chronology.',
      ]),
      section('phagspa-legacy', '05', 'Why ʿPhags-pa Matters', [
        'ʿPhags-pa connects Tibetan Buddhist institutions, writing and Yuan court patronage. His role illustrates structured plurality rather than a single state religion.',
      ]),
    ],
  },
  'person-rashid-al-din': {
    biographySections: [
      section('rashid-roles', '02', 'Administrator, Physician and Historian', [
        'Rashid al-Din served the Ilkhanid court as an administrator and physician and directed the compilation known as the Jami al-Tawarikh.',
        'Specialists moved because courts recruited skills. Knowledge was selected, translated, financed and adapted to new languages, courts and practical needs.',
      ]),
      section('rashid-text', '03', 'A Court Compilation, Not a Transcript', [
        'The Jami al-Tawarikh reflects the court’s attempt to organize knowledge about Chinggisid and wider world histories.',
        'It was compiled in a later Ilkhanid political setting from multiple written and oral materials. Its accounts require comparison with other evidence.',
      ], { label: 'Situated Source', text: 'Rashid al-Din’s work is indispensable evidence and a court text. It is not a neutral eyewitness record of every earlier event.', confidence: 'SOURCE ACCOUNT / INTERPRETED' }),
      section('rashid-ghazan', '04', 'Ilkhanid Political Setting', [
        'His career belongs to the Ilkhanid world of Ghazan and later court politics. The compilation’s portrait of earlier Mongol history is shaped by that setting.',
      ]),
      section('rashid-legacy', '05', 'Why Rashid al-Din Matters', [
        'Rashid al-Din matters both as a historical actor in Ilkhanid government and as a source through which much later knowledge of Mongol history has been filtered.',
        'Using his work requires source criticism, not either uncritical trust or dismissal.',
      ]),
    ],
  },
  'person-rabban-bar-sauma': {
    biographySections: [
      section('rabban-world', '02', 'Monk from the Yuan World', [
        'Rabban Bar Sauma was a Church of the East monk from the Yuan world who travelled west and later served an Ilkhanid diplomatic mission to European courts.',
      ]),
      section('rabban-travel', '03', 'Diplomacy and Long-Distance Travel', [
        'His career joined religious pilgrimage, court diplomacy and the practical networks of Mongol-era travel.',
        'One exceptional journey cannot represent every traveler’s experience. It shows what connected institutions could make possible for a well-positioned religious and diplomatic figure, not that ordinary movement was effortless or universally safe.',
      ], { label: 'Connections Without a Romantic Pax', text: 'Authorized travel and diplomacy existed beside war, taxation and uneven security. “Pax Mongolica” is a later analytical label, not a claim that all routes were peaceful.', confidence: 'INTERPRETED / DEBATED' }),
      section('rabban-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports the outline of his westward travel and Ilkhanid diplomatic service more securely than a complete itinerary or undocumented conversations.',
      ]),
      section('rabban-legacy', '05', 'Why Rabban Bar Sauma Matters', [
        'His life connects religious mobility and Ilkhanid diplomacy across Eurasia. It is evidence for networks, not a model of frictionless travel for everyone.',
      ]),
    ],
  },
}
