import Image from 'next/image'

export default function Logo({ className = 'h-20 w-auto mx-auto' }: { className?: string }) {
  return (
    <Image
      src="/RS%20logo.png"
      alt="RS Logo"
      width={1131}
      height={253}
      className={className}
    />
  )
}
