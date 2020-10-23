import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../Tabs/Profile';
import BMICalculator from '../BMICalculator/BMICalculator';
import BMIInfo from '../../components/BMI/BMIInfo';

const Stack = createStackNavigator();
const ProfileMain = (props)=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="BMICalculator" component={BMICalculator} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white',title: 'BMI Calculator'}}/>
            <Stack.Screen name="BMIInfo" component={BMIInfo} options={{headerStyle: {backgroundColor: '#2587DD'},headerTitleStyle: {color: 'white'},headerTintColor: 'white',title: 'BMI Info'}}/> 
        </Stack.Navigator>
    )
}

export default ProfileMain;