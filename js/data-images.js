import { getRandomNumber, getComment } from './util.js';

const COUNT_POSTS = () => 25;
const MIN_COUNT_LIKES = () => 15;
const MAX_COUNT_LIKES = () => 200;
const MIN_COUNT_COMMENTS = () => 0;
const MAX_COUNT_COMMENTS = () => 30;

const getPost = (_, id) => {
  id++;
  const photo = {
    id,
    url: `photos/${id}.jpg`,
    description: `Фото ${id}`,
    likes: getRandomNumber(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
    comments: Array.from( {length: getRandomNumber(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS)}, getComment)
  };
  return photo;
};

export {getPost, COUNT_POSTS};
