import React, { useEffect, useRef, memo } from 'react';

function News() {
  const containerRef = useRef(); //provides a way to create a mutable reference that persists across renders

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    if (document.getElementById(scriptId)) return;  // Prevent duplicate script addition
    const script = document.createElement("script");
    script.id = scriptId;
    script.src ='https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({ 
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "regular",
      "width": "100%", 
      "height": "100%",
      "colorTheme": "light",
      "locale": "en"
    });
    containerRef.current.appendChild(script);
  }, []);
  return (
    <div className="tradingview-widget-container" ref={containerRef} 
     style={{ height: "90vh", width: "100%", marginTop:"105px" }}>
        <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(News);