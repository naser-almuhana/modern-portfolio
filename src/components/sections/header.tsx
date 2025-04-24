"use client"

import Link from "next/link"
import { FC, MouseEvent, useEffect, useState } from "react"

import { motion, useAnimate } from "motion/react"

import { NAV_ITEMS } from "@/constants"

import { Button } from "@/components/ui/button"

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [topLineScope, topLineAnimate] = useAnimate()
  const [bottomLineScope, bottomLineAnimate] = useAnimate()
  const [navScope, navAnimate] = useAnimate()

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ])
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ])
      navAnimate([
        [navScope.current, { height: "100%" }],
        [navScope.current, { duration: 0.7 }],
      ])
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ])
      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ])
      navAnimate([
        [navScope.current, { height: 0 }],
        [navScope.current, { duration: 0.7 }],
      ])
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navAnimate,
    navScope,
  ])

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)

    const url = new URL(e.currentTarget.href)
    const hash = url.hash

    const target = document.querySelector(hash)

    if (!target) return

    target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header>
      {/* mobile nav */}
      <div
        className="bg-foreground fixed top-0 left-0 z-10 h-0 w-full overflow-hidden"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-background group/nav-item relative isolate border-t border-stone-800 py-8 last:border-b"
              onClick={handleClickMobileNavItem}
            >
              <div className="container flex !max-w-full items-center justify-between">
                <span className="text-3xl transition-all duration-500 group-hover/nav-item:pl-4">
                  {label}
                </span>
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 -z-10 h-0 w-full bg-stone-800 transition-all duration-500 group-hover/nav-item:h-full" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Logo */}
      <div className="fixed top-0 left-0 z-10 w-full mix-blend-difference backdrop-blur-md">
        <div className="container !max-w-full">
          <div className="flex h-20 items-center justify-between">
            <div>
              <Link href="/">
                <span className="text-xl font-bold text-white uppercase">
                  Alex&nbsp; Taylor
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="container !max-w-full">
          <div className="flex h-20 items-center justify-end">
            <div className="flex items-center gap-4">
              {/* Hamburger Menu */}
              <div
                className="border-border bg-background flex size-11 items-center justify-center rounded-full border"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              {/* Contact Me */}
              <Button className="hidden md:inline-flex">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
