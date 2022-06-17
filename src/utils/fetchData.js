export const  exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '18d89c247bmsh2ce6b3ea671cc52p1957a5jsncc4f64ded081',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fa041128d5mshb750755b5a10d09p1a64dcjsn9ae5ba5b9ffb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => { 

    const response = await fetch(url, options);
    const data = await response.json();

    return data;


}