"use client"

import Image from "next/image"
import { FC, useEffect, useRef } from "react"

import heroImage from "@/assets/images/hero-image.jpg"
import { motion, useScroll, useTransform } from "motion/react"

import { HERO_TEXT } from "@/constants"

import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation"

import { Button } from "@/components/ui/button"

export const Hero: FC = () => {
  const scrollingDiv = useRef<HTMLDivElement>(null)
  const { scope: titleScope, entranceAnimation: titleEntranceAnimate } =
    useTextRevealAnimation()

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  })

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"])

  useEffect(() => {
    titleEntranceAnimate()
  }, [titleEntranceAnimate])

  return (
    <section>
      <div className="sticky top-0 grid items-stretch md:h-screen md:grid-cols-12">
        <div className="flex flex-col justify-center md:col-span-7">
          {/* Content */}
          <div className="container !max-w-full">
            {/* Hero text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-40 text-5xl md:mt-0 md:text-6xl lg:text-7xl"
              ref={titleScope}
            >
              {HERO_TEXT}
            </motion.h1>
            {/* Buttons */}
            <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button variant="outline">
                  <span>View My Work</span>
                  <div className="size-5 overflow-hidden">
                    <div className="flex h-5 w-10 transition-transform duration-500 group-hover/button:-translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <Button variant="text">Let&apos;s Talk</Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative md:col-span-5">
          {/* Image */}
          <motion.div
            className="mt-20 max-md:!w-full md:absolute md:right-0 md:mt-0 md:size-full"
            style={{
              width: portraitWidth,
            }}
          >
            <Image
              src={heroImage}
              alt="My portrait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollingDiv} className="md:h-[200vh]" />
    </section>
  )
}
