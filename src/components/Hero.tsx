'use client'

import { ArrowRightIcon, SparklesIcon } from 'lucide-react'

import { HeroSection } from '@/components/ui/hero-section'

export default function Hero() {
  return (
    <HeroSection
      badge={{
        text: 'Modern creative systems for ambitious brands',
        action: {
          text: 'See case studies',
          href: '/case-studies',
        },
      }}
      title="We design bold brands with modern visual energy"
      description="From identity systems to launch-ready digital experiences, we shape sharp, expressive design that helps brands look current, feel distinct, and move with confidence."
      actions={[
        {
          text: 'Start Your Project',
          href: '#contact',
          variant: 'default',
          icon: <ArrowRightIcon className="h-5 w-5" />,
        },
        {
          text: 'View Our Work',
          href: '/case-studies',
          variant: 'glow',
          icon: <SparklesIcon className="h-5 w-5" />,
        },
      ]}
      image={{
        light: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
        dark: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
        alt: 'Creative studio moodboard and design workspace',
      }}
    />
  )
}
