import { GroupProps, extend, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Group, Object3D } from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

const Draggable: React.FC<React.PropsWithoutRef<GroupProps>> = (props) => {
  const groupRef = useRef<Group>(null);
  const controlsRef = useRef<DragControls>(null);
  const [objects, setObjects] = useState<Object3D[]>([]);
  const { camera, gl, scene } = useThree();
  useEffect(() => {
    if (groupRef.current) setObjects(groupRef.current.children);
  }, [groupRef]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.addEventListener("hoveron", () => {
        (scene as any).orbitControls.enabled = false;
      });
      controlsRef.current.addEventListener("hoveroff", () => {
        (scene as any).orbitControls.enabled = true;
      });
    }
    () => {
      if (controlsRef.current) {
        controlsRef.current.removeEventListener("hoveron", () => {
          (scene as any).orbitControls.enabled = false;
        });
        controlsRef.current.removeEventListener("hoveroff", () => {
          (scene as any).orbitControls.enabled = true;
        });
      }
    };
  }, [objects, scene]);

  return (
    <group ref={groupRef}>
      <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
      {props.children}
    </group>
  );
};

export default Draggable;
