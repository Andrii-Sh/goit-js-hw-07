import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallaryContainerEl = document.querySelector('div.gallery');
gallaryContainerEl.addEventListener('click', handleGallaryContainerClick);

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

function handleGallaryContainerClick(e) {    
    e.preventDefault();
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    } 
   
    const modalImgSrc = e.target.dataset.source;

    openImgModal(modalImgSrc)      
}

function openImgModal(Src) {
    const instance = basicLightbox.create(`
        <img src="${Src}" width="800" height="600">
    `)

    instance.show();

    window.addEventListener('keydown', handleEscKeyPress);

    function handleEscKeyPress(e) { 
        const isEsc = e.code === "Escape";
        if (isEsc) {
            closeImgModal(instance);
            window.removeEventListener('keydown', handleEscKeyPress);
        }   
    }
}

function closeImgModal(modal) {
    modal.close();
}


