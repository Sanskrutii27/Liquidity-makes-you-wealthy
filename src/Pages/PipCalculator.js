import React, { useEffect } from 'react';
import Footor from '../../src/Footor';
import Sidebar from '../../src/Sidebar';

const PipCalculator = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.cashbackforex.com/Content/remote/remote-widgets.js';
        script.async = true;
        // Wait for the script to be loaded before appending it
        script.onload = () => {
            // Once the script is loaded, execute RemoteCalc
            const remoteCalcData = {
                Url: "https://www.cashbackforex.com",
                TopPaneStyle: "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYgMjAlLCAjZjVmNWY1IDQ1JSk7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTsgYm9yZGVyLWJvdHRvbTogbm9uZTsg",
                BottomPaneStyle: "YmFja2dyb3VuZDogI2YzZjNmMzsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYTsgY29sb3I6IGJsYWNrOw==",
                ButtonStyle: "YmFja2dyb3VuZDogIzMzMzhGRiA7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyLXJhZGl1czogMjBweDs=",
                TitleStyle: "dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiA0MHB4OyBmb250LXdlaWdodDogNTAwOw==",
                TextboxStyle: "YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiBibGFjazsgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYQ==",
                ContainerWidth: "1000",
                DefaultInstrument: "GBP.USD",
                HighlightColor: "#ffff00",
                IsDisplayTitle: true,
                IsShowChartLinks: false,
                IsShowEmbedButton: false,
                CompactType: "large",
                Calculator: "pip-value-calculator",
                ContainerId: "pip-value-calculator-819114"
            };
            window.RemoteCalc(remoteCalcData);
        };
        // Append the script to the body
        document.body.appendChild(script);
        return () => {
            // Clean up: remove the script from the body
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className='pipvalue1'>
            <Sidebar />
            <div className='pipvalue1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
             justifyContent: 'center', minHeight: '100vh', marginTop:"105px"}}>
                <div id="pip-value-calculator-819114"></div>
            </div>
            <Footor />
        </div>
        
    );
};

export default PipCalculator;
