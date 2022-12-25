import { useBreedInfo } from 'hooks/useBreedInfo'
import CatInfo_ from './CatInfo'
import SkeletonCatInfo from './Skeleton'

export default function CatInfo({ ids }) {
    const { data, isLoading } = useBreedInfo(ids)

    return (
        isLoading ? <SkeletonCatInfo /> : <CatInfo_ data={data} />
    )
}
