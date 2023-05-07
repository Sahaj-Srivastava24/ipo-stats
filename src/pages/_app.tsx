import "components/styles/globals.css";
import {type AppType} from "next/dist/shared/lib/utils";
import {createTheme, NextUIProvider, useSSR} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      backgroundLight: '#FFFFFF',
      backgroundDark: '#F4F5F6',
      textDark: '#23262F',
      textLight: '#777E90',
      ipoCardBackground: '#FFFFFF',
      footerDiv: '#E6E8EC',

      azure: 'rgba(11,0,255,0.5)'
    },
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      backgroundLight: '#23262F',
      backgroundDark: '#21232C',
      textDark: '#FCFCFD',
      textLight: '#777E90',
      ipoCardBackground: '#353945',
      footerDiv: '#353945',
      azure: 'rgba(11,0,255,0.5)'

    },
  }
})

const MyApp: AppType = ({Component, pageProps}) => {
  const {isBrowser} = useSSR()

  return isBrowser && (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
};

export default MyApp;
