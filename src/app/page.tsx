import { Faqs } from "@/components/sections/faqs"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Intro } from "@/components/sections/intro"
import { Projects } from "@/components/sections/projects"
import { Testimonials } from "@/components/sections/testimonials"

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  )
}
