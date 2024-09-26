import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast'; 
import 'izitoast/dist/css/iziToast.min.css'; 

const form = document.getElementById('searchForm');
const gallery = document.getElementById('gallery');
const loaderContainer = document.getElementById('loader-container');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let query = '';
let page = 1;

loadMoreBtn.style.display = 'none';

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  query = document.getElementById('searchInput').value.trim();
  
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  loadMoreBtn.style.display = 'none';
  page = 1;  
  gallery.innerHTML = '';  

  loaderContainer.style.display = 'block';

  try {
    const images = await fetchImages(query, page);

    if (images.length > 0) {
      renderGallery(images, gallery);
      iziToast.success({
        title: 'Success',
        message: `Found ${images.length} images for "${query}"`,
        position: 'topRight',
      });
      
      loadMoreBtn.style.display = 'block';
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    loaderContainer.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', async function () {
  page += 1;  
  loaderContainer.style.display = 'block';

  try {
    const images = await fetchImages(query, page);
    if (images.length > 0) {
      renderGallery(images, gallery);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    loaderContainer.style.display = 'none';
  }
});

