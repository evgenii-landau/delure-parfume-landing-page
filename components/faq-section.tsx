"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long do DELURE fragrances last?",
    answer: "As an Eau de Parfum, it holds for eight to twelve hours on skin and keeps shifting as it goes. How it settles depends on your own chemistry, so it will smell a little different on you than on anyone else.",
  },
  {
    question: "What makes DELURE different from other luxury perfumes?",
    answer: "Every fragrance is composed by hand in Grasse, from naturals we buy directly from growers we trust. We take the slow route at every step, and you can smell it in the wearing.",
  },
  {
    question: "Do you offer samples before purchasing?",
    answer: "Yes. Our Discovery Set holds all four signature fragrances in 2ml vials, so you can live with each one on your skin before choosing a full bottle.",
  },
  {
    question: "What is your shipping policy?",
    answer: "Shipping is complimentary worldwide. Your order is packed by hand and usually arrives within five to seven business days. Express delivery is available at checkout.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Always. We have never tested on animals, and we hold our suppliers to the same line. Where we can, we choose growers who farm sustainably.",
  },
  {
    question: "What is your return policy?",
    answer: "If a scent is not right for you, return what is left within thirty days for a refund or an exchange. Choosing a fragrance is personal, and we would rather you wear one you love.",
  },
]

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Questions
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-balance">
            Frequently asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-foreground/10 pb-4"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline focus-visible:ring-0 focus-visible:border-transparent focus-visible:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
