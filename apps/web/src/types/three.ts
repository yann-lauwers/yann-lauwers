import { ReactThreeFiber } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
      dragControls: ReactThreeFiber.Object3DNode<
        DragControls,
        typeof DragControls
      >;
    }
  }
}
