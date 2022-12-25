import CatInfo_ from './CatInfo'
import SkeletonCatInfo from './Skeleton'

export default function CatInfo({ ids, isLoading }) {
    // if(!isLoading) return

    return (
        isLoading ? <SkeletonCatInfo /> : <CatInfo_ ids={ids} />
    )
}
