import '@/styles/globals.css'

import { ThemeProvider } from 'next-themes'

import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (

  <ThemeProvider>
          <NextNProgress />

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>

  )
}
