import { useState } from 'react'
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query'
import 'apps/style.css'
import Layout from 'components/container/Layout'

export default function MyApp({ Component, pageProps }) {
  const [ queryClient ] = useState(() => new QueryClient())
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}
