"use client"

import { FC, MouseEvent, useState } from "react"

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react"

import { DUMMY_PROJECTS } from "@/constants/projects"

import { Project } from "./components"

export const Projects: FC = () => {
  const [preview, setPreview] = useState<string | Blob | undefined>(undefined)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 10, stiffness: 50 })
  const springY = useSpring(y, { damping: 10, stiffness: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    x.set(e.clientX + 20)
    y.set(e.clientY + 20)
  }

  return (
    <section className="section relative" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected works</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          <AnimatePresence>
            {preview && (
              <motion.img
                src={preview}
                alt={`${preview} image`}
                className="pointer-events-none fixed top-0 left-0 z-10 aspect-video rounded-lg object-cover shadow max-md:hidden"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                style={{
                  x: springX,
                  y: springY,
                }}
              />
            )}
          </AnimatePresence>
          {DUMMY_PROJECTS.map(({ name, image }) => (
            <Project
              key={name}
              name={name}
              image={image}
              handleMouseMove={handleMouseMove}
              handleMouseEnter={(image) => setPreview(image.src)}
              handleMouseLeave={() => setPreview(undefined)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
