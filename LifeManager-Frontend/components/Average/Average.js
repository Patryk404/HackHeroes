import React from 'react';

import {Text,View,StyleSheet} from 'react-native'; 

const Average = (props)=> {
    if (props.sleep)
    {
        return(
            <View style={{marginTop: 20}}>
                <Text style={styles.text}>Average:</Text>
                <Text style={styles.text}>{props.averageHours ? props.averageHours: 0} hours {props.averageMinutes ? props.averageMinutes : 0} minutes</Text>
            </View> 
        );
    }
    else{
        return(
            <View>
                <Text style={styles.text}>Average:</Text>
                <Text style={styles.text}>{isNaN(props.average) ? 0 : parseInt(props.average)}</Text>
            </View> 
        );
    }
};

const styles =StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 5,
        textAlign: 'center'
    }
});

export default Average;