"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Cloud } from "lucide-react"

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST API", "GraphQL"] },
    {
      category: "DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "AWS",
        "Azure",
        "Git",
        "GitHub Actions",
        "Terraform",
        "Jenkins",
        "Nginx",
        "Linux",
        "Shell Scripting",
        "Prometheus",
        "Grafana",
      ],
    },
    { category: "Machine Learning", items: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis"] },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-blue-50 dark:from-background dark:to-blue-950/10"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            I&apos;m a passionate software developer specializing in full stack development and DevOps. With expertise
            in MERN stack and cloud technologies, I build scalable and efficient applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">My Expertise</h3>
                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Code className="h-6 w-6 mr-2 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Full Stack Development</h4>
                      <p className="text-muted-foreground">
                        Building end-to-end web applications using modern JavaScript frameworks and libraries.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Server className="h-6 w-6 mr-2 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Backend Architecture</h4>
                      <p className="text-muted-foreground">
                        Designing robust APIs and database structures for scalable applications.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Cloud className="h-6 w-6 mr-2 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">DevOps & Cloud</h4>
                      <p className="text-muted-foreground">
                        Implementing CI/CD pipelines and managing cloud infrastructure for optimal performance.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Database className="h-6 w-6 mr-2 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold">Machine Learning</h4>
                      <p className="text-muted-foreground">
                        Developing prediction models and implementing data analysis solutions.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-blue-100 dark:border-blue-900/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="px-3 py-1 bg-blue-100/50 hover:bg-blue-200/50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

