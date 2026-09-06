import { campaigns } from '../data/campaigns'
import { people } from '../data/people'
import { places } from '../data/places'
import { sites } from '../data/sites'
import { sources } from '../data/sources'
import { getEntityHref } from '../data/entityRoutes'
import GeographicConfidenceBadge from './GeographicConfidenceBadge'

function MapInfoPanel({ selection, activeCampaignIds }) {
  if (!selection) return <aside className="map-info-panel"><p className="section-label">Map Evidence</p><h2>Select a place, site, campaign, or political world</h2><p>Map symbols are evidence-aware teaching references. They do not define exact medieval borders.</p></aside>

  if (selection.kind === 'region') {
    const snapshotProvenance = selection.record.snapshotProvenance?.[selection.snapshotYear]
    const sourceIds = [...selection.record.sourceIds, ...(snapshotProvenance?.sourceIds ?? [])]
    const regionSources = sources.filter((source) => sourceIds.includes(source.id))
    const geometrySource = snapshotProvenance?.geometrySource ?? selection.record.geometrySource
    const geometryMethod = snapshotProvenance?.geometryMethod ?? selection.record.geometryMethod
    const provenance = geometrySource
      ? `${geometrySource.replaceAll('_',' ')} · ${geometryMethod.replaceAll('_',' ')}${selection.record.geometry ? '' : ' PENDING'}`
      : 'Geometry unavailable — cartographic source gap'
    return <aside className="map-info-panel"><p className="section-label">Political World · {selection.snapshotYear}</p><h2>{selection.record.name}</h2><p><strong>Representation:</strong> {selection.record.representation.replaceAll('_',' ')}</p><GeographicConfidenceBadge value={selection.record.geographicConfidence} /><p><strong>Historical treatment:</strong> {selection.record.treatment}</p><p>{selection.record.summary}</p><p><strong>Geometry / provenance:</strong> {provenance}</p><p className="map-caution">{snapshotProvenance?.caution ?? selection.record.caution}</p>{regionSources.length ? <p><strong>Sources:</strong> {regionSources.map((source) => source.title).join('; ')}</p> : null}</aside>
  }

  if (selection.kind === 'campaign') {
    const campaign = campaigns.find((item) => item.id === selection.record.campaignId)
    const commanders = people.filter((person) => campaign?.commanders?.includes(person.id))
    const connectedPlaces = places.filter((place) => campaign?.places?.includes(place.id))
    return <aside className="map-info-panel"><p className="section-label">Campaign</p><h2>{campaign?.title}</h2><p>{campaign?.dateDisplay} · {campaign?.theater}</p><GeographicConfidenceBadge value={selection.record.geographicTreatment} /><p>{campaign?.summary}</p><p><strong>Representation:</strong> {selection.record.representation.replaceAll('_',' ')}</p>{commanders.length ? <p><strong>People:</strong> {commanders.map((person) => person.title).join(', ')}</p> : null}{connectedPlaces.length ? <p><strong>Places:</strong> {connectedPlaces.map((place) => place.title).join(', ')}</p> : null}<p className="map-caution">{selection.record.caution}</p><a href="/eras/rise-of-mongol-empire">View Era III context</a></aside>
  }

  const entity = [...places, ...sites].find((item) => item.id === selection.record.entityId)
  const relatedCampaigns = campaigns.filter((campaign) => activeCampaignIds.includes(campaign.id) && (campaign.places?.includes(entity?.id) || selection.record.entityId === 'site-karakorum'))
  return <aside className="map-info-panel"><p className="section-label">{selection.record.entityType}</p><h2>{selection.record.label}</h2>{selection.record.secondaryLabel ? <p>{selection.record.secondaryLabel}</p> : null}<p>{selection.record.coordinateType.replaceAll('_',' ')}</p><GeographicConfidenceBadge value={selection.record.geographicConfidence} /><p>{entity?.summary}</p>{relatedCampaigns.length ? <p><strong>Active campaign:</strong> {relatedCampaigns.map((campaign) => campaign.title).join(', ')}</p> : null}<p className="map-caution">{selection.record.caution}</p>{entity ? <a href={getEntityHref(entity)}>Open full {selection.record.entityType.toLowerCase()} page</a> : null}</aside>
}

export default MapInfoPanel
