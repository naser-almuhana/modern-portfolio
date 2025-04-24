"use client"

import { FC, useRef, useState } from "react"

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"

import {
  DUMMY_TESTIMONIALS,
  TESTIMONIALS_SECTION_TITLE,
} from "@/constants/testimonials"

import { Testimonial } from "./components"

export const Testimonials: FC = () => {
  const titleRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  })
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr == 0) {
        return DUMMY_TESTIMONIALS.length - 1
      }
      return curr - 1
    })
  }
  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr == DUMMY_TESTIMONIALS.length - 1) {
        return 0
      }
      return curr + 1
    })
  }

  return (
    <section className="section" id="testimonials">
      <h2
        className="flex flex-col overflow-hidden text-4xl md:text-7xl lg:text-8xl"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          {TESTIMONIALS_SECTION_TITLE}
        </motion.span>
        <motion.span
          className="text-red-orange-500 self-end whitespace-nowrap"
          style={{
            x: transformBottom,
          }}
        >
          {TESTIMONIALS_SECTION_TITLE}
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {DUMMY_TESTIMONIALS.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    key={name}
                    quote={quote}
                    name={name}
                    company={company}
                    role={role}
                    image={image}
                    imagePositionY={imagePositionY}
                  />
                ),
            )}
          </AnimatePresence>
        </div>
        <div className="mt-6 flex gap-4 lg:mt-10">
          <button
            className="border-border hover:bg-red-orange-500 hover:border-red-orange-500 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border duration-300 hover:text-white"
            onClick={handleClickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border-border hover:bg-red-orange-500 hover:border-red-orange-500 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border duration-300 hover:text-white"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
