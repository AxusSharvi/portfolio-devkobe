import React, { useEffect } from 'react';

const FlowiseChatbotCDN = () => {
  useEffect(() => {
    // 1. Define the script content
    const scriptContent = `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({
            chatflowid: "17a988a1-6d94-4e7b-bef1-52ebfaaa12cf",
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

  return null; // The script renders the bubble outside the React root
};

export default FlowiseChatbotCDN;