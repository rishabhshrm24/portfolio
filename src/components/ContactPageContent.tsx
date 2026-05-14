'use client'

import { motion } from 'framer-motion'
import Contact from './Contact'

export default function ContactPageContent() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-text to-text/95 text-bg pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-bg/70 max-w-2xl">
              Have a project in mind or want to collaborate? We'd love to hear from you. 
              Reach out and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <Contact />
    </main>
  )
}
