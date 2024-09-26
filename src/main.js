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
let totalHits = 0;
let loadedImagesCount = 0;

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
  loadedImagesCount = 0;

  loaderContainer.style.display = 'block';

  try {
    const { images, totalHits: hits } = await fetchImages(query, page);

    if (images.length > 0) {
      totalHits = hits;
      loadedImagesCount = images.length;
      renderGallery(images, gallery);

      setTimeout(() => {
        const galleryItem = document.querySelector('.gallery-item');
        const cardHeight = galleryItem.getBoundingClientRect().height;

        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth'
        });
      }, 350); 

      iziToast.success({
        title: 'Success',
        message: `Found ${totalHits} images for "${query}"`,
        position: 'topRight',
      });
      
      if (loadedImagesCount < totalHits) {
        loadMoreBtn.style.display = 'block';
      }
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
    const { images } = await fetchImages(query, page);
    
    if (images.length > 0) {
      loadedImagesCount += images.length;
      renderGallery(images, gallery);

      setTimeout(() => {
        const galleryItem = document.querySelector('.gallery-item');
        const cardHeight = galleryItem.getBoundingClientRect().height;

        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth'
        });
      }, 350); 

      if (loadedImagesCount >= totalHits) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
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

