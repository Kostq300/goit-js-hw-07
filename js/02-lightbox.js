import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((image) =>
    `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
    <img 
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
        />
        </a>
        </div>`).join("");

gallery.innerHTML = markup;

gallery.innerHTML = markup;

let galleryLightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionDelay: 250,});