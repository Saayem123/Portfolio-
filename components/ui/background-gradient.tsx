"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) {
  const animationClass = animate
    ? "transition duration-500 hover:shadow-[0_0_20px_-5px_rgba(30,41,59,0.4)] hover:-translate-y-1"
    : ""

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-[20px] z-[1] opacity-40 group-hover:opacity-60 blur-xl transition duration-500",
          "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-600 via-slate-500 to-gray-400 dark:from-slate-800 dark:via-slate-700 dark:to-gray-700",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[20px] z-[1]",
          "bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-600 via-slate-500 to-gray-400 dark:from-slate-800 dark:via-slate-700 dark:to-gray-700",
        )}
      />
      <div className={cn("relative z-[2] rounded-[18px]", animationClass, className)}>{children}</div>
    </div>
  )
}
