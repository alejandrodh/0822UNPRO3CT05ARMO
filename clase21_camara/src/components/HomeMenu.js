//Menu tab de navegación
//Importar toda la estreuctura de navegación

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Profile from '../screens/profile';
import NewPost from '../screens/newPost';

const Tab = createBottomTabNavigator();


function HomeMenu(){

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ Home } />
            <Tab.Screen name="Profile" component={ Profile } />
            <Tab.Screen name="NewPost" component={ NewPost } />
        </Tab.Navigator>
    )

}

export default HomeMenu;