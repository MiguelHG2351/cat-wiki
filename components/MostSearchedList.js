import React from 'react'
import Image from 'next/image'
import { useMostSearched } from 'hooks/useMostSearched'

export default function MostSearchList() {
	const { data, isPlaceholderData } = useMostSearched()
	return (
		<section className="cat-most-searched grid grid-cols-2 lg:grid-cols-4 gap-x-3 ">
			{
				data.map(cat => (
					isPlaceholderData ? <Skeleton name={ cat.name } key={ cat.id } /> : <CatItem key={ cat.id } name={ cat.name } url={ cat.image.url } />
				))
			}
		</section>
	)
}

// #region components
const CatItem = ({ name, url }) => {
	return (
		<article className='flex flex-col gap-y-2'>
			<Image className='w-auto rounded-xl h-auto object-cover aspect-square' src={ url } width={ 278 } height={ 278 } alt="" />
			<a href="#" className='text-xs lg:text-[18px] lg:font-semibold lg:pb-2 inline-block max-w-full whitespace-nowrap overflow-hidden text-ellipsis'>{ name }</a>
		</article>
	)
}

const Skeleton = ({ name }) => (
	<article className='animate-pulse'>
		<svg className='aspect-square w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 278" fill="none">
			<rect className='rx-xl w-full h-full' fill="#6C7D89" />
		</svg>
		<a href="#" className='text-xs'>{ name }</a>
	</article>
)
// #endregion