import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();
  const { camera } = useThree();
  const targetQuat = useRef(new THREE.Quaternion());

  useFrame((_, delta) => {
    if (meshRef.current && props.pointerNDC) {
      // Project pointerNDC to 3D world position at z=0.5 (in front of camera)
      const ndc = new THREE.Vector3(props.pointerNDC.x, props.pointerNDC.y, 0.5);
      ndc.unproject(camera);
      // Ball is at (0,0,0), so look at pointer
      meshRef.current.lookAt(ndc);
      targetQuat.current.copy(meshRef.current.quaternion);
      // Lerp from current to target quaternion (fast)
      meshRef.current.quaternion.slerp(targetQuat.current, Math.min(1, delta * 16));
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        
      />
      <mesh castShadow receiveShadow scale={2.75} ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, pointerNDC }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} pointerNDC={pointerNDC} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
