import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Products from '../screens/Products'
import Profile from '../screens/Profile'
import Icon from '@expo/vector-icons/AntDesign';
import Cart from '../screens/Cart'



const AuthBottom = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home'
    },
    Perfil: {
        name: 'logout'
    }
}

function AuthRoutes() {
    return (
        <AuthBottom.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#121212'
                },
                activeTintColor: '#FFF',
            }}
        >


            <AuthBottom.Screen name="Home" component={Home} />
            <AuthBottom.Screen name="Login" component={Products} />
  

        </AuthBottom.Navigator>
    );
}

export default AuthRoutes;