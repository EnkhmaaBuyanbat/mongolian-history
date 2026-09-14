import * as THREE from 'three'

export function isCompactDevice() {
  return window.matchMedia('(max-width: 768px)').matches || window.innerWidth < 768
}

function addGer(group, x, z, scale, segments) {
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(1.15 * scale, 1.2 * scale, 1.05 * scale, segments, 1, true),
    new THREE.MeshStandardMaterial({ color: 0xcbb89a, roughness: 0.92, metalness: 0.02 }),
  )
  wall.position.set(x, 0.55 * scale, z)
  wall.castShadow = true
  wall.receiveShadow = true

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.35 * scale, 0.72 * scale, segments),
    new THREE.MeshStandardMaterial({ color: 0x8a7354, roughness: 0.88 }),
  )
  roof.position.set(x, 1.28 * scale, z)
  roof.castShadow = true

  group.add(wall, roof)
}

export function createSteppeWorld({ compact = false, gerCount = 10, campPosition = [-2, 0, 2] } = {}) {
  const root = new THREE.Group()
  const segments = compact ? 8 : 12

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(90, compact ? 32 : 48),
    new THREE.MeshStandardMaterial({ color: 0x3c2f22, roughness: 1, metalness: 0 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  root.add(ground)

  const hillMat = new THREE.MeshStandardMaterial({ color: 0x2b241c, roughness: 1 })
  ;[
    [22, -18, 10, 4.2],
    [-28, -12, 14, 5],
    [8, -34, 18, 6.5],
    [-12, 30, 12, 3.8],
  ].forEach(([x, z, w, h]) => {
    const hill = new THREE.Mesh(new THREE.SphereGeometry(1, compact ? 12 : 18, compact ? 8 : 12), hillMat)
    hill.position.set(x, h * 0.15, z)
    hill.scale.set(w, h, w * 0.85)
    hill.receiveShadow = true
    root.add(hill)
  })

  const camp = new THREE.Group()
  const places = [
    [0, 0, 1.15],
    [4.2, 1.6, 0.92],
    [-4.4, 1.2, 0.95],
    [6.8, -2.4, 0.82],
    [-6.5, -1.8, 0.88],
    [2.2, -4.8, 0.78],
    [-2.6, -5.2, 0.8],
    [9.4, 0.4, 0.7],
    [-9.1, 0.8, 0.72],
    [1.4, 6.2, 0.74],
  ].slice(0, gerCount)
  places.forEach(([x, z, s]) => addGer(camp, x, z, s, segments))
  camp.position.set(...campPosition)
  root.add(camp)

  const fireLight = new THREE.PointLight(0xff9a4a, 2.4, 18, 2)
  fireLight.position.set(campPosition[0] + 0.4, 0.35, campPosition[2] + 0.2)
  root.add(fireLight)

  const ember = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xff7a32 }),
  )
  ember.position.set(campPosition[0] + 0.4, 0.12, campPosition[2] + 0.2)
  root.add(ember)

  const sunDisc = new THREE.Mesh(
    new THREE.CircleGeometry(3.4, 24),
    new THREE.MeshBasicMaterial({ color: 0xffc878, fog: false }),
  )
  sunDisc.position.set(14, 10.5, -28)
  root.add(sunDisc)

  return root
}

export function createSteppeRenderer(host, { compact, shadows = !compact } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: !compact, powerPreference: 'high-performance', alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.25 : 1.75))
  renderer.shadowMap.enabled = shadows
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.domElement.style.opacity = '0'
  host.appendChild(renderer.domElement)
  return renderer
}

export function createSteppeLights(compact) {
  const hemi = new THREE.HemisphereLight(0xf0d6a8, 0x24180f, 0.85)
  const sun = new THREE.DirectionalLight(0xffd09a, 1.55)
  sun.position.set(-18, 22, 10)
  sun.castShadow = !compact
  if (!compact) {
    sun.shadow.mapSize.set(1024, 1024)
    sun.shadow.camera.near = 4
    sun.shadow.camera.far = 70
    sun.shadow.camera.left = -24
    sun.shadow.camera.right = 24
    sun.shadow.camera.top = 18
    sun.shadow.camera.bottom = -12
  }
  return [hemi, sun]
}

export function disposeObject3D(root) {
  root.traverse((object) => {
    if (object.geometry) object.geometry.dispose()
    if (object.material) {
      const materials = Array.isArray(object.material) ? object.material : [object.material]
      materials.forEach((material) => material.dispose())
    }
  })
}
