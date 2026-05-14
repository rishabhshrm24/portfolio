'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { useState, type ChangeEvent, type ComponentProps } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  type SubmitHandler = NonNullable<ComponentProps<'form'>['onSubmit']>

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rishabh-sharma-a54b8ba3/',
      icon: Linkedin,
    },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit: SubmitHandler = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-text text-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Design Better Experiences</h2>
            <p className="text-lg text-bg/70 max-w-2xl mx-auto">
              Building a new feature, product, or redesign? Share your goals and I&apos;ll help shape a user experience that performs.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact</h3>
              <div className="space-y-6">
                <a href="mailto:rishabhshrm24@gmail.com" className="flex items-start gap-4 group cursor-pointer hover:text-accent transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-bg/60 mb-1">Email Me</p>
                    <p className="text-lg font-medium break-all">rishabhshrm24@gmail.com</p>
                  </div>
                </a>
              </div>
              <div>
                <p className="text-sm text-bg/60 mb-4">Follow</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors"
                      >
                        <Icon size={20} className="text-accent" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Your Name</label>
                <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 bg-bg/10 border border-bg/20 rounded-lg text-bg placeholder:text-bg/50 focus:outline-none focus:border-accent focus:bg-bg/20 transition-all" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 bg-bg/10 border border-bg/20 rounded-lg text-bg placeholder:text-bg/50 focus:outline-none focus:border-accent focus:bg-bg/20 transition-all" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your product, users, and goals..." rows={4} className="w-full px-4 py-3 bg-bg/10 border border-bg/20 rounded-lg text-bg placeholder:text-bg/50 focus:outline-none focus:border-accent focus:bg-bg/20 transition-all resize-none" />
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-accent text-text rounded-lg font-medium hover:bg-accent/90 transition-colors">
                {submitted ? '✓ Message Sent!' : 'Send Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
