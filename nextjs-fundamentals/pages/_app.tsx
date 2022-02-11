import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
