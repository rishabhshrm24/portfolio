'use client'

import { motion } from 'framer-motion'

export default function ContactPageContent() {
  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-32 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card px-6 py-10 shadow-sm sm:px-10"
        >
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
          <p className="mt-2 text-foreground/70">Reach out directly using the details below.</p>

          <div className="mt-8 space-y-4 text-base sm:text-lg">
            <p>
              Email:{' '}
              <a href="mailto:rishabhshrm24@gmail.com" className="font-medium text-foreground hover:underline">
                rishabhshrm24@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+918076598842" className="font-medium text-foreground hover:underline">
                +91 8076598842
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/rishabh-sharma-a54b8ba3/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground hover:underline"
              >
                View Profile
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
