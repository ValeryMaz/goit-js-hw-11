import axios from 'axios';

const MY_KEY = '49396254-d7c9e863026433b693f793a3f';
const URL = 'https://pixabay.com/api/';
// axios.defaults.baseURL
export function fetchData(searchQuery) {
  return axios
    .get(URL, {
      params: {
        key: MY_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => data);
}

fetchData('cats')
  .then(response => console.log(response.data))
  .catch(error => console.error('Ошибка:', error));

// fetchData('cats')
//   .then(response => {
//     console.log('Ответ от API:', response); // Полный ответ
//     console.log('Массив изображений (hits):', response.hits); // Только hits
//   })
//   .catch(error => console.error('Ошибка:', error));
