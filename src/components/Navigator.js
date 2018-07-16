import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import LoggedIn from '../screens/LoggedIn';
import Lobby from '../screens/Lobby';

export default createStackNavigator({
  Home: {
    screen: Login,
  },
  LoggedIn: {
    screen: LoggedIn,
  },
  Lobby: {
    screen: Lobby,
  },
});
