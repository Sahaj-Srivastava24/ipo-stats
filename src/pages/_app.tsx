import {type AppType} from "next/dist/shared/lib/utils";

import "components/styles/globals.css";
import {NextUIProvider} from '@nextui-org/react';


const MyApp: AppType = ({Component, pageProps}) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />;
    </NextUIProvider>
  )
};

export default MyApp;
