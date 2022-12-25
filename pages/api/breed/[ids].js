export default async function (req, res) {
  const { ids } = req.query
  const TOKEN = process.env.CAT_API_TOKEN
  // const URL2 = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Tgpad2zO8nnTM5aZy6UwudBFZyLblLEib1GCGr3PgNuwhChQcGsZejZWfU5mKe1D`
  const URL = `https://api.thecatapi.com/v1/images/search?format=json&limit=5&breed_ids=${ids}`
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
