'use client'

import * as React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Glow } from '@/components/ui/glow'
import { Mockup, MockupFrame } from '@/components/ui/mockup'
import { cn } from '@/lib/utils'

interface HeroAction {
  text: string
  href: string
  icon?: React.ReactNode
  variant?: 'default' | 'glow' | 'outline'
}

interface HeroProps {
  badge?: {
    text: string
    action: {
      text: string
      href: string
    }
  }
  title: string
  description: string
  actions: HeroAction[]
  image: {
    light: string
    dark: string
    alt: string
  }
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme()
  const imageSrc = resolvedTheme === 'dark' ? image.dark : image.light

  return (
    <section
      className={cn(
        'bg-background text-foreground',
        'fade-bottom overflow-hidden px-4 pb-0 py-12 sm:py-24 md:py-32'
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 pt-16 sm:gap-20">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-10">
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 border-border/70 bg-white/75 px-4 py-1.5 shadow-sm backdrop-blur dark:bg-card/70">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1 text-foreground">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl md:text-8xl md:leading-[1.05]">
            {title}
          </h1>

          <p className="text-md relative z-10 max-w-[650px] animate-appear font-medium leading-relaxed text-muted-foreground opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          <div className="relative z-10 flex animate-appear flex-wrap justify-center gap-4 opacity-0 delay-300">
            {actions.map((action, index) => (
              <Button key={index} variant={action.variant ?? 'default'} size="lg" asChild>
                <a href={action.href} className="flex items-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

          <div className="relative w-full pt-8 sm:pt-12">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(255,138,101,0.18),_transparent_60%)]" />
            <MockupFrame className="animate-appear opacity-0 delay-700 mx-auto max-w-6xl bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,243,234,0.7))]" size="small">
              <Mockup type="responsive" className="w-full bg-[#f7f3ec]">
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={1248}
                  height={765}
                  priority
                  className="h-auto w-full object-cover"
                />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}