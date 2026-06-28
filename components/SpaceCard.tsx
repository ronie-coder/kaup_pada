'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Space } from '@/lib/data'

interface SpaceCardProps {
  space: Space
  index?: number
}

export default function SpaceCard({ space, index = 0 }: SpaceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? '' : 'lg:direction-rtl'
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
    >
      <div className={`overflow-hidden rounded-2xl ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.img
          src={space.images[0]}
          alt={space.name}
          className="w-full aspect-[4/3] object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
        />
      </div>

      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <motion.span
          className="text-xs tracking-[0.2em] uppercase text-accent"
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Space
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 mb-4"
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {space.name}
        </motion.h2>
        <motion.p
          className="text-sm text-muted leading-relaxed mb-4"
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {space.description}
        </motion.p>
        <motion.p
          className="text-sm text-accent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {space.capacity}
        </motion.p>
      </div>
    </motion.div>
  )
}
