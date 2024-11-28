import Head from 'next/head';
import DemoLayout from '../../layouts/DemoLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ConalturaDemo() {
  const router = useRouter();

  useEffect(() => {
    // Only execute if we're exactly on /conaltura/demo
    if (router.pathname !== '/conaltura/demo') return;

    // Remove any existing voiceflow elements first
    const existingElements = document.querySelectorAll('[class^="vfrc"], [data-testid="widget-bubble"]');
    existingElements.forEach(el => el.remove());

    // Create new script
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
            });
          }
          v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
          v.type = "text/javascript"; 
          s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptElement = document.getElementById('voiceflow-script');
      if (scriptElement) {
        scriptElement.remove();
      }
      const widgetElements = document.querySelectorAll('[class^="vfrc"], [data-testid="widget-bubble"]');
      widgetElements.forEach(el => el.remove());
    };
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Conaltura Demo - Kyto</title>
        <meta name="description" content="Conaltura AI chatbot demo" />
      </Head>

      <DemoLayout title="Conaltura">
        <p className="text-xl text-gray-400 mb-8">
          Press the widget to test the chatbot
        </p>
        <div className="inline-flex items-center text-sm text-gray-500">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Chatbot Active
        </div>
      </DemoLayout>
    </>
  );
}