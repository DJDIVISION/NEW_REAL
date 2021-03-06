import React, {useRef} from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


import EarthDayMap from "../images/8k_earth_daymap.jpg";
import EarthNormalMap from "../images/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../images/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../images/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props){

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 12;
        cloudsRef.current.rotation.y = elapsedTime / 10;
    });

    return (
        <>
            {/* <ambientLight intensity={1} /> */}
            <pointLight color="whitesmoke" position={[1, 0, 5]} intensity={1.2} />
            {/* <Stars
                radius={300}
                depth={60}
                count={20000}
                factor={7}
                saturation={0}
                fade={true}
            /> */}
            <mesh ref={cloudsRef} position={[0, 0, 3]}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                map={cloudsMap}
                opacity={0.4}
                depthWrite={true}
                transparent={true}
                side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef} position={[0, 0, 3]}>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshPhongMaterial specularMap={specularMap}  />  
                <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                {/* <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zommSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4} metalness={0.8} roughness={0.7}/>  */}
            </mesh>
        </>
    )

}