import { FC } from "react"

import { DUMMY_FAQS } from "@/constants/faqs"

import { FAQ } from "./components"

export const Faqs: FC = () => {
  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {DUMMY_FAQS.map(({ question, answer }, faqIndex) => (
            <FAQ
              key={question}
              question={question}
              answer={answer}
              faqIndex={faqIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
