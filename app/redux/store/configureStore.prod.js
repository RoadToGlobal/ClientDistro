import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import rootReducer from '../reducers';

let socket = io('http://groupchat.rickisen.se');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(socketIoMiddleware),
    )
  );

  return store;
}

