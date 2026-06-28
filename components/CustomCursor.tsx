'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useAppStore } from '@/lib/store'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true)

  const cursorVariant = useAppStore((s) => s.cursorVariant)
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const ringX = useSpring(0, { damping: 20, stiffness: 200, mass: 0.8 })
  const ringY = useSpring(0, { damping: 20, stiffness: 200, mass: 0.8 })

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouch) return
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [isTouch, cursorX, cursorY, ringX, ringY])

  useEffect(() => {
    if (isTouch) return
    const handleMouseDown = () => useAppStore.getState().setCursorVariant('click')
    const handleMouseUp = () => useAppStore.getState().setCursorVariant('default')

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isTouch])

  useEffect(() => {
    if (isTouch) return
    const links = document.querySelectorAll('a, button, [data-cursor="hover"]')
    const handleEnter = () => useAppStore.getState().setCursorVariant('hover')
    const handleLeave = () => useAppStore.getState().setCursorVariant('default')

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleEnter)
      link.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleEnter)
        link.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [isTouch])

  const variants = {
    default: {
      scale: 1,
      opacity: 0.5,
      borderColor: 'rgba(201, 169, 110, 0.5)',
    },
    hover: {
      scale: 1.5,
      opacity: 0.8,
      borderColor: 'rgba(201, 169, 110, 0.8)',
    },
    click: {
      scale: 0.8,
      opacity: 1,
      borderColor: 'rgba(201, 169, 110, 1)',
    },
  }

  if (isTouch) return null

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#c9a96e',
        }}
        animate={cursorVariant}
        variants={variants}
      />
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1.5px solid rgba(201, 169, 110, 0.5)',
          transition: 'border-color 0.3s ease',
        }}
        animate={cursorVariant}
        variants={{
          default: { scale: 1, opacity: 0.5, borderColor: 'rgba(201, 169, 110, 0.5)' },
          hover: { scale: 2, opacity: 0.3, borderColor: 'rgba(201, 169, 110, 0.3)' },
          click: { scale: 0.6, opacity: 1, borderColor: 'rgba(201, 169, 110, 1)' },
        }}
      />
    </>
  )
}
