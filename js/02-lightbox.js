import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainerEl = document.querySelector('ul.gallery');

const gallaryItemsMurkup = createGalleryItemsMurkup(galleryItems);
gallaryContainerEl.insertAdjacentHTML('beforeend', gallaryItemsMurkup);

function createGalleryItemsMurkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
    }).join('');;    
}

const lightbox = new SimpleLightbox('.gallery a', {
    'captionsData': 'alt',
    'captionDelay': 250
});


