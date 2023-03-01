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

    openModal(modalImgSrc)      
}

function openModal(src) {
    const instance = basicLightbox.create(`
        <img src="${src}" width="800" height="600">
    `, {
        onShow: () => {
            window.addEventListener('keydown', handleEscKeyPress);
        },
        onClose: () => {
            window.removeEventListener('keydown', handleEscKeyPress);
        }
    })

    instance.show();

    function handleEscKeyPress(e) { 
        const isEsc = e.code === "Escape";
        if (isEsc) {
            closeModal(instance);
        }   
    }
}

function closeModal(modal) {
    modal.close();
}


