import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

function SectionReveal({ as: Tag = 'section', className = '', quiet = false, children, ...props }) {
  const { ref, className: revealClass } = useRevealOnScroll()
  return (
    <Tag
      ref={ref}
      className={[className, revealClass, quiet ? 'is-quiet' : 'is-cinematic'].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default SectionReveal
