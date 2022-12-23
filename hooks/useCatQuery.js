import { useQuery } from '@tanstack/react-query'

const fetchCats = async () => {
    let url = 'http://localhost:3000';
    if(process.env) {
        let isDev = process.env.NODE_ENV !== 'production';
        url = isDev ? 'http://localhost:3000' : 'https://cat-wiki-devchallenge.vercel.app';
    }
    const response = await fetch(url + '/api/cats')
    const data = await response.json()
    return data
}

const useCatData = () => useQuery({
    queryKey: ['most-searched'],
    queryFn: () => fetchCats()
})

export { useCatData, fetchCats }
