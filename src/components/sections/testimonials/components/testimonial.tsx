"use client"

import { StaticImageData } from "next/image"
import { ComponentProps, FC, useEffect } from "react"

import { motion, usePresence } from "motion/react"

import { cn } from "@/lib/utils"

import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation"

interface TestimonialProps extends ComponentProps<"div"> {
  quote: string
  name: string
  role: string
  company: string
  imagePositionY: number
  image: StaticImageData
}

export const Testimonial: FC<TestimonialProps> = ({
  quote,
  name,
  company,
  image,
  role,
  imagePositionY,
  className,
  ...props
}) => {
  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimate,
    exitAnimation: quoteExitAnimate,
  } = useTextRevealAnimation()
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimate,
    exitAnimation: citeExitAnimate,
  } = useTextRevealAnimation()

  const [isPresence, safeToRemove] = usePresence()

  useEffect(() => {
    if (isPresence) {
      quoteEntranceAnimate().then(() => {
        citeEntranceAnimate()
      })
    } else {
      Promise.all([quoteExitAnimate(), citeExitAnimate()]).then(() => {
        safeToRemove()
      })
    }
  }, [
    citeEntranceAnimate,
    citeExitAnimate,
    quoteEntranceAnimate,
    quoteExitAnimate,
    isPresence,
    safeToRemove,
  ])

  return (
    <div
      className={cn(
        "grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-square md:col-span-2 md:aspect-[9/16]">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />

        <motion.img
          src={image.src}
          alt={`${name} image`}
          // priority
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <motion.div
          className="mt-8 text-3xl md:mt-0 md:text-5xl lg:text-6xl"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </motion.div>
        <cite
          className="mt-4 block not-italic md:mt-8 md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  )
}
