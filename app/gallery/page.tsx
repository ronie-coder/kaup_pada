'use client'

import { motion } from 'framer-motion'
import MasonryGrid from '@/components/MasonryGrid'
import { galleryImages } from '@/lib/data'

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryImages[0] || '/interiors/515A0453.jpg'})` }}
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-white/60 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
          >
            A Visual Journey Through Kaup Pada
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.p
            className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore our collection of photographs capturing the essence of Kaup Pada — from the elegance of our indoor halls to the serene beauty of our outdoor spaces. Each image tells a story of celebrations, togetherness, and memories waiting to be made.
          </motion.p>

          <MasonryGrid images={galleryImages} />
        </div>
      </section>
    </main>
  )
}
