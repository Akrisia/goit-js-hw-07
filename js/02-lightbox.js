import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);

const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join(``);
    
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const lightbox = new SimpleLightbox(galleryContainer, {});

console.log(lightbox);

