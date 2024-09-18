export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '416ee64957msh84ae352a45476fdp185cccjsn8401f2daceea',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '416ee64957msh84ae352a45476fdp185cccjsn8401f2daceea',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}