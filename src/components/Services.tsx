'use client'

import { motion } from 'framer-motion'
import { Palette, FileText, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Logo Design',
      description: 'Distinctive and memorable logos that capture your brand essence and make lasting impressions.',
      color: '#0066ff',
    },
    {
      icon: FileText,
      title: 'Pitch Deck Design',
      description: 'Compelling presentation designs that communicate your story and captivate your audience.',
      color: '#00d4ff',
    },
    {
      icon: Palette,
      title: 'Digital Branding',
      description: 'Complete brand identities including color systems, typography, and comprehensive design guidelines.',
      color: '#ff0066',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 cursor-pointer group">
                    {/* Icon */}
                    <motion.div
                      style={{ backgroundColor: `${service.color}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center">
                        <IconComponent
                          size={32}
                          style={{ color: service.color }}
                          className="group-hover:scale-110 transition-transform"
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mt-6 flex items-center gap-2 text-accent font-medium">
                        Learn more →
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
