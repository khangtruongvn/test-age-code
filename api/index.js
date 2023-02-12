import { AUDIO_LIST, RATING_LIST, LINK_LIST, VIDEO, TIME_LINE } from '@mockup/index';

export const getUserProfile = async () => {
  console.log('[GET] get user profile');
  return {
    avatar: '/images/avatar.png',
    name: '梅村 さおり',
    lastLogin: '最終ログイン：55分前',
    cover: '/images/banner.png',
  };
};

export const getProfile = async () => {
  console.log('[GET] get profile');
  try {
    await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return {
      audio: AUDIO_LIST,
      links: LINK_LIST,
      video: VIDEO,
    };
  } catch (error) {
    return {
      audio: [],
      links: [],
      video: {},
    };
  }
};

export const getRating = async () => {
  console.log('[GET] get rating');
  return {
    rating: RATING_LIST,
  };
};

export const getTimeline = async () => {
  console.log('[GET] get timeline');
  return {
    timeline: TIME_LINE,
  };
};
