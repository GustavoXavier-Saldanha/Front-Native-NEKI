import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import CadastroSkill from './screens/CadastroSkill'
import EditSkill from './screens/EditSkill'
import AuthProvider from './contexts/auth';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroHabilidade" component={CadastroSkill} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;