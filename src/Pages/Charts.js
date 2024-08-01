import React, { useEffect, useRef, memo } from 'react';

function Charts() {
  const container = useRef(); //provides a way to create a mutable reference that persists across renders
  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    if (document.getElementById(scriptId)) return; // Prevent duplicate script addition
    const script = document.createElement("script");
    script.id = scriptId; // Set a unique ID for the script element
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": false,
      "symbol": "OANDA:GBPUSD",
      "interval": "3",
      "timezone": "Asia/Kolkata",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "details": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    });
    container.current.appendChild(script);
  }, []);
  return (
      <div className="tradingview-widget-container" ref={container} style={{ height: "100vh", width: "100%", marginTop:"105px" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "100vh", width: "100%" }}></div>
        {/*<div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span></a>
        </div>*/}
      </div>
  );
}

export default memo(Charts);