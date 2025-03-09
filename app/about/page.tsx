"use client"
import { motion } from "framer-motion"
import { Rocket, Heart, Brain, Target, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

type TranslationKey = keyof typeof translations.en

// Translation content
const translations = {
  en: {
    aboutKyto: "About Kyto",
    mission: "Our Mission",
    missionText:
      "To make AI accessible, affordable, and impactful for businesses of all sizes. We believe in transforming operations through innovative solutions that deliver measurable results in days, not months.",
    vision: "Our Vision",
    visionText:
      "To be the catalyst for AI adoption in businesses worldwide, driving efficiency, growth, and success through practical, results-driven solutions that make a real difference.",
    values: "Our Values",
    valuesSubtitle: "The principles that guide everything we do",
    innovation: "Innovation",
    innovationText: "Pushing boundaries with cutting-edge AI solutions that deliver real results.",
    integrity: "Integrity",
    integrityText: "Building trust through transparency, honesty, and ethical AI practices.",
    excellence: "Excellence",
    excellenceText: "Delivering outstanding solutions that exceed expectations.",
    impact: "Impact",
    impactText: "Creating meaningful change and measurable results for businesses.",
    team: "Our Team",
    teamSubtitle: "The people behind Kyto",
    readyToTransform: "Ready to Transform Your Business?",
    joinHundreds: "Join hundreds of businesses already benefiting from our AI solutions",
    getStartedToday: "Get Started Today",
    missionStatement:
      "We're on a mission to democratize AI, making powerful technology accessible to businesses of all sizes.",
  },
  es: {
    aboutKyto: "Sobre Kyto",
    mission: "Nuestra Misión",
    missionText:
      "Hacer que la IA sea accesible, asequible e impactante para empresas de todos los tamaños. Creemos en transformar operaciones a través de soluciones innovadoras que entregan resultados medibles en días, no meses.",
    vision: "Nuestra Visión",
    visionText:
      "Ser el catalizador para la adopción de IA en empresas de todo el mundo, impulsando la eficiencia, el crecimiento y el éxito a través de soluciones prácticas y orientadas a resultados que marcan una diferencia real.",
    values: "Nuestros Valores",
    valuesSubtitle: "Los principios que guían todo lo que hacemos",
    innovation: "Innovación",
    innovationText: "Empujando límites con soluciones de IA de vanguardia que entregan resultados reales.",
    integrity: "Integridad",
    integrityText: "Construyendo confianza a través de transparencia, honestidad y prácticas éticas de IA.",
    excellence: "Excelencia",
    excellenceText: "Entregando soluciones sobresalientes que superan las expectativas.",
    impact: "Impacto",
    impactText: "Creando cambios significativos y resultados medibles para las empresas.",
    team: "Nuestro Equipo",
    teamSubtitle: "Las personas detrás de Kyto",
    readyToTransform: "¿Listo para Transformar tu Negocio?",
    joinHundreds: "Únete a cientos de empresas que ya se benefician de nuestras soluciones de IA",
    getStartedToday: "Comienza Hoy",
    missionStatement:
      "Nuestra misión es democratizar la IA, haciendo que la tecnología potente sea accesible para empresas de todos los tamaños.",
  },
} as const

const values = [
  {
    icon: Rocket,
    titleKey: "innovation" as const,
    descriptionKey: "innovationText" as const,
  },
  {
    icon: Heart,
    titleKey: "integrity" as const,
    descriptionKey: "integrityText" as const,
  },
  {
    icon: Brain,
    titleKey: "excellence" as const,
    descriptionKey: "excellenceText" as const,
  },
  {
    icon: Target,
    titleKey: "impact" as const,
    descriptionKey: "impactText" as const,
  },
]

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#002e88] mb-6">{t.aboutKyto}</h1>
              <p className="text-xl text-[#002e88]/70 mb-8">{t.missionStatement}</p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#002e88]/5 p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-[#002e88] mb-4">{t.mission}</h2>
                <p className="text-[#002e88]/70">{t.missionText}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#00e5e5]/5 p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-[#002e88] mb-4">{t.vision}</h2>
                <p className="text-[#002e88]/70">{t.visionText}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold text-[#002e88] mb-4">{t.values}</h2>
              <p className="text-[#002e88]/70">{t.valuesSubtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#002e88]/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#002e88]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002e88] mb-2">{t[value.titleKey]}</h3>
                  <p className="text-[#002e88]/70">{t[value.descriptionKey]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#002e88]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{t.readyToTransform}</h2>
              <p className="text-white/80 mb-8">{t.joinHundreds}</p>
              <a href="https://kyto.neetocal.com/kyto-customers" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" icon={<ArrowRight className="h-5 w-5" />}>
                  {t.getStartedToday}
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

