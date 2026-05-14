import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const mockupVariants = cva(
  'relative z-10 flex overflow-hidden border border-border/60 border-t-border bg-card shadow-2xl',
  {
    variants: {
      type: {
        mobile: 'max-w-[350px] rounded-[48px]',
        responsive: 'rounded-[1.25rem]',
      },
    },
    defaultVariants: {
      type: 'responsive',
    },
  }
)

export interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, ...props }, ref) => (
    <div ref={ref} className={cn(mockupVariants({ type, className }))} {...props} />
  )
)

Mockup.displayName = 'Mockup'

const frameVariants = cva('relative z-10 flex overflow-hidden rounded-[2rem] bg-accent/60 p-2 shadow-[0_24px_80px_rgba(17,17,17,0.18)] backdrop-blur', {
  variants: {
    size: {
      small: 'p-2',
      large: 'p-4',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export interface MockupFrameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof frameVariants> {}

const MockupFrame = React.forwardRef<HTMLDivElement, MockupFrameProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(frameVariants({ size, className }))} {...props} />
  )
)

MockupFrame.displayName = 'MockupFrame'

export { Mockup, MockupFrame }