const section = (id, number, title, paragraphs, callout) => ({
  id,
  number,
  title,
  paragraphs,
  ...(callout ? { callout } : {}),
})

export const peopleBiographyOverlaysEraV_VI = {
  'person-ayushiridara': {
    biographySections: [
      section('ayushiridara-world', '02', 'After Dadu', [
        'Ayushiridara was a son of Toghon Temür. The withdrawal from Dadu in 1368 ended Yuan rule over most of China. It did not end Yuan dynastic claims or Mongol political history.',
        'The court operated through movement, encampments and inherited centers north of China rather than one permanent capital. Yingchang and the Karakorum region carried different strategic meanings.',
      ]),
      section('ayushiridara-1370', '03', 'Succession in 1370', [
        'Toghon Temür died at Yingchang in 1370. Ayushiridara succeeded within the continuing Yuan dynastic order.',
        'From 1370 to 1378 he continued Yuan claims and resisted Ming military pressure from political centers north of China.',
      ]),
      section('ayushiridara-limits', '04', 'What Continued, What Changed', [
        'His reign shows that Yuan court history did not end instantly with the withdrawal from Dadu. Chinggisid legitimacy remained powerful while the resources of a China-based imperial court did not.',
        'The current source layer does not support reconstructing a campaign-by-campaign personal itinerary.',
      ]),
      section('ayushiridara-legacy', '05', 'Why Ayushiridara Matters', [
        'Ayushiridara belongs at the opening of Northern Yuan history because he carried Yuan dynastic rulership into a steppe-centered political world.',
        'The problem that followed was how Chinggisid authority could be rebuilt after losing the Yuan court’s base in China.',
      ]),
    ],
  },
  'person-togus-temur': {
    biographySections: [
      section('togus-world', '02', 'Successor under Pressure', [
        'Tögüs Temür succeeded Ayushiridara in 1378 amid continuing Ming pressure and changing Mongol coalitions.',
        'Nobles and regional forces shaped the ruler’s practical power. Chinggisid status remained essential to khanly legitimacy, yet descent alone could not guarantee control.',
      ]),
      section('togus-1388', '03', 'Death and the 1388 Rupture', [
        'Tögüs Temür was killed in 1388 following military defeat. The event opened intensified competition among Chinggisid claimants and powerful nobles.',
        'It did not end Mongol political authority. The current source layer does not encode a disputed direct genealogical link to Ayushiridara.',
      ], { label: 'Rupture, Not Disappearance', text: 'The 1388 succession crisis intensified competition. It did not erase Mongol courts, nobles or Chinggisid claims.', confidence: 'ESTABLISHED / INTERPRETED' }),
      section('togus-legacy', '04', 'Why Tögüs Temür Matters', [
        'His death is a major hinge in post-Yuan politics. Reunification became harder without reducing the period to disorder or decline.',
        'The resulting competition created the setting for later noble coalitions and Oirat ascendancy.',
      ]),
    ],
  },
  'person-togon-taishi': {
    biographySections: [
      section('togon-world', '02', 'Oirat Leadership in a Chinggisid Field', [
        'Togon was a leading Oirat taishi in the early fifteenth century. He expanded a coalition’s influence through changing relationships with Chinggisid khans, Mongol nobles and the Ming court.',
        'Eastern Mongol and Oirat identify important political contexts. Neither was a permanently unified camp or a timeless enemy of the other.',
      ]),
      section('togon-1430s', '03', 'Ascendancy in the 1430s', [
        'Under Togon, an Oirat-led coalition became a major force in steppe politics. Authority depended on assembling constituencies as well as on inherited titles.',
        'His authority did not convert the Oirats into one permanently unified state. He died in 1439.',
      ]),
      section('togon-legacy', '04', 'Why Togon Matters', [
        'Togon established the Oirat political ascendancy inherited and expanded by Esen. Oirat power emerged from the post-Yuan system rather than from outside it.',
      ]),
    ],
  },
  'person-esen-taishi': {
    biographySections: [
      section('esen-world', '02', 'Inherited Coalition', [
        'Esen inherited and enlarged Oirat political influence through coalitions, diplomacy, trade demands and warfare. His power depended on changing relationships rather than a simple conquest of Mongolia or China.',
        'The Ming court used campaigns, titles, gifts and negotiation. Mongol and Oirat leaders used those relationships strategically.',
      ]),
      section('esen-tumu', '03', 'The Tumu Crisis, 1449', [
        'During a Ming campaign into the northern frontier, Oirat-led forces under Esen defeated the imperial army near Tumu and captured the Zhengtong emperor.',
        'The crisis transformed Ming court politics and diplomacy. It was not a conquest of China.',
      ]),
      section('esen-title', '04', 'A Non-Chinggisid Supreme Claim', [
        'After accumulating exceptional power, Esen assumed a supreme title around 1453–1454 despite not being a Chinggisid. Sources establish the political challenge. The precise meaning and reception of the claim require interpretation.',
        'Chinggisid descent remained a politically sensitive principle of rulership even when effective power lay elsewhere.',
      ], { label: 'Established Challenge, Interpreted Title', text: 'The political challenge is established. The exact meaning of Esen’s supreme title remains interpreted.', confidence: 'ESTABLISHED / INTERPRETED' }),
      section('esen-death', '05', 'Death in 1454', [
        'Esen was killed in 1454 after opposition to his supreme-rulership claim and rule. His death weakened the coalition built under Togon and Esen and reopened political competition.',
      ]),
      section('esen-legacy', '06', 'Why Esen Matters', [
        'Esen shows both the height of fifteenth-century Oirat coalition power and the continuing force of Chinggisid legitimacy.',
        'Neither a simple conquest of China nor a finished unification of Mongolia is an adequate description.',
      ]),
    ],
  },
  'person-mandukhai-khatun': {
    biographySections: [
      section('mandukhai-world', '02', 'Restoration Household', [
        'Mandukhai Khatun held an important dynastic and political position during the restoration associated with the young Batu Möngke, later Dayan Khan.',
        'The broad political development is historically supported. Exact life dates are not securely established in the current source layer.',
      ]),
      section('mandukhai-sources', '03', 'Later Chronicles and Historical Position', [
        'Later Mongolian chronicles, including the seventeenth-century Erdeni-yin Tobchi tradition, attribute major military and political actions to her. Those narratives were written well after the fifteenth-century events.',
        'They are evidence for historical tradition. They are not contemporary eyewitness testimony.',
      ], { label: 'Later Chronicle Tradition', text: 'Celebrated campaigns survive through later chronicles. They must be compared with contemporary evidence and not converted into an exact fifteenth-century diary.', confidence: 'LATER CHRONICLE TRADITION / INTERPRETED' }),
      section('mandukhai-authority', '04', 'Authority and Memory', [
        'Her dynastic position was politically important. The exact scope and form of independent governing authority require source-critical reconstruction.',
        'Modern Mongolian memory often presents Mandukhai as a heroic restorer. Reception history is distinct from proof for individual medieval episodes.',
      ]),
      section('mandukhai-legacy', '05', 'Why Mandukhai Matters', [
        'Mandukhai is central to an educational account of Chinggisid restoration because household politics, legitimacy and later memory all shaped how that restoration is known.',
        'Later praise must not be converted into unsupported personality claims.',
      ]),
    ],
  },
  'person-dayan-khan': {
    biographySections: [
      section('dayan-world', '02', 'Batu Möngke', [
        'Batu Möngke, known as Dayan Khan, became the focus of a restoration of Chinggisid authority associated with Mandukhai Khatun.',
        'Exact regnal chronology varies in the sources. The restoration belongs to the late fifteenth and early sixteenth centuries.',
      ]),
      section('dayan-restoration', '03', 'Campaigns and Reorganization', [
        'His reign involved campaigns, coalition-building and a distribution of political domains among descendants. That reorganization reshaped later eastern Mongol politics.',
        'It was dynastic and regional organization, not the creation of a modern nation-state.',
      ]),
      section('dayan-sixteenth', '04', 'One Dynasty, Multiple Centers', [
        'The restoration strengthened Chinggisid legitimacy without producing permanent centralized government. During the sixteenth century, descendants and allied nobles governed regional political spheres.',
        'Relations with one another and with the Ming combined warfare, negotiation, trade, titles and tribute frameworks.',
      ]),
      section('dayan-legacy', '05', 'Why Dayan Khan Matters', [
        'Dayan Khan restored Chinggisid rulership across important eastern Mongol constituencies. Later Tümed, Khalkha and Chakhar histories take shape from that regional order.',
      ]),
    ],
  },
  'person-altan-khan': {
    biographySections: [
      section('altan-world', '02', 'Tümed Power', [
        'Altan Khan built Tümed power through campaigns, negotiation, trade demands and relations with the Ming. He lived from 1507 to 1582.',
        'Dayan Khan’s restoration had left multiple political centers. Altan’s sphere was one of those regional orders, not the whole Mongol world.',
      ]),
      section('altan-frontier', '03', 'Frontier Settlement, 1570–1571', [
        'Negotiation after decades of conflict produced titles and regulated border markets between the Ming and Altan Khan’s Tümed sphere.',
        'The settlement joined diplomacy and commerce. It does not prove simple permanent submission.',
      ]),
      section('altan-1578', '04', 'Meeting Sonam Gyatso, 1578', [
        'In 1578 Altan Khan met Sonam Gyatso near Köke Nuur. They exchanged titles and established a patronage relationship with lasting political and religious consequences.',
        'The meeting did not instantly convert all Mongol communities. Patronage was political, and religious change unfolded through institutions over time.',
      ]),
      section('altan-legacy', '05', 'Why Altan Khan Matters', [
        'Altan Khan joined frontier diplomacy to Buddhist patronage in a way that reshaped Mongol political and religious networks.',
        'Kökeqota belongs to that Tümed political landscape. It should not be treated as a modern national capital.',
      ]),
    ],
  },
  'person-sonam-gyatso': {
    biographySections: [
      section('sonam-world', '02', 'Geluk Hierarch', [
        'Sonam Gyatso was a leading Geluk cleric who lived from 1543 to 1588. He became known as the Third Dalai Lama because the title was applied retrospectively to two predecessors.',
      ]),
      section('sonam-1578', '03', 'Patronage with Altan Khan', [
        'The 1578 meeting with Altan Khan joined expanding Tibetan Buddhist institutions to Tümed political projects. Reciprocal titles advanced both religious networks and political legitimacy.',
        'This was not a single conversion of every Mongol community.',
      ]),
      section('sonam-legacy', '04', 'Why Sonam Gyatso Matters', [
        'His relationship with Altan Khan helped connect Mongol patrons with expanding Tibetan Buddhist institutions. Later Khalkha patronage, including the Erdene Zuu foundation tradition, belongs to that wider transformation.',
      ]),
    ],
  },
  'person-abtai-sain-khan': {
    biographySections: [
      section('abtai-world', '02', 'Khalkha Patron', [
        'Abtai Sain Khan was a Khalkha Chinggisid ruler associated with Buddhist patronage. He lived from 1554 to 1588.',
      ]),
      section('abtai-erdene', '03', 'Erdene Zuu, c. 1586', [
        'His patronage is associated with the establishment of Erdene Zuu near Karakorum around 1586. The approximate date marks an institutional foundation, not the date of every surviving structure.',
        'The site’s long architectural history should not be collapsed into a single fully documented construction moment.',
      ], { label: 'Foundation and Later Fabric', text: 'Institutional foundation, later building phases and archaeological remains are related but distinct layers of evidence.', confidence: 'ESTABLISHED / ARCHAEOLOGICAL EVIDENCE / HISTORICAL TRADITION' }),
      section('abtai-legacy', '04', 'Why Abtai Matters', [
        'Abtai linked Khalkha rulership with an important phase of Buddhist institutional expansion. That Khalkha trajectory remained distinct from Tümed and Chakhar politics.',
      ]),
    ],
  },
  'person-ligden-khan': {
    biographySections: [
      section('ligden-world', '02', 'Chakhar Claims', [
        'Ligden Khan ruled the Chakhar and attempted to strengthen wider Chinggisid authority amid competing Mongol powers and the expansion of the Later Jin. He lived from about 1588 to 1634.',
        'Other Mongol rulers guarded their own power. Senior Chinggisid claims did not automatically produce obedience.',
      ]),
      section('ligden-1634', '03', 'Death in 1634', [
        'Ligden died in 1634 while moving west amid conflict with expanding Later Jin power and rival Mongol alignments. His death weakened Chakhar-centered resistance.',
        'Calling him simply the last Mongol khan erases later Mongol rulers and political communities.',
      ]),
      section('ligden-after', '04', 'After Ligden', [
        'In 1635 his son and remaining Chakhar following entered Hong Taiji’s political order, transferring important symbols and claims. Other Mongol communities remained on different trajectories.',
      ]),
      section('ligden-legacy', '05', 'Why Ligden Matters', [
        'Ligden’s ambitions reveal the pressures on Chakhar-centered authority during Later Jin state-building. Mongol politics did not end with his death.',
      ]),
    ],
  },
  'person-nurhaci': {
    biographySections: [
      section('nurhaci-world', '02', 'Jurchen Consolidation', [
        'Nurhaci consolidated Jurchen power, developed banner organization and proclaimed the Later Jin in 1616. He lived from 1559 to 1626.',
        'Mongol relations entered this state-building process through diplomacy, marriage, alliance and warfare.',
      ]),
      section('nurhaci-1616', '03', 'Later Jin, Not Yet Qing', [
        'The 1616 proclamation gave dynastic form to an expanding Jurchen-led political and military order.',
        'This was not yet the Qing order proclaimed in 1636. Hong Taiji’s later imperial title should not be projected backward unchanged onto Nurhaci’s reign.',
      ]),
      section('nurhaci-legacy', '04', 'Why Nurhaci Matters', [
        'Nurhaci founded the Later Jin political order that increasingly shaped Mongol regional politics. Southern Mongol alliances and Chakhar choices developed in that setting.',
      ]),
    ],
  },
  'person-hong-taiji': {
    biographySections: [
      section('hong-world', '02', 'Successor of Nurhaci', [
        'Hong Taiji succeeded Nurhaci in 1626 and ruled until 1643. He expanded alliances and institutions involving Mongol, Manchu and Chinese constituencies.',
      ]),
      section('hong-chakhar', '03', 'Chakhar Transition, 1635', [
        'After Ligden Khan’s death, remaining Chakhar following entered Hong Taiji’s political order. Important symbols and claims were transferred.',
        'That incorporation did not encompass every Mongol community.',
      ]),
      section('hong-1636', '04', 'Great Qing, 1636', [
        'In 1636 Hong Taiji changed the dynastic name from Later Jin to Great Qing and proclaimed a broader imperial order.',
        'The political order developed from the Later Jin. It should not be projected backward unchanged onto Nurhaci’s earlier reign.',
      ]),
      section('hong-legacy', '05', 'Why Hong Taiji Matters', [
        'Hong Taiji transformed the Later Jin into the Qing imperial order through warfare, alliance and institutional state-building.',
        'Khalkha and Dzungar trajectories toward Qing relationships followed different timelines.',
      ]),
    ],
  },
  'person-galdan-boshugtu-khan': {
    biographySections: [
      section('galdan-world', '02', 'Dzungar Ruler', [
        'Galdan Boshugtu Khan led the developing Dzungar political order. He lived from 1644 to 1697.',
        'The Dzungar polity was an Inner Asian imperial competitor, not merely a rebel frontier. Galdan’s career is not the whole history of Oirat or Dzungar power.',
      ]),
      section('galdan-1688', '03', 'Khalkha Crisis, 1688', [
        'In 1688 Galdan’s forces defeated rival Khalkha powers, producing major displacement. Khalkha leaders sought Qing protection and negotiated a new political relationship.',
        'There was no single Mongol submission. Southern Mongol and Chakhar relationships with the Qing had already followed other paths.',
      ]),
      section('galdan-1691-1697', '04', 'Dolon Nor, Jao Modo and Death', [
        'The 1691 Dolon Nor assembly formalized Qing–Khalkha relationships after war and displacement. It did not encompass every Mongol community or end the Dzungar story.',
        'Qing forces defeated Galdan’s army at Jao Modo in 1696 during a campaign directed by the Kangxi emperor. Galdan died in 1697. Dzungar power continued under Tsewang Rabtan.',
      ]),
      section('galdan-legacy', '05', 'Why Galdan Matters', [
        'Galdan’s expansion and conflict with Khalkha powers formed the immediate geopolitical context of 1691. His defeat did not end Dzungar political power.',
      ]),
    ],
  },
  'person-kangxi-emperor': {
    biographySections: [
      section('kangxi-world', '02', 'Qing Emperor', [
        'The Kangxi emperor ruled a Manchu-led multiethnic empire from 1661 to 1722. He combined diplomacy, ritual authority, logistical mobilization and campaigns in relations with Khalkha and Dzungar powers.',
      ]),
      section('kangxi-dolon', '03', 'Dolon Nor, 1691', [
        'Khalkha leaders and the Kangxi emperor’s court formalized Qing–Khalkha political relationships at Dolon Nor after war and displacement.',
        'The settlement belonged to Qing imperial expansion, not a simple national war between China and Mongolia. It did not end the separate Dzungar story.',
      ]),
      section('kangxi-jao', '04', 'Jao Modo, 1696', [
        'Qing forces defeated Galdan’s army at Jao Modo during a campaign personally directed by Kangxi. The defeat was decisive for Galdan’s immediate position.',
        'It did not end the Dzungar polity.',
      ]),
      section('kangxi-legacy', '05', 'Why Kangxi Matters', [
        'Kangxi shaped Qing relationships with Khalkha rulers and directed the campaigns that defeated Galdan’s immediate challenge.',
        'Later Khalkha banner and league government developed from that imperial relationship rather than from one assembly alone.',
      ]),
    ],
  },
  'person-zanabazar': {
    biographySections: [
      section('zanabazar-world', '02', 'Khalkha Household and Religious Office', [
        'Zanabazar was a son of Tüsheet Khan Gombodorj and became the first Khalkha Jebtsundamba Khutuktu. He lived from 1635 to 1723.',
        'Recognition as a reincarnation belongs to Tibetan Buddhist institutional and religious tradition. It is not biological genealogy.',
      ]),
      section('zanabazar-office', '03', 'Religion, Art and a Mobile Monastery', [
        'His religious office, Khalkha political position, relationship with the Qing court, mobile monastic establishment, artistic production and Soyombo script made him a major figure.',
        'A significant artistic corpus is associated with Zanabazar. Individual attributions require object-level provenance.',
      ]),
      section('zanabazar-1691', '04', 'The Galdan Crisis and 1691', [
        'His choices during the Galdan crisis must be understood within severe political constraints. Mediation mattered within collective Khalkha decisions shaped by warfare, displacement and Qing power.',
        'He should not be described as single-handedly surrendering or saving Mongolia.',
      ], { label: 'Collective Decision, Not One Actor', text: 'Zanabazar’s mediation belonged to Khalkha decisions under war and Qing power. It was neither personal betrayal nor single-handed rescue.', confidence: 'INTERPRETED' }),
      section('zanabazar-amarbayasgalant', '05', 'Later Patronage', [
        'Amarbayasgalant was constructed through Qing imperial patronage in honor of Zanabazar between 1727 and 1736. Surviving fabric, later history and restoration require distinct architectural evidence.',
      ]),
      section('zanabazar-legacy', '06', 'Why Zanabazar Matters', [
        'Zanabazar connected Khalkha politics, Buddhist institutions, artistic production and Qing imperial relations.',
        'Later national memory celebrates him as a religious, artistic and cultural founder. Commemoration is distinct from evidence for individual acts.',
      ]),
    ],
  },
  'person-tsewang-rabtan': {
    biographySections: [
      section('tsewang-world', '02', 'After Galdan', [
        'Tsewang Rabtan rebuilt Dzungar power after Galdan’s death and ruled from 1697 to 1727.',
        'He maintained an Inner Asian polity engaged in diplomacy, trade, conflict and competition involving the Qing, Russia, Central Asian communities and Tibet.',
      ]),
      section('tsewang-order', '03', 'Reconstruction of Power', [
        'Administration, diplomacy, trade and warfare all belonged to that reconstruction. Galdan’s defeat did not end Dzungar political power.',
      ]),
      section('tsewang-legacy', '04', 'Why Tsewang Rabtan Matters', [
        'His reign is the bridge between Galdan’s challenge and the later peak under Galdan Tseren. The Dzungar order remained an imperial competitor.',
      ]),
    ],
  },
  'person-galdan-tseren': {
    biographySections: [
      section('galdantseren-world', '02', 'Dzungar Peak', [
        'Galdan Tseren succeeded Tsewang Rabtan in 1727 and ruled until 1745. He consolidated a Dzungar state with military, diplomatic and commercial capacities.',
      ]),
      section('galdantseren-qing', '03', 'Continuing Competition', [
        'Qing–Dzungar warfare and negotiation continued during his reign. The polity remained an Inner Asian imperial competitor, not a mere rebel frontier.',
      ]),
      section('galdantseren-1745', '04', 'Death and Succession Crisis', [
        'His death in 1745 opened severe succession struggles that weakened Dzungar political cohesion before the Qing campaign of 1755.',
      ]),
      section('galdantseren-legacy', '05', 'Why Galdan Tseren Matters', [
        'He led the Dzungar polity at a major eighteenth-century peak. The catastrophe that followed belonged to the succession crisis and Qianlong’s campaigns, not to his reign as a finished decline.',
      ]),
    ],
  },
  'person-qianlong-emperor': {
    biographySections: [
      section('qianlong-world', '02', 'Qing Emperor in Inner Asia', [
        'The Qianlong emperor reigned from 1735 to 1796. He directed Qing expansion during the Dzungar succession crisis.',
      ]),
      section('qianlong-campaigns', '03', 'Campaigns of 1755–1758', [
        'Qing armies defeated Dawachi in 1755. After Amursana rebelled, Qing suppression escalated into campaigns of political destruction.',
        'The campaigns destroyed the Dzungar political order amid documented mass killing, epidemic disease, displacement, flight, enslavement and resettlement. Some Dzungars survived. Exact totals and the relative contribution of different causes remain debated.',
      ], { label: 'Established Destruction', text: 'Destruction of Dzungar political power is established. Totals and the balance among killing, epidemic, flight and enslavement remain interpreted.', confidence: 'ESTABLISHED DESTRUCTION / INTERPRETED CAUSATION' }),
      section('qianlong-responsibility', '04', 'Ideology and Responsibility', [
        'His biography must examine imperial ideology and responsibility rather than celebrate conquest. State violence and frontier reorganization were parts of Qing imperial expansion.',
      ]),
      section('qianlong-legacy', '05', 'Why Qianlong Matters', [
        'Qianlong’s campaigns transformed Inner Asia through conquest, demographic catastrophe and frontier reorganization. Later Qing government in former Dzungar space belongs to that rupture.',
      ]),
    ],
  },
  'person-dawachi': {
    biographySections: [
      section('dawachi-world', '02', 'Succession Crisis', [
        'Dawachi emerged from the Dzungar succession struggles after Galdan Tseren’s death in 1745.',
      ]),
      section('dawachi-1755', '03', 'Defeat in 1755', [
        'Qing forces defeated and captured him in 1755, ending his rule. The campaign preceded Amursana’s rebellion and further mass violence.',
      ]),
      section('dawachi-legacy', '04', 'Why Dawachi Matters', [
        'Dawachi’s defeat marked the first phase of the Qing destruction of Dzungar political power. It was not yet the end of resistance.',
      ]),
    ],
  },
  'person-amursana': {
    biographySections: [
      section('amursana-world', '02', 'Alliance, Then Rebellion', [
        'Amursana initially allied with the Qing against Dawachi, then rebelled when Qing plans conflicted with his ambitions for Dzungar authority. He lived from 1723 to 1757.',
      ]),
      section('amursana-rebellion', '03', 'Rebellion, 1755–1757', [
        'The rebellion and Qing response formed a central phase in the political destruction and demographic catastrophe of 1755–1758.',
        'Qing suppression escalated into campaigns of political destruction and indiscriminate violence.',
      ]),
      section('amursana-legacy', '04', 'Why Amursana Matters', [
        'His changing alliance and rebellion became a catalyst in the final Qing campaigns against Dzungar resistance. Motive beyond the documented conflict of plans and ambitions is not supplied.',
      ]),
    ],
  },
  'person-eighth-jebtsundamba': {
    biographySections: [
      section('eighth-world', '02', 'Late-Qing Religious Office', [
        'The Eighth Jebtsundamba held the leading Khalkha Buddhist office at Ikh Khüree. He lived from 1869 to 1924.',
        'Reincarnation succession is not biological genealogy. His Bogd Khan title belongs to the 1911 political rupture and after.',
      ]),
      section('eighth-new-policies', '03', 'On the Eve of 1911', [
        'Late-Qing New Policies pursued stronger administration, revenue, security and, in some regions, cultivation and settlement. Implementation and Mongol responses varied.',
        'These pressures contributed to political anxiety. They did not make the 1911 rupture inevitable.',
      ]),
      section('eighth-1911', '04', 'Bogd Khan, 1911', [
        'When Mongol nobles and senior clerics declared independence in December 1911, the Eighth Jebtsundamba was enthroned as Bogd Khan on 29 December. Religious office and governmental power were not identical.',
        'He did not act alone. Nobles including Namnansüren and Khanddorj participated in political planning and diplomacy.',
      ]),
      section('eighth-contested', '05', 'Contested Sovereignty and Restricted Monarchy', [
        'He remained a religious and political sovereign through the contested Bogd Khanate. After the 1921 revolution the government retained him as a limited monarch until his death in 1924.',
        'The 1919 occupation and Ungern’s short-lived restoration both used his legitimacy without settling Mongolia’s status.',
      ]),
      section('eighth-legacy', '06', 'Why the Eighth Jebtsundamba Matters', [
        'His career connects late-Qing monastic and noble politics, the 1911 declaration, the Bogd Khanate and Mongolia’s revolutionary transition.',
        'A declaration, functioning government, territorial control, sovereignty and international recognition remained related but different.',
      ]),
    ],
  },
}
