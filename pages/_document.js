import { Html, Main, NextScript, Head } from 'next/document'

export default function MyDoc () {
  return (
    <Html>
        <Head>
            <link rel="icon" href="/images/devchallenges.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
