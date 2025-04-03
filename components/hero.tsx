"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, FileText, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container px-4 md:px-6 z-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Photo - centered on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-1 flex-shrink-0"
          >
            <motion.div
              className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden border-4 border-primary/20 shadow-xl mx-auto rounded-full group"
              whileHover={{
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/profile-photo.png"
                alt="Mohd Saayem"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Text content - centered on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 md:order-2 text-center md:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Hi, I&apos;m <span className="text-primary">Mohd Saayem</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">Full Stack Developer & DevOps Engineer</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button asChild size="lg" className="rounded-full">
                  <a href="#contact">Contact Me</a>
                </Button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 border-none"
                  >
                    <a
                      href="https://drive.google.com/file/d/1YMy6hidUWZrxW_qSoRJLKzMVhcp6PJPT/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-5 w-5" />
                      <span>Resume</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                      <span className="absolute inset-0 w-full h-full rounded-full bg-white/20 animate-pulse opacity-0 group-hover:opacity-100"></span>
                    </a>
                  </Button>
                </motion.div>
              </div>

              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://github.com/Saayem123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohd-saayem-875363253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}

