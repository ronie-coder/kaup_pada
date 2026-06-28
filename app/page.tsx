'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import ImageReveal from '@/components/ImageReveal'
import { heroContent, galleryImages } from '@/lib/data'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  useEffect(() => {
    if (hasInteracted) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, hasInteracted])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const goToSlide = (index: number) => {
    setHasInteracted(true)
    setCurrentIndex(index)
  }

  return (
    <>
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === currentIndex ? 1 : 0 }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] uppercase text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to
          </motion.span>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroContent.heroTitle}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroContent.heroSubtitle}
          </motion.p>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'bg-accent w-6' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ImageReveal
              src="/interiors/515A0596.jpg"
              alt="Kaup Pada interior"
              className="w-full h-full object-cover rounded-2xl"
              containerClassName="rounded-2xl"
            />

            <AnimatedSection>
              <span className="text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                {heroContent.experienceTitle}
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
                {heroContent.experienceDescription}
              </p>
              <Link
                href="/spaces"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-accent hover:gap-4 transition-all duration-300"
              >
                Explore Our Spaces
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/interiors/515A0701.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              {heroContent.ctaText}
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-10">
              From intimate gatherings to grand celebrations, every moment at Kaup Pada is crafted to perfection.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-accent text-black px-8 py-3 rounded-full text-sm tracking-wider uppercase font-medium hover:bg-accent/90 transition-colors duration-300"
            >
              View Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
