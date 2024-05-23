import React, { useState, useRef, useEffect } from "react";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";

// Type definitions for props
type Position = THREE.Vector3 | [number, number, number];
type Rotation = THREE.Euler | [number, number, number];
type Scale = THREE.Vector3 | [number, number, number];

interface ModalProps {
  position: Position;
  rotation: Rotation;
  scale: Scale;
}

// TypeScript type for useGLTF result
interface GLTFResult {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
}

// TypeScript component
const Modal: React.FC<ModalProps> = ({ position, rotation, scale }) => {
  const glb = useRef<THREE.Group>(null);
  const [dummy] = useState(() => new THREE.Object3D());

  // getting scene and animation using useGLTF hook
  const { scene, animations } = useGLTF("./Wizard.glb") as unknown as GLTFResult;
  const animation = useAnimations(animations, scene);

  // useFrame for glb looking at cursor you can change the value according to your preference
  useFrame((state, dt) => {
    if (!glb.current) return;

    const currentRotation = rotation instanceof THREE.Euler ? rotation : new THREE.Euler(...rotation);
    
    dummy.position.copy(glb.current.position);
    dummy.rotation.copy(currentRotation);
    
    dummy.lookAt(state.pointer.x * 1.5, state.pointer.y * 0.3, 1);
    easing.dampQ(glb.current.quaternion, dummy.quaternion, 0.25, dt);
  });

  useEffect(() => {
    if (!animation.actions) return;
    
    const action = animation.actions.Animation;
    if (action) {
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    }
  }, [animation.actions]);

  // Adjust the rotation slightly
  const adjustedRotation = new THREE.Euler(
    (rotation instanceof THREE.Euler ? rotation.x : rotation[0]) + 0.1, // Adjust X rotation
    (rotation instanceof THREE.Euler ? rotation.y : rotation[1]) + 0.1, // Adjust Y rotation
    (rotation instanceof THREE.Euler ? rotation.z : rotation[2]) + 0.1 // Adjust Z rotation
  );

  return (
    <>
      <group ref={glb} position={position} rotation={adjustedRotation} scale={scale}>
        <primitive object={scene} />
      </group>

      <ambientLight intensity={1} color={"#ffffff"} />
      <directionalLight intensity={0.4} position={[2, 2, 5]} />
      <directionalLight intensity={0.4} position={[-2, -2, 5]} />

      <Environment files={"./potsdamer_platz_4k.hdr"} />
    </>
  );
};

export default Modal;
