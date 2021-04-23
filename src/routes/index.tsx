import {LayoutRoot} from 'react-native-navigation';
import {ROOT_ID} from '../utils/config';

export const mainRoot: LayoutRoot = {
  root: {
    // sideMenu: {
    //   center: {
    //     stack: {
    //       id: 'SideMenu',
    //     },
    //   },
    // },
    bottomTabs: {
      id: ROOT_ID.BOTTOM_TABS_LAYOUT,
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Setting',
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};
