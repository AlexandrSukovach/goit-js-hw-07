import { galleryItems } from './gallery-items.js';

// Change code below this line


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);

// ==========добавляем в разметку============
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// ============создаем разметку в html===================

function createColorCardsMarkup(galleryItems) {
   // ==========деструктуризировали свойства из colors===========
   return galleryItems
      .map(({ preview, description, original }) => {
         return `
         <div class="gallery__item" >
         <a class="gallery__link" href="${original}" data-lightbox="roadtrip" title="Image ${description}" >
         <img class="gallery__image" src="${preview}"
         data-source="${original}" id ="gallery__image--img" alt="Image ${description}"/>
         </a>
         </div>`;
      })
      // ==============сшиваем массив элементов в одну строку========
      .join('');
};



