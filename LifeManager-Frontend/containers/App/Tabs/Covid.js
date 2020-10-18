import React from 'react';

import {View,SafeAreaView,ScrollView,Text,ActivityIndicator,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';

class Covid extends React.Component{

    state={
        country: {
        flagImageLink: '',
        cases: 0,
        todayCases: 0,
        active: 0,
        deaths: 0,
        todayDeaths: 0,
        recovered: 0,
        todayRecovered: 0
        },
        world: {
            cases: 0,
            todayCases: 0,
            active: 0,
            deaths: 0,
            todayDeaths: 0,
            recovered: 0,
            todayRecovered: 0
        },
        loading: false
    };

    componentDidMount(){
        this.update();
    }
    update =()=>{
        this.setState({loading: true});
        axios.get("https://disease.sh/v3/covid-19/countries/Poland")
        .then(({data})=>{
            this.setState({
                country: {
                flagImageLink: data.countryInfo.flag,
                cases: data.cases,
                todayCases: data.todayCases,
                active: data.active,
                deaths: data.deaths,
                todayDeaths: data.todayDeaths,
                recovered: data.recovered,
                todayRecovered: data.todayRecovered
                },
                loading: false
            });
            return axios.get("https://disease.sh/v3/covid-19/all");
        })
        .then(({data})=>{
            this.setState({
                world: {
                    cases: data.cases,
                    todayCases: data.todayCases,
                    active: data.active,
                    deaths: data.deaths,
                    todayDeaths: data.todayDeaths,
                    recovered: data.recovered,
                    todayRecovered: data.todayRecovered
                },
                loading: false
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {this.state.loading ? <ActivityIndicator style={styles.spinner} size="large" color="#0000ff"/> : null }
                    <Icon onPress={this.update} name="autorenew" size={40} color={"black"} style={{position:'absolute',right: 30,top: 30}}/>
                    <Text style={styles.textTitle}>Covid-19 Tracker</Text>
                    <Image style={styles.flag} source={{uri: this.state.country.flagImageLink ? this.state.country.flagImageLink : null}}/>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>Cases: {this.state.country.cases}</Text>
                        <Text style={styles.textData}>Today Cases: {this.state.country.todayCases}</Text>
                        <Text style={styles.textData}>Active: {this.state.country.active}</Text>
                    </View>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>Deaths: {this.state.country.deaths}</Text>
                        <Text style={styles.textData}>Today Deaths: {this.state.country.todayDeaths}</Text>
                    </View>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>Recovered: {this.state.country.recovered}</Text>
                        <Text style={styles.textData}>Today Recovered: {this.state.country.todayRecovered}</Text>
                    </View>
                    <Text style={{alignSelf: 'center',fontSize: 100}}>🌎</Text>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>Cases: {this.state.world.cases}</Text>
                        <Text style={styles.textData}>Today Cases: {this.state.world.todayCases}</Text>
                        <Text style={styles.textData}>Active: {this.state.world.active}</Text>
                    </View>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>Deaths: {this.state.world.deaths}</Text>
                        <Text style={styles.textData}>Today Deaths: {this.state.world.todayDeaths}</Text>
                    </View>
                    <View style={styles.containerData}>
                        <Text style={styles.textData}>Recovered: {this.state.world.recovered}</Text>
                        <Text style={styles.textData}>Today Recovered: {this.state.world.todayRecovered}</Text>
                    </View>
                    <Text style={{fontWeight: 'bold', textAlign: 'center',alignSelf: 'center', width: '80%', fontSize: 20,marginTop: 10}}>Remember to wear a mask and keep a social distance😷</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%'
    },
    spinner: {
        position: 'absolute',
        top: 5,
        left: 5
    },
    textTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
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

export default Covid;