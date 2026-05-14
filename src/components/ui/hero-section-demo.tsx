'use client'

import { HeroSection } from '@/components/ui/hero-section'
import { Icons } from '@/components/ui/icons'

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: 'Introducing our new components',
        action: {
          text: 'Learn more',
          href: '/docs',
        },
      }}
      title="Build faster with beautiful components"
      description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
      actions={[
        {
          text: 'Get Started',
          href: '/docs/getting-started',
          variant: 'default',
        },
        {
          text: 'GitHub',
          href: 'https://github.com/your-repo',
          variant: 'glow',
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
        dark: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
        alt: 'UI Components Preview',
      }}
    />
  )
}