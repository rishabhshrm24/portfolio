'use client'

import { motion } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from '@/components/CaseStudyCard'

export default function CaseStudiesPageContent() {
  return (
    <div className="pt-24 pb-12">
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center">
            <h1 className="font-display text-5xl uppercase tracking-tight md:text-6xl mb-4">Case Studies</h1>
            <p className="text-base text-text/65 max-w-2xl mx-auto sm:text-lg">
              A curated view of my UI UX work across fintech, impact, and growth-stage digital products.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}