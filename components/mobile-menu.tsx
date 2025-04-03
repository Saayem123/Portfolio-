"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.1 },
    }),
  }

  return (
    <div className="md:hidden">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="font-bold text-lg text-primary">Mohd Saayem</div>
                <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                  <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </motion.div>
              </div>
              <nav className="flex flex-col p-8 space-y-8 text-center">
                {["Home", "About", "Projects", "Contact"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="text-xl font-medium py-2 hover:text-primary transition-colors"
                    onClick={closeMenu}
                    custom={i}
                    variants={linkVariants}
                  >
                    {item}
                  </motion.a>
                ))}

                {mounted && (
                  <motion.div className="pt-4 flex justify-center" custom={4} variants={linkVariants}>
                    <Button
                      variant="outline"
                      className="rounded-full px-6 flex items-center gap-2"
                      onClick={toggleTheme}
                    >
                      {resolvedTheme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4 text-yellow-400" />
                          Switch to Light
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 text-blue-600" />
                          Switch to Dark
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

