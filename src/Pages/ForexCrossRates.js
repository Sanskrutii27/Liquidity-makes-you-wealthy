import React, { useEffect, useRef, memo } from 'react';

function ForexCrossRates() {
  const containerRef = useRef(); //provides a way to create a mutable reference that persists across renders

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    if (document.getElementById(scriptId)) return;  // Prevent duplicate script addition
    const script = document.createElement("script");
    script.id = scriptId;
    script.src ='https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({ 
        "width": '70%',
        "height": '100%',
        "currencies": [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD"
        ],
        "isTransparent": false,
        "colorTheme": "light",
        "locale": "en",
        "support_host": "https://www.tradingview.com"
    });
    containerRef.current.appendChild(script);
  }, []);
  return (
    <div className="tradingview-widget-container" ref={containerRef} 
     style={{ height: "90vh", width: "60%", marginTop:"105px", marginLeft:'250px'}}>
        <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(ForexCrossRates);
