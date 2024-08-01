import React, { useEffect, useRef, memo } from 'react';

function CryptoHeatmap() {
  const containerRef = useRef(); //provides a way to create a mutable reference that persists across renders

  useEffect(() => {
    const scriptId = 'tradingview-widget-script';
    if (document.getElementById(scriptId)) return;  // Prevent duplicate script addition
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "dataSource": "Crypto",
      "blockSize": "market_cap_calc",
      "blockColor": "change",
      "locale": "en",
      "symbolUrl": "",
      "colorTheme": "light",
      "hasTopBar": true,
      "isDataSetEnabled": true,
      "isZoomEnabled": true,
      "hasSymbolTooltip": true,
      "width": "70%",
      "height": "100%",
      "support_host": "https://www.tradingview.com"
    });
    containerRef.current.appendChild(script);
  }, []);
  return (
    <div className="tradingview-widget-container" ref={containerRef}
      style={{ height: "90vh", width: "60%", marginTop: "105px", marginLeft: '250px' }}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(CryptoHeatmap);