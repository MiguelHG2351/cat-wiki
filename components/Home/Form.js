import { useState, useRef, useEffect } from 'react'
import React from 'react'

export default function Form({ name }) {
	const mobileInputRef = useRef(null)
	console.log(name)
	const [menu, setMenu] = useState(false)

	function toggleMenuMobile() {
		if(window.innerWidth < 768) {
			// if user agent is mobile, toggle menu
			if (menu) {
				console.log(mobileInputRef.current)
				mobileInputRef.current.focus()
			}
			setMenu(!menu)
		}
	}
	useEffect(() => {
		function handleResize() {
			if(window.innerWidth > 768) {
				setMenu(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<form>
				<input onClick={ toggleMenuMobile } type="text" className="inline-block w-[12ch] rounded-3xl py-2 px-3 outline-none placeholder:text-black" placeholder="Search" />
			</form>
			<div style={{display: menu ? 'block' : 'none'}} className="modal-mobile fixed top-0 left-0 right-0 bottom-0 py-2 px-4 bg-white">
				<div className="close-menu flex justify-end">
					<button onClick={ toggleMenuMobile } type="button" className='bg-tertiary rounded-lg p-2'>
						<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox='0 0 48 48'><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" /></svg>
					</button>
				</div>
				<div className="input-search-modal mb-7">
					<input ref={ mobileInputRef } className="border-black border w-full mt-7 rounded-lg py-2 px-3 placeholder:text-black" type="text" name="search-modal" placeholder="Search for a cat" />
				</div>
				<h2>Results</h2>
			</div>
		</>
	)
}
