export default async function (req, res) {
    const TOKEN = process.env.CAT_API_TOKEN
    const URL = 'https://api.thecatapi.com/v1/breeds'
    const response = await fetch(URL, {
        headers: {
            'x-api-key': TOKEN
        }
    })
    const data = await response.json()
    res.json(data)
}