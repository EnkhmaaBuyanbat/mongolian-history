import { people } from '../data/people'
import { getEntityHref } from '../data/entityRoutes'
import VisualSourceReferences from './VisualSourceReferences'

function PersonOrLabel({ item }) {
  const person = item.personId ? people.find((record) => record.id === item.personId) : null
  return person ? <a href={getEntityHref(person)}>{item.title}</a> : item.title
}

export function VisualNode({ item, style }) {
  return <div className={`visual-node${item.kind ? ` is-${item.kind}` : ''}`} style={style}><strong><PersonOrLabel item={item} /></strong>{item.text ? <span>{item.text}</span> : null}</div>
}

export function VisualConnector({ edge, nodes }) {
  const from = nodes.find((node) => node.id === edge.from)
  const to = nodes.find((node) => node.id === edge.to)
  if (!from || !to) return null
  return <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} className={`visual-connector is-${edge.kind ?? 'related'}`} />
}

export function VisualLegend({ items = [] }) {
  if (!items.length) return null
  return <ul className="visual-legend">{items.map((item) => <li key={item.label}><i className={`is-${item.kind}`} aria-hidden="true" />{item.label}</li>)}</ul>
}

export function VisualGap({ item }) {
  return <div className="visual-gap"><span aria-hidden="true">⋮</span><strong>{item.title}</strong>{item.text ? <small>{item.text}</small> : null}<span aria-hidden="true">⋮</span></div>
}

export function VisualPhase({ phase }) {
  return <section className="visual-phase"><header><strong>{phase.title}</strong>{phase.subtitle ? <span>{phase.subtitle}</span> : null}</header><div className="visual-phase-nodes">{phase.items.map((item) => <VisualNode key={item.id ?? item.title} item={item} />)}</div><div className="visual-phase-relationships">{phase.edges.map((edge) => <p key={`${edge.from}-${edge.to}-${edge.label}`} className={`is-${edge.kind}`}><span aria-hidden="true" />{edge.label}</p>)}</div></section>
}

const defaultPositions = [[50,12],[18,40],[50,40],[82,40],[30,78],[70,78]]

function SpatialDiagram({ items, edges = [], legend = [] }) {
  const nodes = items.map((item, index) => ({ ...item, id: item.id ?? `node-${index}`, x: item.x ?? defaultPositions[index % defaultPositions.length][0], y: item.y ?? defaultPositions[index % defaultPositions.length][1] }))
  return <div className="visual-spatial">{edges.length ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{edges.map((edge) => <VisualConnector key={`${edge.from}-${edge.to}`} edge={edge} nodes={nodes} />)}</svg> : null}{nodes.map((node) => <VisualNode key={node.id} item={node} style={{ '--node-x': `${node.x}%`, '--node-y': `${node.y}%` }} />)}<VisualLegend items={legend} /></div>
}

function SequenceDiagram({ items, kind }) {
  return <div className={`visual-sequence is-${kind.toLowerCase()}`}>{items.map((item, index) => <div className="visual-sequence-step" key={item.id ?? item.title}><span>{String(index + 1).padStart(2, '0')}</span><VisualNode item={item} /></div>)}</div>
}

function GenealogyDiagram({ items, legend }) {
  return <div className="visual-genealogy">{items.map((item) => item.kind === 'gap' ? <VisualGap key={item.title} item={item} /> : <VisualNode key={item.id ?? item.title} item={item} />)}<VisualLegend items={legend} /></div>
}

function EducationalVisual({ title, summary, items, note, variant = 'flow', type, layoutMode, edges, phases, legend, evidenceLabel, sourceRefs = [], ariaDescription }) {
  const mode = layoutMode ?? (['NETWORK','INSTITUTION','POLITICAL_ORDER'].includes(type) ? 'SPATIAL' : ['CHRONOLOGY','PROCESS','SUCCESSION'].includes(type) ? 'SEQUENCE' : 'CARDS')
  return <figure className={`educational-visual educational-visual-${variant} visual-mode-${mode.toLowerCase()}`} aria-label={title} aria-description={ariaDescription}><figcaption>{title}</figcaption>{evidenceLabel ? <small className="educational-visual-evidence">{evidenceLabel}</small> : null}{summary ? <p className="educational-visual-summary">{summary}</p> : null}{phases?.length ? <div className="visual-phases">{phases.map((phase) => <VisualPhase key={phase.title} phase={phase} />)}<VisualLegend items={legend} /></div> : mode === 'SPATIAL' ? <SpatialDiagram items={items} edges={edges} legend={legend} /> : mode === 'GENEALOGY' ? <GenealogyDiagram items={items} legend={legend} /> : mode === 'SEQUENCE' ? <SequenceDiagram items={items} kind={type ?? 'PROCESS'} /> : <div className="educational-visual-items">{items.map((item) => <VisualNode key={item.title} item={item} />)}</div>}{note ? <p className="educational-visual-note">{note}</p> : null}<VisualSourceReferences sourceRefs={sourceRefs} /></figure>
}

export default EducationalVisual
