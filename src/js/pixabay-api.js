const API_KEY = '46105418-b730233871b128ee828c4e337';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();

    
    if (data.hits.length === 0) {
      throw new Error('Sorry, there are no images matching your search query. Please try again!');
    }

    return data.hits; 
  } catch (error) {
    console.error(error.message);
    alert(error.message);
    return [];
  }
}