"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Building2, Building, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(0)
  const { language } = useLanguage()
  const t = translations[language]

  const caseStudies = [
    {
      icon: Building2,
      title: language === "en" ? "Major Restaurant Chain" : "Cadena de Restaurantes",
      industry: language === "en" ? "Food & Beverage" : "Alimentos y Bebidas",
      challenge:
        language === "en"
          ? "Managing high volume of bookings and customer inquiries was overwhelming staff and leading to lost reservations."
          : "Gestionar un alto volumen de reservas y consultas de clientes estaba abrumando al personal y provocando la pérdida de reservas.",
      solution:
        language === "en"
          ? "Implemented an AI-powered booking and FAQ system that handles customer inquiries 24/7."
          : "Implementamos un sistema de reservas y preguntas frecuentes impulsado por IA que gestiona las consultas de los clientes 24/7.",
      results: [
        {
          label: language === "en" ? "Online Bookings" : "Reservas en Línea",
          value: "+32%",
          description:
            language === "en" ? "Increase in successful online reservations" : "Aumento en reservas en línea exitosas",
        },
        {
          label: language === "en" ? "Phone Inquiries" : "Consultas Telefónicas",
          value: "-24%",
          description:
            language === "en" ? "Reduction in phone call volume" : "Reducción en el volumen de llamadas telefónicas",
        },
        {
          label: language === "en" ? "Customer Satisfaction" : "Satisfacción del Cliente",
          value: "+28%",
          description:
            language === "en"
              ? "Improvement in customer satisfaction scores"
              : "Mejora en los puntajes de satisfacción del cliente",
        },
      ],
      quote:
        language === "en"
          ? "The AI system has transformed how we handle bookings. Our staff can now focus on providing great service instead of answering phones."
          : "El sistema de IA ha transformado la forma en que gestionamos las reservas. Nuestro personal ahora puede centrarse en brindar un gran servicio en lugar de contestar teléfonos.",
      quoteAuthor: language === "en" ? "Operations Director" : "Director de Operaciones",
    },
    {
      icon: Building,
      title: language === "en" ? "Real Estate Agency" : "Agencia Inmobiliaria",
      industry: language === "en" ? "Real Estate" : "Bienes Raíces",
      challenge:
        language === "en"
          ? "Sales team was spending too much time qualifying leads, resulting in missed opportunities."
          : "El equipo de ventas estaba dedicando demasiado tiempo a calificar leads, lo que resultaba en oportunidades perdidas.",
      solution:
        language === "en"
          ? "Developed an AI agent that pre-qualifies leads based on income and purchase likelihood."
          : "Desarrollamos un agente de IA que precalifica leads según ingresos y probabilidad de compra.",
      results: [
        {
          label: language === "en" ? "Qualified Leads" : "Leads Calificados",
          value: "+19%",
          description:
            language === "en"
              ? "Increase in qualified lead generation"
              : "Aumento en la generación de leads calificados",
        },
        {
          label: language === "en" ? "Sales Cycle" : "Ciclo de Ventas",
          value: "-20%",
          description:
            language === "en" ? "Reduction in sales cycle duration" : "Reducción en la duración del ciclo de ventas",
        },
        {
          label: language === "en" ? "Revenue" : "Ingresos",
          value: "+25%",
          description: language === "en" ? "Increase in monthly revenue" : "Aumento en los ingresos mensuales",
        },
      ],
      quote:
        language === "en"
          ? "The AI qualification system has revolutionized our lead processing. We're closing deals faster than ever."
          : "El sistema de calificación de IA ha revolucionado nuestro procesamiento de leads. Estamos cerrando tratos más rápido que nunca.",
      quoteAuthor: language === "en" ? "Sales Manager" : "Gerente de Ventas",
    },
    {
      icon: FileText,
      title: language === "en" ? "Accounting Firm" : "Firma Contable",
      industry: language === "en" ? "Financial Services" : "Servicios Financieros",
      challenge:
        language === "en"
          ? "Manual invoice processing was causing delays and errors in accounting workflows."
          : "El procesamiento manual de facturas estaba causando retrasos y errores en los flujos de trabajo contables.",
      solution:
        language === "en"
          ? "Automated invoice processing system using AI vision to extract and categorize data."
          : "Sistema automatizado de procesamiento de facturas que utiliza visión de IA para extraer y categorizar datos.",
      results: [
        {
          label: language === "en" ? "Processing Time" : "Tiempo de Procesamiento",
          value: "-85%",
          description:
            language === "en"
              ? "Reduction in invoice processing time"
              : "Reducción en el tiempo de procesamiento de facturas",
        },
        {
          label: language === "en" ? "Accuracy" : "Precisión",
          value: "99.9%",
          description:
            language === "en"
              ? "Invoice processing accuracy rate"
              : "Tasa de precisión en el procesamiento de facturas",
        },
        {
          label: language === "en" ? "Cost Savings" : "Ahorro de Costos",
          value: "45%",
          description: language === "en" ? "Reduction in processing costs" : "Reducción en los costos de procesamiento",
        },
      ],
      quote:
        language === "en"
          ? "What used to take hours now takes minutes. The accuracy is remarkable, and we've significantly reduced our operational costs."
          : "Lo que solía tomar horas ahora toma minutos. La precisión es notable, y hemos reducido significativamente nuestros costos operativos.",
      quoteAuthor: language === "en" ? "Finance Director" : "Director Financiero",
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6">{t.successStories}</h2>
          <p className="text-lg text-[#002e88]/70">{t.seeHowBusinesses}</p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <motion.button
                  key={study.title}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group
                  ${
                    activeCase === index
                      ? "bg-[#002e88] text-white shadow-md"
                      : "bg-white hover:bg-[#002e88]/10 text-[#002e88]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <study.icon className="w-5 h-5" />
                      <div>
                        <h3 className="font-semibold">{study.title}</h3>
                        <p className={`text-sm ${activeCase === index ? "text-white/70" : "text-[#002e88]/70"}`}>
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transform transition-transform
                    ${activeCase === index ? "rotate-90" : "group-hover:translate-x-1"}`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Case Study Detail */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border border-border bg-white p-6 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenge & Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-[#002e88] mb-4">{t.theChallenge}</h4>
                  <p className="text-[#002e88]/70 mb-6">{caseStudies[activeCase].challenge}</p>

                  <h4 className="text-lg font-semibold text-[#002e88] mb-4">{t.ourSolution}</h4>
                  <p className="text-[#002e88]/70">{caseStudies[activeCase].solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-[#002e88] mb-4">{t.theResults}</h4>
                  <div className="space-y-4">
                    {caseStudies[activeCase].results.map((result) => (
                      <div key={result.label} className="bg-white p-4 rounded-lg border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#002e88]/70">{result.label}</span>
                          <span className="text-xl font-bold text-[#00e5e5]">{result.value}</span>
                        </div>
                        <p className="text-sm text-[#002e88]/70">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-white rounded-lg border border-border">
                <blockquote className="text-lg text-[#002e88]/80 italic mb-2">
                  "{caseStudies[activeCase].quote}"
                </blockquote>
                <p className="text-sm text-[#002e88]/70">— {caseStudies[activeCase].quoteAuthor}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="https://kyto.neetocal.com/kyto-customers" target="_blank" rel="noopener noreferrer">
            <Button size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              {t.transformYourBusiness}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

