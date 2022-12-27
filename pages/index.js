import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchCats, useCatData } from 'hooks/useCatQuery'
import Head from 'next/head'
import Image from 'next/image'
import Form from 'components/Home/Form'
import MostSearchList from 'components/MostSearchedList'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchCats(10),
    staleTime: 30000
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
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
      <section className="hero py-6 px-7 lg:py-24 lg:px-7 rounded-t-3xl bg-[url('/images/HeroImagesm.png')] lg:bg-[url('/images/HeroImagelg.png')] bg-no-repeat bg-[length:auto_100%] bg-[right_-2rem_top] bg-black">
        <div className="left w-1/2">
          <Image className="h-[35px] w-16 lg:hidden" src="/icons/CatwikiLogo2.svg" width={ 64 } height={ 35 } alt="Otra imagen del gato" />
          <Image className="h-auto w-56 invert contrast-[150%]' hidden lg:block" src="/icons/CatwikiLogo.svg" width={ 64 } height={ 35 } alt="Otra imagen del gato" />
          <h1 className="text-white text-xs mb-2 lg:text-xl lg:w-[27ch] lg:mt-3 lg:mb-12">Get to know more about your cat breed</h1>
          <Form data={ data } />
        </div>
      </section>
      <section className="most-search bg-secondary py-2 pb-12 lg:pb-20 rounded-b-3xl px-8">
        <div className="relative inline-block py-2 lg:mt-4">
          <h2 className="font-medium text-xs lg:text-[18px]">Most Searched Breeds</h2>
          <div className="bg-black absolute bottom-0 left-0 w-10 lg:w-20 h-[3px] rounded-sm"></div>
        </div>
        <h3 className="font-bold text-lg lg:text-5xl my-4 lg:my-12">66+ Breeds For you to discover</h3>
        <MostSearchList />
      </section>
      <section className="why-should-you-have-a-cat lg:grid lg:grid-cols-2 lg:gap-x-4 lg:items-center mt-11">
        <div className='lg:w-5/6 lg:m-auto'>
          <div className="relative inline-block py-2">
            <h2 className="text-primary text-4xl lg:text-5xl font-bold">Why should you have a cat?</h2>
            <div className="bg-primary absolute top-0 left-0 w-14 h-[3px] rounded-sm"></div>
          </div>
          <p className="text-[18px] mt-10 mb-6 leading-6 font-medium">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>

          <div className="read-more flex items-center">
            <a href="#" target="_blank" className="uppercase font-bold text-xs text-primary/[0.6]">Read More</a>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 48 48">
              <path className="fill-primary/[0.6]" d="m35.1 32.95-2.15-2.1 5.3-5.3H6v-3h32.3l-5.3-5.3 2.1-2.1 8.9 8.9Z" />
            </svg>
          </div>
        </div>
        <div className="image-of-cats grid grid-cols-2 gap-x-4 mt-14">
          <div className="left">
            <Image className="w-full object-cover mb-5" src="/images/image 2.png" width={ 411 } height={ 252 } alt="Una imagen de un gatito durmiendo" />
            <Image className="w-full object-cover" src="/images/image 1.png" width={ 294 } height={ 440 } alt="Una imagen de un gatito con un humano" />
          </div>
          <div className="right">
            <Image className="w-full object-cover" src="/images/image 3.png" width={ 359 } height={ 580 } alt="Una imagen de un gatito" />
          </div>
        </div>
      </section>
    </>
  )
}
