const section = (id, number, title, paragraphs, callout) => ({
  id,
  number,
  title,
  paragraphs,
  ...(callout ? { callout } : {}),
})

export const peopleBiographyOverlaysEraVII_VIII = {
  'person-namnansuren': {
    biographySections: [
      section('namnansuren-world', '02', 'Noble and Diplomat', [
        'Tögs-Ochiryn Namnansüren was a leading noble and diplomat of the Bogd Khanate. He lived from 1878 to 1919.',
        'His work belonged to Mongolia’s contested search for sovereignty after 1911. He did not act alone, and elite interests should not be presented as a finished mass-national movement.',
      ]),
      section('namnansuren-1911', '03', 'Independence Government', [
        'Mongol leaders used the Qing collapse to declare independence in December 1911 and to establish ministries, forces and diplomacy. Namnansüren participated in that political and diplomatic work.',
        'A declaration and functioning government did not automatically produce international recognition of full sovereignty.',
      ]),
      section('namnansuren-1915', '04', 'Kyakhta, 1915', [
        'At Kyakhta in 1915, Mongolian, Russian and Chinese representatives agreed to an autonomous Outer Mongolia under Chinese suzerainty. The settlement fell short of the Bogd government’s claim to independence.',
        'Autonomy, suzerainty, sovereignty and recognition are related but different. The relationship with Russia was asymmetric without turning Mongolian ministers into passive instruments.',
      ], { label: 'Autonomy, Not Full Independence', text: 'The Kyakhta Agreement recognized autonomy under Chinese suzerainty, not the full sovereignty claimed in 1911.', confidence: 'ESTABLISHED' }),
      section('namnansuren-legacy', '05', 'Why Namnansüren Matters', [
        'He is a central political and diplomatic figure of the Bogd Khanate. His career shows Mongolian agency under constraint.',
      ]),
    ],
  },
  'person-khanddorj': {
    biographySections: [
      section('khanddorj-world', '02', '1911 Participant', [
        'Mijiddorjiin Khanddorj participated in the political and diplomatic initiatives surrounding Mongolia’s 1911 independence. He lived from 1869 to 1915.',
      ]),
      section('khanddorj-role', '03', 'Noble Diplomacy', [
        'Influential nobles and senior clerics organized around the Eighth Jebtsundamba. Khanddorj belonged to that elite planning and diplomacy.',
        'The current source layer supports that participation more securely than a full independent ministerial chronology.',
      ]),
      section('khanddorj-legacy', '04', 'Why Khanddorj Matters', [
        'He is retained as a leading participant in the 1911 transition and Bogd Khanate diplomacy, not as a solitary founder.',
      ]),
    ],
  },
  'person-xu-shuzheng': {
    biographySections: [
      section('xu-world', '02', 'Republic of China Commander', [
        'Xu Shuzheng directed the Chinese military occupation associated with the abolition of Outer Mongolian autonomy in 1919. He lived from 1880 to 1925.',
      ]),
      section('xu-1919', '03', 'Abolition under Pressure', [
        'Under military pressure, Mongolian authorities accepted the abolition of autonomy and direct Chinese control. Agreements obtained under this pressure gave the occupation a formal appearance without making it a freely negotiated settlement.',
        'These actions belong to the Republic of China government and military context of the period. They should not be projected onto the later People’s Republic of China.',
      ]),
      section('xu-legacy', '04', 'Why Xu Shuzheng Matters', [
        'He is a key actor in the coercive 1919 termination of autonomy. Occupation intensified opposition among Mongolian actors who disagreed about what should replace it.',
      ]),
    ],
  },
  'person-ungern-sternberg': {
    biographySections: [
      section('ungern-world', '02', 'Anti-Bolshevik Commander', [
        'Roman von Ungern-Sternberg was an anti-Bolshevik commander operating within the violence of the Russian Civil War. He lived from 1886 to 1921.',
        'His forces entered Mongolia after defeat and displacement in Transbaikalia. He cannot be understood as a romantic steppe outsider.',
      ]),
      section('ungern-1921', '03', 'Urga, February 1921', [
        'In February 1921 Ungern’s forces expelled Chinese troops from Urga and restored the Bogd Khan. The restored monarchy sat within a violent and unstable military order.',
        'Calling him the liberator of Mongolia confuses the removal of one occupation with durable sovereign government.',
      ]),
      section('ungern-defeat', '04', 'Defeat', [
        'Mongolian revolutionary forces and Soviet troops defeated Ungern’s army in 1921. His political project did not represent Mongolian independence as defined by a unified Mongolian public.',
      ]),
      section('ungern-legacy', '05', 'Why Ungern Matters', [
        'Ungern was a violent and short-lived intervening power in the transformation of 1921. He was one actor among several, not a single maker of Mongolia’s future.',
      ]),
    ],
  },
  'person-sukhbaatar': {
    biographySections: [
      section('sukhbaatar-world', '02', 'Revolutionary Organizer', [
        'Damdin Sükhbaatar was a leading Mongolian revolutionary and military figure. He lived from 1893 to 1923.',
        'Opponents of Chinese occupation formed clandestine circles that in 1920 consolidated into the Mongolian People’s Party. Sükhbaatar, Bodoo, Danzan, Choibalsan and others participated with differing backgrounds.',
      ]),
      section('sukhbaatar-1921', '03', '1921 Campaign and Government', [
        'Mongolian revolutionaries organized a provisional government at Altanbulag. Sükhbaatar became a prominent military figure as revolutionary forces and Soviet troops moved against Ungern and entered Urga in July.',
        'Soviet Russia and the Red Army supplied decisive military capacity. Acknowledging that power does not erase Mongolian organization, choices or internal disagreements.',
      ], { label: 'Several Actors', text: 'Mongolian agency and decisive Soviet support were both essential. Later state narrative elevated selected founders into a simplified origin story.', confidence: 'ESTABLISHED / LATER MEMORY' }),
      section('sukhbaatar-memory', '04', 'Later State Memory', [
        'Later state commemoration amplified his role into a founding-hero narrative. Historical importance remains. Memory must be distinguished from the full network of actors and contingencies.',
      ]),
      section('sukhbaatar-legacy', '05', 'Why Sükhbaatar Matters', [
        'He is a central participant in the 1921 revolution and a major subject of later state memory. Neither a solitary liberator nor a mere foreign instrument is an adequate description.',
      ]),
    ],
  },
  'person-bodoo': {
    biographySections: [
      section('bodoo-world', '02', 'Early Revolutionary Leader', [
        'Dogsomyn Bodoo was a leading revolutionary politician and the first prime minister after the 1921 revolution. He lived from 1885 to 1922.',
      ]),
      section('bodoo-conflict', '03', 'Removal and Execution, 1922', [
        'After July 1921, revolutionary leaders governed while retaining the Bogd Khan as a limited monarch. The party depended heavily on Soviet military and diplomatic power, yet Mongolian politicians argued over the pace and meaning of change.',
        'Bodoo’s execution in 1922 reveals the early struggle over the new political order. Policy, personal networks, accusations, institutional power and external influence all belonged to those conflicts.',
      ]),
      section('bodoo-legacy', '04', 'Why Bodoo Matters', [
        'He shows that the revolutionary regime was not a stable sequence of leaders sharing one program. Early socialist Mongolia was made through conflict.',
      ]),
    ],
  },
  'person-danzan': {
    biographySections: [
      section('danzan-world', '02', 'Party Organizer', [
        'Soliin Danzan helped build the revolutionary movement. He lived from 1885 to 1924.',
      ]),
      section('danzan-1924', '03', 'Republic and Fall', [
        'After the Bogd Khan’s death, a new constitution proclaimed the Mongolian People’s Republic on 26 November 1924. Danzan was executed amid political conflict in 1924.',
        'Factional struggle and repeated political removals reshaped the party. Continuity of organization did not mean unchanged leadership.',
      ]),
      section('danzan-legacy', '04', 'Why Danzan Matters', [
        'His fall exposes early party conflict. He is important as an organizer whose removal belongs to the making of the MPR, not as a finished biographical novel.',
      ]),
    ],
  },
  'person-choibalsan': {
    biographySections: [
      section('choibalsan-world', '02', 'From Revolution to Central Power', [
        'Khorloogiin Choibalsan rose through revolutionary politics. He lived from 1895 to 1952.',
        'He participated in the Mongolian People’s Party, the 1921 campaign and later state leadership. Power grew within changing party and state institutions, not outside them.',
      ]),
      section('choibalsan-left', '03', 'Left Course and New Turn', [
        'From the late 1920s, leaders accelerated confiscation, pressure on elites and religious institutions, and early collectivization. Choibalsan belonged to that political order.',
        'The 1932 uprising forced the New Turn, a retreat from some radical measures without ending one-party rule or Soviet influence.',
      ]),
      section('choibalsan-repression', '04', 'Repression, 1937–1939', [
        'From 1937 to 1939, mass arrests, executions, imprisonment and political removals reached extraordinary intensity. Monasteries were closed or destroyed and religious institutions dismantled.',
        'Soviet advisers, security personnel and political demands shaped accusations. Implementation passed through Mongolian party leaders, security bodies and officials. Responsibility cannot be explained either as an exclusively Soviet assault or as Choibalsan acting alone.',
      ], { label: 'Established Mass Violence', text: 'Mass repression and monastic destruction are established. Totals vary with categories, dates and record survival.', confidence: 'ESTABLISHED / INTERPRETED SCALE' }),
      section('choibalsan-war', '05', 'Wartime Leadership', [
        'Mongolian and Soviet forces fought Japanese and Manchukuo forces at Khalkhin Gol in 1939. In August 1945 Mongolian forces joined the Soviet campaign against Japan. A 1945 referendum and 1946 Republic of China recognition belonged to wartime diplomacy within a one-party system.',
        'Wartime leadership and state-building reputation coexist with responsibility for repression.',
      ]),
      section('choibalsan-legacy', '06', 'Why Choibalsan Matters', [
        'He is a central state-builder inseparable from dictatorship, repression and wartime leadership. Historical memory must hold those roles together.',
      ]),
    ],
  },
  'person-genden': {
    biographySections: [
      section('genden-world', '02', 'Prime Minister in the New Turn', [
        'Peljidiin Genden led Mongolia during the New Turn after the 1932 uprising. He lived from 1892 to 1937.',
      ]),
      section('genden-pressure', '03', 'Removal and Execution', [
        'The New Turn retreated from some radical policies without ending one-party rule or Soviet influence. Genden was later removed and executed in the Soviet Union.',
        'Purges reshaped the leadership itself. Biography matters because institutions were made through conflict, but no single personality explains the transformation.',
      ]),
      section('genden-legacy', '04', 'Why Genden Matters', [
        'He is a Mongolian leader caught in escalating Soviet pressure and political repression. His fate belongs to transnational Stalinist politics as well as domestic struggle.',
      ]),
    ],
  },
  'person-amar': {
    biographySections: [
      section('amar-world', '02', 'Senior Office in a Dangerous System', [
        'Anandyn Amar held senior office, including the premiership, during the years of repression. He lived from 1886 to 1941.',
      ]),
      section('amar-repression', '03', 'Removal, Transfer, Execution', [
        'He was removed, transferred to the Soviet Union and executed. Party discipline and security bodies linked political decisions to arrest.',
        'His record is that of a senior political figure who became a victim of transnational Stalinist repression.',
      ]),
      section('amar-legacy', '04', 'Why Amar Matters', [
        'Amar shows that repression reached the leadership itself. Exact interrogation transcripts are not reconstructed here.',
      ]),
    ],
  },
  'person-yanjmaa': {
    biographySections: [
      section('yanjmaa-world', '02', 'Revolutionary and State Official', [
        'Sükhbaataryn Yanjmaa participated in revolutionary politics, women’s organizations and senior state institutions. She lived from 1893 to 1962.',
        'Her career extended beyond association with Sükhbaatar.',
      ]),
      section('yanjmaa-women', '03', 'Women, Work and Institutions', [
        'Law and state ideology promoted formal equality and expanded women’s access to schooling, healthcare, professional employment and political organizations. Yanjmaa’s public career demonstrates one path through those structures.',
        'It does not represent every woman. Pastoral work, childcare and unpaid domestic labor continued alongside professional participation.',
      ]),
      section('yanjmaa-legacy', '04', 'Why Yanjmaa Matters', [
        'She is a major woman in Mongolia’s revolutionary and state history. The current source layer supports that institutional career more securely than a private life story.',
      ]),
    ],
  },
  'person-tsedenbal': {
    biographySections: [
      section('tsedenbal-world', '02', 'Long-Serving Leader', [
        'Yumjaagiin Tsedenbal dominated Mongolian leadership from the 1950s until his removal in 1984. He lived from 1916 to 1991.',
      ]),
      section('tsedenbal-society', '03', 'Collectivization, Schools and Comecon', [
        'By 1959 the state declared livestock collectivization substantially complete. That rural transformation belongs to Tsedenbal’s long leadership. The educational and script order he later governed had earlier foundations: the National University was founded in 1942, and Mongolian Cyrillic came into general official use from 1946.',
        'Mongolia joined the United Nations in 1961 and Comecon in 1962. These were institutional milestones of mature socialist Mongolia, not proof that everyday life was uniform.',
      ]),
      section('tsedenbal-alliance', '04', 'Alliance and the Sino-Soviet Split', [
        'A 1966 Soviet–Mongolian treaty formalized close security alignment as Soviet–PRC rivalry increased Mongolia’s strategic importance and contributed to a Soviet military presence.',
        'The relationship was deeply unequal. Absolute formulas that Moscow controlled every decision remain too strong.',
      ]),
      section('tsedenbal-1984', '05', 'Removal in 1984', [
        'Tsedenbal was removed while in Moscow in August 1984, opening a late-socialist leadership transition under Batmönkh.',
      ]),
      section('tsedenbal-legacy', '06', 'Why Tsedenbal Matters', [
        'He is the central leader of Mongolia’s mature socialist period: collectivization, industrial and social change, and very close Soviet alignment.',
        'Benefits, coercion and dependence often belonged to the same systems.',
      ]),
    ],
  },
  'person-batmonkh': {
    biographySections: [
      section('batmonkh-world', '02', 'Late-Socialist Incumbent', [
        'Jambyn Batmönkh led the party-state in the late 1980s after Tsedenbal’s removal. He lived from 1926 to 1997.',
      ]),
      section('batmonkh-1990', '03', 'March 1990', [
        'Organizers and demonstrators demanded political pluralism, civil liberties and reform from December 1989. A hunger strike in March 1990 intensified peaceful pressure.',
        'The ruling party’s Politburo resigned. Batmönkh accepted movement toward multiparty politics rather than ordering a violent crackdown.',
      ], { label: 'Negotiated Opening', text: 'Leaders accepted a peaceful transition toward multiparty politics. The incumbent’s choice not to order a crackdown is part of the established record.', confidence: 'ESTABLISHED' }),
      section('batmonkh-election', '04', 'First Multiparty Election', [
        'Mongolia held its first multiparty parliamentary election on 29 July 1990. Batmönkh belongs to that institutional stage as well as to the March crisis.',
      ]),
      section('batmonkh-legacy', '05', 'Why Batmönkh Matters', [
        'He is a key incumbent leader in Mongolia’s negotiated democratic opening. The movement’s organizers and the incumbent’s decision both belong to the outcome.',
      ]),
    ],
  },
  'person-zorig': {
    biographySections: [
      section('zorig-world', '02', 'Democratic Organizer', [
        'Sanjaasürengiin Zorig emerged as a prominent organizer and public figure in Mongolia’s democratic movement of 1989–1990. He lived from 1962 to 1998.',
      ]),
      section('zorig-movement', '03', '1989–1990', [
        'In December 1989 organizers established the Mongolian Democratic Union, which coordinated demands and demonstrations alongside other emerging groups. It was important but not the movement’s sole actor.',
        'Zorig was among the public voices of demonstrations and of the March 1990 hunger strike that preceded the Politburo’s resignation.',
      ]),
      section('zorig-limits', '04', 'Limits of Reconstruction', [
        'The current source layer supports his role in the civic coalition of 1989–1990. Later death and commemoration are not reconstructed here beyond the documented lifespan.',
      ]),
      section('zorig-legacy', '05', 'Why Zorig Matters', [
        'He is a leading public voice of the democratic movement. Several organizers, not one founder, pressed for multiparty change.',
      ]),
    ],
  },
  'person-ochirbat': {
    biographySections: [
      section('ochirbat-world', '02', 'Transitional Head of State', [
        'Punsalmaagiin Ochirbat served as president during the transition to the 1992 constitutional order. He lived from 1942 to 2025.',
        'The record is presented through documented office and elections. No personality or motive judgment is inferred from office-holding.',
      ]),
      section('ochirbat-1992', '03', 'Constitution of 1992', [
        'The People’s Great Hural adopted a new Constitution on 13 January 1992. It entered into force on 12 February 1992, superseding the socialist-era constitutional order.',
      ]),
      section('ochirbat-1993', '04', 'Direct Presidential Election', [
        'In 1993 voters elected Ochirbat president in the first direct presidential election under the new constitution.',
      ]),
      section('ochirbat-legacy', '05', 'Why Ochirbat Matters', [
        'He is a central constitutional-transition figure. Competitive institutions, not a finished personality narrative, organize this biography.',
      ]),
    ],
  },
  'person-elbegdorj': {
    biographySections: [
      section('elbegdorj-world', '02', 'Movement and Later Office', [
        'Tsakhiagiin Elbegdorj participated in the democratic movement and later served as prime minister and president. He was born in 1963.',
        'A long career requires periodized treatment rather than a personality narrative. Living-person allegations, legal matters, policy outcomes and party claims require precise attribution and chronology.',
      ]),
      section('elbegdorj-1996', '03', '1996 Parliamentary Transfer', [
        'The 1996 election produced the first major transfer of parliamentary power away from the former ruling party in the post-1990 system. Elbegdorj is connected to that transfer as a Democratic Party political actor.',
      ]),
      section('elbegdorj-2008', '04', '2008 Unrest in the Record', [
        'A demonstration following the 29 June 2008 election and opposition fraud allegations escalated into violence. Five deaths were reported, alongside injuries and arrests whose civilian, police and detention categories must remain separate.',
        'Elbegdorj is linked in the project chronology to that event as a political actor of the period. Individual legal responsibility is not asserted here.',
      ], { label: 'Attributed Event, Not Adjudication', text: 'The unrest is documented in election-observer and human-rights records. This biography does not convert those records into a personal verdict.', confidence: 'ESTABLISHED EVENT / ATTRIBUTED CONTEXT' }),
      section('elbegdorj-legacy', '05', 'Why Elbegdorj Matters', [
        'He is a prominent political actor across the democratic movement and later competitive institutions. Office-holding is documented. Character judgment is not supplied.',
      ]),
    ],
  },
  'person-khurelsukh': {
    biographySections: [
      section('khurelsukh-world', '02', 'Documented Offices', [
        'Ukhnaagiin Khürelsükh served as prime minister and became president during a period of constitutional, party and parliamentary change. He was born in 1968.',
        'This record includes only documented institutional significance. No character judgment, motive speculation or unadjudicated allegation is included.',
      ]),
      section('khurelsukh-institutions', '03', '2019–2024 Institutional Change', [
        'Parliament adopted major constitutional amendments in November 2019. A 2023 amendment expanded the State Great Hural to 126 members. The 2024 election was the first under that mixed system.',
        'Khürelsükh is connected to that chronology as a sitting MPP leader and head of state. Implementation and evaluation of amendments remain separate questions.',
      ]),
      section('khurelsukh-legacy', '04', 'Why This Record Exists', [
        'A current political figure is included so later history is not empty of institutional actors. Depth stops where evidence would require speculation.',
      ]),
    ],
  },
  'person-oyun-erdene': {
    biographySections: [
      section('oyun-world', '02', 'Prime Minister, 2021–2025', [
        'Luvsannamsrain Oyun-Erdene served as prime minister from 2021 to 2025. He was born in 1980.',
        'Company and government accounts are attributed. No claim of motive, character or settled policy success is made.',
      ]),
      section('oyun-ot', '03', 'Oyu Tolgoi Milestones', [
        'In January 2022 the Government of Mongolia and project partners reached an agreement enabling underground operations to proceed under revised financial arrangements. Sustainable underground production commenced in March 2023.',
        'These are documented project stages, not a verdict on mining policy.',
      ]),
      section('oyun-parliament', '04', 'Parliamentary Implementation', [
        'His premiership overlapped the implementation of the expanded parliamentary system created by the 2023 amendment and used in the 2024 election. He left office in a documented 2025 government transfer.',
      ]),
      section('oyun-legacy', '05', 'Why This Record Exists', [
        'A contemporary political figure is included for documented institutional and mining-policy milestones. Living-person limits remain in force.',
      ]),
    ],
  },
}
