import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import Header from '../components/layout/Header'
import '../styles/globals.css'
import { store } from '../store/index'

const MyApp = ({ Component, pageProps }: AppProps) => {　
  return <Provider store={store}>
    <div className='bg-white min-h-screen'>
      <Header />
      <Component {...pageProps} />
    </div>
  </Provider>
}

export default MyApp
