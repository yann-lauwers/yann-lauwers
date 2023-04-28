import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

const Sphere: React.FC<React.ComponentPropsWithoutRef<"mesh">> = (props) => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "Metal036_1K_Color.jpg",
      "Metal036_1K_Displacement.jpg",
      "Metal036_1K_NormalGL.jpg",
      "Metal036_1K_Roughness.jpg",
      "Metal036_1K_Metalness.jpg",
    ]
  );

  return (
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
};
export default Sphere;
