"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowRight, Zap, MessageSquare, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations, type TranslationKey } from "@/lib/translations"

type Benefit = {
  icon: React.ElementType
  titleKey: TranslationKey
  descriptionKey: TranslationKey
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const benefits: Benefit[] = [
    {
      icon: Clock,
      titleKey: "quickResponse",
      descriptionKey: "getResponseWithin",
    },
    {
      icon: MessageSquare,
      titleKey: "expertConsultation",
      descriptionKey: "freeConsultation",
    },
    {
      icon: Zap,
      titleKey: "rapidImplementation",
      descriptionKey: "startSeeingResults",
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get the form element and create FormData
    const form = e.currentTarget
    const formData = new FormData(form)

    // Convert FormData to object
    const data = {
      name: formData.get("name") as string,
      companyName: formData.get("companyName") as string,
      workEmail: formData.get("workEmail") as string,
      interest: formData.get("interest") as string,
    }

    try {
      const response = await fetch("https://hook.us1.make.com/vw698v1xtrelfw2cjx4yxtm0396b0tmm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      console.log("Form submitted successfully")
      alert(
        language === "en"
          ? "Thank you for your interest! We will contact you soon."
          : "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.",
      )
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(
        language === "en"
          ? "There was an error submitting the form. Please try again."
          : "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="start" className="py-24 bg-[#002e88]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002e88] mb-2">{t.startYourAIJourney}</h2>
            <p className="text-[#002e88]/70 mb-8">{t.getFreeConsultation}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">{t.yourName}</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder={t.yourName}
                  required
                />
              </div>

              {/* Company Name Field */}
              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">{t.companyName}</label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder={t.companyName}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">{t.workEmail}</label>
                <input
                  type="email"
                  name="workEmail"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors"
                  placeholder="name@company.com"
                  required
                />
              </div>

              {/* Interest Field */}
              <div>
                <label className="block text-sm font-medium text-[#002e88] mb-2">{t.whatInterestsYou}</label>
                <select
                  name="interest"
                  className="w-full px-4 py-3 rounded-lg border border-[#D1D1D6] focus:border-[#00e5e5] focus:ring-2 focus:ring-[#00e5e5]/20 outline-none transition-colors text-[#002e88]/70"
                  required
                >
                  <option value="">{t.selectAnOption}</option>
                  <option value="document-processing">{t.documentProcessing}</option>
                  <option value="ai-agents">{t.aiAgentsOption}</option>
                  <option value="process-automation">{t.processAutomationOption}</option>
                  <option value="other">{t.other}</option>
                </select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {t.getStarted}
              </Button>

              <p className="text-sm text-[#002e88]/50 text-center">{t.noCommitment}</p>
            </form>
          </div>

          {/* Right Column - Benefits */}
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">{t.whyChooseKyto}</h3>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.titleKey} className="flex gap-4 items-start">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t[benefit.titleKey]}</h4>
                    <p className="text-white/70">{t[benefit.descriptionKey]}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="italic text-white/90 mb-4">
                {language === "en"
                  ? '"Kyto helped us implement AI solutions in just days. The impact on our business has been remarkable."'
                  : '"Kyto nos ayudó a implementar soluciones de IA en solo días. El impacto en nuestro negocio ha sido extraordinario."'}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00e5e5] rounded-full flex items-center justify-center font-bold">MF</div>
                <div>
                  <p className="font-semibold">M.F</p>
                  <p className="text-sm text-white/70">
                    {language === "en" ? "CEO at Grupo Verde" : "CEO de Grupo Verde"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

