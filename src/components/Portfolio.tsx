'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'

export default function Portfolio() {
  const projects = caseStudies.slice(0, 6)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selected case studies from recent client work and product design engagements
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/case-studies/${project.slug}`} className="block h-full">
                  <div className="group relative h-72 cursor-pointer overflow-hidden rounded-xl">
                    <div className="absolute inset-0">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.imageUrl ? (
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          />
                        ) : (
                          <div className={`h-full w-full bg-gradient-to-br ${project.heroColor}`} />
                        )}
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/55" />

                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <p className="mb-2 text-sm font-medium text-accent">
                        {project.category}
                      </p>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-white/80 transition-colors duration-300 group-hover:text-white/90">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <button className="px-8 py-4 border-2 border-text rounded-lg font-medium hover:bg-text hover:text-bg transition-all duration-300">
                View Full Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
