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
          <Image className="h-[35px] w-16" src="/icons/CatwikiLogo2.svg" width={ 64 } height={ 35 } alt="Otra imagen del gato" />
          <p className="text-white text-xs mb-2">Get to know more about your cat breed</p>
          <Form data={ data } />
        </div>
      </section>
      <section className="most-search bg-secondary py-2 px-8">
        <div className="relative inline-block py-2">
          <h2 className="font-medium text-xs">Most Searched Breeds</h2>
          <div className="bg-black absolute bottom-0 left-0 w-10 h-[3px] rounded-sm"></div>
        </div>
        <h3 className="font-bold text-lg my-4">66+ Breeds For you to discover</h3>
        <MostSearchList />
        <section className="why-should-you-have-a-cat mt-11">
          <div className="relative inline-block py-2">
            <h2 className="text-primary text-4xl font-bold">Why should you have a cat?</h2>
            <div className="bg-primary absolute top-0 left-0 w-14 h-[3px] rounded-sm"></div>
          </div>
          <p className="text-[18px] mt-10 mb-6 leading-6 font-bold">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>

          <div className="read-more flex items-center">
            <a href="#" target="_blank" className="uppercase font-bold text-xs text-primary/[0.6]">Read More</a>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 48 48">
              <path className="fill-primary/[0.6]" d="m35.1 32.95-2.15-2.1 5.3-5.3H6v-3h32.3l-5.3-5.3 2.1-2.1 8.9 8.9Z" />
            </svg>
          </div>
          <div className="image-of-cats grid grid-cols-2 gap-x-4 mt-14">
            <div className="left">
              <Image className="w-full object-cover mb-5" src="/images/image 2.png" width={ 411 } height={ 252 } />
              <Image className="w-full object-cover" src="/images/image 1.png" width={ 294 } height={ 440 } />
            </div>
            <div className="right">
              <Image className="w-full object-cover" src="/images/image 3.png" width={ 359 } height={ 580 } />
            </div>
          </div>
        </section>
      </section>
      <footer className="bg-black mt-7 py-4 px-4 rounded-t-[42px]">
        <Image className="w-24" src={ '/icons/CatwikiLogo3.svg' } width={ 128 } height={ 43 } alt="Imagen del gato" />
        <p className="text-white text-xs mt-4">
          <span className="inline-block align-middle mr-2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path fill="white" d="M8.5 13.5h3q.417 0 .708-.292.292-.291.292-.708V11H11v1H9V8h2v1h1.5V7.5q0-.417-.292-.708-.291-.292-.708-.292h-3q-.417 0-.708.292-.292.291-.292.708v5q0 .417.292.708.291.292.708.292ZM10 18q-1.646 0-3.104-.625-1.458-.625-2.552-1.719t-1.719-2.552Q2 11.646 2 10q0-1.667.625-3.115.625-1.447 1.719-2.541Q5.438 3.25 6.896 2.625T10 2q1.667 0 3.115.625 1.447.625 2.541 1.719 1.094 1.094 1.719 2.541Q18 8.333 18 10q0 1.646-.625 3.104-.625 1.458-1.719 2.552t-2.541 1.719Q11.667 18 10 18Zm0-1.5q2.708 0 4.604-1.896T16.5 10q0-2.708-1.896-4.604T10 3.5q-2.708 0-4.604 1.896T3.5 10q0 2.708 1.896 4.604T10 16.5Zm0-6.5Z" /></svg></span>
          created by <a className="font-bold" target="_blank" href="https://github.com/MiguelHG2351">MiguelHG2351</a> - devChallenge.io 2021
        </p>
      </footer>
    </>
  )
}
