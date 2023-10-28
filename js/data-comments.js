import { getRandomNumber } from './util.js';

const MIN_INDEX_AVATAR = () => 1;
const MAX_INDEX_AVATAR = () => 6;

const MESSAGES = () => ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = () => [
  'Иван', 'Екатерина', 'Александр', 'Ольга', 'Дмитрий', 'Анна', 'Михаил', 'Татьяна'
];

const getComment = (_, id) => {
  const comment = {
    id,
    avatar: `img/avatar-${getRandomNumber(MIN_INDEX_AVATAR, MAX_INDEX_AVATAR)}.svg`,
    message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  };
  return comment;
};

export {getComment};
