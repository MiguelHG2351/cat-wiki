import { Montserrat } from '@next/font/google'
import { useState } from 'react'
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query'
import 'apps/style.css'
import Layout from 'components/container/Layout'

const inter = Montserrat({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  const [ queryClient ] = useState(() => new QueryClient())
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout className={inter.className}>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}
