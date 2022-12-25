import Head from 'next/head'
import { withRouter } from 'next/router'
import CatInfo from 'components/CatInfo'

function Breeed({ router }) {
    const query = router.query.ids?.toString()
    const title = `Breed: ${query ?? 'Loading...'}`
    const description = `Información sobre la raza de gato: ${query ?? 'Loading...'}`

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>
            <CatInfo ids={router.query.ids} isLoading={!router.isReady} />
        </>
    )
}

export default withRouter(Breeed)
