// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchData } from './js/pixabay-api';
import { clearGalleryList, renderGalleryList } from './js/render-functions';

const form = document.querySelector('.form');

const loader = document.querySelector('.loader');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.warning({
      title: 'Warning',
      message: `Sorry, the query string is empty. Please enter something!`,
      position: 'topRight',
      timeout: 3000,
    });

    return;
  }

  clearGalleryList();
  loader.classList.remove('hidden');
  fetchData(inputValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
          timeout: 5000,
        });
        return;
      }
      renderGalleryList(hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
      form.reset();
    });
}
