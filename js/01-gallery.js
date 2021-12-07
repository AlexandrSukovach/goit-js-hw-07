import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createColorCardsMarkup(galleryItems);
galleryContainer.addEventListener('click', onClickReset);

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
         <img class="gallery__image" data-source ="${original}"" src="${preview}" width="510" height="340" alt="${description}"/>
         </a>
         </div>`;
      })
      // ==============сшиваем массив элементов в одну строку========
      .join('');
};

//=================способ-1================
//=============выбираем картинку=============
function onClickReset(evennts) {

   // ==========убираем перезагрузку===========
   evennts.preventDefault();
   // =======убираем возможность кликать не по картинке======
   if (evennts.target.nodeName !== "IMG") {
      return
   };
   // ========ссылка на картинку=============
   let clickImage = evennts.target;
   let originalImages = "";
   galleryItems.forEach((img) => {
      if (clickImage.src === img.preview) {
         originalImages = img.original;
      }
   });
   // ===============из мануала basiclightbox===================
   basicLightbox.create(`
   <img class="gallery__image" width="1300" height="900"  src="${originalImages}">
   `).show()
};


// // =============способ-2================
// // =============выбираем картинку=============
// function onClickReset(event) {
//    // ==========убираем перезагрузку=========== 
//    event.preventDefault();
//    // console.dir(event.target);
//    // ========ссылка на картинку=============
//    let originalImages = event.target.dataset['source'];
//    // console.log(originalImages);
//    // ===============из мануала basiclightbox========
//    basicLightbox.create(`
//       <img class="gallery__image" width="1300" height="900"  src="${originalImages}">
//       `).show();
// };


