import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const colors = {
}

const fonts = {
  body: `'Chakra Petch', sans-serif`,
}

const theme = extendTheme({ colors, fonts })

function MyApp({ Component, pageProps }: AppProps) {
   return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
