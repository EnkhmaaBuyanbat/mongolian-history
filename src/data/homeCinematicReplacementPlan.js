/**
 * Homepage cinematic visual replacement plan.
 *
 * Planning only. Not imported by homepage, hero, eras, or media resolvers.
 * Do not wire these IDs until generated images are reviewed and approved.
 * Do not treat proposed reconstructions as historical evidence.
 */

export const PLAN_STATUS = 'PLANNING_ONLY'

export const DESTINATION_ROOT = '/media/reconstructions/homepage/'

const SHARED_NEGATIVE = [
  'no readable text, letters, numbers, captions, watermarks, logos, UI, or interface chrome',
  'no decorative frame or letterbox',
  'no fantasy armor, plate harness, glowing weapons, or video-game silhouettes',
  'no generic “Asian fantasy” palaces, dragons, or invented heraldry',
  'no random Forbidden City / generic Chinese palace used as Mongolia',
  'no invented flags, tamgas, or unreadable banner emblems presented as documented symbols',
  'no modern objects in pre-modern scenes (phones, plastic, sneakers, asphalt roads, power lines)',
  'no identifiable portrait of a named historical person presented as likeness',
  'no close-up heroic face filling the frame',
].join('; ')

const SHARED_GRADE = 'Photorealistic cinematic still for a dark museum website. Documentary atmosphere, historically grounded material culture, dramatic natural light, warm umber shadows, restrained bronze highlights, not neon gold. Strong foreground / midground / background depth. Landscape composition. Keep the main subject and horizon away from extreme edges so the image survives website cropping. Atmospheric historical reconstruction, not a documentary photograph and not archaeological evidence.'

function files(id, aspect = '16x9') {
  return {
    aspect,
    originalPath: `${DESTINATION_ROOT}${id}-source.png`,
    largePath: `${DESTINATION_ROOT}${id}-large.jpg`,
    mediumPath: `${DESTINATION_ROOT}${id}-medium.jpg`,
    mobilePath: `${DESTINATION_ROOT}${id}-mobile.jpg`,
  }
}

export const currentHomepageVisuals = [
  {
    reportKey: 'A',
    slot: 'Homepage hero',
    manifestRole: 'hero',
    kind: 'reconstruction',
    id: 'reconstruction-mongol-steppe-01',
    file: '/media/reconstructions/hero/mongolian-steppe-early-13c-large.jpg',
    status: 'APPROVED',
    decision: 'KEEP',
    reason: 'Current cinematic north star. Unique hero asset. Do not overwrite.',
  },
  {
    reportKey: 'B',
    slot: 'Learn gateway',
    manifestRole: 'gatewayLearn',
    kind: 'media',
    id: 'media-deer-stones-uushgiin-uvur-01',
    file: '/media/derivatives/large/media-deer-stones-uushgiin-uvur-01-large.jpg',
    status: 'APPROVED',
    decision: 'KEEP',
    reason: 'Approved archaeological site photograph. Correct for LEARN as evidence/time. Optional reconstruction prompt exists only if a second cinematic variant is later approved; do not relabel the photo as reconstruction.',
  },
  {
    reportKey: 'C',
    slot: 'Explore gateway',
    manifestRole: 'gatewayExplore',
    kind: 'reconstruction',
    id: 'reconstruction-era-04-mongol-world',
    file: '/media/reconstructions/eras/era-04-mongol-world-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Same reconstruction as Era IV. Needs a people/dynasty environment, not a reused era card.',
  },
  {
    reportKey: 'D',
    slot: 'Experience gateway',
    manifestRole: 'gatewayExperience',
    kind: 'reconstruction',
    id: 'reconstruction-era-02-before-chinggis-khan',
    file: '/media/reconstructions/eras/era-02-before-chinggis-khan-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Same reconstruction as Era II and the Temüjin card. Needs an immersive threshold into a reconstructed world.',
  },
  {
    reportKey: 'E',
    slot: 'Era I',
    manifestRole: 'era1',
    kind: 'media',
    id: 'media-deer-stones-uushgiin-uvur-01',
    file: '/media/derivatives/large/media-deer-stones-uushgiin-uvur-01-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Duplicates Learn gateway photograph. Era I needs its own archaeological-ritual landscape reconstruction.',
  },
  {
    reportKey: 'F',
    slot: 'Era II',
    manifestRole: 'era2',
    kind: 'reconstruction',
    id: 'reconstruction-era-02-before-chinggis-khan',
    file: '/media/reconstructions/eras/era-02-before-chinggis-khan-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Reused on Experience gateway and Temüjin. Needs a colder, fragmented pre-1206 political world, not Era III imperial scale.',
  },
  {
    reportKey: 'G',
    slot: 'Era III',
    manifestRole: 'era3',
    kind: 'reconstruction',
    id: 'reconstruction-mongol-steppe-01',
    file: '/media/reconstructions/hero/mongolian-steppe-early-13c-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Duplicates the hero. Needs a distinct 1206–1260 imperial-formation image.',
  },
  {
    reportKey: 'H',
    slot: 'Era IV',
    manifestRole: 'era4',
    kind: 'reconstruction',
    id: 'reconstruction-era-04-mongol-world',
    file: '/media/reconstructions/eras/era-04-mongol-world-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Reused as Explore. Current travel scene should become a cosmopolitan imperial-network environment, not another cavalry plateau.',
  },
  {
    reportKey: 'I',
    slot: 'Era V',
    manifestRole: 'era5',
    kind: 'reconstruction',
    id: 'reconstruction-era-05-northern-yuan',
    file: '/media/reconstructions/eras/era-05-northern-yuan-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Has a unique ID but must be regenerated so it cannot be mistaken for Era III imperial assembly.',
  },
  {
    reportKey: 'J',
    slot: 'Era VI',
    manifestRole: 'era6',
    kind: 'reconstruction',
    id: 'reconstruction-era-06-qing-rule',
    file: '/media/reconstructions/eras/era-06-qing-rule-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Needs a clearly Mongolian monastic–pastoral–administrative Qing-era scene, not a generic Qing Chinese palace.',
  },
  {
    reportKey: 'K',
    slot: 'Era VII',
    manifestRole: 'era7',
    kind: 'reconstruction',
    id: 'reconstruction-era-07-revolution-socialist',
    file: '/media/reconstructions/eras/era-07-revolution-socialist-mongolia-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Must look like 20th-century Mongolia and must not rely on fake slogans, posters, or readable signage.',
  },
  {
    reportKey: 'L',
    slot: 'Era VIII',
    manifestRole: 'era8',
    kind: 'designed',
    id: null,
    file: null,
    status: 'DESIGNED_FALLBACK',
    decision: 'REPLACE',
    reason: 'No approved photographic or reconstruction asset. Needs a realistic contemporary Mongolian scene.',
  },
  {
    reportKey: 'M',
    slot: 'Featured Modu story',
    manifestRole: 'featuredStory',
    kind: 'reconstruction',
    id: 'reconstruction-era-01-ancient-steppe-worlds',
    file: '/media/reconstructions/eras/era-01-ancient-steppe-worlds-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACE',
    reason: 'Uses the Era I atmosphere, not a Xiongnu-period political-military world. Must not look like Chinggis Khan.',
  },
  {
    reportKey: 'N',
    slot: 'Temüjin person card',
    manifestRole: 'personTemujin',
    kind: 'reconstruction',
    id: 'reconstruction-era-02-before-chinggis-khan',
    file: '/media/reconstructions/eras/era-02-before-chinggis-khan-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACED',
    replacedWithId: 'reconstruction-person-temujin-world',
    reason: 'Reused Era II. Replaced with a dedicated contextual reconstruction of his world, not a portrait.',
  },
  {
    reportKey: 'O',
    slot: 'Sorghaghtani person card',
    manifestRole: 'personSorghaghtani',
    kind: 'reconstruction',
    id: 'reconstruction-era-04-mongol-world',
    file: '/media/reconstructions/eras/era-04-mongol-world-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACED',
    replacedWithId: 'reconstruction-person-sorghaghtani-household',
    reason: 'Reused Era IV / Explore. Replaced with a Toluid household environment, not a portrait.',
  },
  {
    reportKey: 'P',
    slot: 'Zanabazar person card',
    manifestRole: 'personZanabazar',
    kind: 'media',
    id: 'media-zanabazar-maitreya-01',
    file: '/media/derivatives/large/media-zanabazar-maitreya-01-large.jpg',
    status: 'APPROVED',
    decision: 'KEEP',
    reason: 'Approved related object. Do not generate a fake portrait.',
  },
  {
    reportKey: 'Q',
    slot: 'Experience History lower section',
    manifestRole: 'experience',
    kind: 'reconstruction',
    id: 'reconstruction-mongol-steppe-01',
    file: '/media/reconstructions/hero/mongolian-steppe-early-13c-large.jpg',
    status: 'APPROVED',
    decision: 'REPLACED',
    replacedWithId: 'reconstruction-kurultai-1206-assembly',
    reason: 'Duplicated the hero. Replaced with a great-assembly environment instead of another lone rider.',
  },
]

export const proposedReplacements = {
  'home-gateway-learn': {
    proposedId: 'home-gateway-learn',
    reconstructionId: 'reconstruction-home-gateway-learn',
    manifestRole: 'gatewayLearn',
    decision: 'OPTIONAL',
    aspect: '16:9',
    ...files('home-gateway-learn'),
    note: 'Current Learn photograph should remain. Generate only if a cinematic archaeological variant is later wanted. Never present it as the Uushgiin Uvur site photograph.',
  },
  'home-gateway-explore': {
    proposedId: 'home-gateway-explore',
    reconstructionId: 'reconstruction-home-gateway-explore',
    manifestRole: 'gatewayExplore',
    decision: 'REPLACE',
    aspect: '16:9',
    ...files('home-gateway-explore'),
  },
  'home-gateway-experience': {
    proposedId: 'home-gateway-experience',
    reconstructionId: 'reconstruction-home-gateway-experience',
    manifestRole: 'gatewayExperience',
    decision: 'REPLACE',
    aspect: '16:9',
    ...files('home-gateway-experience'),
  },
  'home-era-01': {
    proposedId: 'home-era-01',
    reconstructionId: 'reconstruction-home-era-01',
    manifestRole: 'era1',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-01', '3x2'),
  },
  'home-era-02': {
    proposedId: 'home-era-02',
    reconstructionId: 'reconstruction-home-era-02',
    manifestRole: 'era2',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-02', '3x2'),
  },
  'home-era-03': {
    proposedId: 'home-era-03',
    reconstructionId: 'reconstruction-home-era-03',
    manifestRole: 'era3',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-03', '3x2'),
  },
  'home-era-04': {
    proposedId: 'home-era-04',
    reconstructionId: 'reconstruction-home-era-04',
    manifestRole: 'era4',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-04', '3x2'),
  },
  'home-era-05': {
    proposedId: 'home-era-05',
    reconstructionId: 'reconstruction-home-era-05',
    manifestRole: 'era5',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-05', '3x2'),
  },
  'home-era-06': {
    proposedId: 'home-era-06',
    reconstructionId: 'reconstruction-home-era-06',
    manifestRole: 'era6',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-06', '3x2'),
  },
  'home-era-07': {
    proposedId: 'home-era-07',
    reconstructionId: 'reconstruction-home-era-07',
    manifestRole: 'era7',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-07', '3x2'),
  },
  'home-era-08': {
    proposedId: 'home-era-08',
    reconstructionId: 'reconstruction-home-era-08',
    manifestRole: 'era8',
    decision: 'REPLACE',
    aspect: '3:2',
    ...files('home-era-08', '3x2'),
  },
  'home-feature-modu': {
    proposedId: 'home-feature-modu',
    reconstructionId: 'reconstruction-home-feature-modu',
    manifestRole: 'featuredStory',
    decision: 'REPLACE',
    aspect: '16:9',
    ...files('home-feature-modu'),
  },
  'home-person-temujin': {
    proposedId: 'home-person-temujin',
    reconstructionId: 'reconstruction-person-temujin-world',
    manifestRole: 'personTemujin',
    decision: 'DONE',
    aspect: '16:9',
    originalPath: '/media/reconstructions/people/person-temujin-world-source.png',
    largePath: '/media/reconstructions/people/person-temujin-world-large.jpg',
    mediumPath: '/media/reconstructions/people/person-temujin-world-medium.jpg',
    mobilePath: '/media/reconstructions/people/person-temujin-world-mobile.jpg',
    note: 'Generated at 16:9 and filed under the people asset root because it also serves the person dossier header, not only the homepage card.',
  },
  'home-person-sorghaghtani': {
    proposedId: 'home-person-sorghaghtani',
    reconstructionId: 'reconstruction-person-sorghaghtani-household',
    manifestRole: 'personSorghaghtani',
    decision: 'DONE',
    aspect: '16:9',
    originalPath: '/media/reconstructions/people/person-sorghaghtani-household-source.png',
    largePath: '/media/reconstructions/people/person-sorghaghtani-household-large.jpg',
    mediumPath: '/media/reconstructions/people/person-sorghaghtani-household-medium.jpg',
    mobilePath: '/media/reconstructions/people/person-sorghaghtani-household-mobile.jpg',
    note: 'Generated at 16:9 and filed under the people asset root because it also serves the person dossier header, not only the homepage card.',
  },
  'home-experience-1206': {
    proposedId: 'home-experience-1206',
    reconstructionId: 'reconstruction-kurultai-1206-assembly',
    manifestRole: 'experience',
    decision: 'DONE',
    aspect: '16:9',
    originalPath: '/media/reconstructions/experiences/kurultai-1206-assembly-source.png',
    largePath: '/media/reconstructions/experiences/kurultai-1206-assembly-large.jpg',
    mediumPath: '/media/reconstructions/experiences/kurultai-1206-assembly-medium.jpg',
    mobilePath: '/media/reconstructions/experiences/kurultai-1206-assembly-mobile.jpg',
    note: 'Filed under the experiences asset root. Registered with no eraId or chapterIds so it cannot displace an era or chapter visual.',
  },
}

export const generationOrder = [
  'home-era-08',
  'home-era-03',
  'home-experience-1206',
  'home-gateway-experience',
  'home-era-02',
  'home-person-temujin',
  'home-gateway-explore',
  'home-era-04',
  'home-person-sorghaghtani',
  'home-feature-modu',
  'home-era-01',
  'home-era-05',
  'home-era-06',
  'home-era-07',
  'home-gateway-learn',
]

export const prompts = {
  'home-gateway-learn': `${SHARED_GRADE}
Subject: LEARN — knowledge, evidence, and deep time on the Mongolian steppe.
Landscape 16:9 cinematic still of an archaeological ritual landscape at cool dawn. Cluster of carved deer stones standing among low khirgisüür stone mounds on open grassland. Long raking light reveals lichen, tool marks, and the geometry of stone circles. In the far distance, tiny pastoral figures and a few sheep or horses, too small to identify. No medieval warriors, no gers of the Mongol Empire, no temples.
Camera: wide environmental, low-to-mid height, stones occupying the middle third, large sky, crop-safe margins.
${SHARED_NEGATIVE}
Label mentally as atmospheric archaeological reconstruction, never as a named site photograph.`,

  'home-gateway-explore': `${SHARED_GRADE}
Subject: EXPLORE — people, households, and political connection, 13th-century Mongol imperial world.
Landscape 16:9 of a human-rich elite camp courtyard, not a battlefield. Several felt gers, a low wooden platform, textiles, saddles, and bronze or leather vessels. Mixed group of unnamed adults: women in layered deel, men in practical riding coats, a seated figure receiving visitors, envoys or household officers standing at a respectful distance. Faces averted or in profile, none heroic close-up. Midday high-altitude light, dust in the air, mountains far behind.
This is social and dynastic space: conversation, status, kinship logistics — not charging cavalry.
Camera: three-quarter environmental, people in the middle ground, architecture and tents readable, crop-safe.
${SHARED_NEGATIVE}`,

  'home-gateway-experience': `${SHARED_GRADE}
Subject: EXPERIENCE — crossing the threshold into a reconstructed historical world, early 13th century.
Landscape 16:9 from just inside a large felt ger looking out through the open doorway. Foreground: interior gloom, felt walls, wooden door-frame, a hearth glow, hanging tack, no readable decoration. Beyond the door: a dusk assembly of many gers, horses, and people on a wide plain, firelight starting, mountains a dark silhouette. The viewer is entering, not watching a portrait.
No throne, no named ruler, no battle.
Camera: immersive wide from the doorway, strong depth, interior left/foreground, world outside centered, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-01': `${SHARED_GRADE}
Subject: Era I — Ancient Steppe Worlds, Bronze/Iron Age ritual landscape, not the Mongol Empire.
Landscape 3:2. Late afternoon, dry wind. A chain of deer stones and a broad khirgisüür mound field receding into rolling steppe. One distant herder with a few animals, back turned, tiny in the frame. Stone, grass, sky dominate. No sabers, no composite-bow cavalry of later centuries, no Buddhist architecture, no 13th-century gers.
Camera: elevated wide, archaeology as the hero, human activity only as scale, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-02': `${SHARED_GRADE}
Subject: Era II — Before Chinggis Khan, late 11th–12th century fragmented steppe politics.
Landscape 3:2, cold season: thin snow, iron-grey sky, low sun. Two or three small encampments separated by a stream or ridge, each with a few gers and horse lines — competing households, not one empire. Sparse smoke. Mounted figures far apart, not a unified army. Clothing and tack earlier/plainer than high imperial Mongol display. Winter palettes: ash, frozen grass, dark felt.
Must not resemble a 1206 imperial muster or a sunset lone-rider postcard.
Camera: wide, camps occupying left and right midground with empty contested space between, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-03': `${SHARED_GRADE}
Subject: Era III — Rise of the Mongol Empire, 1206–1260, imperial formation and movement.
Landscape 3:2. A long column of mounted riders and pack animals advancing across a broad valley, many gers being struck or already moving, dust and horses filling the middle distance. Scale is large and organized compared with Era II, but material culture stays historically plausible: felt, leather, lamellar or leather protection only if understated, no plate fantasy. Overcast or harsh noon light, not a golden sunset cliché.
No single identifiable commander portrait. No giant throne. Movement and numbers tell the story.
Camera: slightly elevated three-quarter along the column, depth to the horizon, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-04': `${SHARED_GRADE}
Subject: Era IV — The Mongol World, 1260–1368, interconnected Eurasian imperial networks.
Landscape 3:2 of a caravan city edge or relay settlement: mud-brick and timber buildings, a gate or warehouse, camels and horses, stacked goods in bales and chests (no readable labels). People of several visual traditions in historically plausible clothing — Inner Asian, West Asian, and East Asian dress mixed at a distance — merchants, clerks, escorts. Not a cavalry charge and not a Mongolian plateau battle.
Late-day sidelight, dust, layered architecture. Mountains or steppe visible beyond the town so the scene stays Inner Asian, not a generic Mediterranean souk and not a Chinese imperial palace.
Camera: street-to-horizon depth, architecture as midground, people as activity not portrait, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-05': `${SHARED_GRADE}
Subject: Era V — Northern Yuan and later Mongol powers, 15th–16th century political rebuilding.
Landscape 3:2. A smaller mobile court than Era III: a cluster of large gers, a modest wooden palisade or wagon laager, fewer riders. Some figures in later-period Mongol dress; a distant Buddhist tent-shrine or small temple-ger as a quiet secondary note, not a Tibetan palace. Overcast autumn light, dry grass, a sense of rivalry and reduced imperial scale.
Plain felt banners only as colored cloth, no invented emblems. Must not look like 1206 massed cavalry.
Camera: medium-wide court yard, human gathering in the center third, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-06': `${SHARED_GRADE}
Subject: Era VI — Mongolia under Qing rule, 17th century–1911, Mongolian monastic and pastoral order.
Landscape 3:2. A Mongolian Buddhist monastery of timber and plaster halls with gently sloping roofs set in open steppe, livestock and gers in the foreground, a distant caravan. One or two Qing-period officials or banner administrators as small figures in historically plausible dress, not a Beijing palace scene. Prayer flags only as unreadable cloth strips if used at all; no invented calligraphy.
Architecture must read as Mongolia, not the Forbidden City, not a Jiangnan garden, not a generic Chinese palace courtyard.
Camera: monastery in the middle distance, pastoral life in the foreground, mountains behind, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-07': `${SHARED_GRADE}
Subject: Era VII — Revolution and Socialist Mongolia, mid-20th century urban transformation.
Landscape 3:2 of Ulaanbaatar or a Mongolian aimag center, c. 1960s–1980s: pale apartment blocks, a wide street, a trolleybus or period truck, people in coats and hats appropriate to the period, the Bogd Khan mountain range or similar massif behind the city. Overcast or pale winter light. Empty flagpoles or unreadable distant color patches only — no posters, slogans, Cyrillic or Latin you can read, no fake propaganda art.
This must look like the 20th century, utterly unlike every medieval era.
Camera: city street to mountain skyline, people as scale, crop-safe.
${SHARED_NEGATIVE}`,

  'home-era-08': `${SHARED_GRADE}
Subject: Era VIII — Democratic and modern Mongolia, 1990s–present, realistic contemporary life.
Landscape 3:2 of present-day Ulaanbaatar: glass and concrete towers, older socialist blocks, traffic, ordinary contemporary clothing, the city sitting against the surrounding mountains under clear hard daylight. Optional distant ger-district texture on a hillside. No cyberpunk, no neon rain, no futuristic vehicles, no sci-fi skyline.
No readable shop signs or license plates; keep signage as unreadable blur.
Camera: elevated urban panorama with lived street life in the lower third, crop-safe.
${SHARED_NEGATIVE}`,

  'home-feature-modu': `${SHARED_GRADE}
Subject: Xiongnu-period steppe political-military world, late 3rd / early 2nd century BCE. Contextual reconstruction for Modu Chanyu’s era, not his likeness.
Landscape 16:9. Disciplined mounted group on an open Inner Asian grassland, compound bows, earlier steppe dress and tack distinct from 13th-century Mongol imperial style — no medieval Mongol helmets, no later lamellar clichés, no Buddhist objects. Several riders in a loose formation, faces distant or turned away. Huge sky, long shadows of late day.
Must not resemble Chinggis Khan, 1206, or a Mongol imperial kurultai.
Camera: wide, riders in the left-center midground, landscape dominant, crop-safe.
${SHARED_NEGATIVE}`,

  'home-person-temujin': `${SHARED_GRADE}
Subject: Contextual reconstruction for Temüjin / Chinggis Khan’s early-13th-century world — not a portrait.
Landscape 3:2. A single unnamed adult seen from back or three-quarter at medium-far distance, mounted or standing on a rise, overlooking an encampment of gers and horse herds. Historically plausible Mongol clothing and tack of the early 1200s. Face not readable. The camp and land carry the story.
Do not invent a famous likeness. Do not place a throne or named banner.
Camera: editorial landscape, figure off-center left, camp in the valley, crop-safe for a tall homepage card overlay at the bottom.
${SHARED_NEGATIVE}`,

  'home-person-sorghaghtani': `${SHARED_GRADE}
Subject: Contextual reconstruction for a Toluid elite household in the 13th-century Mongol imperial world — not a portrait of Sorghaghtani Beki.
Landscape 3:2. Interior-courtyard of a large ger or elite camp: layered textiles, chests, a low table, filtered daylight. A dignified adult woman seen from behind or three-quarter at a distance, working or speaking with household attendants. No fantasy crown, no European queen gown, no jewel-encrusted invented costume. Faces averted.
Political-domestic space, not a battlefield and not a romance illustration.
Camera: editorial, figure in the middle distance, textiles and architecture readable, crop-safe for bottom text overlay.
${SHARED_NEGATIVE}`,

  'home-experience-1206': `${SHARED_GRADE}
Subject: 1206 Great Kurultai environment — political assembly, not battle. Doorway image for an interactive historical reconstruction.
Landscape 16:9 ultra-wide. Hundreds of felt gers on a vast plain, horse lines, people walking and gathering in groups toward a central open space. Smoke, late-day light, long shadows. No giant throne, no identifiable Chinggis Khan, no invented flags or readable emblems, no combat.
The emotion is assembly, waiting, and political presence.
Camera: high wide cinematic, central gathering in the middle third, enormous depth, crop-safe 16:9.
${SHARED_NEGATIVE}`,
}

export const zanabazarHandling = {
  proposedId: null,
  decision: 'KEEP',
  mediaId: 'media-zanabazar-maitreya-01',
  presentation: 'related-object',
  rule: 'Do not generate a Zanabazar portrait. Continue using the approved Standing Maitreya object as related evidence until a sourced historical depiction is approved.',
}

export const safeguards = [
  'Reconstructions remain ATMOSPHERIC HISTORICAL RECONSTRUCTION, never evidence.',
  'Do not overwrite files under /media/originals, /media/derivatives, or existing reconstruction paths.',
  'Park new files under /media/reconstructions/homepage/ until review.',
  'Do not wire proposed IDs into homeVisualManifest.js until approval.',
  'Xiongnu imagery must not be labeled as Mongol.',
  'Person cards must keep contextual-reconstruction or related-object presentation.',
  'No generated text inside images.',
]
