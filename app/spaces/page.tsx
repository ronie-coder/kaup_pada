'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from '@/components/AnimatedSection'
import SpaceCard from '@/components/SpaceCard'
import { spaces, heroContent } from '@/lib/data'

export default function SpacesPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      <section ref={heroRef} className="relative h-[50vh] sm:h-[60vh] overflow-hidden pt-16 sm:pt-20">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src={heroContent.heroImage}
            alt="Pada spaces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Spaces
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Pada
          </motion.h1>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 px-4">
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Discover the ideal setting for your celebrations within Pada&apos;s stunning venues.
              Spread across an expansive acre, Pada seamlessly merges modern luxury with timeless tradition.
              Each space has been thoughtfully designed to create the perfect backdrop for your most cherished moments.
            </p>
          </AnimatedSection>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {spaces.map((space, i) => (
              <SpaceCard key={space.id} space={space} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
