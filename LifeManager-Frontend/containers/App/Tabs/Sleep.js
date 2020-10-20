import React from 'react';

import {Text,SafeAreaView,ScrollView,Image,View,StyleSheet,ActivityIndicator,Linking} from 'react-native';
import {Button} from 'react-native-elements';
import Average from '../../../components/Average/Average';

import axios from 'axios';
import {URL} from '../../../public/url';

import {connect} from 'react-redux';

class Sleep extends React.Component{
    state = {
        sleep: false,
        hours: 0,
        minutes: 0,
        averageHours: 0,
        averageMinutes: 0,
        loading: false
    }

    componentDidMount(){
        this.getSleep();
        this.getAverage();
    }

    getSleep = ()=>{
        this.setState({loading: true});
        axios.get(URL+'/sleep',{
            headers: {
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                sleep: response.data.sleep,
                loading: false
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    getAverage = () =>{
        this.setState({loading: true});
        axios.get(URL+'/sleep/average',{
            headers: {
                "Authorization": "Bearer "+this.props.token,
                "Content-Type": "application/json"
            }
        })
        .then(response=>{
            this.setState({
                averageHours: response.data.hours,
                averageMinutes: response.data.minutes,
                loading: false
            });
        })
        .catch(err=>{
            console.log(err);
        })
    };

    historyOfSleepButtonHandler = ()=>{
        this.props.navigation.navigate('SleepHistory');
    };

    sleepButtonHandler =()=>{
        this.setState({loading: true });
        if (this.state.sleep){
            axios.put(URL+'/sleep/wakeup',{},{
                headers: {
                    "Authorization": "Bearer "+this.props.token,
                    "Content-Type": "application/json"
                }
            })
            .then(response=>{
                this.setState({hours: response.data.hours,minutes: response.data.minutes});
                this.getSleep();
                this.getAverage();
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            axios.put(URL+'/sleep/gotosleep',{},{
                headers: {
                    "Authorization": "Bearer "+this.props.token,
                    "Content-Type": "application/json"
                }
            }) 
            .then(response=>{
                this.getSleep();
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
                        <Image style={styles.image} source={this.state.sleep ? require('../../../public/images/moon.png') : require('../../../public/images/sun.png')}/>
                        {
                            (this.state.hours || this.state.minutes) ? <Text style={styles.text}>You slept {this.state.hours} hours and {this.state.minutes} minutes</Text> : null
                        }
                        <View style={styles.button}>
                            <Button onPress={this.sleepButtonHandler} title={this.state.sleep ? "Wake Up⏰" : "Sleep😴"}/>
                        </View>
                        <View style={styles.button}>
                            <Button onPress={this.historyOfSleepButtonHandler} title="Sleep History"/>
                        </View>
                        <Average sleep averageHours={this.state.averageHours} averageMinutes={this.state.averageMinutes}/>
                    <View style={{flexDirection: 'row',alignSelf: 'center',marginTop: 30}}>
                        <Text>Icons made by </Text> 
                        <Text onPress={()=> Linking.openURL("https://www.flaticon.com/authors/darius-dan")} style={{textDecorationLine: 'underline',color: 'blue'}} title="Darius Dan">Darius Dan</Text> 
                        <Text> from </Text> 
                        <Text onPress={()=>Linking.openURL("https://www.flaticon.com/")}  style={{textDecorationLine: 'underline',color: 'blue'}} title="Flaticon">www.flaticon.com</Text>
                    </View>
                    <View style={{flexDirection: 'row',alignSelf: 'center'}}>
                        <Text>Icons made by </Text> 
                        <Text onPress={()=> Linking.openURL("https://www.flaticon.com/authors/catkuro")} style={{textDecorationLine: 'underline',color: 'blue'}} title="catkuro">catkuro</Text> 
                        <Text> from </Text> 
                        <Text onPress={()=>Linking.openURL("https://www.flaticon.com/")}  style={{textDecorationLine: 'underline',color: 'blue'}} title="Flaticon">www.flaticon.com</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    spinner: {
        position: 'absolute',
        top: 5,
        left: 5
    },
    button:{
        marginTop: '10%',
        width: 200,
        alignSelf: 'center'
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    image: {
        marginTop: 30,
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
});

export default connect(mapStateToProps)(Sleep);