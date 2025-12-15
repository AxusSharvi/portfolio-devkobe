import React, { useEffect } from 'react';

const FlowiseChatbotCDN = () => {
  useEffect(() => {
    // 1. Define the script content with the NEW ID
    const scriptContent = `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({
            chatflowid: "c7bd3826-2fff-48bd-be0c-04c5ebb83dea",
            apiHost: "https://cloud.flowiseai.com",
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