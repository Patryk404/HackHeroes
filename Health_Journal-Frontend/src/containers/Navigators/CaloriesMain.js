import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Calories from '../Tabs/Calories';
import ProductList from '../Products/ProductList';
import AddProduct from '../Products/AddProduct';
import CaloriesHistory from '../History/CaloriesHistory';

const Stack = createStackNavigator();

const CaloriesMain = props => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Calories" component={Calories} options={{headerShown: false}}/>
            <Stack.Screen name="Products" component={ProductList} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white'}}/>
            <Stack.Screen name="AddProduct" component={AddProduct} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white',title: 'Add Product'}}/>
            <Stack.Screen name="CaloriesHistory" component={CaloriesHistory} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white',title: 'Calories History'}}/>
        </Stack.Navigator>
    );
}

export default CaloriesMain;