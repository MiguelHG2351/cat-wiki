import React from 'react'
import Link from 'next/link'

const Input = React.forwardRef(({ search, ...props }, ref) => (
    <div>
        <input { ...props } ref={ ref } />
        <div className="results absolute top-[calc(100%_-_28px)] py-4 left-0 right-0 hidden group-focus-within:block hover:block">
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
    </div>
))

Input.displayName = 'Input'

export default Input
