"use client"
import { FileText, MessageSquare, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations, type TranslationKey } from "@/lib/translations"

type Solution = {
  icon: React.ElementType
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  features: string[]
  highlightKey: TranslationKey
}

export function SolutionsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const solutions: Solution[] = [
    {
      icon: FileText,
      titleKey: "smartDocumentProcessing",
      descriptionKey: "transformDocument",
      features: [
        language === "en" ? "Automated invoice processing" : "Procesamiento automatizado de facturas",
        language === "en" ? "Email classification & routing" : "Clasificación y enrutamiento de correos electrónicos",
        language === "en" ? "Document data extraction" : "Extracción de datos de documentos",
        language === "en" ? "PDF to structured data" : "PDF a datos estructurados",
      ],
      highlightKey: "timeSaved",
    },
    {
      icon: MessageSquare,
      titleKey: "aiAgents",
      descriptionKey: "intelligentCustomerSupport",
      features: [
        language === "en" ? "Custom-trained chatbots" : "Chatbots entrenados a medida",
        language === "en" ? "Multi-channel support" : "Soporte multicanal",
        language === "en" ? "Brand voice customization" : "Personalización de la voz de marca",
        language === "en" ? "Seamless handoff to humans" : "Transferencia perfecta a humanos",
        language === "en" ? "CRM integration" : "Integración con CRM",
      ],
      highlightKey: "responseTimeReduced",
    },
    {
      icon: Settings,
      titleKey: "processAutomation",
      descriptionKey: "streamlineWorkflows",
      features: [
        language === "en" ? "Custom workflow design" : "Diseño de flujo de trabajo personalizado",
        language === "en" ? "System integration" : "Integración de sistemas",
        language === "en" ? "Automated reporting" : "Informes automatizados",
        language === "en" ? "Error detection" : "Detección de errores",
      ],
      highlightKey: "productivityIncreaseStat",
    },
  ]

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6">{t.powerfulAISolutions}</h2>
          <p className="text-lg text-[#002e88]/70">{t.enterpriseGradeAI}</p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {solutions.map((solution, index) => (
            <Card
              key={solution.titleKey}
              className="group border-border hover:border-[#00e5e5] transition-all duration-300 hover:shadow-md"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#002e88]/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-[#002e88]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#002e88]">{t[solution.titleKey]}</CardTitle>
                <CardDescription className="text-[#002e88]/70">{t[solution.descriptionKey]}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-[#002e88]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00e5e5]" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight & CTA */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-[#002e88] mb-4">{t[solution.highlightKey]}</p>
                  <button className="flex items-center text-sm font-medium text-[#00e5e5] group-hover:text-[#002e88] transition-colors">
                    {t.learnMore}
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#002e88]/70 mb-6">{t.readyToTransform}</p>
          <a href="https://kyto.neetocal.com/kyto-customers" target="_blank" rel="noopener noreferrer">
            <Button size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              {t.getStartedToday}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

