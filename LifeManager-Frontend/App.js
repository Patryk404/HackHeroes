import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/containers/Auth/Login';
import Register from './src/containers/Auth/Register';
import MainApp from './src/containers/Navigators/Main';

import authReducer from './src/store/reducers/auth';

const store = createStore(authReducer);

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white'}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

