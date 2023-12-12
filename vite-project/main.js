// Import Three.js
import * as THREE from "three";
const canvas = document.querySelector("canvas");

// Create a scene
const scene = new THREE.Scene();

// Create a camera with proper aspect ratio
const camera = new THREE.PerspectiveCamera(45, 800 / 600);
camera.position.z = 20;
scene.add(camera);

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600);
document.body.appendChild(renderer.domElement);

// Create a sphere with a textured material for the Earth
const geometry = new THREE.SphereGeometry(3, 64, 64);
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("earthmap.jpg");
const material = new THREE.MeshStandardMaterial({ map: earthTexture });
const sphere = new THREE.Mesh(geometry, material); // Declare sphere here
scene.add(sphere);

// Create a directional light with adjusted position
const light = new THREE.DirectionalLight("white", 1);
light.position.set(1, 2, 5); // Adjusted light position
scene.add(light);

// Animation loop
const animate = function () {
  requestAnimationFrame(animate);

  // Rotate the sphere

  sphere.rotation.y += 0.01;

  // Render the scene with the updated camera and light positions
  renderer.render(scene, camera);
};

// Start the animation loop
animate();
