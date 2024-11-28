import Head from 'next/head';
import DemoLayout from '../layouts/DemoLayout';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Conaltura() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showWidget, setShowWidget] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Cleanup function to remove all widget elements
  const cleanupWidget = () => {
    // @ts-expect-error
    if (window.voiceflow?.chat) {
      // @ts-expect-error
      window.voiceflow.chat.hide();
    }
    const existingElements = document.querySelectorAll('[class^="vfrc"], [data-testid="widget-bubble"]');
    existingElements.forEach(el => el.remove());
    const scriptElement = document.getElementById('voiceflow-script');
    if (scriptElement) {
      scriptElement.remove();
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => cleanupWidget();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Conaltura24!') {
      setShowWidget(true);
      
      // Clean up any existing widget first
      cleanupWidget();

      // Add the new script
      const script = document.createElement('script');
      script.id = 'voiceflow-script';
      script.innerHTML = `
        (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '673b998005e18917f5f30784' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              }).then(() => {
                window.voiceflow.chat.open();
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
            v.type = "text/javascript"; 
            s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `;
      document.body.appendChild(script);
    } else {
      setError('Incorrect password');
      setTimeout(() => setError(''), 2000);
    }
  };

  // Handle going back to password screen
  const handleBack = () => {
    cleanupWidget();
    setShowWidget(false);
    setPassword('');
  };

  return (
    <>
      <Head>
        <title>Conaltura Demo - Kyto</title>
        <meta name="description" content="Access Conaltura AI chatbot demo" />
      </Head>

      <DemoLayout title="Conaltura">
        {!showWidget ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Access Demo
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-xl text-gray-400 mb-8">
              Chatbot is ready
            </p>
            <motion.button
              onClick={handleBack}
              className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              Back to Login
            </motion.button>
          </motion.div>
        )}
      </DemoLayout>
    </>
  );
}