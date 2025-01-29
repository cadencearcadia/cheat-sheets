import React from 'react';

function ThreeJSCheatSheet() {
  return (
    <div className="container">
      <h1>Three.js Cheat Sheet (macOS)</h1>
      <p>
        Three.js is a JavaScript library for creating 3D graphics in the browser.
        It simplifies the use of WebGL and provides an API for rendering objects, animations, and interactive scenes.
      </p>

      <h2>Installing Three.js on macOS</h2>
      <p>You can install Node.js via Homebrew, then set up a Three.js project using npm.</p>
      <pre className="code-block">
<code>{`# Install Node.js (if not already installed)
brew install node

# Initialize a new project
mkdir my-threejs-project && cd my-threejs-project
npm init -y

# Install Three.js
npm install three
`}</code>
      </pre>

      <h2>Basic Scene Setup</h2>
      <p>A Three.js scene consists of a <strong>Scene</strong>, a <strong>Camera</strong>, and a <strong>Renderer</strong>.</p>
      <pre className="code-block">
<code>{`import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 5;

// Create a renderer and attach to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
`}</code>
      </pre>

      <h2>Adding Objects</h2>
      <p>Three.js allows you to create 3D objects using geometries and materials.</p>
      <pre className="code-block">
<code>{`// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
`}</code>
      </pre>

      <h2>Animation Loop</h2>
      <p>To make objects move or animate, use the <code>requestAnimationFrame</code> function.</p>
      <pre className="code-block">
<code>{`function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
`}</code>
      </pre>

      <h2>Lighting in Three.js</h2>
      <p>To create realistic-looking objects, you need proper lighting.</p>
      <pre className="code-block">
<code>{`// Ambient Light (provides soft global lighting)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional Light (like sunlight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);
`}</code>
      </pre>

      <h2>Shadows in Three.js</h2>
      <p>Three.js supports shadows, but they must be enabled manually for performance reasons.</p>
      <pre className="code-block">
<code>{`// Enable shadow maps in the renderer
renderer.shadowMap.enabled = true;

// Enable shadows for lights
directionalLight.castShadow = true;

// Enable shadows for objects
cube.castShadow = true;
cube.receiveShadow = true;
`}</code>
      </pre>

      <h2>Loading Textures</h2>
      <p>You can add textures to objects to enhance their appearance.</p>
      <pre className="code-block">
<code>{`import { TextureLoader } from 'three';

// Load a texture
const textureLoader = new TextureLoader();
const texture = textureLoader.load('path/to/texture.jpg');

// Apply texture to a material
const texturedMaterial = new THREE.MeshStandardMaterial({ map: texture });

// Create a sphere with the texture
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphere = new THREE.Mesh(sphereGeometry, texturedMaterial);
scene.add(sphere);
`}</code>
      </pre>

      <h2>Loading 3D Models</h2>
      <p>You can load 3D models (GLTF, OBJ, FBX) into your scene using loaders.</p>
      <pre className="code-block">
<code>{`import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('path/to/model.gltf', (gltf) => {
  scene.add(gltf.scene);
});
`}</code>
      </pre>

      <h2>Handling Window Resizing</h2>
      <p>To ensure your Three.js scene resizes properly when the browser window changes size.</p>
      <pre className="code-block">
<code>{`window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
`}</code>
      </pre>

      <h2>Adding Orbit Controls</h2>
      <p>OrbitControls allow users to rotate and zoom the camera with their mouse.</p>
      <pre className="code-block">
<code>{`import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
`}</code>
      </pre>

      <h2>Particles and Effects</h2>
      <p>Three.js allows you to create particle effects for things like fire, smoke, or space effects.</p>
      <pre className="code-block">
<code>{`const particleGeometry = new THREE.BufferGeometry();
const particleCount = 500;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);
`}</code>
      </pre>

      <h2>Learn More</h2>
      <p>Visit the official Three.js documentation for detailed information:</p>
      <ul>
        <li>
          <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" rel="noopener noreferrer">
            Three.js Official Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ThreeJSCheatSheet;
