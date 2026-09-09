import { getEducationalDiagram } from '../data/chapterVisuals'
import { getMediaById } from '../data/mediaResolvers'
import { getReconstructionById, isApprovedReconstruction } from '../data/reconstructionResolvers'
import EducationalVisual from './EducationalVisual'
import HistoricalMedia from './HistoricalMedia'
import ReconstructionInfo from './ReconstructionInfo'

function ChapterEducationalVisual({ assignment }) {
  if (!assignment || assignment.status !== 'READY') return null
  const media = assignment.mediaId ? getMediaById(assignment.mediaId) : null
  const reconstruction = assignment.reconstructionId ? getReconstructionById(assignment.reconstructionId) : null
  const diagram = assignment.diagramId ? getEducationalDiagram(assignment.diagramId) : null

  return (
    <section className="chapter-primary-visual" aria-labelledby={`${assignment.id}-title`}>
      <div className="chapter-section-heading">
        <p className="section-label">Chapter Visual</p>
        <h2 id={`${assignment.id}-title`}>{assignment.title}</h2>
        <p>{assignment.summary}</p>
      </div>
      {media?.approved ? <HistoricalMedia media={media} /> : null}
      {diagram ? <EducationalVisual {...diagram} ariaDescription={assignment.alt} /> : null}
      {isApprovedReconstruction(reconstruction) ? (
        <div className="chapter-primary-reconstruction">
          <img src={reconstruction.asset.largePath ?? reconstruction.asset.mediumPath} alt={assignment.alt} loading="lazy" />
          <ReconstructionInfo reconstruction={reconstruction} />
        </div>
      ) : null}
      <small className="chapter-primary-visual-sources">{assignment.evidenceLabel} · Source records: {assignment.sourceRefs.join(', ')}</small>
    </section>
  )
}

export default ChapterEducationalVisual
