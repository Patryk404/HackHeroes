import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Calories from '../Tabs/Calories';
import ProductList from '../Products/ProductList';
import AddProduct from '../Products/AddProduct';

const Stack = createStackNavigator();
class CaloriesMain extends React.Component {
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Calories" component={Calories} options={{headerShown: false}}/>
                <Stack.Screen name="Products" component={ProductList} options={{headerStyle: {backgroundColor: '#2587DD'}}}/>
                <Stack.Screen name="AddProduct" component={AddProduct} options={{headerStyle: {backgroundColor: '#2587DD'},title: 'Add Product'}}/>
            </Stack.Navigator>
        )
    }
}

export default CaloriesMain;