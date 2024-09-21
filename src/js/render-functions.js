export function renderGallery(images, gallery) {
  gallery.innerHTML = ''; 

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    imgElement.loading = 'lazy'; 
    gallery.appendChild(imgElement);
  });
}