"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What countries do you specialize in for business registration?",
    answer:
      "We specialize in business registration across 50+ jurisdictions worldwide, including major business hubs like the United States, United Kingdom, Singapore, Hong Kong, Switzerland, and the UAE. Our team has expertise in both established markets and emerging economies.",
  },
  {
    id: "2",
    question: "How long does the international registration process take?",
    answer:
      "The timeline varies by jurisdiction, typically ranging from 3-30 business days. Simple structures in efficient jurisdictions like Singapore can be completed in as little as 3-5 days, while more complex setups or jurisdictions with additional requirements may take 2-4 weeks. During your consultation, we'll provide specific timelines for your chosen location.",
  },
  {
    id: "3",
    question: "What's your pricing structure?",
    answer:
      "Our pricing is transparent and jurisdiction-specific. We offer comprehensive packages that include all government fees, registration costs, and our professional services. Basic registration packages start at $1,200, with additional services available based on your business needs. We'll provide a detailed quote during your consultation.",
  },
  {
    id: "4",
    question: "Do you provide ongoing compliance support after registration?",
    answer:
      "Yes, we offer comprehensive ongoing compliance support to ensure your business remains in good standing. This includes annual filing requirements, tax compliance assistance, accounting services, and regulatory updates specific to your jurisdiction. Our compliance packages can be customized to your specific needs.",
  },
  {
    id: "5",
    question: "Can you help with bank account opening for international businesses?",
    answer:
      "Yes, we assist with bank account opening in multiple jurisdictions. We have established relationships with international banks and can guide you through the documentation requirements and application process. While bank approval ultimately depends on their internal policies, our preparation significantly increases success rates.",
  },
]

export default function Faq() {
  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
