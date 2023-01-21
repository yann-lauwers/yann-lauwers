import { extend, useThree } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

const Orbit: React.FC<any> = (props) => {
  const { camera, gl } = useThree();
  return (
    <orbitControls
      attach={"orbitControls"}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};

const Controls = {
  Orbit,
};

export default Controls;
