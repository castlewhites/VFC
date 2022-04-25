/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

function configureStore(initialState = {}) {
  const enhancers = []
  const middleware = [thunk]
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    persistReducer(
      {
        key: 'root',
        storage,
      },
      rootReducer
    ),
    initialState,
    composedEnhancers
  )

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
  })

  return { store, persistor }
}

export default configureStore
