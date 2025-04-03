"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Notes Making Application",
      description: "A full-featured notes application with rich text editing, categories, and search functionality.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      github: "https://github.com/Saayem123/Notes.me",
      demo: "https://github.com/Saayem123/Notes.me",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce solution with product management, cart functionality, payment integration, and user authentication.",
      image: "/ecom.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/Saayem123/Shop69",
      demo: "https://github.com/Saayem123/Shop69",
    },
    {
      title: "Lead Generation ML Model",
      description:
        "A machine learning model for predicting potential leads with data visualization and interactive dashboard.",
      image: "/ml.jpg",
      tags: ["Python", "TensorFlow", "Scikit-learn", "React"],
      github: "https://github.com/Saayem123/Lead-Management-system",
      demo: "https://github.com/Saayem123/Lead-Management-system",
    },
    {
      title: "DevOps Automation Tool",
      description:
        "A tool for automating deployment workflows and infrastructure management with monitoring capabilities.",
      image: "/dops.jpg",
      tags: ["Docker", "Kubernetes", "Node.js", "AWS"],
      github: "https://github.com/Saayem123",
      demo: "https://github.com/Saayem123",
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
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/10 dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in full stack development, DevOps,
            and machine learning.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-blue-100 dark:border-blue-900/30">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-blue-100/50 hover:bg-blue-200/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 sm:flex-nowrap sm:justify-between">
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto btn-hover-effect">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="w-full sm:w-auto btn-hover-effect">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

