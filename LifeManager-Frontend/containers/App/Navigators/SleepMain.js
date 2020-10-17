import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Sleep from '../Tabs/Sleep';
import SleepHistory from '../History/SleepHistory';

const Stack = createStackNavigator();
class SleepMain extends React.Component {
    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Sleep" component={Sleep} options={{headerShown: false}}/>
                <Stack.Screen name="SleepHistory" component={SleepHistory} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white',title: 'Sleep History'}}/>
            </Stack.Navigator>
        )
    }
}

export default SleepMain;

