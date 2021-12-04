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
         <div class="gallery__item" >
         <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" width="510" height="340" alt="${description}"/>
         </a>
         </div>`;
      })
      // ==============сшиваем массив элементов в одну строку========
      .join('');
}
// =============выбираем картинку=============
galleryContainer.addEventListener('click', onClickReset);

function onClickReset(evennts) {
   // ==========убираем перезагрузку=========== 
   evennts.preventDefault();
   if (evennts.target.nodeName !== "IMG") {
      return
   };
   console.log(evennts.target)

   let clickImage = evennts.target;
   let originalImages = "";

   galleryItems.forEach((img) => {
      if (clickImage.src === img.preview) {
         originalImages = img.original;
      }
   });

   // ===============из мануала basiclightbox===================
   document.querySelector('.gallery').onclick = () => {
      basicLightbox.create(`
   <img class="gallery__image" width="1300" height="900"  src="${originalImages}">
	`).show()

   };
};

