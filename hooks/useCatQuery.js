import { useQuery } from '@tanstack/react-query'

const fetchCats = async () => {
  let url = 'http://localhost:3000'
  if (process.env) {
    const isDev = process.env.NODE_ENV !== 'production'
    url = isDev ? 'http://localhost:3000' : 'https://cat-wiki-devchallenge.vercel.app'
  }
  const response = await fetch(url + '/api/cats')
  const data = await response.json()
  return data
}

const useCatData = () => useQuery({
  queryKey: ['most-searched'],
  queryFn: () => fetchCats(),
  staleTime: 30000,
})

export { useCatData, fetchCats }
