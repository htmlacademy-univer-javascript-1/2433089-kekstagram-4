const MIN_INDEX_AVATAR = 1;
const MAX_INDEX_AVATAR = 6;
const COUNT_POSTS = 25;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;

const MESSAGES = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

const NAMES = [
  'Иван', 'Екатерина', 'Александр', 'Ольга', 'Дмитрий', 'Анна', 'Михаил', 'Татьяна'
];

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComment = (_, id) => {
  const comment = {
    id,
    avatar: `img/avatar-${getRandomNumber(MIN_INDEX_AVATAR, MAX_INDEX_AVATAR)}.svg`,
    message: MESSAGES
      .match(/\(?[^.?\\!]+[.!?]\)?/g)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2)
      .join('')
      .trimStart(),
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  };
  return comment;
};

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
generatePosts();
