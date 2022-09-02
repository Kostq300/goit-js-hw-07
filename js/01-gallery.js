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

gallery.addEventListener('click', imgClick);
function imgClick(e) {
    e.preventDefault();

    if (e.target.classList.contains('gallery')) return;

    const bigImage = e.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src=${bigImage} width="800" height="600">
    `)

    instance.show()
    
    gallery.addEventListener('keydown', close);

function close(e) {
    if (e.key === 'Escape') {
        instance.close()
    }
}
    
}