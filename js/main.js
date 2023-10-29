import { getPost } from './create-images.js';
import { COUNT_POSTS } from './data.js';

Array.from({length: COUNT_POSTS}, getPost);


