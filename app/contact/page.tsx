'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { galleryImages } from '@/lib/data'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactDetails = [
    {
      label: 'Address',
      value: 'Chimney Hills, Hesarghatta Road,\nBengaluru 560090',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 9611225130',
      href: 'tel:+919611225130',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'hello@kaup-pada.com',
      href: 'mailto:hello@kaup-pada.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

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
            Contact
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-white/60 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
          >
            Get in Touch With Us
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
                Reach Out
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Let&apos;s Plan Your Celebration
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-10">
                Whether you&apos;re planning a grand wedding, an intimate gathering, or a corporate event,
                our team is here to help bring your vision to life. Reach out and let&apos;s start
                creating memories together.
              </p>

              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <span className="text-accent mt-0.5 shrink-0">{detail.icon}</span>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm text-foreground hover:text-accent transition-colors duration-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground whitespace-pre-line">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <svg className="w-16 h-16 text-accent mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-serif mb-2">Thank You!</h3>
                  <p className="text-muted text-sm max-w-sm">
                    Your message has been received. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none focus:border-accent transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none focus:border-accent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-xs tracking-[0.2em] uppercase text-muted block mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none focus:border-accent transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-muted block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none focus:border-accent transition-colors duration-300 resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-black px-8 py-3 rounded-full text-sm tracking-wider uppercase font-medium hover:bg-accent/90 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
