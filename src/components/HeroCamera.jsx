import { useRef } from "react";
import { easing } from 'maath';
import { useFrame } from "@react-three/fiber";

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef();
    useFrame((state,delta)=>{
        easing.damp3(state.camera.position, [0,-3,20],0.25,delta);

        if(!isMobile){
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/2,-state.pointer.x/4,0],0.25,delta);
        };
    });

    return (
        <group ref={groupRef} scale={1}>{children}</group>
    );
}

export default HeroCamera;