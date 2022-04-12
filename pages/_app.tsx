import "@fontsource/ibm-plex-mono/400-italic.css";
import "@fontsource/ibm-plex-mono/700-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/roboto-serif/600.css";
import "the-new-css-reset/css/reset.css";
import "@fontsource/permanent-marker";

import "$styles/global.scss";
import Head from "next/head";
import { useState } from "react";
import { Logo } from "$components";
import AppContext from "$contexts/app";

function App({ Component, pageProps }) {
  const [fingerprint, setFingerprint] = useState(null);

  if (typeof window !== "undefined") {
    import("clientjs").then((mod) => {
      const { ClientJS } = mod;
      const client = new ClientJS();
      setFingerprint(`${client.getFingerprint()}`);
    });
  }

  return (
    <AppContext.Provider value={{ fingerprint, setFingerprint }}>
      <Head>
        <title>Code and Stuffs</title>
      </Head>
      <header className="logo">
        <Logo />
      </header>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default App;
