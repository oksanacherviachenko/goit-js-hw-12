import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function renderGallery(images, gallery) {
  gallery.innerHTML = ''; 

  const markup = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery-link" data-lightbox="image">
      <div class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
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