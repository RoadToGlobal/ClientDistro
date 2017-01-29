import thunk                    from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';
import io                       from 'socket.io-client';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import rootReducer from '../reducers';
import DevTools    from '../../containers/DevTools';

const socket = io('http://chat.groupapp.io');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(socketIoMiddleware),
      DevTools.instrument()
    )
  );

  return store;
}
