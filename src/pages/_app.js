import '@/styles/globals.css'

import { ThemeProvider } from 'next-themes'

import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/Layout'
import { useEffect } from 'react';

import ScheduleMeet from '@/components/ScheduleMeet';

export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //     AOS.init({
  //         duration: 1200,
  //         once: false,
  //       })
  // }, [])

  return (

  <ThemeProvider>
          <NextNProgress />

    <Layout>
      <Component {...pageProps} />

      {/* <ScheduleMeet /> */}
    </Layout>
  </ThemeProvider>

  )
}
