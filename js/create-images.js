import { getRandomNumber } from './util.js';
import { MIN_COUNT_LIKES, MAX_COUNT_LIKES, MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS, COUNT_POSTS } from './data.js';
import { getComment } from './create-comments.js';

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

const generatePosts = () => Array.from({length: COUNT_POSTS}, getPost);

export {generatePosts};

