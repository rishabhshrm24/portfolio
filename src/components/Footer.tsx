'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rishabh-sharma-a54b8ba3/',
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:rishabhshrm24@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="border-t border-text/10 bg-[#171717] text-[#f4f0e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <a href="/" className="block mb-4 w-fit hover:opacity-80 transition-opacity">
                <Logo className="h-20 w-auto mx-auto" />
              </a>
              <p className="text-[#f4f0e6]/70 text-sm">
                Designing bold brands and compelling visual experiences.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="mb-4 font-display text-2xl uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#f4f0e6]/70 transition-colors hover:text-[#ffd66b]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="mb-4 font-display text-2xl uppercase tracking-wide">Connect</h4>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-start gap-3 text-[#f4f0e6]/70 transition-colors hover:text-[#ffd66b]"
                    >
                      <Icon size={18} className="mt-0.5 shrink-0" />
                      <span className="min-w-0 break-all">
                        {link.label === 'Email' ? 'rishabhshrm24@gmail.com' : link.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-4 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-center text-sm text-[#f4f0e6]/65 md:text-left">
              © {currentYear}. All rights reserved.
            </p>
            <div className="flex w-full justify-center md:w-auto md:justify-end text-sm">
              <a
                href="mailto:rishabhshrm24@gmail.com"
                className="max-w-full break-all text-[#f4f0e6]/65 transition-colors hover:text-[#ffd66b]"
              >
                rishabhshrm24@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
