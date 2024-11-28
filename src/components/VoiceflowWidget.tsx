import { useEffect } from 'react';

export default function VoiceflowWidget() {

  useEffect(() => {
    // Create and add script
    const script = document.createElement('script');
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

    // Cleanup function
    return () => {
      // Remove script
      document.body.removeChild(script);
      
      // Remove widget
      const widgetDiv = document.querySelector('[data-testid="widget-bubble"]');
      if (widgetDiv) {
        widgetDiv.remove();
      }
      // Remove any other Voiceflow elements
      const vfElements = document.querySelectorAll('[class^="vfrc"]');
      vfElements.forEach(el => el.remove());
    };
  }, []);

  return null;
}