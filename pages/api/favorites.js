export default async function (req, res) {
  const TOKEN = process.env.CAT_API_TOKEN
  const URL = 'https://api.thecatapi.com/v1/breeds'
  const response = await fetch(URL, {
    headers: {
      'x-api-key': TOKEN
    }
  })
  const data = await response.json()

  res.json([data[10], data[53], data[45], data[55]])
}
