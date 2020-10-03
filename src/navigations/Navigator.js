import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Bus from '../screens/Bus';
import Profile from '../screens/Profile';
import Profile1 from '../screens/Profile1';
import pro2icon from '../screens/pro2icon';
import Transaction from '../screens/Transaction';
import TodoApp from '../screens/TodoApp';
import Main from '../screens/Main';
import Note from '../screens/Note';

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Profile:{screen:Profile},
    Home:{screen:Home},
    Profile1:{screen:Profile1},
    Detail:{screen:Detail},
    Bus:{screen:Bus},
    pro2icon:{screen:pro2icon},
    Transaction:{screen:Transaction},
    TodoApp:{screen:TodoApp},
    Main:{screen:Main},
    Note:{screen:Note},
  
   
   
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)