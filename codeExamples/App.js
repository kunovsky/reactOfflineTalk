/* App.js */
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
