import { useQuery } from '@tanstack/react-query'

const fetchBreedInfo = async (ids) => {
    const response = await fetch(`/api/breed/${ids}`)
    const data = await response.json()
    console.log(data)
    return data
  }

const useBreedInfo = (ids) => useQuery({
  queryKey: ['breedInfo'],
  queryFn: () => fetchBreedInfo(ids),
  enabled: !!ids,
})

export { useBreedInfo, fetchBreedInfo }
