import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/caseStudies'

type CaseStudyCardProps = {
  study: Project
}

const teaser = (text: string, limit = 120) => {
  if (text.length <= limit) return text
  return `${text.slice(0, limit).trimEnd()}...`
}

export default function CaseStudyCard({ study }: Readonly<CaseStudyCardProps>) {
  return (
    <Link href={`/case-studies/${study.slug}`} className="group block h-full">
      <article className="surface-elevated h-full overflow-hidden rounded-[1.7rem] p-3 transition-transform duration-300 group-hover:-translate-y-1">
        {study.imageUrl ? (
          <div className="relative h-56 overflow-hidden rounded-[1.15rem] sm:h-64">
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ff7a1a]/30 blur-2xl" />
            <div className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-[#1864ff]/30 blur-2xl" />
            <Image
              src={study.imageUrl}
              alt={`${study.title} thumbnail`}
              fill
              className="object-cover object-top saturate-[1.2] contrast-[1.06] transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          </div>
        ) : (
          <div className={`relative h-56 overflow-hidden rounded-[1.15rem] bg-gradient-to-br ${study.heroColor} sm:h-64`}>
            <div className="absolute inset-0 bg-white/10" />
          </div>
        )}

        <div className="p-2 pb-1 pt-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text/55">{study.category}</p>
          <h2 className="text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.01em] text-text transition-colors group-hover:text-accent sm:text-[1.75rem]">
            {study.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text/72">
            {teaser(study.subtitle || study.description, 110)}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-text/12 bg-[#f5f1e8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-text/70">
              {study.duration}
            </span>
            <span className="rounded-full border border-text/12 bg-[#f5f1e8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-text/70">
              {study.year}
            </span>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Read Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </p>
        </div>
      </article>
    </Link>
  )
}
