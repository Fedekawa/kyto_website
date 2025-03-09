"use client"
import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations, type TranslationKey } from "@/lib/translations"
import { motion } from "framer-motion"

type FooterLink = {
  href: string
  labelKey: TranslationKey
}

const footerLinks = [
  { href: "/solutions", labelKey: "solutions" as const },
  { href: "/case-studies", labelKey: "caseStudies" as const },
  { href: "/methodology", labelKey: "methodology" as const },
  { href: "/about", labelKey: "about" as const },
] as const

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  const navigation = {
    solutions: [
      { nameKey: "documentProcessing", href: "#solutions" },
      { nameKey: "aiAgentsOption", href: "#solutions" },
      { nameKey: "processAutomationOption", href: "#solutions" },
    ],
    company: [
      { nameKey: "aboutUs", href: "/about" },
      { nameKey: "caseStudiesFooter", href: "#case-studies" },
      { nameKey: "methodologyFooter", href: "#methodology" },
    ],
    legal: [
      { nameKey: "privacyPolicy", href: "/privacy" },
      { nameKey: "termsConditions", href: "/terms" },
      { nameKey: "dataDeletion", href: "/data-delition" },
    ],
    social: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ],
  }

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">{t.solutions}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/document-processing" className="text-primary/70 hover:text-primary">
                  {t.documentProcessing}
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="text-primary/70 hover:text-primary">
                  {t.aiAgents}
                </Link>
              </li>
              <li>
                <Link href="/process-automation" className="text-primary/70 hover:text-primary">
                  {t.processAutomation}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary/70 hover:text-primary">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-primary/70 hover:text-primary">
                  {t.caseStudiesFooter}
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-primary/70 hover:text-primary">
                  {t.methodologyFooter}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-primary/70 hover:text-primary">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary/70 hover:text-primary">
                  {t.termsConditions}
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-primary/70 hover:text-primary">
                  {t.dataDeletion}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">{t.contact}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-primary/70 hover:text-primary">
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-primary/70">
            © {new Date().getFullYear()} Kyto, Inc. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}

