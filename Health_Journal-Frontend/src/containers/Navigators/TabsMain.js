import React from 'react';
import { BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import Sleep from './SleepMain';
import Calories from './CaloriesMain'
import Water from './WaterMain';
import Covid from '../Tabs/Covid/Covid';
import Profile from './ProfileMain';

class Main extends React.Component {
    render(){
        return(
            <Tab.Navigator initialRouteName="Calories" tabBarOptions={{activeBackgroundColor: '#2587DD',labelStyle: {fontSize: 15,color: 'black'}}}>
                <Tab.Screen name="Sleep" component={Sleep} options={{
                    tabBarIcon: (()=>(
                        <Icon name="hotel" size={25} color='black'/>
                    ))
                }}/>
                <Tab.Screen name="Water" component={Water} options={{
                    tabBarIcon: (()=>(
                        <Icon name="opacity" size={25} color='black'/>
                    ))
                }}/>
                <Tab.Screen name="Calories" component={Calories} options={{
                    tabBarIcon: (()=>(
                        <Icon name="food" size={25} color='black'/>
                    ))
                }}/>
                <Tab.Screen name="Covid-19" component={Covid} options={{
                    tabBarIcon: (()=>(
                        <Icon name="bacteria" size={25} color='black'/>
                    ))
                }}/>
                <Tab.Screen name="Profile" component={Profile}  options={{
                    tabBarIcon: (()=>(
                        <Icon name="account" size={25} color='black'/>
                    ))
                }}/>
            </Tab.Navigator>
        );
    }
}

export default Main;