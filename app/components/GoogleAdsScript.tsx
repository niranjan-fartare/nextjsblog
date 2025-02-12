"use client";

import { useEffect } from 'react';
const GoogleAdsScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9568947438501064";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
};

export default GoogleAdsScript;
