import React, { useEffect } from 'react';

const FlowiseChatbotCDN = () => {
  useEffect(() => {
    // 1. Define the script content with the NEW ID
    const scriptContent = `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({
            chatflowid: "21211e85-f469-4f84-9af1-35a331c9419d",
            apiHost: "https://flowise-production-bec3.up.railway.app",
        })
    `;

    // 2. Create a script element
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = scriptContent;
    script.async = true;

    // 3. Append to body
    document.body.appendChild(script);

    // 4. Cleanup function to remove script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default FlowiseChatbotCDN;