import { getMediaById } from './mediaResolvers'
import { getReconstructionById, isApprovedReconstruction } from './reconstructionResolvers'

export const homeVisualManifest = {
  hero: {
    id: 'home-hero',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-mongol-steppe-01',
    focalPoint: '28% 42%',
    overlayStrength: 'soft',
    textSafeArea: 'center',
    status: 'APPROVED',
  },
  gatewayLearn: {
    id: 'home-gateway-learn',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-home-gateway-learn',
    focalPoint: '46% 62%',
    focalPointTablet: '48% 58%',
    focalPointMobile: '44% 70%',
    overlayStrength: 'strong',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  gatewayExplore: {
    id: 'home-gateway-explore',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-home-gateway-explore',
    focalPoint: '40% 58%',
    focalPointTablet: '42% 56%',
    focalPointMobile: '42% 64%',
    overlayStrength: 'strong',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  gatewayExperience: {
    id: 'home-gateway-experience',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-home-gateway-experience',
    focalPoint: '50% 48%',
    focalPointTablet: '50% 50%',
    focalPointMobile: '50% 54%',
    overlayStrength: 'strong',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era1: {
    id: 'home-era-1',
    eraId: 'ancient-steppe',
    kind: 'media',
    mediaId: 'media-deer-stones-uushgiin-uvur-01',
    focalPoint: '42% 72%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era2: {
    id: 'home-era-2',
    eraId: 'before-chinggis',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-era-02-before-chinggis-khan',
    focalPoint: '72% 38%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era3: {
    id: 'home-era-3',
    eraId: 'rise-empire',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-mongol-steppe-01',
    focalPoint: '52% 40%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era4: {
    id: 'home-era-4',
    eraId: 'mongol-world',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-era-04-mongol-world',
    focalPoint: '64% 36%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era5: {
    id: 'home-era-5',
    eraId: 'northern-yuan',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-era-05-northern-yuan',
    focalPoint: '48% 52%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era6: {
    id: 'home-era-6',
    eraId: 'qing-rule',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-era-06-qing-rule',
    focalPoint: '70% 34%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era7: {
    id: 'home-era-7',
    eraId: 'revolution-socialist',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-era-07-revolution-socialist',
    focalPoint: '50% 28%',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'APPROVED',
  },
  era8: {
    id: 'home-era-8',
    eraId: 'modern',
    kind: 'designed',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'DESIGNED_FALLBACK',
  },
  featuredStory: {
    id: 'home-featured-story',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-era-01-ancient-steppe-worlds',
    relatedEntityId: 'person-modu-chanyu',
    focalPoint: '34% 46%',
    overlayStrength: 'strong',
    textSafeArea: 'left',
    status: 'APPROVED',
  },
  personTemujin: {
    id: 'home-person-temujin',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-person-temujin-world',
    relatedEntityId: 'person-temujin-chinggis-khan',
    focalPoint: '38% 46%',
    focalPointTablet: '38% 44%',
    focalPointMobile: '30% 46%',
    overlayStrength: 'strong',
    textSafeArea: 'lower-left',
    status: 'APPROVED',
    presentation: 'contextual-reconstruction',
  },
  personSorghaghtani: {
    id: 'home-person-sorghaghtani',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-person-sorghaghtani-household',
    relatedEntityId: 'person-sorghaghtani-beki',
    focalPoint: '58% 44%',
    focalPointTablet: '58% 42%',
    focalPointMobile: '62% 44%',
    overlayStrength: 'strong',
    textSafeArea: 'lower-left',
    status: 'APPROVED',
    presentation: 'contextual-reconstruction',
  },
  personZanabazar: {
    id: 'home-person-zanabazar',
    kind: 'media',
    mediaId: 'media-zanabazar-maitreya-01',
    relatedEntityId: 'person-zanabazar',
    focalPoint: '50% 18%',
    overlayStrength: 'strong',
    textSafeArea: 'lower-left',
    status: 'APPROVED',
    presentation: 'related-object',
  },
  familyTree: {
    id: 'home-family-tree',
    kind: 'designed',
    overlayStrength: 'medium',
    textSafeArea: 'lower',
    status: 'DESIGNED_FALLBACK',
    presentation: 'genealogy',
  },
  experience: {
    id: 'home-experience',
    kind: 'reconstruction',
    reconstructionId: 'reconstruction-kurultai-1206-assembly',
    focalPoint: '50% 46%',
    focalPointTablet: '50% 44%',
    focalPointMobile: '50% 42%',
    overlayStrength: 'strong',
    textSafeArea: 'left',
    status: 'APPROVED',
  },
}

const eraRoleById = {
  'ancient-steppe': 'era1',
  'before-chinggis': 'era2',
  'rise-empire': 'era3',
  'mongol-world': 'era4',
  'northern-yuan': 'era5',
  'qing-rule': 'era6',
  'revolution-socialist': 'era7',
  modern: 'era8',
}

export function getHomeVisualRole(role) {
  return homeVisualManifest[role] ?? null
}

export function getHomeEraVisualRole(eraId) {
  return getHomeVisualRole(eraRoleById[eraId])
}

export function resolveHomeVisual(roleOrSpec) {
  const spec = typeof roleOrSpec === 'string' ? getHomeVisualRole(roleOrSpec) : roleOrSpec
  if (!spec) return null

  if (spec.kind === 'media' && spec.mediaId) {
    const media = getMediaById(spec.mediaId)
    if (!media?.approved || media.reviewStatus !== 'APPROVED') {
      return { ...spec, asset: null, crop: spec.focalPoint }
    }
    return {
      ...spec,
      asset: media.asset,
      crop: spec.focalPoint,
      cropTablet: spec.focalPointTablet,
      cropMobile: spec.focalPointMobile,
      evidenceLabel: media.evidenceType,
      isReconstruction: false,
    }
  }

  if (spec.kind === 'reconstruction' && spec.reconstructionId) {
    const reconstruction = getReconstructionById(spec.reconstructionId)
    if (!isApprovedReconstruction(reconstruction)) {
      return { ...spec, asset: null, crop: spec.focalPoint }
    }
    return {
      ...spec,
      asset: reconstruction.asset,
      crop: spec.focalPoint,
      cropTablet: spec.focalPointTablet,
      cropMobile: spec.focalPointMobile,
      evidenceLabel: reconstruction.evidenceLabel,
      caution: reconstruction.historicalCaution,
      isReconstruction: true,
      reconstruction,
    }
  }

  return { ...spec, asset: null, crop: spec.focalPoint, isReconstruction: false }
}
