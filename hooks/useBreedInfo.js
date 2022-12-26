import { useQuery } from '@tanstack/react-query'

const fetchBreedInfo = async (ids) => {
    const response = await fetch(`/api/breed/${ids}`)
    const data = await response.json()
    return data
  }

const useBreedInfo = (ids) => useQuery({
  queryKey: ['breedInfo'],
  queryFn: () => fetchBreedInfo(ids),
  enabled: !!ids,
  cacheTime: 0,
})

export { useBreedInfo, fetchBreedInfo }
