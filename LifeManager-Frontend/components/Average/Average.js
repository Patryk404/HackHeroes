import React from 'react';

import {Text,View,StyleSheet} from 'react-native'; 

const Average = (props)=> {
    return(
        <View>
            <Text style={styles.text}>Average:</Text>
            <Text style={styles.text}>0</Text>
        </View> 
    );
};

const styles =StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 5,
        textAlign: 'center'
    }
});

export default Average;