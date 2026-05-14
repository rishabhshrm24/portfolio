'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Users, Briefcase, Zap } from 'lucide-react'
import type { Project } from '@/data/caseStudies'

interface CaseStudyDetailContentProps {
  study: Project
  prevStudy: Project | null
  nextStudy?: Project
}

export default function CaseStudyDetailContent({
  study,
  prevStudy,
  nextStudy,
}: Readonly<CaseStudyDetailContentProps>) {
  const heroBackgroundClass = study.imageUrl
    ? ''
    : 'bg-gradient-to-br ' + study.heroColor

  return (
    <div className="pt-24 pb-12">
      <section className="mb-12">
        <div className={`relative h-96 overflow-hidden ${heroBackgroundClass}`}>
          {study.imageUrl ? (
            <>
              <Image
                src={study.imageUrl}
                alt={study.title}
                fill
                priority
                className="object-cover object-top"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/45" />
            </>
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    {study.category}
                  </span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 mt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {study.title}
                  </motion.div>
                </h1>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Link href="/case-studies">
            <motion.div whileHover={{ x: -5 }}>
              <button className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors">
                <ArrowLeft size={20} />
                Back to Case Studies
              </button>
            </motion.div>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="order-1 lg:order-2 lg:col-span-8 space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50 rounded-2xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={18} className="text-accent" />
                <p className="text-sm text-gray-600">Duration</p>
              </div>
              <p className="font-bold">{study.duration}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={18} className="text-accent" />
                <p className="text-sm text-gray-600">Client</p>
              </div>
              <p className="font-bold">{study.client || 'Confidential'}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users size={18} className="text-accent" />
                <p className="text-sm text-gray-600">Team Size</p>
              </div>
              <p className="font-bold">{study.team.length} Members</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-accent" />
                <p className="text-sm text-gray-600">Year</p>
              </div>
              <p className="font-bold">{study.year}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{study.description}</p>
        </motion.div>

        {study.gallery && study.gallery.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8">UI Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.gallery.map((src, index) => (
                <motion.div
                  key={src}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={src}
                      alt={`${study.title} UI design ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {study.brief && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">The Brief</h2>
            <div className="p-8 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
              <p className="text-gray-700 leading-relaxed">{study.brief}</p>
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <div className="p-8 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
          <div className="p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{study.solution}</p>
          </div>
        </motion.div>

        {study.insights && study.insights.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">User Insights</h2>
            <div className="grid gap-4">
              {study.insights.map((insight) => (
                <div key={insight} className="p-5 rounded-xl bg-white border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.personas && study.personas.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8">Personas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.personas.map((persona) => (
                <div key={persona.name} className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xl font-bold mb-3">{persona.name}</h3>
                  <p className="text-gray-700 mb-4">{persona.profile}</p>
                  <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-800">Goal:</span> {persona.goal}</p>
                  <p className="text-sm text-gray-600 mb-3"><span className="font-semibold text-gray-800">Fear:</span> {persona.fear}</p>
                  <p className="italic text-gray-700">&quot;{persona.quote}&quot;</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.principles && study.principles.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">UX Direction</h2>
            <div className="space-y-4">
              {study.principles.map((principle, index) => (
                <div key={principle.title} className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <h3 className="text-xl font-bold mb-2">{index + 1}. {principle.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.process && study.process.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8">The Process</h2>
            <div className="space-y-6">
              {study.process.map((phase) => (
                <div key={phase.phase} className="p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold">{phase.phase}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">{phase.timeframe}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{phase.summary}</p>
                  {phase.findings && phase.findings.length > 0 && (
                    <div className="mt-4 grid gap-2">
                      {phase.findings.map((finding) => (
                        <p key={finding} className="text-sm text-gray-600">- {finding}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.designDecisions && study.designDecisions.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.39 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Key Design Decisions</h2>
            <div className="space-y-4">
              {study.designDecisions.map((decision, index) => (
                <div key={decision.title} className="p-6 rounded-2xl bg-violet-50 border border-violet-200">
                  <h3 className="text-xl font-bold mb-2">Decision {index + 1}: {decision.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{decision.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.designSystem && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.395 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8">Design System</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.designSystem.colors && study.designSystem.colors.length > 0 && (
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Color Palette</h3>
                  <div className="space-y-3">
                    {study.designSystem.colors.map((color) => (
                      <div key={color.role} className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-gray-800">{color.role}</p>
                          <p className="text-sm text-gray-600">{color.value}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {color.hex && (
                            <div
                              className="w-8 h-8 rounded-full border border-gray-300"
                              style={{ backgroundColor: color.hex }}
                            />
                          )}
                          <p className="text-sm text-gray-600">{color.hex || '-'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {study.designSystem.typography && study.designSystem.typography.length > 0 && (
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Typography</h3>
                  <div className="space-y-2">
                    {study.designSystem.typography.map((item) => (
                      <p key={item} className="text-gray-700">- {item}</p>
                    ))}
                  </div>
                </div>
              )}

              {study.designSystem.spacing && study.designSystem.spacing.length > 0 && (
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Spacing System</h3>
                  <div className="space-y-2">
                    {study.designSystem.spacing.map((item) => (
                      <p key={item} className="text-gray-700">- {item}</p>
                    ))}
                  </div>
                </div>
              )}

              {study.designSystem.components && study.designSystem.components.length > 0 && (
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Core Components</h3>
                  <div className="space-y-2">
                    {study.designSystem.components.map((component) => (
                      <p key={component} className="text-gray-700">- {component}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {study.qualitativeFeedback && study.qualitativeFeedback.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Qualitative Feedback</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {study.qualitativeFeedback.map((quote) => (
                <div key={quote} className="p-5 rounded-xl bg-sky-50 border border-sky-200">
                  <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {study.takeaways && study.takeaways.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.43 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
            <div className="space-y-3">
              {study.takeaways.map((takeaway, index) => (
                <div key={takeaway} className="p-5 rounded-xl bg-lime-50 border border-lime-200">
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-gray-900">{index + 1}.</span> {takeaway}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {study.tools.map((tool) => (
                  <motion.span key={tool} whileHover={{ scale: 1.05 }}>
                    <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-pointer">
                      {tool}
                    </span>
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Team Members</h3>
              <ul className="space-y-3">
                {study.team.map((member, index) => (
                  <motion.li key={member} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }}>
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {member}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
          </div>

          <aside className="order-2 lg:order-1 lg:col-span-4">
            {study.results && study.results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-28"
              >
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6">Results &amp; Impact</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    {study.results.map((result) => (
                      <motion.div key={result.metric} whileHover={{ y: -3 }}>
                        <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20 h-full">
                          <p className="text-sm text-gray-600 mb-3">{result.metric}</p>
                          <p className="text-2xl sm:text-3xl font-bold text-accent">{result.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </aside>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-gray-200">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-8">
            {prevStudy ? (
              <Link href={`/case-studies/${prevStudy.slug}`}>
                <motion.div whileHover={{ x: -5 }}>
                  <div className="group cursor-pointer">
                    <p className="text-sm text-gray-500 mb-2">← Previous Project</p>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {prevStudy.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}

            {nextStudy && (
              <Link href={`/case-studies/${nextStudy.slug}`} className="md:text-right">
                <motion.div whileHover={{ x: 5 }}>
                  <div className="group cursor-pointer">
                    <p className="text-sm text-gray-500 mb-2">Next Project →</p>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {nextStudy.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            )}
          </div>
        </motion.div>
      </section>

    </div>
  )
}