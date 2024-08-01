import React, { useEffect, useRef, memo } from 'react';

function EconomicCalender() {
  const containerRef = useRef(); //provides a way to create a mutable reference that persists across renders

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    if (document.getElementById(scriptId)) return; // Prevent duplicate script addition
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "light",
      "isTransparent": false,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "importanceFilter": "-1,0,1",
      "countryFilter": "us,gb,eu,ca,au,ch,jp,nz",
      "support_host": "https://www.tradingview.com"
    });
    containerRef.current.appendChild(script);
  }, []);
  return (
    <div className="tradingview-widget-container" ref={containerRef}
      style={{ height: "100vh", width: "100%", marginTop: "105px" }}>
      <div className="tradingview-widget-container__widget" ></div>
    </div>
  );
}

export default memo(EconomicCalender);
