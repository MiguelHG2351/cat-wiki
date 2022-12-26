import { Montserrat } from '@next/font/google'
import { useState } from 'react'
import { QueryClientProvider, Hydrate, QueryClient } from '@tanstack/react-query'
import 'apps/style.css'
import Layout from 'components/container/Layout'

const inter = Montserrat({ subsets: ['latin'] })

export default function MyApp ({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  queryClient.invalidateQueries({ queryKey: ['breedInfo'], exact: true })

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
