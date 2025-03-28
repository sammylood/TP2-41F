import { useEffect, useRef } from "react" ;
// import { useScroll } from "motion";
import { GUI } from "lil-gui";
import * as THREE from "three";

// import texture from "./texture.jpg";

const Scene = () => {
    const canvasRef = useRef();
    const debugMode = true;
    // const { scrollYProgress } = useScroll();

useEffect(() => { 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(texture);
    // const material = new THREE.MeshBasicMateria1({ map: texture });

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // On anime le cube en fonction de la position de défilement de la page
    // cube.rotation.y = scrollYProgress * Math.PI * 2;

    renderer.render(scene, camera);
    };

    animate();

if (debugMode) {
    const gui = new GUI(scene, camera, renderer);
    gui.add(cube.rotation, "x").min(-Math.PI).max(Math.PI).step(0.01).name("Rotation X");
    gui.add(material, "wireframe");
    }
}, []);

    return <canvas ref={canvasRef} />;
};

export default Scene;
// const AnimatedCube = () => {
//     return (
//         <motion.div style={{ height:"200vh" }}>
//             <Scene />
//         </motion.div>
//     );
// };

// export default AnimatedCube;