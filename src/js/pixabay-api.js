import axios from 'axios';

const API_KEY = '46105418-b730233871b128ee828c4e337';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

  try {
    const response = await axios.get(url);
    
    if (response.data.hits.length === 0) {
      throw new Error('Sorry, there are no images matching your search query. Please try again!');
    }

    return { images: response.data.hits, totalHits: response.data.totalHits }; 
  } catch (error) {
    console.error(error.message);
    alert(error.message);
    return { images: [], totalHits: 0 };
  }
}

