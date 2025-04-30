"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"
import { BackgroundGradient } from "@/components/ui/background-gradient"

export default function Certifications() {
  const certifications = [
    {
      title: "72 hours of OOP's",
      issuer: "LPU",
      description: "Comprehensive training on Object-Oriented Programming concepts and implementation.",
      link: "https://drive.google.com/file/d/10H_SZe01sB-8Qe5hr9pWhxghIFmeSncs/view?usp=sharing",
      tags: ["Java", "OOP", "Software Design"],
    },
    {
      title: "72 hours of DSA",
      issuer: "LPU",
      description: "In-depth training on Data Structures and Algorithms with practical implementations.",
      link: "https://drive.google.com/file/d/1XeHndxaEwG1LcHfQ2sRiOQ3xZVEr_sx_/view?usp=sharing",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      title: "IBM DevOps and Software Engineering",
      issuer: "Coursera",
      description:
        "Professional certification covering DevOps practices, CI/CD pipelines, and software engineering methodologies.",
      link: "https://drive.google.com/file/d/1RnIh_tsYbgaQn66jBZ2w0AH4ltbVkCav/view?usp=sharing",
      tags: ["DevOps", "CI/CD", "Software Engineering", "IBM"],
    },
    {
      title: "Server-side JavaScript with Node.js",
      issuer: "Coursera",
      description: "Specialized training on building server-side applications using Node.js and related technologies.",
      link: "https://drive.google.com/file/d/1Hqj_VA8xnfSq7xgZz8oIGWOVAFM_VjC5/view?usp=sharing",
      tags: ["Node.js", "Express", "JavaScript", "Backend"],
    },
    {
      title: "Summer Training in MERN Stack",
      issuer: "Cipher Schools",
      description: "Intensive summer training program covering MongoDB, Express, React, and Node.js stack development.",
      link: "https://drive.google.com/file/d/1n5pVMCycQgCiSrPhkISUJtMOO8pRYRa8/view?usp=sharing",
      tags: ["MERN", "Full Stack", "Web Development"],
    },
    {
      title: "NPTEL Cloud Computing",
      issuer: "IIT Kharagpur",
      description: "Comprehensive course on cloud computing concepts, architectures, and implementations.",
      link: "https://drive.google.com/file/d/1tUTKV2REVaeWzPSu8GP638pdmVm1utR0/view?usp=sharing",
      tags: ["Cloud Computing", "AWS", "Azure", "DevOps"],
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-transparent to-slate-100/50 dark:from-transparent dark:to-slate-900/30"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Certifications</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Professional certifications and training programs I've completed to enhance my skills and knowledge.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((certification, index) => (
            <motion.div key={index} variants={cardVariants}>
              <BackgroundGradient className="p-6 bg-white dark:bg-zinc-900 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{certification.title}</h3>
                    <div className="flex items-center mt-1 text-slate-600 dark:text-slate-400">
                      <Award className="h-4 w-4 mr-1 text-slate-500 dark:text-slate-400" />
                      {certification.issuer}
                    </div>
                  </div>
                </div>

                <div className="flex-grow mt-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{certification.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {certification.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-slate-100/70 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    asChild
                    size="sm"
                    className="w-full btn-hover-effect bg-slate-700 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white border-none"
                  >
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
