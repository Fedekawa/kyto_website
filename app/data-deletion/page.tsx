"use client"

import { motion } from "framer-motion"
import { Mail, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"

export default function DataDeletionPage() {
  return (
    <>
      <main className="min-h-screen pt-24 bg-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h1 className="text-3xl font-bold text-primary mb-6">Data Deletion Request</h1>

              <div className="space-y-6">
                {/* Email Instructions */}
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-semibold text-primary mb-2">Send us an email</h2>
                    <p className="text-primary/70">
                      Email{" "}
                      <a href="mailto:info@kyto.io" className="text-primary underline hover:text-primary/80">
                        info@kyto.io
                      </a>{" "}
                      with the subject line &apos;Data Deletion Request&apos;. Include your WhatsApp number or business
                      ID in the request.
                    </p>
                  </div>
                </div>

                {/* Processing Time */}
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-semibold text-primary mb-2">Processing Time</h2>
                    <p className="text-primary/70">
                      We will process your request within 30 days and send you a confirmation once completed.
                    </p>
                  </div>
                </div>

                {/* Confirmation Process */}
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="font-semibold text-primary mb-2">Confirmation</h2>
                    <p className="text-primary/70">
                      You will receive an email confirmation once your data has been deleted from our systems.
                    </p>
                  </div>
                </div>

                {/* Privacy Policy Link */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-primary/70 text-sm">
                    For more information about how we handle your data, please read our{" "}
                    <Link href="/privacy" className="text-primary underline hover:text-primary/80">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

