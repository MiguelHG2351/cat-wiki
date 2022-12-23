import { useQuery } from 'react-query'

const fetchCats = async (limit = 10) => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds')
    const data = await response.json()
    return data.slice(0, limit)
}

const useCatData = (limit) => {
    const { data, isLoading } = useQuery({
        queryKey: ['posts', limit],
        queryFn: () => fetchCats(limit)
    })
    console.log(data, isLoading)

    // function defaultData() {
    //     return [data[10], data[53], data[45], data[55]]
    // }

    return {
        data,
        // defaultData
    }
}

export { useCatData, fetchCats }
