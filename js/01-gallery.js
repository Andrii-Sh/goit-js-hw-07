import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallaryContainerEl = document.querySelector('div.gallery');
gallaryContainerEl.addEventListener('click', handlerGallaryContainerClick);

const gallaryItemsMurkup = createGalleryItemsMurkup(galleryItems);
gallaryContainerEl.insertAdjacentHTML('beforeend', gallaryItemsMurkup);

function createGalleryItemsMurkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>
            `;
    }).join('');;    
}

function handlerGallaryContainerClick(e) {
    e.preventDefault();
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    } 
   
    console.log(e.target.dataset.source);
}



