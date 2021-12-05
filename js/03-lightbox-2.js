import { galleryItems } from './gallery-items.js';

// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);

galleryContainer.addEventListener('click', onClickReset);

function onClickReset(event) {
   event.preventDefault();
}


// ==========добавляем в разметку============
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// ============создаем разметку в html===================

function createColorCardsMarkup(galleryItems) {
   // ==========деструктуризировали свойства из colors===========
   return galleryItems
      .map(({ preview, description, original }) => {
         return `
         <a class="gallery__item" href="${original}" data-lightbox="roadtrip" title="Image ${description}" >
         <img class="gallery__image" src="${preview}"
         data-source="${original}" id ="gallery__image--img" alt="Image ${description}"/>
         </a>
         `;
      })
      // ==============сшиваем массив элементов в одну строку========
      .join('');
};



