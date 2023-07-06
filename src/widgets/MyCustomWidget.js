import React, { useEffect } from 'react';

export default function MyCustomWidget () {
  useEffect(() => {
    const reloadWidget = () => {
      const existingScript = document.getElementById('scFB7GoRVN0');
      if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
      }
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'UTF-8';
      script.async = true;
      script.id = 'scFB7GoRVN0';
      script.src =
        'https://freecurrencyrates.com/en/widget-vertical-editable?iso=USD-XUL-BTC&df=2&p=FB7GoRVN0&v=fits&source=fcr&width=270&width_title=0&firstrowvalue=1&thm=cccccc,F9F9F9,A3A3A3,333333,eeeeee,cccccc,ffffff,222222,000000&title=Currency%20Converter&tzo=0';

      const div = document.getElementById('gcw_mainFB7GoRVN0');
      div.parentNode.insertBefore(script, div);
    };

    reloadWidget();
  }, []);

  return (
    <div>
      <div id="gcw_mainFB7GoRVN0" className="gcw_mainFB7GoRVN0"></div>
      {/* <a id="gcw_siteFB7GoRVN0" href="https://freecurrencyrates.com/en/">
        FreeCurrencyRates.com
      </a> */}
    </div>
  );
};
