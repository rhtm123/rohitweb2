import '@/styles/globals.css'

import { ThemeProvider } from 'next-themes'

import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
      AOS.init({
          duration: 1200,
          once: false,
        })
  }, [])

  return (

  <ThemeProvider>
          <NextNProgress />

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>

  )
}
