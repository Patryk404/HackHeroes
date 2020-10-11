import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import MainApp from './containers/App/Navigators/Main';
import ProductList from './containers/App/Products/ProductList';

import authReducer from './store/reducers/auth';

const store = createStore(authReducer);

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerStyle:{backgroundColor: '#2587DD'}}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        <Stack.Screen name="Products" component={ProductList}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

