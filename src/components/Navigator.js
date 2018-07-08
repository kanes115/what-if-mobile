import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import LoggedIn from '../screens/LoggedIn';

export default createStackNavigator({
  Home: {
    screen: Login,
  },
  LoggedIn: {
    screen: LoggedIn,
  },
});
