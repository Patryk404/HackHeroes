import React from 'react';

import countries from './Countries';
import InformationsCountry from '../../../components/Informations/InformationsCountry';
import InformationsWorld from '../../../components/Informations/InformationsWorld';
import {View,SafeAreaView,ScrollView,Text,ActivityIndicator,Image,StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown-v2';
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
        loading: false,
        choosenCountry: "Poland"
    };

    componentDidMount(){
        this.updateAll();
    }
    updateAll = ()=>{
        this.updateCountryOrContinent(this.state.choosenCountry);
        this.updateWorld();
    }
    updateWorld = ()=>{
        axios.get("https://disease.sh/v3/covid-19/all")
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
        });
    }
    updateCountryOrContinent =(text)=>{
        this.setState({loading: true});
        if(text == 'Europe')
        {
            axios.get("https://disease.sh/v3/covid-19/continents/"+text)
            .then(({data})=>{
                this.setState({
                    country: {
                    flagImageLink: 'https://cdn.pixabay.com/photo/2013/07/13/01/09/europe-155191_960_720.png',
                    cases: data.cases,
                    todayCases: data.todayCases,
                    active: data.active,
                    deaths: data.deaths,
                    todayDeaths: data.todayDeaths,
                    recovered: data.recovered,
                    todayRecovered: data.todayRecovered
                    },
                    loading: false,
                    choosenCountry: text
                });
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            axios.get("https://disease.sh/v3/covid-19/countries/"+text)
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
                    loading: false,
                    choosenCountry: text
                });
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {this.state.loading ? <ActivityIndicator style={styles.spinner} size="large" color="#0000ff"/> : null }
                    <Icon onPress={()=>{alert("Remember to wear a mask and keep a social distance😷")}} name="help" size={38} color={"black"} style={{position:'absolute',right: 30,top: 30}}/>
                    <Icon onPress={this.updateAll} name="autorenew" size={40} color={"black"} style={{position:'absolute',right: 30,top: 80}}/>
                    <Text style={styles.textTitle}>Covid-19 Tracker</Text>
                    <View style={{width: '23%',position: 'absolute', top: 30,left:30}}>
                        <Dropdown label="Country" data={countries} value={this.state.choosenCountry} onChangeText={(text)=>{this.updateCountryOrContinent(text)}}/>
                    </View>
                    <InformationsCountry country={this.state.country}/>
                    <InformationsWorld world={this.state.world}/>
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
    }
});


export default Covid;