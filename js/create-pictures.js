import { generatePosts } from './create-images.js';

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictures = generatePosts();
const picturesListFragment = document.createDocumentFragment();

pictures.forEach(({url, description, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__img').alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(newPicture);
});

const createPictures = () => {
  container.appendChild(picturesListFragment);
};

export {createPictures};
