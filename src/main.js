import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.min.css'; 

const form = document.getElementById('searchForm');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async function (event) {
  event.preventDefault(); 

  const query = document.getElementById('searchInput').value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  const images = await fetchImages(query);

  if (images.length > 0) {
    renderGallery(images, gallery);
    iziToast.success({
      title: 'Success',
      message: `Found ${images.length} images for "${query}"`,
      position: 'topRight',
    });
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
});