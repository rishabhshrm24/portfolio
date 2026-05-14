export default function Contact() {
  const links = [
    { label: 'Email', href: 'mailto:rishabhshrm24@gmail.com', text: 'rishabhshrm24@gmail.com' },
    { label: 'Phone', href: 'tel:+918076598842', text: '+91 8076598842' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rishabh-sharma-a54b8ba3/',
      text: 'linkedin.com/in/rishabh-sharma-a54b8ba3',
      external: true,
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg text-text">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>
        <div className="space-y-4">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="block rounded-lg border border-text/10 px-4 py-3 hover:border-accent transition-colors"
            >
              <p className="text-sm text-text/60">{item.label}</p>
              <p className="font-medium break-all">{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
