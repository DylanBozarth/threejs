import {orbitControls} from './sources/three'
const scene = new THREE.Scene(); // scene is like a container that holds all the objects, cameras, etc.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); // FOV | Aspect ratio | which objects are visible realtive to the camera 1-1000 range
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background') // like the root for react
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 30;
// end config
const geometry = new THREE.CircleGeometry( 1, 1, 1 ); // x y z of the shape
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00} ); // wrapping paper
const cube = new THREE.Mesh( geometry, material ); // geometry + material 

// lighting is required by all but basic materials
const pointLight = new THREE.AmbientLight(0xffffff);
pointLight.position.set(20,20,20);
// dont forget about light helpers

// appending to the dom
scene.add( cube );
scene.add(pointLight);
const animate = function () {
	requestAnimationFrame( animate );
	// game loop
	cube.rotation.x += 0.05;
	cube.rotation.y += 0.05;
	cube.rotation.z += 0.05;
	renderer.render( scene, camera );
};

animate();
//https://www.youtube.com/watch?v=Q7AOvWpIVHU&t=204s
