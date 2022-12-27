import Link from 'next/link'
import { useState, useEffect, useId } from 'react'
import Input from './Input'

// #region Styles

export default function Form({ data }) {
  const inputId = useId()
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState([])

  function toggleMenuMobile() {
    setMenu(!menu)
  }

  function onInputHandler(e) {
    const value = e.target.value.toLowerCase()
    const filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(value)
    })
    setSearch(filtered.slice(0, 5))
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

  useEffect(() => {
    if (data !== undefined) {
      setSearch(data.slice(0, 5))
    }
  }, [data])

  return (
    <>
      <form>
        <div className="relative group inline-block">
          <div className="icon absolute left-[calc(100%_-_28px)] top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width={ 18 } height={ 18 } viewBox='0 0 48 48'><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" /></svg>
          </div>
          <label htmlFor={ inputId } onClick={ toggleMenuMobile } type="button" className="inline-block w-[12ch] text-left text-black bg-white rounded-3xl py-2 px-3 outline-none placeholder:text-black lg:hidden">
            Search
          </label>
          <Input resultList={<ResultListDesktop search={search} />} onInput={ onInputHandler } className="w-[32ch] text-sm rounded-3xl py-4 px-3 outline-none placeholder:text-black hidden lg:inline-block lg:focus:rounded-b-none lg:focus:border-b lg:peer-hover:rounded-b-none lg:peer-hover:border-b" type="text" placeholder='Enter your breed' />
        </div>
        <div style={ { display: menu ? 'block' : 'none' } } className="modal-mobile fixed z-20 top-0 left-0 right-0 bottom-0 py-2 px-4 bg-white">
          <div className="close-menu flex justify-end">
            <button onClick={ toggleMenuMobile } type="button" className='bg-accent rounded-lg p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox='0 0 48 48'><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" /></svg>
            </button>
          </div>
          <div className="input-mobile-container group relative">
            <Input resultList={<ResultList search={search} />} id={ inputId } onInput={ onInputHandler } className=" border-black border w-full mt-7 rounded-lg py-2 px-3 placeholder:text-black" type="text" name="search-modal" placeholder="Search for a cat" />
          </div>
        </div>
      </form>
    </>
  )
}
// #endregion

// #region Rusults

function ResultList({ search }) {
  return (
    <div className="results absolute bg-white top-full z-20 py-4 left-0 right-0 hidden group-focus-within:block hover:block">
      <ul>
        { search.map(cat => (
          <li key={ cat.reference_image_id + cat.country_code }>
            <Link className='block p-2' href={ `/breed/${cat.id}` }>
              { cat.name }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  )
}

function ResultListDesktop({ search }) {
  return (
    <div className="results absolute peer bg-white top-full z-20 py-4 left-0 right-0 hidden group-focus-within:block hover:block">
      <ul>
        { search.map(cat => (
          <li key={ cat.reference_image_id + cat.country_code }>
            <Link className='block p-2' href={ `/breed/${cat.id}` }>
              { cat.name }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  )
}

// #endregion
