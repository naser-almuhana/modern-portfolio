"use client"

import { FC, useEffect, useRef } from "react"

import { useInView } from "motion/react"

import { INTRO_TEXT } from "@/constants"

import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation"

export const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scope, entranceAnimation } = useTextRevealAnimation()

  const inView = useInView(scope, { once: true })

  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, scope, entranceAnimation])

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl" ref={scope}>
          {INTRO_TEXT}
        </h2>
      </div>
    </section>
  )
}
