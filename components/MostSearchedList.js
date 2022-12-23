import React from 'react'
import Image from 'next/image'
import { useMostSearched } from 'hooks/useMostSearched'

export default function MostSearchList() {
    const { data, isPlaceholderData } = useMostSearched()
    // console.log(data, isPlaceholderData)
    return (
        <section className="cat-most-searched grid grid-cols-2 gap-x-3 grid-rows-[min-content]">
            {
                data.map(cat => (
                    isPlaceholderData ? <Skeleton name={ cat.name } key={ cat.id } /> : <CatItem key={ cat.id } name={ cat.name } url={ cat.image.url } />
                ))
            }
        </section>
    )
}

const CatItem = ({ name, url }) => {
    console.log(url)
    
    return (
        <article>
            <Image className='w-auto rounded-xl h-auto object-cover aspect-square' src={ url } width={ 278 } height={ 278 } alt="" />
            <a href="#" className='text-xs max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>{ name }</a>
        </article>
    )

}

const Skeleton = ({ name }) => (
    <article>
        <svg className='aspect-square w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278" fill="none">
            <rect className='rx-xl w-full h-full' fill="#6C7D89" />
        </svg>
        <a href="#" className='text-xs'>{ name }</a>
    </article>
)
