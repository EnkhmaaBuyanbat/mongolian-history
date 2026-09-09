export const eraWorldTypeOptions = [
  'HISTORICAL_RECONSTRUCTION',
  'ATMOSPHERIC_RECONSTRUCTION',
  'ARCHAEOLOGICAL_CONTEXT',
  'HISTORICAL_PHOTOGRAPH',
  'MODERN_PHOTOGRAPH',
  'FALLBACK',
]

export const eraWorlds = [
  {
    id: 'era-world-ancient-steppe', slug: 'ancient-steppe-world', eraId: 'ancient-steppe', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-era-01-ancient-steppe-worlds', mediaId: null,
    fallbackStyle: 'ancient-stone', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'An archaeological steppe atmosphere focused on landscape and monument context without presenting ancient peoples as Mongols.',
    historicalBasis: ['Steppe landscapes', 'Burial landscapes', 'Deer stones and archaeological monuments'],
    knownEvidence: ['Monumental and burial landscapes', 'Long histories of pastoral activity'], uncertainElements: ['Exact appearance of ancient communities', 'Specific ritual activity and season'],
    promptBrief: 'Broad ancient steppe and archaeological monument landscape; distant non-identifying pastoral activity; no ruler portrait or ethnic conflation.',
    desktopPosition: '58% center', mobilePosition: '60% center', overlayStrength: 'strong', depthProfile: 'archaeological-landscape', future3dExperienceId: 'experience-xiongnu-elite-tomb', approved: true,
  },
  {
    id: 'era-world-before-chinggis', slug: 'before-chinggis-world', eraId: 'before-chinggis', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-era-02-before-chinggis-khan', mediaId: null,
    fallbackStyle: 'fragmented-steppe', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'A changing late-twelfth-century political landscape of dispersed camps, herds, and competing centers before 1206.',
    historicalBasis: ['Pastoral mobility', 'Felt camp traditions', 'Plural political groupings'], knownEvidence: ['Horse herds and mobile households', 'Competing political communities'],
    uncertainElements: ['Exact camp placement', 'Clothing colors and individual identities'], promptBrief: 'Wide late-twelfth-century valley with separated camps and distant riders; no crowned king, unified army, or preordained victor.',
    desktopPosition: '55% center', mobilePosition: '64% center', overlayStrength: 'strong', depthProfile: 'distributed-camps', future3dExperienceId: null, approved: true,
  },
  {
    id: 'era-world-rise-empire', slug: 'rise-mongol-empire-world', eraId: 'rise-empire', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-mongol-steppe-01', mediaId: null,
    fallbackStyle: 'imperial-steppe', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'An evidence-informed atmosphere of early-thirteenth-century pastoral mobility and political transformation, not one exact assembly.',
    historicalBasis: ['Steppe environment', 'Pastoral horse culture', 'Felt dwellings and Mongol-era material culture'], knownEvidence: ['Horse-based mobility', 'Mobile camps and livestock economy'],
    uncertainElements: ['Exact gathering arrangement', 'Unnamed rider identity', 'Colors and temporary structures'], promptBrief: 'Early-thirteenth-century steppe mobilization with non-identifying figures; no portrait claim or unverifiable exact event.',
    desktopPosition: 'center', mobilePosition: '30% center', overlayStrength: 'strong', depthProfile: 'mobilizing-steppe', future3dExperienceId: 'experience-early-imperial-camp', approved: true,
  },
  {
    id: 'era-world-mongol-world', slug: 'connected-mongol-world', eraId: 'mongol-world', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-era-04-mongol-world', mediaId: null,
    fallbackStyle: 'connected-world', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'An atmosphere of movement, communication, and regional diversity across the connected Mongol world.',
    historicalBasis: ['Imperial communications', 'Caravan travel', 'Regional political diversity'], knownEvidence: ['Movement of envoys, merchants, and information'],
    uncertainElements: ['Exact road setting', 'Composition of any single caravan'], promptBrief: 'Wide relay and caravan environment with distant settlement; avoid romanticized Silk Road fantasy.',
    desktopPosition: '57% center', mobilePosition: '64% center', overlayStrength: 'strong', depthProfile: 'distant-route', future3dExperienceId: 'experience-mongol-relay-network', approved: true,
  },
  {
    id: 'era-world-northern-yuan', slug: 'later-mongol-powers-world', eraId: 'northern-yuan', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-era-05-northern-yuan', mediaId: null,
    fallbackStyle: 'later-steppe', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'A mobile political landscape of fragmentation, rivalry, and renewal after 1368.', historicalBasis: ['Mobile courts', 'Changing coalitions', 'Later medieval steppe material culture'],
    knownEvidence: ['Multiple political centers and mobile elite households'], uncertainElements: ['Exact camp layouts', 'Appearance of individual retinues'],
    promptBrief: 'Multiple distant camps and mobile retinues in a broad steppe landscape; do not imply one continuously unified state.', desktopPosition: '55% center', mobilePosition: '62% center', overlayStrength: 'strong', depthProfile: 'multiple-centers', future3dExperienceId: null, approved: true,
  },
  {
    id: 'era-world-qing-rule', slug: 'qing-mongolia-world', eraId: 'qing-rule', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-era-06-qing-rule', mediaId: null,
    fallbackStyle: 'monastic-steppe', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'A pastoral, monastic, commercial, and imperial-order environment grounded in Mongolia’s own landscapes.', historicalBasis: ['Pastoral households', 'Monastic institutions', 'Trade and imperial administration'],
    knownEvidence: ['Pastoral and monastic landscapes', 'Commercial and administrative movement'], uncertainElements: ['Exact combined setting', 'Specific banners and building arrangement'],
    promptBrief: 'Steppe and sacred architecture with pastoral households and distant movement; avoid reducing Qing Mongolia to Chinese palace imagery.', desktopPosition: '58% center', mobilePosition: '65% center', overlayStrength: 'strong', depthProfile: 'sacred-landscape', future3dExperienceId: 'experience-qing-monastic-pastoral-world', approved: true,
  },
  {
    id: 'era-world-revolution-socialist', slug: 'revolution-socialist-world', eraId: 'revolution-socialist', worldType: 'ATMOSPHERIC_RECONSTRUCTION', reconstructionId: 'reconstruction-era-07-revolution-socialist', mediaId: null,
    fallbackStyle: 'transforming-city', visualStatus: 'ACTIVE', evidenceLabel: 'ATMOSPHERIC HISTORICAL RECONSTRUCTION',
    shortDescription: 'An atmospheric reconstructed world showing political, urban, pastoral, and social transformation across 1911–1990.', historicalBasis: ['Archival photography', 'Urban and pastoral transformation', 'Public and institutional history'],
    knownEvidence: ['Photographic and documentary evidence survives for parts of the period'], uncertainElements: ['A single image cannot represent the entire era'],
    promptBrief: 'Prefer verified archival photography; avoid collapsing the era into Soviet iconography or propaganda-poster aesthetics.', desktopPosition: 'center', mobilePosition: 'center', overlayStrength: 'strong', depthProfile: 'documentary-transition', future3dExperienceId: null, approved: true,
  },
  {
    id: 'era-world-modern', slug: 'modern-mongolia-world', eraId: 'modern', worldType: 'FALLBACK', reconstructionId: null, mediaId: null,
    fallbackStyle: 'modern-horizon', visualStatus: 'AWAITING_DOCUMENTARY_MEDIA', evidenceLabel: null,
    shortDescription: 'A future rights-cleared photographic world connecting contemporary urban and pastoral Mongolia.', historicalBasis: ['Documentary photography', 'Urban and pastoral environments', 'Infrastructure and social change'],
    knownEvidence: ['Modern Mongolia includes interconnected urban and pastoral settings'], uncertainElements: ['No single skyline or political figure represents the era'],
    promptBrief: 'Use verified modern photography later; no fake historical photograph or politician-centered visual identity.', desktopPosition: 'center', mobilePosition: 'center', overlayStrength: 'strong', depthProfile: 'urban-pastoral', future3dExperienceId: null, approved: true,
  },
]

export function getEraWorld(eraId) {
  return eraWorlds.find((world) => world.eraId === eraId) ?? null
}
