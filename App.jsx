import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';


const App = () => {

  return (
    // creating access to the store by wrapping with provider,,,
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
              <MainNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;