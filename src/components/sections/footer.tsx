"use client"

import Link from "next/link"
import { FC, MouseEvent, useEffect } from "react"

import { useInView } from "motion/react"

import { NAV_ITEMS } from "@/constants"

import { useTextRevealAnimation } from "@/hooks/use-text-reveal-animation"

import { Button } from "@/components/ui/button"

export const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation()
  const inView = useInView(scope, { once: true })

  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, scope, entranceAnimation])

  const handleClickNavItem = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const url = new URL((e.currentTarget as HTMLAnchorElement).href)
    const hash = url.hash

    const target = document.querySelector(hash)

    if (!target) return

    target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 animate-pulse rounded-full bg-green-400"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="mt-8 text-4xl font-extralight md:text-7xl lg:text-8xl"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together
              </h2>
              <Button variant="outline" className="mt-8">
                <span>info@alextylor.com</span>
                <div className="size-5 overflow-hidden">
                  <div className="flex h-6 w-12 transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </Button>
            </div>
            <div className="md:col-span-1">
              <nav className="mt-16 flex flex-col items-start gap-8 md:mt-0 md:items-end">
                {NAV_ITEMS.map(({ href, label }) => (
                  <Button
                    variant="text"
                    className="text-lg"
                    asChild
                    key={label}
                    onClick={handleClickNavItem}
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-sm text-white/30">
          Copyright &copy;{" "}
          <span className="text-red-orange-500">Naser Almuhana</span> &bull; All
          rights reserved
        </p>
      </div>
    </footer>
  )
}
