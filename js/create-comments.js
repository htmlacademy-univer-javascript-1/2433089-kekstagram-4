import { getRandomNumber } from './util.js';
import { MIN_INDEX_AVATAR, MAX_INDEX_AVATAR, MESSAGES, NAMES } from './data.js';

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
