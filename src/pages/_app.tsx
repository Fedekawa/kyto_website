import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Cleanup Voiceflow widget when route changes
    return () => {
      // @ts-expect-error - Voiceflow types not available globally
      if (window.voiceflow && window.voiceflow.chat) {
        // @ts-expect-error - Voiceflow types not available globally
        window.voiceflow.chat.destroy();
      }
    };
  }, [router.pathname]);

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}