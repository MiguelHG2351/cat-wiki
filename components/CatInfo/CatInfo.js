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
            <section className="lg:grid grid-cols-[45%_55%]">
                <div className="flex justify-center">
                    <div className="w-5/6 relative h-[max-content]">
                        <Image width={ 278 } height={ 278 } alt={ breed.description } priority className="w-full h-auto relative z-20 object-cover aspect-square rounded-[24px]" src={ breed.url } />
                        <div className="absolute z-10 w-12 top-6 bottom-6 -left-4 bg-tertiary rounded-xl"></div>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-4xl w-full overflow-hidden whitespace-nowrap text-ellipsis mt-6">{ breed.name }</h1>
                    <p className="font-medium mt-6 text-xs">{ breed.description }</p>

                    <dl className="flex flex-col items-stretch gap-y-8 mt-8">
                        <div className="flex gap-x-1">
                            <dt className="font-bold text-xs">Temperament:</dt>
                            <dd className="flex-1 text-xs whitespace-nowrap overflow-x-auto scroll scrollbar-hide">{ breed.temperament }</dd>
                        </div>

                        <div className="flex gap-x-1">
                            <dt className="font-bold text-xs">Origin:</dt>
                            <dd className="flex-1 text-xs whitespace-nowrap overflow-x-auto scroll">{ breed.origin }</dd>
                        </div>

                        <div className="flex gap-x-1">
                            <dt className="font-bold text-xs">Life span:</dt>
                            <dd className="flex-1 text-xs whitespace-nowrap overflow-x-auto scroll">{ breed.life_span }</dd>
                        </div>
                        <div className="grid grid-cols-[max-content_auto] gap-y-8 gap-x-2">
                            <LevelOfDetails detail="Adaptability:" level={ breed.adaptability } />
                            <LevelOfDetails detail="Affection level:" level={ breed.affection_level } />
                            <LevelOfDetails detail="Child friendly:" level={ breed.child_friendly } />
                            <LevelOfDetails detail="Grooming:" level={ breed.grooming } />
                            <LevelOfDetails detail="Intelligence:" level={ breed.intelligence } />
                            <LevelOfDetails detail="Health issues:" level={ breed.health_issues } />
                            <LevelOfDetails detail="Social needs:" level={ breed.social_needs } />
                            <LevelOfDetails detail="Stranger friendly:" level={ breed.stranger_friendly } />
                        </div>
                    </dl>
                </div>
            </section>
            <section className="other-photos mt-14">
                <h2 className="text-lg font-bold lg:text-4xl mb-12">Other photos</h2>
                <div className="cat-list grid grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8 gap-x-4 gap-y-4">
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
        <>
            <dt className="font-bold text-xs capitalize">{ detail }</dt>
            <div className="flex-1 flex items-center text-xs gap-x-2">
                { Array(level).fill(0).map((_, index) => (
                    <div className="bg-black flex-1 h-2 rounded-md" key={ `${index}-adaptability` } ></div>
                )) }
                { Array(5 - level).fill(0).map((_, index) => (
                    <div className="bg-secondary flex-1 h-2 rounded-md" key={ `${index}-adaptability` } ></div>
                )) }
            </div>
        </>
    )
}
