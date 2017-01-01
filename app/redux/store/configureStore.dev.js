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

let socket             = io('http://localhost:8081');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

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
