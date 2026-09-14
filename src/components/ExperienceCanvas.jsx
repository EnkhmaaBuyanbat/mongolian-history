import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import {
  createSteppeLights,
  createSteppeRenderer,
  createSteppeWorld,
  disposeObject3D,
  isCompactDevice,
} from '../three/steppeWorld'

export default function ExperienceCanvas({ reducedMotion = false, paused = false, label }) {
  const hostRef = useRef(null)
  const pausedRef = useRef(paused)
  const reducedRef = useRef(reducedMotion)

  useEffect(() => {
    pausedRef.current = paused
    reducedRef.current = reducedMotion
  }, [paused, reducedMotion])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const compact = isCompactDevice()
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x120c09)
    scene.fog = new THREE.FogExp2(0x1a120d, 0.034)

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200)
    camera.position.set(16, 7.4, 22)

    const renderer = createSteppeRenderer(host, { compact })
    scene.add(...createSteppeLights(compact), createSteppeWorld({ compact, gerCount: compact ? 6 : 10 }))

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enablePan = false
    controls.minDistance = 10
    controls.maxDistance = 42
    controls.maxPolarAngle = Math.PI * 0.46
    controls.minPolarAngle = Math.PI * 0.18
    controls.target.set(0, 1.1, 0)
    controls.autoRotateSpeed = 0.35
    controls.dampingFactor = 0.06

    const resize = () => {
      const width = host.clientWidth
      const height = host.clientHeight
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    resize()

    let visible = true
    const visibility = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting)
    }, { threshold: 0.05 })
    visibility.observe(host)

    const clock = new THREE.Clock()
    let frame = 0
    let faded = false

    const tick = () => {
      frame = window.requestAnimationFrame(tick)
      const reduced = reducedRef.current
      const hold = pausedRef.current || reduced
      controls.autoRotate = !hold
      controls.enableDamping = !reduced
      if (!visible) return

      const elapsed = clock.getElapsedTime()
      const fogT = Math.min(1, elapsed / 1.2)
      const ease = 1 - (1 - fogT) * (1 - fogT)
      scene.fog.density = 0.034 + (0.018 - 0.034) * ease
      if (!faded && fogT > 0.08) {
        renderer.domElement.style.transition = 'opacity 0.7s ease'
        renderer.domElement.style.opacity = '1'
        faded = true
      }

      controls.update()
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibility.disconnect()
      controls.dispose()
      disposeObject3D(scene)
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return (
    <div className="experience-canvas" ref={hostRef} role="img" aria-label={label} />
  )
}
