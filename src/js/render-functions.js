// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
export function renderGalleryList(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
		  class="gallery-image"
		  src="${webformatURL}"
		  alt="${tags}"
          width="360"
          height="152"

		/>
        <div class='desc-container'>
        <div class='desc'>
            <p class='desc-text'>Likes:</p>
            <span class='desc-n'>${likes}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Views:</p>
            <span class='desc-n'>${views}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Comments:</p>
             <span class='desc-n'>${comments}</span>
        </div>
        <div class='text-wrapper'>
            <p class='desc-text'>Downloads:</p>
             <span class='desc-n'>${downloads}</span>
        </div>

        </div>
	</a>
</li>`
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGalleryList() {
  galleryList.innerHTML = '';
}
