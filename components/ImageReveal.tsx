'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  priority?: boolean
}

export default function ImageReveal({ src, alt, className = '', containerClassName = '', priority = false }: ImageRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ scale: 1.3, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}
