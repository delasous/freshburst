import { createStore } from 'easy-peasy';
import { composeWithDevTools } from 'remote-redux-devtools';

import posts from './posts';

const model = {
  posts,
}

const store = createStore(model, {
  compose: composeWithDevTools({ realtime: true, trace: true })
});

export default store
