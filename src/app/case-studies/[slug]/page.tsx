import { caseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'
import CaseStudyDetailContent from '@/components/CaseStudyDetailContent'

interface CaseStudyDetailProps {
  params: {
    slug: string
  }
}

export default function CaseStudyDetail({ params }: CaseStudyDetailProps) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  // Find next and previous studies
  const currentIndex = caseStudies.findIndex((s) => s.slug === params.slug)
  const nextStudy = caseStudies[currentIndex + 1]
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null

  return (
    <CaseStudyDetailContent
      study={study}
      prevStudy={prevStudy}
      nextStudy={nextStudy}
    />
  )
}
