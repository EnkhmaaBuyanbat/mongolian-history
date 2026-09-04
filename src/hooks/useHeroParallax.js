import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useHeroParallax(heroRef) {
  const reduced = usePrefersReducedMotion()
  const [pose, setPose] = useState({ mx: 0, my: 0, sy: 0 })

  useEffect(() => {
    if (reduced) return undefined

    const hero = heroRef.current
    if (!hero) return undefined

    let mx = 0
    let my = 0
    let sy = 0
    let frame = 0

    const render = () => {
      frame = 0
      setPose({ mx, my, sy })
    }

    const queue = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onMove = (event) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      mx = Math.max(-0.5, Math.min(0.5, x))
      my = Math.max(-0.5, Math.min(0.5, y))
      queue()
    }

    const onScroll = () => {
      const rect = hero.getBoundingClientRect()
      sy = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)))
      queue()
    }

    hero.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      hero.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [heroRef, reduced])

  const layerStyle = (depth, z = 0) => {
    if (reduced) {
      return { transform: `translate3d(0, 0, ${z}px)` }
    }

    const x = pose.mx * depth * 26
    const y = pose.my * depth * 16 + pose.sy * depth * 42
    return { transform: `translate3d(${x}px, ${y}px, ${z}px)` }
  }

  return { layerStyle, reduced }
}
