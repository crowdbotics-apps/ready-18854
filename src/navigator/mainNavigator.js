import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps77647Navigator from '../features/Maps77647/navigator';
import Settings77625Navigator from '../features/Settings77625/navigator';
import Settings77610Navigator from '../features/Settings77610/navigator';
import NotificationList77609Navigator from '../features/NotificationList77609/navigator';
import Maps77608Navigator from '../features/Maps77608/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps77647: { screen: Maps77647Navigator },
Settings77625: { screen: Settings77625Navigator },
Settings77610: { screen: Settings77610Navigator },
NotificationList77609: { screen: NotificationList77609Navigator },
Maps77608: { screen: Maps77608Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
