import {LayoutRoot} from 'react-native-navigation';
import {ComponentNames} from '../utils/config';

export const mainRoot: LayoutRoot = {
  root: {
    component: {
      name: ComponentNames.Login,
    },
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: ComponentNames.Home,
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
                  name: ComponentNames.Setting,
                },
              },
            ],
          },
        },
      ],
    },
  },
};

// export const loginRoot = {
//   root: {
//     component: {
//       name: 'Login',
//     },
//   },
// };
