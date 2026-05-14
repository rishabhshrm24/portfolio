'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Circle, Dot, Sparkles } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from '@/components/CaseStudyCard'

const featuredProject = caseStudies[0]

const capabilities = [
  'User Research and Insight Synthesis',
  'Information Architecture',
  'Wireframing and Interaction Design',
  'UI Design Systems',
  'Usability Testing',
  'Conversion-Focused Product Design',
]

const processSteps = [
  {
    id: '01',
    title: 'Decode',
    copy: 'I map business goals, user behavior, and product constraints to uncover the friction points worth solving first.',
  },
  {
    id: '02',
    title: 'Design',
    copy: 'I turn insights into clear user flows, wireframes, and polished interfaces that are intuitive, scalable, and on-brand.',
  },
  {
    id: '03',
    title: 'Deploy',
    copy: 'I hand off design systems, interaction specs, and implementation-ready assets so product teams can ship confidently.',
  },
]

export default function Home2026() {
  return (
    <div className="relative overflow-hidden bg-bg text-text">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-orb absolute left-[-14rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#ff7a1a]/18 blur-3xl" />
        <div className="ambient-orb-slow absolute right-[-10rem] top-16 h-[28rem] w-[28rem] rounded-full bg-[#1864ff]/16 blur-3xl" />
        <div className="absolute inset-x-0 top-[32rem] h-40 bg-gradient-to-b from-transparent via-[#fff7e5]/55 to-transparent" />
      </div>

      <section className="relative min-h-[95svh] px-4 pb-20 pt-28 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-20 h-px w-[26%] bg-gradient-to-r from-transparent via-text/25 to-transparent" />
          <div className="absolute right-[8%] top-44 h-px w-[18%] bg-gradient-to-r from-transparent via-text/18 to-transparent" />
          <div className="absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#ffd66b]/25 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="surface-elevated mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]"
            >
              <Sparkles className="h-4 w-4 text-[#1864ff]" />
              Portfolio 2026 Edition
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="font-display text-[3rem] uppercase leading-[0.92] tracking-tight sm:text-[4.2rem] md:text-[5.6rem]"
            >
              UI UX designer crafting intuitive products for{' '}
              <span className="bg-gradient-to-r from-[#1a1a1a] via-[#1864ff] to-[#ff7a1a] bg-clip-text text-transparent">ambitious teams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 max-w-2xl text-base text-text/75 sm:text-lg"
            >
              I design user-centered digital experiences that reduce friction, improve conversion, and help products feel as good as they perform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-bg shadow-[0_12px_26px_rgba(26,26,26,0.28)] transition-transform hover:-translate-y-0.5"
              >
                View Case Studies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="surface-elevated inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-text transition-colors hover:bg-white"
              >
                Discuss Your Product
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-text/65"
            >
              <p className="flex items-center gap-2"><Dot className="h-5 w-5" />Available Worldwide</p>
              <p className="flex items-center gap-2"><Dot className="h-5 w-5" />English / Hindi</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative"
          >
            <div className="surface-elevated depth-vignette relative overflow-hidden rounded-[2.2rem] p-3">
              <div className="absolute right-6 top-6 rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-text/65">
                Featured UX Case
              </div>

              <div className="relative h-[22rem] overflow-hidden rounded-[1.6rem] sm:h-[30rem]">
                <Image
                  src={featuredProject?.imageUrl || '/Credflow/image 103.jpg'}
                  alt={featuredProject?.title || 'Featured design project'}
                  fill
                  className="object-cover saturate-[1.08]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/75">Featured Case Study</p>
                  <h2 className="font-display text-3xl uppercase tracking-tight">{featuredProject?.title || 'Credflow'}</h2>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { label: 'Case Studies', value: `${caseStudies.length.toString().padStart(2, '0')}+` },
                  { label: 'Years', value: '05+' },
                  { label: 'Products', value: '12+' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-text/10 bg-[#f5f1e8] px-3 py-4 text-center shadow-[0_10px_24px_rgba(26,26,26,0.08)]">
                    <p className="font-display text-2xl uppercase">{item.value}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-text/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="section-divider mb-10" />
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text/55">Selected Work</p>
              <h2 className="mt-3 font-display text-5xl uppercase tracking-tight sm:text-6xl">Case Studies</h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-text/80 hover:text-text">
              View Full Case Studies
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {caseStudies.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:col-span-4"
              >
                <CaseStudyCard study={project} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text/55">Capabilities</p>
            <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl">
              UI UX capabilities for product teams
            </h2>
            <p className="mt-6 max-w-xl text-text/75">
              From discovery to high-fidelity UI, each engagement balances user needs, business goals, and measurable product outcomes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="surface-elevated flex items-center gap-3 rounded-2xl px-5 py-4"
              >
                <Circle className="h-3.5 w-3.5 fill-[#ff7a1a] text-[#ff7a1a]" />
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-text/85">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-text/10 bg-[linear-gradient(165deg,#141414_0%,#1d1d1d_52%,#2a2a2a_100%)] px-6 py-10 text-bg shadow-[0_40px_95px_rgba(20,20,20,0.35)] sm:px-10 sm:py-14">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bg/60">Process</p>
              <h2 className="mt-3 font-display text-5xl uppercase tracking-tight">How I Work</h2>
            </div>
            <p className="max-w-xl text-sm text-bg/70">
              A practical UX workflow from research to handoff, keeping every design decision grounded in user value and product impact.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-[2px]"
              >
                <p className="font-display text-2xl uppercase text-[#ffd66b]">{step.id}</p>
                <h3 className="mt-3 font-display text-3xl uppercase tracking-tight">{step.title}</h3>
                <p className="mt-4 text-sm text-bg/78">{step.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
