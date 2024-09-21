import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.getElementById('searchForm');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async function (event) {
  event.preventDefault(); 

  const query = document.getElementById('searchInput').value.trim();

  if (query === '') {
    alert('Please enter a search query');
    return;
  }

  const images = await fetchImages(query);

  if (images.length > 0) {
    renderGallery(images, gallery);
  }
});