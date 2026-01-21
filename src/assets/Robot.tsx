import { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface RobotProps {
  [key: string]: any
}

export function Robot({ ...props }: RobotProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/3D/Robot/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (actions) {
      const actionName = Object.keys(actions)[0]
      const action = actions[actionName]
      if (action) action.play()
    }
  }, [actions])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((_state,delta) => {
    if (group.current) {
      const mouseX = mousePos.x * 2.0
      const mouseY = mousePos.y * 1.2

      const targetRotationY = mouseX
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotationY, 3, delta)

      const targetRotationX = -mouseY * 0.5
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotationX, 3, delta)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/3D/Robot/scene.gltf')