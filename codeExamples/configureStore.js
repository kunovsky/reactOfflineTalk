/* Redux Persist Example - https://github.com/rt2zz/redux-persist */
/* configureStore.js */

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}


/* Modified version with transform */
/* configureStore.js */

import { createStore } from 'redux';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const transformInitialValues = createTransform(
  inboundState => ({ ...inboundState }),
  // NOTE: we want to transform the state being rehydrated to include values that were
  // previously saved in the form reducer as the initialValues for the homepage reducer
  // https://github.com/rt2zz/redux-persist#transforms
  (outboundState, key, fullState) => {
    // form is stored as JSON in AsyncStorage so we need to parse it to a JavaScript object
    const parsedForm = JSON.parse(fullState.form)[0]; // this is an array of form objects
    return {
      ...outboundState,
      initialValues: parsedForm.values,
    };
  },
  { whitelist: ['homepage'] },
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [transformInitialValues],
  // whitelist: ['foo'],
  // NOTE: Toggle this on and off for develoment when you add something to a reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
}
