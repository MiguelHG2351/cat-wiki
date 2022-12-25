// import { useBreedInfoData } from 'hooks/useBreedInfo'

import Image from "next/image";

export default function CatInfo_({ data }) {
    const breed = {
        ...data[0].breeds[0],
        url: data[0].url
    }
    // const { data, isLoading } = useBreedInfoData(ids)

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-5/6 relative">
                    <Image width={ 278 } height={ 278 } alt={ breed.description } priority className="w-full h-auto relative z-20 object-cover aspect-square rounded-[24px]" src={ breed.url } />
                    <div className="absolute z-10 w-12 top-6 bottom-6 -left-4 bg-tertiary rounded-xl"></div>
                </div>
            </div>
            <h1 className="font-semibold text-4xl w-full overflow-hidden whitespace-nowrap text-ellipsis mt-6">{ breed.name }</h1>
            <p className="font-medium mt-6 text-xs">{ breed.description }</p>
            <div className="flex">
                <h2></h2>
            </div>
            <dl className="grid grid-cols-[max-content_auto]">
                <dt className="font-bold">Temperament:</dt>
                <dd>{breed.temperament}</dd>

                <dt className="font-bold">Origin</dt>
                <dd>{breed.origin}</dd>

                <dt className="font-bold">Life span</dt>
                <dd>{breed.life_span}</dd>

                <dt className="font-bold">Affection level</dt>
                <dd>{breed.affection_level}</dd>

                <dt className="font-bold">Child friendly</dt>
                <dd>{breed.child_friendly}</dd>

                <dt className="font-bold">Grooming</dt>
                <dd>{breed.grooming}</dd>

                <dt className="font-bold">Intelligence</dt>
                <dd>{breed.intelligence}</dd>

                <dt className="font-bold">Health issues</dt>
                <dd>{breed.health_issues}</dd>

                <dt className="font-bold">Social needs</dt>
                <dd>{breed.social_needs}</dd>

                <dt className="font-bold">Stranger friendly</dt>
                <dd>{breed.stranger_friendly}</dd>
            </dl>

        </div>
    )
}
