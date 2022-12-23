import { useQuery } from '@tanstack/react-query'

const fetchMoreSearched = async () => {
    const response = await fetch('/api/favorites')
    const data = await response.json()
    return data
}

const useMostSearched = () => useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchMoreSearched(),
    placeholderData: [
        {
            'id': 'load1',
            'name': 'loading...',
            'reference_image_id': "loading...",
            'image': {
                'url': 'https://dummyimage.com/220x220.png/99118E/ffffff'
            }
        }, {
            'id': 'load2',
            'name': 'loading...',
            'reference_image_id': "loading...",
            'image': {
                'url': 'https://dummyimage.com/220x220.png/99118E/ffffff'
            }
        }, {
            'id': 'load3',
            'name': 'loading...',
            'reference_image_id': "loading...",
            'image': {
                'url': 'https://dummyimage.com/220x220.png/99118E/ffffff'
            }
        }, {
            'id': 'load4',
            'name': 'loading...',
            'reference_image_id': "loading...",
            'image': {
                'url': 'https://dummyimage.com/220x220.png/99118E/ffffff'
            }
        }
    ]
})

export { useMostSearched, fetchMoreSearched }
