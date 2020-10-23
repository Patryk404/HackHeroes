import React from 'react';

import {Text,View,StyleSheet} from 'react-native'; 

const InformationsWorld = (props)=>{
    return (
    <>
        <Text style={{alignSelf: 'center',fontSize: 100}}>🌎</Text>
        <View style={styles.containerData}>
            <Text style={styles.textData}>Cases: {props.world.cases}</Text>
            <Text style={styles.textData}>Today Cases: {props.world.todayCases}</Text>
            <Text style={styles.textData}>Active: {props.world.active}</Text>
        </View>
        <View style={styles.containerData}>
            <Text style={styles.textData}>Deaths: {props.world.deaths}</Text>
            <Text style={styles.textData}>Today Deaths: {props.world.todayDeaths}</Text>
        </View>
        <View style={styles.containerData}>
            <Text style={styles.textData}>Recovered: {props.world.recovered}</Text>
            <Text style={styles.textData}>Today Recovered: {props.world.todayRecovered}</Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    containerData:{
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '70%'
    },
    textData: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default InformationsWorld;