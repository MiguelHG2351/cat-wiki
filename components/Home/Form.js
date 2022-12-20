import { useState } from 'react'
import React from 'react'

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
			name: data
		}
	}
}

export default function Form({ name }) {
	console.log(name)
	const [menu, setMenu] = useState(false)

	function openMenuMobile() {
		setMenu(!menu)
	}

	return (
		<>
			<form>
				<input onClick={ openMenuMobile } type="text" className="inline-block w-[12ch] rounded-3xl py-2 px-3 outline-none" placeholder="Search" />
			</form>
			{ menu && (
				<div className="modal-mobile fixed top-0 left-0 right-0 bottom-0 bg-white py-2 px-4">
					<div className="close-menu flex justify-end">
						<button type="button" className='bg-tertiary rounded-lg p-2'>
							<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox='0 0 48 48'><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" /></svg>
						</button>
					</div>
					<div className="input-search-modal mb-7">
						<input className="border-black border w-full mt-7 rounded-lg py-2 px-3" type="text" name="search-modal" placeholder="Search for a cat" />
					</div>
					<h2>Results</h2>
				</div>
			) }
		</>
	)
}
