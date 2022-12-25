import Head from 'next/head'
import { withRouter } from 'next/router'
import CatInfo from 'components/CatInfo'

function Breeed({ router }) {
    const query = router.query.ids?.toString()
    const title = `Breed: ${query ?? 'Loading...'}`

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <CatInfo ids={router.query.ids} isLoading={!router.isReady} />
        </>
    )
}

export default withRouter(Breeed)
