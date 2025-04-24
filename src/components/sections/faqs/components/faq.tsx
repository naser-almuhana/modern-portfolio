"use client"

import { FC, useState } from "react"

import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface FAQProps {
  question: string
  answer: string
  faqIndex: number
}

export const FAQ: FC<FAQProps> = ({ question, answer, faqIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div
      key={question}
      className="border-border group/faq relative isolate cursor-pointer border-t border-dotted py-6 last:border-b md:py-8 lg:py-10"
      onClick={() => {
        if (faqIndex === selectedIndex) {
          setSelectedIndex(null)
        } else {
          setSelectedIndex(faqIndex)
        }
      }}
    >
      <div
        className={cn(
          "absolute bottom-0 -z-10 h-0 w-full bg-stone-300 transition-all duration-700 group-hover/faq:h-full",
          faqIndex === selectedIndex && "h-full",
        )}
      />
      <div
        className={cn(
          "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
          faqIndex === selectedIndex && "lg:px-8",
        )}
      >
        <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
        <div
          className={cn(
            "border-border bg-background inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition duration-300",
            faqIndex === selectedIndex && "rotate-45",
          )}
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {faqIndex === selectedIndex && (
          <motion.div
            className="overflow-hidden lg:px-8"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mt-4 text-xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
