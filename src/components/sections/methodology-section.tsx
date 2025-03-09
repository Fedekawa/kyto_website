"use client"
import { motion } from "framer-motion"
import { Search, Settings, Code, TestTube2, Rocket, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations, type TranslationKey } from "@/lib/translations"

type Step = {
  icon: React.ElementType
  titleKey: TranslationKey
  durationKey: TranslationKey
  descriptionKey: string
  details: string[]
}

export function MethodologySection() {
  const { language } = useLanguage()
  const t = translations[language]

  const steps: Step[] = [
    {
      icon: Search,
      titleKey: "discovery",
      durationKey: "week1",
      descriptionKey:
        language === "en"
          ? "We analyze your specific processes and needs"
          : "Analizamos tus procesos y necesidades específicas",
      details: [
        language === "en" ? "Process analysis" : "Análisis de procesos",
        language === "en" ? "Pain points identification" : "Identificación de puntos críticos",
        language === "en" ? "Opportunity mapping" : "Mapeo de oportunidades",
        language === "en" ? "Systems evaluation" : "Evaluación de sistemas",
      ],
    },
    {
      icon: Settings,
      titleKey: "design",
      durationKey: "weeks23",
      descriptionKey:
        language === "en" ? "We create the solution architecture" : "Creamos la arquitectura de la solución",
      details: [
        language === "en" ? "Tech stack selection" : "Selección de tecnologías",
        language === "en" ? "Integration planning" : "Planificación de integración",
        language === "en" ? "AI model selection" : "Selección de modelos de IA",
        language === "en" ? "Implementation roadmap" : "Hoja de ruta de implementación",
      ],
    },
    {
      icon: Code,
      titleKey: "development",
      durationKey: "weeks34",
      descriptionKey:
        language === "en" ? "We implement and customize your solution" : "Implementamos y personalizamos tu solución",
      details: [
        language === "en" ? "API configuration" : "Configuración de API",
        language === "en" ? "AI training" : "Entrenamiento de IA",
        language === "en" ? "System integration" : "Integración de sistemas",
        language === "en" ? "Initial setup" : "Configuración inicial",
      ],
    },
    {
      icon: TestTube2,
      titleKey: "testing",
      durationKey: "weeks46",
      descriptionKey:
        language === "en" ? "We validate each component thoroughly" : "Validamos cada componente minuciosamente",
      details: [
        language === "en" ? "Integration testing" : "Pruebas de integración",
        language === "en" ? "Performance testing" : "Pruebas de rendimiento",
        language === "en" ? "User acceptance testing" : "Pruebas de aceptación del usuario",
        language === "en" ? "Security validation" : "Validación de seguridad",
      ],
    },
    {
      icon: Rocket,
      titleKey: "launch",
      durationKey: "weeks67",
      descriptionKey:
        language === "en" ? "We deploy and optimize your solution" : "Desplegamos y optimizamos tu solución",
      details: [
        language === "en" ? "Team training" : "Capacitación del equipo",
        language === "en" ? "Production deployment" : "Despliegue en producción",
        language === "en" ? "Performance monitoring" : "Monitoreo de rendimiento",
        language === "en" ? "Continuous optimization" : "Optimización continua",
      ],
    },
  ]

  return (
    <section id="methodology" className="py-24 bg-gradient-to-b from-white to-[#F2F2F7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6">{t.implementationProcess}</h2>
          <p className="text-lg text-[#002e88]/70">{t.provenMethodology}</p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[39px] top-24 w-0.5 h-16 bg-gradient-to-b from-[#002e88] to-[#00e5e5] md:left-[47px]" />
              )}

              <div className="flex gap-8 mb-16">
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#002e88]/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#002e88]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00e5e5] text-white text-sm flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-[#002e88]">{t[step.titleKey]}</h3>
                    <span className="text-sm font-medium text-[#00e5e5] bg-[#00e5e5]/10 px-3 py-1 rounded-full">
                      {t[step.durationKey]}
                    </span>
                  </div>

                  <p className="text-lg text-[#002e88]/70 mb-4">{step.descriptionKey}</p>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <li key={detail} className="flex items-center gap-2 text-[#002e88]/70">
                          <ChevronRight className="w-4 h-4 text-[#00e5e5]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#002e88]/70 mb-6">{t.readyToStart}</p>
          <a href="https://kyto.neetocal.com/kyto-customers" target="_blank" rel="noopener noreferrer">
            <Button size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              {t.startNow}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

