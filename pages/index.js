import { dehydrate, QueryClient } from "react-query"
import useCatData from "hooks/useCatData"
import Head from "next/head"
import Image from "next/image"
import Form from "components/Home/Form"

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], () => 
    fetch('https://api.thecatapi.com/v1/breeds').then(res => res.json())
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  // const data = []
  const { data, defaultData } = useCatData()
  console.log(defaultData())
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
      <h3 className="font-bold text-lg mt-4">66+ Breeds For you to discover</h3>
      <section className="cat-most-search grid grid-col-2">
        <article>
          
        </article>
      </section>
     </section>
    </>
  )
}
