import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "@styles/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  const router = useRouter()

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40)
    })
    router.events.on("routeChangeComplete", () => {
      setProgress(100)
    })
  }, [])

  return (
    <Provider store={store}>
      <LoadingBar
        color='#ffd167'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={300}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
