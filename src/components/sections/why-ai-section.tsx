"use client"
import { motion } from "framer-motion"
import { ArrowRight, Zap, TrendingUp, Clock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations, type TranslationKey } from "@/lib/translations"

type Benefit = {
  icon: React.ElementType
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  highlightKey: TranslationKey
}

const benefits: Benefit[] = [
  {
    icon: Clock,
    titleKey: "daysNotMonthsTitle",
    descriptionKey: "daysNotMonthsDesc",
    highlightKey: "fasterDeployment",
  },
  {
    icon: TrendingUp,
    titleKey: "costEffective",
    descriptionKey: "costEffectiveDesc",
    highlightKey: "moreAffordable",
  },
  {
    icon: Zap,
    titleKey: "noCodeRequired",
    descriptionKey: "noCodeRequiredDesc",
    highlightKey: "zeroTechnicalDebt",
  },
  {
    icon: ShieldCheck,
    titleKey: "enterpriseGrade",
    descriptionKey: "enterpriseGradeDesc",
    highlightKey: "enterpriseFeatures",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function WhyAISection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#002e88]/10 px-4 py-2"
          >
            <Zap className="h-5 w-5 text-[#002e88]" />
            <span className="text-sm font-semibold text-[#002e88]">{t.theFutureIsHere}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-[#002e88] mb-6"
          >
            {t.whySMBsChoose}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#002e88]/70"
          >
            {t.getPowerOfEnterprise}
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={benefit.titleKey} variants={itemVariants} className="group relative">
              <div className="rounded-lg border border-border bg-white p-6 shadow-sm h-full transition-all duration-300 hover:border-[#00e5e5] hover:shadow-md">
                {/* Icon */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-lg bg-[#002e88]/10 p-3 text-[#002e88]">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002e88]">{t[benefit.titleKey]}</h3>
                </div>

                {/* Description */}
                <p className="mb-4 text-[#002e88]/70">{t[benefit.descriptionKey]}</p>

                {/* Highlight */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#00e5e5]">{t[benefit.highlightKey]}</span>
                  <ArrowRight
                    className="h-5 w-5 translate-x-0 transform text-[#00e5e5] 
                                     opacity-0 transition-all duration-300 
                                     group-hover:translate-x-2 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="https://kyto.neetocal.com/kyto-customers" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" icon={<ArrowRight className="h-5 w-5" />}>
              {t.startNow}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

