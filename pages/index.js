import { dehydrate, QueryClient } from "@tanstack/react-query"
import { fetchCats, useCatData } from 'hooks/useCatQuery'
import Head from "next/head"
import Image from "next/image"
import Form from "components/Home/Form"
import MostSearchList from "components/MostSearchedList"

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchCats(10)
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  // const data = []
  const { data } = useCatData()
  return (
    <>
      <Head>
        <title>Home de catwiki</title>
      </Head>
     <section className="hero py-6 px-7 rounded-t-3xl bg-[url('/images/HeroImagesm.png')] bg-no-repeat bg-cover">
      <div className="left w-1/2">
        <Image className="h-[35px] w-16" src="/icons/CatwikiLogo2.svg" width={64} height={35} alt="Otra imagen del gato" />
        <p className="text-white text-xs mb-2">Get to know more about your cat breed</p>
        <Form data={data}/>
      </div>
     </section>
     <section className="most-search bg-secondary py-2 px-8">
      <div className="relative inline-block py-2">
        <h2 className="font-medium text-xs">Most Searched Breeds</h2>
        <div className="bg-black absolute bottom-0 left-0 w-10 h-[3px] rounded-sm"></div>
      </div>
      <h3 className="font-bold text-lg my-4">66+ Breeds For you to discover</h3>
      <MostSearchList />
     </section>
    </>
  )
}
