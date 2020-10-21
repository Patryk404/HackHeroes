import React from 'react';

import {View,Text,StyleSheet} from 'react-native'

const AboutMe = (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>About me:</Text>
            <Text style={styles.textParagraph}>Average sleep: {props.me.hours ? props.me.hours : 0} hours {props.me.minutes ? props.me.minutes : 0} minutes</Text>
            <Text style={styles.textParagraph}>Average calories: {props.me.calorie ? props.me.calorie : 0}kcal</Text>
            <Text style={styles.textParagraph}>Average cups of water: {props.me.water ? props.me.water : 0} cups</Text>
            <Text style={styles.textParagraph}>BMI: 3000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 20,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    textHeader:{
        fontSize: 30, 
        textAlign: 'center'
    },
    textParagraph:{
        fontSize: 20,
        marginTop: 10
    }
});

export default AboutMe;