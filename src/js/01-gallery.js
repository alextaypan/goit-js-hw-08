// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li style="list-style: none">
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a>
    </li>`;
  })
  .join('');
galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
