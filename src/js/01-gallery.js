// Add imports above this line
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css"

import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMurkupConteiner = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', (e) => {
  e.preventDefault();
})
  
galleryContainer.insertAdjacentHTML('beforeend', galleryMurkupConteiner);

function createGalleryMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
 `;
    }).join(""); 
}

let gallery = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType:'attr',
    captionsData: "alt",
    captionPosition:'bottom',
    captionDelay: 250,
    
 });
gallery.on('show.simplelightbox', function () {
	// do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});


console.log(galleryItems);