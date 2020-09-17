import { action, computed } from 'easy-peasy';

const posts = {
  postIds: [],
  toRead: computed(state => posts => posts.filter(p => !state.postIds.includes(p.id))),
  addReadPost: action((state, payload) => {
    state.postIds.push(payload);
  }),
};

export default posts;
