import Head from "next/head"
import Image from "next/image"
import Form from "components/Home/Form"

export async function getStaticProps() {
	console.log(process.env.CAT_API_TOKEN)
	const breeds = await fetch('https://api.thecatapi.com/v1/images/search?format=json', {
		headers: {
			'x-api-key': process.env.CAT_API_TOKEN || ''
		}
	})
	const data = await breeds.json()

	return {
		props: {
			name: data,
      token: process.env.CAT_API_TOKEN
		}
	}
}

export default function Home({ name, token }) {
  console.log(token)
  return (
    <>
      <Head>
        <title>Home de catwiki</title>
      </Head>
     <section className="hero py-2 px-7 rounded-t-3xl bg-[url('/images/HeroImagesm.png')] bg-no-repeat bg-cover">
      <div className="left w-1/2">
        <Image className="w-auto" src="/icons/CatwikiLogo2.svg" width={64} height={34.9} alt="Otra imagen del gato" />
        <p className="text-white text-xs mb-2">Get to know more about your cat breed</p>
        <Form />
      </div>
     </section>
    </>
  )
}
