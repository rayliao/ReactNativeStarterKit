/**
 * @format
 */

import React from 'react';
import {Navigation} from 'react-native-navigation';
import App from './src/routes/App';
import Setting from './src/routes/Setting';
import Login from './src/routes/Login';
import Btn from './src/components/Button';
import Modal from './src/components/Modal';
import {mainRoot} from './src/routes';
import Provider from './src';

Navigation.registerComponent(
  'Home',
  () => props => (
    <Provider>
      <App {...props} />
    </Provider>
  ),
  () => <App />,
);
Navigation.registerComponent(
  'Setting',
  () => props => (
    <Provider>
      <Setting {...props} />
    </Provider>
  ),
  () => <Setting />,
);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Btn', () => Btn);
Navigation.registerComponent('Modal', () => Modal);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(mainRoot);
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});
