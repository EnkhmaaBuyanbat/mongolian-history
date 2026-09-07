/** Canonical non-polity organizations. Detail-page UI is intentionally deferred. */
export const organizationStatusOptions = ['draft', 'researched', 'verified']

export const organizationTypeOptions = [
  'POLITICAL_PARTY',
  'MILITARY',
  'SECURITY',
  'INTERNATIONAL_ORGANIZATION',
  'POLITICAL_MOVEMENT',
]

export const organizations = [
  {
    id: 'organization-mpp-mprp', slug: 'mongolian-peoples-party',
    title: "Mongolian People's Party / Mongolian People's Revolutionary Party",
    alternativeNames: ['MPP', 'MPRP', 'Mongol Ardyn Nam', 'Mongol Ardyn Khuvsgalt Nam'],
    type: 'POLITICAL_PARTY', startYear: 1920, endYear: null, period: 'formed 1920; Era VII scope through 1990',
    eraIds: ['revolution-socialist'], status: 'researched',
    summary: 'The revolutionary party formed in 1920 became the governing party of the MPR and was renamed the Mongolian People’s Revolutionary Party in 1924. Its institutions and leadership changed substantially across the period.',
    nameHistory: [
      {title: "Mongolian People's Party", startYear: 1920, endYear: 1924, context: 'Revolutionary organization and early governing party.'},
      {title: "Mongolian People's Revolutionary Party", startYear: 1924, endYear: 1990, context: 'Name adopted at the Third Party Congress in August 1924; later history is reserved for Era VIII.'},
    ],
    predecessorIds: [], successorIds: [], leaderIds: ['person-bodoo','person-danzan','person-choibalsan','person-tsedenbal','person-batmonkh'], memberIds: [],
    relatedEventIds: ['event-mpp-formed-1920','event-revolutionary-government-1921','event-mpr-proclaimed-1924','event-left-course-1928','event-uprising-new-turn-1932','event-hunger-strike-politburo-resignation-1990'],
    relatedClaimIds: ['claim-era7-who-made-1921','claim-era7-soviet-satellite','claim-era7-1932-meaning','claim-era7-why-1990-succeeded'],
    relatedPlaceIds: ['place-ikh-khuree-urga','place-ulaanbaatar'], sourceRefs: ['source-bawden-modern-mongolia-1989','source-morozova-socialist-revolutions-mongolia-2009','source-rossabi-modern-mongolia-2005'],
    evidenceCaution: 'A continuous organization is not an unchanging institution. Name, leadership, ideology, coercive capacity, and relationship with Soviet authorities must be periodized.', detailAvailable: false, timelineAvailable: true,
  },
  {
    id: 'organization-mpra', slug: 'mongolian-peoples-revolutionary-army', title: "Mongolian People's Revolutionary Army",
    alternativeNames: ['MPRA', "Mongolian People's Army"], type: 'MILITARY', startYear: 1921, endYear: 1992, period: '1921–1992; Era VII focus through 1990', eraIds: ['revolution-socialist'], status: 'researched',
    summary: 'Mongolia’s revolutionary armed forces developed into the MPR’s national military and participated with Soviet forces at Khalkhin Gol and in the 1945 campaign.', nameHistory: [], predecessorIds: [], successorIds: [], leaderIds: ['person-sukhbaatar','person-choibalsan'], memberIds: [],
    relatedEventIds: ['event-revolutionary-government-1921','event-khalkhin-gol-1939','event-mongolia-war-japan-1945'], relatedClaimIds: ['claim-era7-khalkhin-gol-actors'], relatedPlaceIds: ['place-altanbulag','place-khalkhin-gol'], sourceRefs: ['source-coox-nomonhan-1985','source-bawden-modern-mongolia-1989'],
    evidenceCaution: 'Mongolian participation should neither disappear inside a Soviet-only narrative nor be detached from Soviet command, matériel, and operational power.', detailAvailable: false, timelineAvailable: true,
  },
  {
    id: 'organization-comintern', slug: 'comintern', title: 'Communist International', alternativeNames: ['Comintern', 'Third International'], type: 'INTERNATIONAL_ORGANIZATION', startYear: 1919, endYear: 1943, period: '1919–1943', eraIds: ['revolution-socialist'], status: 'researched',
    summary: 'The Comintern connected Mongolian revolutionary politics to international communist institutions, advisers, doctrine, and political pressure.', nameHistory: [], predecessorIds: [], successorIds: [], leaderIds: [], memberIds: [], relatedEventIds: ['event-mpp-formed-1920','event-left-course-1928','event-uprising-new-turn-1932'], relatedClaimIds: ['claim-era7-who-made-1921','claim-era7-1932-meaning'], relatedPlaceIds: [], sourceRefs: ['source-morozova-socialist-revolutions-mongolia-2009','source-bawden-modern-mongolia-1989'], evidenceCaution: 'Comintern influence was powerful but did not turn Mongolian participants into institutionally irrelevant actors.', detailAvailable: false, timelineAvailable: true,
  },
  {
    id: 'organization-mongolian-state-security', slug: 'mongolian-state-security', title: 'Mongolian state-security apparatus — research umbrella', alternativeNames: [], type: 'SECURITY', startYear: null, endYear: null, period: 'research grouping for changing socialist-era security bodies; not one continuous institution', eraIds: ['revolution-socialist'], status: 'draft',
    summary: 'This provisional umbrella groups research links concerning successive Mongolian security bodies. It does not assert an unchanged organization, official name, jurisdiction, or chain of institutional succession across the socialist period.', nameHistory: [], predecessorIds: [], successorIds: [], leaderIds: ['person-choibalsan'], memberIds: [], relatedEventIds: ['event-great-repression-mongolia-1937-1939'], relatedClaimIds: ['claim-era7-repression-scale'], relatedPlaceIds: ['place-ulaanbaatar'], sourceRefs: ['source-kaplonski-lama-question-2014','source-kaplonski-archived-relations-2011'], evidenceCaution: 'Official names, reorganizations, jurisdictions, and predecessor/successor relationships require dedicated archival verification before this can become a canonical continuous organization. The 1930s security services and later socialist security bodies must not be collapsed together.', detailAvailable: false, timelineAvailable: false,
  },
  {
    id: 'organization-comecon', slug: 'comecon', title: 'Council for Mutual Economic Assistance', alternativeNames: ['Comecon', 'CMEA'], type: 'INTERNATIONAL_ORGANIZATION', startYear: 1949, endYear: 1991, period: '1949–1991; Mongolia joined in June 1962', eraIds: ['revolution-socialist'], status: 'researched',
    summary: 'Comecon organized economic cooperation among socialist states. Mongolia’s membership supported trade, aid, infrastructure, technical training, and industrial projects while deepening structural dependence on the Soviet-led bloc.', nameHistory: [], predecessorIds: [], successorIds: [], leaderIds: [], memberIds: [], relatedEventIds: ['event-mongolia-comecon-1962'], relatedClaimIds: ['claim-era7-socialism-modernized'], relatedPlaceIds: [], sourceRefs: ['source-rossabi-modern-mongolia-2005'], evidenceCaution: 'Integration brought material benefits and constraints; it should be described as neither pure charity nor pure exploitation.', detailAvailable: false, timelineAvailable: true,
  },
  {
    id: 'organization-united-nations', slug: 'united-nations', title: 'United Nations', alternativeNames: ['UN'], type: 'INTERNATIONAL_ORGANIZATION', startYear: 1945, endYear: null, period: 'from 1945; Mongolia admitted in 1961', eraIds: ['revolution-socialist'], status: 'verified',
    summary: 'The United Nations admitted Mongolia as a member state on 27 October 1961, marking an important stage in international recognition.', nameHistory: [], predecessorIds: [], successorIds: [], leaderIds: [], memberIds: [], relatedEventIds: ['event-mongolia-un-membership-1961'], relatedClaimIds: [], relatedPlaceIds: [], sourceRefs: ['source-un-mongolia-member-state'], evidenceCaution: 'UN admission is a diplomatic milestone, not the beginning of Mongolian statehood.', detailAvailable: false, timelineAvailable: true,
  },
  {
    id: 'organization-mongolian-democratic-union', slug: 'mongolian-democratic-union', title: 'Mongolian Democratic Union', alternativeNames: ['MDU', 'MoAH'], type: 'POLITICAL_MOVEMENT', startYear: 1989, endYear: null, period: 'formed 1989; Era VII scope through 1990', eraIds: ['revolution-socialist'], status: 'researched',
    summary: 'The Mongolian Democratic Union was an important organizing body in the 1989–1990 democratic movement, coordinating public demands and protest alongside other groups and participants.', nameHistory: [], predecessorIds: [], successorIds: [], leaderIds: ['person-zorig','person-batuul'], memberIds: [], relatedEventIds: ['event-mongolian-democratic-union-formed-1989','event-democratic-demonstrations-1989','event-hunger-strike-politburo-resignation-1990'], relatedClaimIds: ['claim-era7-why-1990-succeeded'], relatedPlaceIds: ['place-ulaanbaatar'], sourceRefs: ['source-fish-democracy-without-prerequisites-1998','source-rossabi-modern-mongolia-2005'], evidenceCaution: 'The MDU was prominent but was not the whole democratic movement, and no single organizer explains the transition.', detailAvailable: false, timelineAvailable: true,
  },
]
