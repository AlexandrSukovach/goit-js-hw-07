import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);

// ==========добавляем в разметку===========
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// ============создаем разметку в html===================
function createColorCardsMarkup(galleryItems) {

   // ==========деструктуризировали свойства из colors===========
   return galleryItems
      .map(({ preview, description, original }) => {
         return `
         <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" title="${description}" />
         </a>`;
      })
      // ==============сшиваем массив элементов в одну строку========
      .join('');
}


// ============плагин инициализации и добав стилей===========

let gallery = new SimpleLightbox('.gallery a', { doubleTapZoom: 1.5, captionDelay: 250 });
gallery.on('show.simplelightbox', function () {

});

