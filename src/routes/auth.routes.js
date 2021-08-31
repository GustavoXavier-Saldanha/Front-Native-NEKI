import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Icon from '@expo/vector-icons/AntDesign';

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
    
            <AuthBottom.Screen name="Perfil" component={Login} />
        </AuthBottom.Navigator>
    );
}

export default AuthRoutes;