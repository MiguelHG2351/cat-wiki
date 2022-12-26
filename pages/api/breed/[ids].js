export default async function (req, res) {
  const { ids } = req.query
  const TOKEN = process.env.CAT_API_TOKEN
  const URL = `https://api.thecatapi.com/v1/images/search?format=json&limit=8&breed_ids=${ids}`
  const response = await fetch(URL, {
    headers: {
      'x-api-key': TOKEN
    }
  })
  const data = await response.json()
  
  console.log(typeof data)
  if(typeof data === 'undefined') {
    return res.status(404).json({ message: 'Not found' })
  }
  res.json(data)
}
