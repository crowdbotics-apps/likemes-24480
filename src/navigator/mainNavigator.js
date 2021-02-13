import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings204431Navigator from '../features/Settings204431/navigator';
import Settings204414Navigator from '../features/Settings204414/navigator';
import UserProfile1204411Navigator from '../features/UserProfile1204411/navigator';
import BlankScreen1204410Navigator from '../features/BlankScreen1204410/navigator';
import BlankScreen0204409Navigator from '../features/BlankScreen0204409/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings204431: { screen: Settings204431Navigator },
Settings204414: { screen: Settings204414Navigator },
UserProfile1204411: { screen: UserProfile1204411Navigator },
BlankScreen1204410: { screen: BlankScreen1204410Navigator },
BlankScreen0204409: { screen: BlankScreen0204409Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
