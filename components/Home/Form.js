import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import React from 'react'

//#region Styles

export default function Form({ data }) {
	const mobileInputRef = useRef(null)
	const desktopInputRef = useRef(null)
	const [menu, setMenu] = useState(false)
	const [search, setSearch] = useState(data.slice(0, 5))

	function toggleMenuMobile() {
		if (window.innerWidth < 768) {
			if (!menu) {
				console.log('blur')
				desktopInputRef.current.blur()
				setTimeout(() => {
					mobileInputRef.current.focus()
				}, 200)
			}
			setMenu(!menu)
		}
	}

	function onInputHandler(e) {
		const value = e.target.value.toLowerCase()
		const filtered = data.filter((item) => {
			return item.name.toLowerCase().includes(value)
		})
		setSearch(filtered.slice(0, 5))
		console.log()
	}

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth > 768) {
				setMenu(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<form>
				<input ref={ desktopInputRef } onClick={ toggleMenuMobile } type="text" className="inline-block w-[12ch] rounded-3xl py-2 px-3 outline-none placeholder:text-black" placeholder="Search" />
				<div style={ { display: menu ? 'block' : 'none' } } className="modal-mobile fixed top-0 left-0 right-0 bottom-0 py-2 px-4 bg-white">
					<div className="close-menu flex justify-end">
						<button onClick={ toggleMenuMobile } type="button" className='bg-tertiary rounded-lg p-2'>
							<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox='0 0 48 48'><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" /></svg>
						</button>
					</div>
					<div className="input-mobile-container group relative">
						<input onInput={ onInputHandler } ref={ mobileInputRef } className=" border-black border w-full my-7 rounded-lg py-2 px-3 placeholder:text-black" type="text" name="search-modal" placeholder="Search for a cat" />
						<div className="results absolute top-[calc(100%_-_28px)] py-4 left-0 right-0 hidden group-focus-within:block hover:block">
							<ul>
								{ search.map(cat => (
									<li key={cat.reference_image_id + cat.country_code}>
										<Link className='block p-2' href="/">
											{ cat.name }
										</Link>
									</li>
								)) }
							</ul>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}

//#endregion