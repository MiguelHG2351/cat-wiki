import { useBreedInfo } from 'hooks/useBreedInfo'
import CatInfo_ from './CatInfo'
import SkeletonCatInfo from './Skeleton'

export default function CatInfo({ ids }) {
    const { data, status} = useBreedInfo(ids)
    console.log(status)

    return (
        !(status === 'success') ? <SkeletonCatInfo /> : <CatInfo_ data={data} />
    )
}
