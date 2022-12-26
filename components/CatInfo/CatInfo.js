// import { useBreedInfoData } from 'hooks/useBreedInfo'

import Image from "next/image";

export default function CatInfo_({ data }) {
    const breed = {
        ...data[0].breeds[0],
        url: data[0].url
    }
    console.log(data)

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

            <dl className="flex flex-col gap-y-8 mt-8">
                <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Temperament:</dt>
                    <dd className="flex-1 text-xs">{ breed.temperament }</dd>
                </div>

                <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Origin</dt>
                    <dd className="flex-1 text-xs">{ breed.origin }</dd>
                </div>

                <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Life span</dt>
                    <dd className="flex-1 text-xs">{ breed.life_span }</dd>
                </div>

                <LevelOfDetails detail="Adaptability" level={breed.adaptability} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Adaptability</dt>
                    <dd className="flex-1 flex items-center text-xs gap-x-2">
                        { Array(breed.adaptability).fill(0).map((_, index) => (
                            <div className="bg-black flex-1 h-2 rounded-md" key={ `${index}-adaptability` } ></div>
                        )) }
                        { Array(5 - breed.adaptability).fill(0).map((_, index) => (
                            <div className="bg-secondary flex-1 h-2 rounded-md" key={ `${index}-adaptability` } ></div>
                        )) }
                    </dd>
                </div> */}

                <LevelOfDetails detail="Affection level" level={breed.affection_level} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Affection level</dt>
                    <dd className="flex-1 text-xs">{ breed.affection_level }</dd>
                </div> */}

                <LevelOfDetails detail="Child friendly" level={breed.child_friendly} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Child friendly</dt>
                    <dd className="flex-1 text-xs">{ breed.child_friendly }</dd>
                </div> */}

                <LevelOfDetails detail="Grooming" level={breed.grooming} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Grooming</dt>
                    <dd className="flex-1 text-xs">{ breed.grooming }</dd>
                </div> */}

                <LevelOfDetails detail="Intelligence" level={breed.intelligence} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Intelligence</dt>
                    <dd className="flex-1 text-xs">{ breed.intelligence }</dd>
                </div> */}

                <LevelOfDetails detail="Health issues" level={breed.health_issues} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Health issues</dt>
                    <dd className="flex-1 text-xs">{ breed.health_issues }</dd>
                </div> */}

                <LevelOfDetails detail="Social needs" level={breed.social_needs} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Social needs</dt>
                    <dd className="flex-1 text-xs">{ breed.social_needs }</dd>
                </div> */}

                <LevelOfDetails detail="Stranger friendly" level={breed.stranger_friendly} />
                {/* <div className="flex gap-x-1">
                    <dt className="font-bold text-xs">Stranger friendly</dt>
                    <dd className="flex-1 text-xs">{ breed.stranger_friendly }</dd>
                </div> */}
            </dl>
            <section className="other-photos mt-14">
                <h2 className="text-lg font-bold">Other photos</h2>
                <div className="cat-list grid grid-cols-2 gap-x-2">
                    { data.map((cat, index) => (
                        <div className="cat-item" key={ `${index}-cat` }>
                            <Image width={ 278 } height={ 278 } alt={ breed.description } className="w-full h-auto relative z-20 object-cover aspect-square rounded-[24px]" src={ cat.url } />
                        </div>
                    )) }
                </div>
            </section>
        </div>
    )
}

const LevelOfDetails = ({ level, detail }) => {
    return (
        <div className="flex gap-x-1">
            <dt className="font-bold text-xs capitalize">{detail}</dt>
            <div className="flex-1 flex items-center text-xs gap-x-2">
                { Array(level).fill(0).map((_, index) => (
                    <div className="bg-black flex-1 h-2 rounded-md" key={ `${index}-adaptability` } ></div>
                )) }
                { Array(5 - level).fill(0).map((_, index) => (
                    <div className="bg-secondary flex-1 h-2 rounded-md" key={ `${index}-adaptability` } ></div>
                )) }
            </div>
        </div>
    )
}
