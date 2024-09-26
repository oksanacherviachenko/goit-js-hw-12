import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function renderGallery(images, gallery) {
  const markup = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery-link" data-lightbox="image">
      <div class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" loading="lazy" />
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${image.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${image.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${image.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${image.downloads}</p>
          </div>
        </div>
      </div>
    </a>
  `).join('');

  gallery.insertAdjacentHTML('beforeend', markup);  

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}



