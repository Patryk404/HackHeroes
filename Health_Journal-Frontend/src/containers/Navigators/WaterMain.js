import React from 'react';
import Water from '../Tabs/Water';
import WaterHistory from '../History/WaterHistory';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const WaterMain = props =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Water" component={Water} options={{headerShown: false}}/>
            <Stack.Screen name="WaterHistory" component={WaterHistory} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white', title: 'Water History'}}/>
        </Stack.Navigator>
    );
}

export default WaterMain;