import { createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import LoggedIn from '../screens/LoggedIn';

export default createStackNavigator({
  Home: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  LoggedIn: {
    screen: LoggedIn,
  },
},
{
  headerMode: 'none',
});
