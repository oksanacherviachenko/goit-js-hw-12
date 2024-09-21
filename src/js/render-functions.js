export function renderGallery(images, gallery) {
  gallery.innerHTML = ''; 

  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('image-card');

    card.innerHTML = `
      <a href="${image.largeImageURL}" target="_blank">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}