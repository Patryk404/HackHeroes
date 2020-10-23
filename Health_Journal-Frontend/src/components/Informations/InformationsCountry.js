import React from 'react';

import {Text,View,Image,StyleSheet} from 'react-native'; 

const InformationsCountry = (props) =>{ 
    return (
    <>
        <Image style={styles.flag} source={{uri: props.country.flagImageLink ? props.country.flagImageLink : null}}/>
        <View style={styles.containerData}>
            <Text style={styles.textData}>Cases: {props.country.cases}</Text>
            <Text style={styles.textData}>Today Cases: {props.country.todayCases}</Text>
            <Text style={styles.textData}>Active: {props.country.active}</Text>
        </View>
        <View style={styles.containerData}>
            <Text style={styles.textData}>Deaths: {props.country.deaths}</Text>
            <Text style={styles.textData}>Today Deaths: {props.country.todayDeaths}</Text>
        </View>
        <View style={styles.containerData}>
            <Text style={styles.textData}>Recovered: {props.country.recovered}</Text>
            <Text style={styles.textData}>Today Recovered: {props.country.todayRecovered}</Text>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    flag: {
        width: 150,
        height: 90,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10
    },
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

export default InformationsCountry;