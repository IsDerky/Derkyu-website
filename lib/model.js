import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        // Elimina modelos previos si existen
        const oldModel = scene.getObjectByName('dog')
        if (oldModel) {
          scene.remove(oldModel)
        }

        const obj = gltf.scene
        obj.name = 'dog'

        // Mueve el modelo más cerca de la cámara
        obj.position.set(-2, 2, 0) // (x, y, z) → z=3 para acercarlo más
        obj.scale.set(1.5, 1.5, 1.5) // Hace el modelo más grande

        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        // Forzar actualización de la escena
        scene.needsUpdate = true

        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
