'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '/' },
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
      href: 'https://www.linkedin.com/company/ctrl-designco/?viewAsMember=true',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ctrldesignco?igsh=ZTBncndxcXI4M2w2',
      icon: Instagram,
    },
    {
      label: 'Email',
      href: 'mailto:hello.ctrldesignco@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-text text-bg border-t border-bg/20">
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
                <Logo className="h-12 w-auto" />
              </a>
              <p className="text-bg/60">
                Designing bold brands and compelling visual experiences.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-bg/60 hover:text-accent transition-colors"
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
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-start gap-3 text-bg/60 hover:text-accent transition-colors"
                    >
                      <Icon size={18} className="mt-0.5 shrink-0" />
                      <span className="min-w-0 break-all">
                        {link.label === 'Email' ? 'hello.ctrldesignco@gmail.com' : link.label}
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
          <div className="border-t border-bg/20 pt-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <p className="text-bg/60 text-sm text-center md:text-left">
              © {currentYear} CTRL Design Co. All rights reserved.
            </p>
            <div className="flex w-full justify-center md:w-auto md:justify-end text-sm">
              <a
                href="mailto:hello.ctrldesignco@gmail.com"
                className="max-w-full break-all text-bg/60 hover:text-accent transition-colors"
              >
                hello.ctrldesignco@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
