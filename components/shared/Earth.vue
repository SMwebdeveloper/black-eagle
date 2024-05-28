<template>
  <div ref="container" class="background-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let scene, camera, renderer, cube

onMounted(() => {
  init()
  animate()
})

function init() {
  // Create a scene
  scene = new THREE.Scene()

  // Create a camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Create a WebGL renderer
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // Create a cube and add it to the scene
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
}
</style>
