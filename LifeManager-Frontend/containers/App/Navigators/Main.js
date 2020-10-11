import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import Sleep from '../Tabs/Sleep';
import Calories from '../Tabs/Calories';
import Water from '../Tabs/Water';

class Main extends React.Component {
    render(){
        return(
            <Tab.Navigator initialRouteName="Calories" tabBarOptions={{activeBackgroundColor: '#2587DD',labelStyle: {fontSize: 15,color: 'black'}}}>
                <Tab.Screen name="Sleep" component={Sleep} options={{
                    tabBarIcon: (()=>(
                        <Icon name="hotel" size={25} color='black'/>
                    ))
                }}/>
                <Tab.Screen name="Calories" component={Calories} options={{
                    tabBarIcon: (()=>(
                        <Icon name="food" size={25} color='black'/>
                    ))
                }}/>
                <Tab.Screen name="Water" component={Water} options={{
                    tabBarIcon: (()=>(
                        <Icon name="opacity" size={25} color='black'/>
                    ))
                }}/>
            </Tab.Navigator>
        );
    }
}

export default Main;