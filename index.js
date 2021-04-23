/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './src/routes/App';
import Setting from './src/routes/Setting';
import Login from './src/routes/Login';
import Btn from './src/components/Button';
import Modal from './src/components/Modal';
// import SideMenu from './src/components/SideMenu';
import {loginRoot, mainRoot} from './src/routes';

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('Setting', () => Setting);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Btn', () => Btn);
Navigation.registerComponent('Modal', () => Modal);
// Navigation.registerComponent('SideMenu', () => SideMenu);

/**
 * 是否登录
 */
let isLogin = true;
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLogin ? loginRoot : mainRoot);
});
// Navigation.events().registerNavigationButtonPressedListener(({buttonId}) => {
//   if (buttonId === 'sideMenu') {
//     Navigation.mergeOptions(this, {
//       sideMenu: {left: {visible: true}},
//     });
//   }
// });
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
