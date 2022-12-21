import { dehydrate, QueryClient, useQuery } from "react-query"
import Head from "next/head"
import Image from "next/image"
import Form from "components/Home/Form"

// export async function getStaticProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery('posts', () => 
//     fetch('https://api.thecatapi.com/v1/breeds').then(res => res.json())
//   )

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

export default function Home() {
  const data = []
  // const { data } = useQuery('posts', () =>
  //   fetch('https://api.thecatapi.com/v1/breeds').then(res => res.json())
  // )
  console.log(data)
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
    </>
  )
}
