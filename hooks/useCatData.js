import { useQuery } from "react-query"

export default function useCatData() {
    const { data, isLoading } = useQuery('posts', () =>
    fetch('https://api.thecatapi.com/v1/breeds').then(res => res.json())
  )
  console.log(data, isLoading)

  return {
    data,
    defaultData: [data[10],data[53],data[45],data[55]]
  }
};